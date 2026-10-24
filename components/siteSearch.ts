type SiteBlock = {
  path: string;
  title: string;
  text: string;
};

type SitePage = {
  path: string;
  title: string;
  blocks: string[];
};

let siteIndexPromise: Promise<SitePage[]> | null = null;

const ignoredQuestionWords = new Set([
  "انا", "انت", "انتم", "اي", "ايه", "ازاي", "امتى", "هل", "ما", "ماذا", "متى",
  "من", "مين", "هو", "هي", "في", "عن", "على", "الى", "لي", "لو", "يا", "ب",
  "عايز", "عاوزه", "عاوز", "اريد", "محتاج", "محتاجه", "ممكن", "لو", "سمحت",
  "رؤيه", "باي", "شركه", "موقع", "الموقع",
]);

function normalizeText(value: string) {
  return value
    .toLocaleLowerCase("ar-EG")
    .normalize("NFD")
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[ـ،؛؟!,.?()[\]{}]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parsePage(path: string, html: string): SitePage {
  const document = new DOMParser().parseFromString(html, "text/html");
  const title = document.querySelector("main h1")?.textContent?.trim()
    || document.querySelector("title")?.textContent?.trim()
    || path;
  const blocks = Array.from(document.querySelectorAll(
    "main h1, main h2, main h3, main p, main li, main .faq-item, main .team-member-card, main .developer-team-card",
  ))
    .map((element) => (element as HTMLElement).innerText || element.textContent || "")
    .map((text) => text.replace(/\s+/g, " ").trim())
    .filter((text) => text.length >= 18);

  const mainText = Array.from(document.querySelectorAll("main"))
    .map((main) => (main as HTMLElement).innerText || main.textContent || "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return { path, title, blocks: Array.from(new Set(blocks.length > 0 ? blocks : [mainText])).filter(Boolean) };
}

async function buildSiteIndex(): Promise<SitePage[]> {
  const origin = window.location.origin;
  const queued = new Set<string>([window.location.pathname, "/"]);
  const visited = new Set<string>();
  const pages: SitePage[] = [];
  let frontier = Array.from(queued);
  let depth = 0;

  while (frontier.length > 0 && pages.length < 36 && depth < 3) {
    const currentLevel = frontier;
    const nextLevel: string[] = [];
    for (let offset = 0; offset < currentLevel.length && pages.length < 36; offset += 8) {
      const batch = currentLevel.slice(offset, offset + 8);
      const results = await Promise.all(batch.map(async (path) => {
        if (visited.has(path)) return null;
        visited.add(path);

        try {
          const response = await fetch(path, {
            headers: { Accept: "text/html" },
            cache: "force-cache",
            signal: AbortSignal.timeout(10000),
          });
          if (!response.ok || !response.headers.get("content-type")?.includes("text/html")) return null;

          const html = await response.text();
          const document = new DOMParser().parseFromString(html, "text/html");
          const nextPaths = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"))
            .map((anchor) => {
              try {
                const url = new URL(anchor.href, origin);
                if (url.origin !== origin || url.pathname.startsWith("/api/")) return null;
                return url.pathname;
              } catch {
                return null;
              }
            })
          .filter((nextPath): nextPath is string => nextPath !== null && !visited.has(nextPath));

          return { page: parsePage(path, html), nextPaths };
        } catch {
          return null;
        }
      }));

      for (const result of results) {
        if (!result) continue;
        pages.push(result.page);
        if (depth < 2) {
          for (const path of result.nextPaths) {
            if (!queued.has(path) && !visited.has(path) && queued.size < 36) {
              queued.add(path);
              nextLevel.push(path);
            }
          }
        }
      }
    }
    frontier = nextLevel;
    depth += 1;
  }

  return pages;
}

function getSiteIndex() {
  if (!siteIndexPromise) {
    siteIndexPromise = buildSiteIndex().catch((error) => {
      siteIndexPromise = null;
      throw error;
    });
  }
  return siteIndexPromise;
}

export async function searchWebsite(question: string): Promise<SiteBlock[]> {
  const terms = normalizeText(question)
    .split(" ")
    .filter((word) => word.length > 1 && !ignoredQuestionWords.has(word));
  if (terms.length === 0) return [];

  const pages = await getSiteIndex();
  const matches: Array<SiteBlock & { score: number }> = [];

  for (const page of pages) {
    for (const text of page.blocks) {
      const normalized = normalizeText(text);
      const matchedTerms = terms.filter((term) => normalized.includes(term)).length;
      const score = matchedTerms / terms.length;
      if (matchedTerms >= Math.min(2, terms.length) && score >= 0.5) {
        matches.push({ path: page.path, title: page.title, text, score });
      }
    }
  }

  return matches
    .sort((left, right) => right.score - left.score)
    .filter((match, index, list) => list.findIndex((item) => item.path === match.path && item.text === match.text) === index)
    .slice(0, 3)
    .map(({ path, title, text }) => ({ path, title, text }));
}
