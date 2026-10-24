"use client";

import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpLeft, Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";

type ChatLink = { label: string; href: string; description?: string };
type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  links?: ChatLink[];
  details?: { title: string; description: string }[];
};

const paymentServiceDetails = [
  { title: "فواتير الاتصالات", description: "اشحن رصيدك وادفع فواتير هاتفك والإنترنت بكل سهولة، متاح لكل مشغلي الشبكات في مصر." },
  { title: "المرافق", description: "ادفع فواتير الكهرباء والمياه والغاز دون انتظار شركات متعددة، ومتاحة عبر التطبيق." },
  { title: "التأمينات", description: "سدد أقساطك لدى شركات التأمين مثل مصر لتأمينات الحياة، أليانز، أكسا، وغيرها." },
  { title: "النقابات", description: "سدد اشتراكات النقابات المهنية من منزلك، مثل نقابات المهندسين والأطباء والبيطريين وغيرهم." },
  { title: "التعليم", description: "سداد رسوم المدارس والجامعات بسهولة وأمان، لأكثر من 40 جامعة ومؤسسة تعليمية." },
  { title: "التبرعات", description: "تبرع للجهات الخيرية بكل سهولة وأمان، مثل مصر الخير وبنك الطعام ومستشفى 57357 وغيرهم." },
  { title: "التذاكر", description: "احجز وسدد ثمن تذاكر الطيران والباص والسينما بسهولة، مثل مصر للطيران وجو باص والسينمات وأكثر." },
  { title: "العقارات", description: "سدد أقساطك العقارية بكل أمان عبر التطبيق، مثل بالم هيلز ومارينا ولافيستا والمزيد." },
  { title: "الالتزامات المالية", description: "سدد أقساطك البنكية بلمسة زر، عبر ValU وContact وMoneyFellows وبنك الإسكندرية وغيرها." },
  { title: "المدفوعات عبر الإنترنت", description: "سدد مشترياتك بكل سهولة عبر الإنترنت، مثل سويفل وبي تك وطلبات وأوليكس وغيرهم." },
  { title: "اشتراكات النوادي", description: "جدد اشتراك ناديك بسرعة وسهولة، مثل الجزيرة والصيد ودجلة وسوديك والمزيد." },
  { title: "غرامات المرور", description: "ادفع غراماتك واطلب رخصتك أونلاين بكل سهولة." },
  { title: "الخدمة العسكرية", description: "احصل على تصاريح السفر وشهادات الإعفاء بسهولة." },
  { title: "الرقم المرجعي من فوري باي", description: "ادفع باستخدام رقمك المرجعي بكل سهولة عبر تطبيقنا." },
];

const companyOfferings = [
  { title: "حلول الدفع والتحصيل الإلكتروني", description: "خدمات سداد متنوعة، فواتير، نقاط بيع، وبوابات دفع تساعد الأنشطة على تحصيل مدفوعاتها." },
  { title: "تطوير البرمجيات", description: "تصميم وتطوير المواقع الإلكترونية وتطبيقات الموبايل وأنظمة إدارة الأعمال حسب احتياج المشروع." },
  { title: "الربط والتكامل", description: "ربط الأنظمة والمنصات عبر واجهات API وتنظيم تبادل البيانات بينها." },
  { title: "الأنظمة والتقارير", description: "حلول لإدارة الأعمال ومتابعة البيانات والتقارير المالية والتشغيلية." },
];

const welcomeMessage: ChatMessage = {
  role: "assistant",
  content:
    "أهلًا بيك 👋 أنا المساعد الذكي، دليلك لموقع رؤية باي. اسألني عن حلول الدفع والتحصيل، البرمجيات، التطبيقات أو أي قسم في الموقع، وهساعدك توصل للمعلومة والصفحة المناسبة.",
  links: [
    { label: "حلول الدفع", href: "/services/payments", description: "سداد وتحصيل إلكتروني" },
    { label: "تطوير البرمجيات", href: "/services/software", description: "مواقع وتطبيقات وأنظمة" },
  ],
};

const suggestions = [
  "إيه خدمات الدفع المتاحة؟",
  "عايز أعمل موقع أو تطبيق",
  "إيه مواعيد العمل؟",
  "افتح واتساب خدمة العملاء",
];

function normalizeArabic(value: string) {
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

function matchesAny(question: string, terms: string[]) {
  return terms.some((term) => question.includes(normalizeArabic(term)));
}

function answerQuestion(rawQuestion: string): Omit<ChatMessage, "role"> | null {
  const question = normalizeArabic(rawQuestion);

  if (matchesAny(question, ["منحه", "المنحه", "منحة برمجية", "منحه برمجه", "منحه برمجيه", "تدريب برمجه", "تقديم للمنحه", "اقدم للمنحه"])) {
    return {
      content: "التقديم على دفعة المنحة البرمجية مش مفتوح حاليًا، ومفيش موعد معلن للدفعة القادمة. تابع إعلانات رؤية باي لمعرفة أي تحديث جديد.",
    };
  }

  if (matchesAny(question, ["وظيف", "وظائف", "توظيف", "فرص عمل", "بدور على شغل", "عايز شغل", "عاوزه شغل", "في شغل", "فيه شغل", "شغل عندكم", "سيره ذاتيه", "cv"])) {
    return {
      content: "مفيش وظائف شاغرة معلنة حاليًا. تابع إعلانات رؤية باي لمعرفة الفرص الجديدة.",
    };
  }

  const hasFollowUpQuestion = matchesAny(question, ["ممكن", "عايز", "عاوزه", "محتاج", "هل", "ازاي", "كيف", "فين", "ما هي", "ماهو", "سعر", "خدمات", "دفع", "برمج", "عنوان", "رقم", "مواعيد", "وظيف", "منحه", "شكوي", "مشكله", "تطبيق", "موقع", "api"]);
  const thanksMessages = [
    "العفو، تحت أمرك 🤍 لو عندك أي سؤال تاني عن خدمات رؤية باي أنا معاك.",
    "ولا يهمك! سعيد إني قدرت أساعدك ✨ اسألني في أي وقت عن الدفع أو البرمجيات.",
    "تسلم أنت 🌿 أنا موجود لو حبيت تعرف تفاصيل أكتر أو أوصّلك لصفحة معينة.",
    "الشكر ليك! مبسوط إن المعلومة فادتك 😊",
    "ده من ذوقك 🤍 تحت أمرك في أي استفسار تاني.",
    "حبيبي، أنا هنا عشان أساعدك 🌟",
  ];
  if (!hasFollowUpQuestion && matchesAny(question, ["شكرا", "متشكر", "متشكره", "مشكور", "مشكوره", "تسلم", "تسلمي", "تسلم ايدك", "عاشت ايدك", "كتر خيرك", "ممنون", "ميرسي", "مرسي", "يعطيك العافيه", "الله يخليك", "ربنا يخليك", "ربنا يكرمك", "جزاك الله خير", "بارك الله فيك", "ما قصرت", "مقصرتش", "انت جامد", "انتي جامده", "برافو", "مبدع", "رائع", "ممتاز", "احسن مساعد", "thank you", "thanks", "thx"])) {
    return { content: thanksMessages[Math.floor(Math.random() * thanksMessages.length)] };
  }

  if (!hasFollowUpQuestion && matchesAny(question, ["السلام عليكم", "السلام عليكم ورحمه الله"])) {
    return { content: "وعليكم السلام ورحمة الله وبركاته 🌿 أهلًا بيك! أقدر أساعدك في خدمات الدفع والبرمجيات أو أوصّلك لأي صفحة في الموقع." };
  }

  if (!hasFollowUpQuestion && matchesAny(question, ["صباح الخير"])) {
    return { content: "صباح النور ✨ نورت رؤية باي! اسألني عن خدماتنا أو قولّي أقدر أساعدك في إيه." };
  }

  if (!hasFollowUpQuestion && matchesAny(question, ["مساء الخير"])) {
    return { content: "مساء النور 🌙 أهلًا بيك! أنا المساعد الذكي، قولّي حابب تعرف إيه." };
  }

  if (!hasFollowUpQuestion && matchesAny(question, ["اهلا", "اهلين", "ازيك", "هاي", "hello", "hi"])) {
    return { content: "أهلًا بيك 👋 أنا المساعد الذكي، اسألني عن رؤية باي أو خدماتنا وأنا أساعدك." };
  }

  if (!hasFollowUpQuestion && ["تمام", "ماشي", "حلو", "اوكي", "اوك", "جميل", "عاش"].includes(question)) {
    const acknowledgements = [
      "تمام يا فندم 😊 أنا موجود لو احتجت أي معلومة تانية.",
      "حلو ✨ تحت أمرك في أي وقت.",
      "تمام، نورتني 🌿 لو حابب تسأل عن أي خدمة أنا معاك.",
    ];
    return { content: acknowledgements[Math.floor(Math.random() * acknowledgements.length)] };
  }

  const asksAboutCompany = matchesAny(question, ["ما هي شركه", "ماهي شركه", "من هي شركه", "من هي رؤيه", "من نحن", "عن الشركه", "رؤيه باي"]);
  const asksWhatItOffers = matchesAny(question, ["بتقدم", "تقدم ايه", "بتقدموا", "الخدمات اللي بتقدم", "مجالات الشركه", "بتعمل ايه", "نشاط الشركه"]);
  const asksPayments = matchesAny(question, ["حلول الدفع", "خدمات الدفع", "الدفع الالكتروني", "السداد والتحصيل", "نقاط البيع"]);
  const asksSoftware = matchesAny(question, ["تطوير البرمجيات", "خدمات برمجيه", "خدمات البرمجه", "تطوير المواقع", "تطبيقات الموبايل", "انظمه ادارة"]);
  const asksIntegration = matchesAny(question, ["الربط والتكامل", "خدمات api", "ربط الانظمه"]);
  if (asksAboutCompany && (asksWhatItOffers || asksPayments || asksSoftware || asksIntegration)) {
    return {
      content: "رؤية باي شركة متخصصة في حلول السداد والبرمجيات. بنساعد الأفراد والشركات في إنجاز المدفوعات وتطوير أعمالهم بحلول رقمية. دي أهم المجالات اللي بنقدمها:",
      details: companyOfferings,
      links: [
        { label: "كل خدمات رؤية باي", href: "/services", description: "استعرض الحلول والأقسام" },
        { label: "حلول الدفع", href: "/services/payments", description: "السداد والتحصيل الإلكتروني" },
        { label: "تطوير البرمجيات", href: "/services/software", description: "مواقع وتطبيقات وأنظمة" },
        { label: "الربط والتكامل", href: "/services/integration", description: "تكامل الأنظمة عبر API" },
      ],
    };
  }

  if (asksPayments && asksSoftware) {
    return {
      content: "رؤية باي بتقدم حلولًا في المجالين: خدمات للدفع والتحصيل الإلكتروني، وخدمات لتطوير البرمجيات. اختار القسم اللي تحب تعرف تفاصيله:",
      details: [companyOfferings[0], companyOfferings[1]],
      links: [
        { label: "تفاصيل خدمات الدفع", href: "/services/payments", description: "كل خدمات الدفع المتاحة" },
        { label: "تفاصيل البرمجيات", href: "/services/software", description: "مواقع وتطبيقات وأنظمة" },
      ],
    };
  }

  if (matchesAny(question, ["مواعيد العمل", "مواعيدكم", "مواعيد الشغل", "بتفتحوا", "مفتوحين", "اجازه", "الجمعة", "الجمعه", "السبت", "ساعات العمل"])) {
    return {
      content: "مواعيد العمل من الأحد إلى الخميس، من الساعة 10 صباحًا حتى 5 مساءً. الجمعة والسبت إجازة رسمية.",
      links: [
        { label: "راسل خدمة العملاء على واتساب", href: "https://wa.me/201155660300?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%B1%D8%A4%D9%8A%D8%A9%20%D8%A8%D8%A7%D9%8A", description: "01155660300" },
      ],
    };
  }

  if (matchesAny(question, ["واتساب", "whatsapp", "كلمهم واتس", "شات واتس"])) {
    return {
      content: "تقدر تبدأ محادثة واتساب مباشرة مع خدمة عملاء رؤية باي على الرقم 01155660300. ساعات العمل من الأحد للخميس، 10 صباحًا إلى 5 مساءً، والجمعة والسبت إجازة.",
      links: [{ label: "افتح محادثة واتساب", href: "https://wa.me/201155660300?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1", description: "ابدأ محادثة مع خدمة العملاء" }],
    };
  }

  if (matchesAny(question, ["خريطه", "موقعكم", "لوكيشن", "اروح لكم", "ازوركم", "مكان الشركة", "مكان الشركه"])) {
    return {
      content: "مقر رؤية باي في 17 شارع صلاح الدين الشرقي، بجوار بنك القاهرة. افتح الخريطة للحصول على الاتجاهات:",
      links: [
        { label: "افتح موقع الشركة على خرائط Google", href: "https://www.google.com/maps/search/?api=1&query=30.300426746454765%2C30.979871460012102", description: "17 شارع صلاح الدين الشرقي" },
        { label: "تواصل معنا", href: "/contactUs", description: "العنوان وبيانات التواصل" },
      ],
    };
  }

  const pageRequest = matchesAny(question, ["فين", "ازاي اوصل", "عايز صفحه", "عايز اعرف", "ادخل على", "افتح صفحه", "صفحه ايه", "مش عارف اوصل"])
    && !matchesAny(question, ["سعر", "اسعار", "تكلفه", "بكام", "كام", "عرض سعر", "التكلفه"]);
  if (pageRequest) {
    const destinations: { terms: string[]; answer: string; link: ChatLink }[] = [
      { terms: ["دفع", "سداد", "تحصيل", "فواتير", "محفظه", "نقطه بيع", "مدفوعات"], answer: "لخدمات السداد والتحصيل، دي الصفحة المناسبة:", link: { label: "حلول الدفع", href: "/services/payments", description: "الفواتير، التحصيل، ونقاط البيع" } },
      { terms: ["تحميل", "برنامج", "تطبيق التاجر"], answer: "دي صفحة البرامج والتطبيقات وروابطها:", link: { label: "برامجنا وتطبيقاتنا", href: "/programs", description: "تطبيقات رؤية باي المتاحة" } },
      { terms: ["عنوان", "مقر", "خريطه", "رقم", "تواصل", "ايميل", "بريد"], answer: "بيانات التواصل والعنوان والخريطة موجودة هنا:", link: { label: "تواصل معنا", href: "/contactUs", description: "العنوان، أرقام الهاتف، والبريد الإلكتروني" } },
      { terms: ["شكوي", "بلاغ", "مشكله", "دعم", "عميل"], answer: "للدعم أو متابعة بلاغ، ابدأ من صفحة خدمة العملاء:", link: { label: "خدمة العملاء", href: "/customerService", description: "الدعم والبلاغات" } },
      { terms: ["شركه", "عنكم", "رؤيه", "رساله", "قيم"], answer: "نبذة عن رؤية باي ورؤيتها ورسالتها موجودة هنا:", link: { label: "عن رؤية باي", href: "/about", description: "تعرف على الشركة وقيمها" } },
      { terms: ["شريك"], answer: "تفضل، دي صفحة شركاء رؤية باي:", link: { label: "شركاؤنا", href: "/partners", description: "شركاء النجاح" } },
      { terms: ["فريق", "مبرمج", "مطور"], answer: "تقدر تتعرف على فريق العمل والمطورين من هنا:", link: { label: "فريق العمل", href: "/team", description: "أعضاء الفريق وتخصصاتهم" } },
      { terms: ["سؤال", "اجابه", "معلومه"], answer: "جمعت صفحة الأسئلة الشائعة إجابات سريعة عن خدماتنا:", link: { label: "الأسئلة الشائعة", href: "/fag", description: "إجابات عن الدفع والبرمجيات" } },
      { terms: ["api", "تكامل", "ربط"], answer: "صفحة الربط والتكامل بتشرح خدمات ربط الأنظمة والمنصات:", link: { label: "الربط والتكامل", href: "/services/integration", description: "واجهات API وتكامل الأنظمة" } },
      { terms: ["برمج", "موقع", "ويب", "تطبيق", "موبايل", "سوفتوير", "نظام"], answer: "هتلاقي تفاصيل المواقع والتطبيقات والأنظمة هنا:", link: { label: "تطوير البرمجيات", href: "/services/software", description: "حلول رقمية مصممة حسب احتياج مشروعك" } },
    ];
    const destination = destinations.find(({ terms }) => matchesAny(question, terms));
    if (destination) return { content: destination.answer, links: [destination.link] };
  }

  if (matchesAny(question, ["سعر", "اسعار", "تكلفه", "بكام", "كام", "عرض سعر", "التكلفه"])) {
    return {
      content:
        "التكلفة بتختلف حسب الخدمة ونطاق الشغل والتفاصيل المطلوبة، والأسعار مش منشورة كقائمة ثابتة على الموقع. ابعتلنا نبذة عن احتياجك، وفريق رؤية باي يقدر يوجّهك للتفاصيل المناسبة.",
      links: [
        { label: "اطلب تفاصيل مشروعك", href: "/contactUs", description: "تواصل مباشرة مع الفريق" },
        { label: "استكشف الخدمات", href: "/services", description: "اعرف الحلول المتاحة" },
      ],
    };
  }

  if (matchesAny(question, ["شكوي", "بلاغ", "مشكله في الدفع", "مشكلة دفع", "عطل", "ماكينه", "ماكينة", "pos"])) {
    return {
      content:
        "لو واجهتك مشكلة في عملية دفع أو محتاج تقدم بلاغ، فريق خدمة العملاء يقدر يساعدك. افتح الصفحة وسجّل تفاصيل المشكلة عشان يسهل متابعتها.",
      links: [{ label: "خدمة العملاء والبلاغات", href: "/customerService", description: "للدعم ومتابعة البلاغات" }],
    };
  }

  if (matchesAny(question, ["عنوان", "فين مقر", "مكانكم", "موقعكم فين", "العنوان", "مقر الشركه"])) {
    return {
      content:
        "عنوان رؤية باي: 17 شارع صلاح الدين الشرقي، بجوار بنك القاهرة. صفحة التواصل فيها الخريطة وباقي بيانات الوصول.",
      links: [
        { label: "افتح موقع الشركة على الخريطة", href: "https://www.google.com/maps/search/?api=1&query=30.300426746454765%2C30.979871460012102", description: "17 شارع صلاح الدين الشرقي" },
        { label: "العنوان وطرق التواصل", href: "/contactUs", description: "صفحة تواصل معنا" },
      ],
    };
  }

  if (matchesAny(question, ["رقم", "تليفون", "موبايل", "اتواصل", "تواصل", "ايميل", "بريد", "خدمة العملاء", "الدعم", "كلمكم"])) {
    return {
      content:
        "يسعد فريق رؤية باي بمساعدتك. خدمة العملاء: 01155660300، الخط الأرضي: 0483432109، والبريد: roya.tech2025@gmail.com.",
      links: [
        { label: "افتح واتساب خدمة العملاء", href: "https://wa.me/201155660300?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%20%D8%AE%D8%AF%D9%85%D8%A9%20%D8%A7%D9%84%D8%B9%D9%85%D9%84%D8%A7%D8%A1", description: "01155660300" },
        { label: "كل بيانات التواصل", href: "/contactUs", description: "العنوان والخريطة وطرق التواصل" },
      ],
    };
  }

  if (matchesAny(question, ["تحميل", "انزل التطبيق", "تنزيل", "تطبيق التاجر", "برنامج التاجر", "تطبيقكم"])) {
    return {
      content:
        "تقدر تتعرف على برامج رؤية باي وروابط التنزيل المتاحة من صفحة البرامج. لو بتدور على تطبيق معين ومش لاقيه، ابعتلنا اسمه من صفحة التواصل.",
      links: [{ label: "برامج وتطبيقات رؤية باي", href: "/programs", description: "التطبيقات وروابط التنزيل" }],
    };
  }

  if (matchesAny(question, ["تكامل", "ربط api", "واجهات برمجيه", "api", "اربط", "ربط الانظمه"])) {
    return {
      content:
        "نساعد في ربط الأنظمة والمنصات عبر API، وتنظيم تدفق البيانات وأتمتة خطوات العمل. طريقة الربط بتتحدد حسب الأنظمة المستخدمة واحتياج المشروع.",
      links: [
        { label: "اكتشف خدمة التكامل", href: "/services/integration", description: "ربط الأنظمة والمنصات" },
        { label: "ناقش احتياج مشروعك", href: "/contactUs", description: "تواصل مع فريق رؤية باي" },
      ],
    };
  }

  if (matchesAny(question, ["برمج", "موقع", "ويب", "سوفتوير", "تطبيق", "موبايل", "نظام", "كود", "react", "next.js", "node", "python", "typescript", "تقنيات التطوير"])) {
    if (matchesAny(question, ["تقنيه", "لغات", "react", "next.js", "node", "python", "typescript"])) {
      return {
        content:
          "تذكر صفحة الأسئلة الشائعة تقنيات مثل React وNext.js وNode.js وPython وTypeScript ضمن أدوات التطوير. اختيار التقنية المناسبة بيتحدد حسب فكرة المشروع ومتطلباته.",
        links: [
          { label: "خدمات تطوير البرمجيات", href: "/services/software", description: "مواقع وتطبيقات وأنظمة" },
          { label: "إجابات تقنية أخرى", href: "/fag", description: "الأسئلة الشائعة" },
        ],
      };
    }

    return {
      content:
        "نطوّر مواقع إلكترونية وتطبيقات موبايل وأنظمة لإدارة الأعمال والمتاجر، بالإضافة إلى لوحات تحكم وتقارير. بنبدأ بفهم هدف المشروع واحتياجات مستخدميه عشان يتحدد الحل المناسب.",
      links: [
        { label: "تفاصيل خدمات البرمجيات", href: "/services/software", description: "مواقع وتطبيقات وأنظمة أعمال" },
        { label: "ابدأ مناقشة فكرتك", href: "/contactUs", description: "شاركنا متطلبات المشروع" },
      ],
    };
  }

  if (matchesAny(question, ["دفع", "سداد", "تحصيل", "فاتوره", "فواتير", "كهربا", "كهرباء", "مياه", "غاز", "رصيد", "اتصالات", "محفظه", "نقطه بيع", "كارت", "بطاقه", "مدفوعات", "تأمين", "تامين", "نقابه", "تعليم", "تبرع", "تذاكر", "عقارات", "مرور", "نادي"])) {
    return {
      content:
        "دي خدمات الدفع المذكورة على موقع رؤية باي، ومع كل خدمة نبذة عنها. تقدر تفتح صفحة حلول الدفع من الرابط في آخر القائمة للتفاصيل الكاملة:",
      details: paymentServiceDetails,
      links: [
        { label: "صفحة خدمات الدفع كاملة", href: "/services/payments", description: "استعرض الخدمات على الموقع" },
        { label: "كل خدمات رؤية باي", href: "/services", description: "حلول الدفع والبرمجيات" },
      ],
    };
  }

  if (matchesAny(question, ["شركه", "رؤيه باي", "من نحن", "عنكم", "رؤيتكم", "رسالتكم", "قيمكم", "الامان", "خصوصيه"])) {
    return {
      content:
        "رؤية باي شركة متخصصة في حلول السداد والبرمجيات. بنسعى لتقديم خدمات رقمية تساعد الأفراد والشركات على إنجاز معاملاتهم وتطوير أعمالهم. هتلاقي نبذتنا ورؤيتنا ورسالتنا وقيمنا في صفحة من نحن.",
      links: [
        { label: "حكاية رؤية باي", href: "/about", description: "رؤيتنا ورسالتنا وقيمنا" },
        { label: "الخدمات والحلول", href: "/services", description: "حلول الدفع والبرمجيات" },
      ],
    };
  }

  if (matchesAny(question, ["شركاء", "شركاؤكم", "الشركاء"])) {
    return {
      content: "شركاؤنا جزء مهم من رحلتنا. تقدر تشوف شركاء رؤية باي من الصفحة المخصصة لهم.",
      links: [{ label: "شركاء رؤية باي", href: "/partners", description: "شركاؤنا في مكان واحد" }],
    };
  }

  if (matchesAny(question, ["فريق", "موظفين", "اداره", "مبرمجين", "مطورين", "المطورون"])) {
    return {
      content: "الموقع فيه صفحة لفريق العمل وصفحة للمطورين، اختار اللي حابب تتعرف عليه:",
      links: [
        { label: "فريق العمل", href: "/team", description: "أعضاء الفريق" },
        { label: "المطورون", href: "/developers", description: "فريق التطوير" },
      ],
    };
  }

  if (matchesAny(question, ["سؤال", "اسئله", "شائعه", "faq", "معلومات", "صفحه", "فين الاقي", "مش عارف اوصل", "محتاج مساعده"])) {
    return {
      content:
        "أكيد، أقدر أوجّهك لأقسام الموقع. اكتب اسم الحاجة اللي بتدور عليها، زي الدفع أو البرمجيات أو العنوان، أو ابدأ من دليل الأسئلة الشائعة.",
      links: [
        { label: "الأسئلة الشائعة", href: "/fag", description: "إجابات مختصرة عن خدماتنا" },
        { label: "دليل الخدمات", href: "/services", description: "تصفّح أقسام الموقع" },
      ],
    };
  }

  return {
    content:
      "أنا المساعد الذكي، دليلك لمعلومات وخدمات رؤية باي. أقدر أساعدك في حلول الدفع والتحصيل، البرمجيات، التطبيقات، والربط بين الأنظمة. لو تقصد قسمًا معينًا اكتب اسمه، ولو الموضوع محتاج عرض أو متابعة خاصة وصّلك بفريقنا.",
    links: [
      { label: "حلول الدفع", href: "/services/payments", description: "السداد والتحصيل" },
      { label: "تطوير البرمجيات", href: "/services/software", description: "مواقع وتطبيقات وأنظمة" },
      { label: "الأسئلة الشائعة", href: "/fag", description: "إجابات سريعة" },
      { label: "تواصل مع الفريق", href: "/contactUs", description: "للطلبات والاستفسارات الخاصة" },
    ],
  };
}

export default function RoayaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [draft, setDraft] = useState("");
  const [isSending, setIsSending] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !panelRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsideClick);
    inputRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isSending, isOpen]);

  const sendMessage = (content: string) => {
    const cleanContent = content.trim();
    if (!cleanContent || isSending) return;

    setMessages((current) => [...current, { role: "user", content: cleanContent }]);
    setDraft("");
    setIsSending(true);

    window.setTimeout(() => {
      const reply = answerQuestion(cleanContent);
      if (reply) {
        setMessages((current) => [...current, { role: "assistant", ...reply }]);
      }
      setIsSending(false);
    }, 420);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(draft);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage(draft);
    }
  };

  return (
    <div className="roaya-chat" ref={panelRef}>
      {isOpen && (
        <section className="roaya-chat-panel" aria-label="محادثة مع المساعد الذكي" role="dialog">
          <header className="roaya-chat-header">
            <span className="roaya-chat-avatar"><Bot size={23} /></span>
            <div className="roaya-chat-heading">
              <strong>المساعد الذكي</strong>
              <span><i /> مساعدك لمعلومات رؤية باي</span>
            </div>
            <button
              className="roaya-chat-close"
              type="button"
              aria-label="إغلاق المحادثة"
              onClick={() => setIsOpen(false)}
            >
              <X size={19} />
            </button>
          </header>

          <div className="roaya-chat-messages" aria-live="polite" aria-relevant="additions text">
            {messages.map((message, index) => (
              <div
                className={`roaya-chat-message ${message.role === "user" ? "is-user" : "is-assistant"}`}
                key={`${index}-${message.role}`}
              >
                {message.role === "assistant" && (
                  <div className="roaya-chat-message-brand"><Sparkles size={13} aria-hidden="true" /><span>المساعد الذكي</span></div>
                )}
                <p>{message.content}</p>
                {message.details && (
                  <div className="roaya-chat-details">
                    {message.details.map((detail, detailIndex) => (
                      <article className="roaya-chat-detail" key={detail.title}>
                        <span className="roaya-chat-detail-index">{String(detailIndex + 1).padStart(2, "0")}</span>
                        <div><strong>{detail.title}</strong><p>{detail.description}</p></div>
                      </article>
                    ))}
                  </div>
                )}
                {message.links && (
                  <div className="roaya-chat-message-links">
                    {message.links.map((link) => (
                      link.href.startsWith("https://") ? (
                        <a href={link.href} key={`${link.href}-${link.label}`} target="_blank" rel="noopener noreferrer">
                          <span className="roaya-chat-link-copy"><strong>{link.label}</strong>{link.description && <small>{link.description}</small>}</span>
                          <ArrowUpLeft size={15} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link href={link.href} key={`${link.href}-${link.label}`} onClick={() => setIsOpen(false)}>
                          <span className="roaya-chat-link-copy"><strong>{link.label}</strong>{link.description && <small>{link.description}</small>}</span>
                          <ArrowUpLeft size={15} aria-hidden="true" />
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}

            {messages.length === 1 && (
              <div className="roaya-chat-suggestions" aria-label="أسئلة مقترحة">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    disabled={isSending}
                    onClick={() => sendMessage(suggestion)}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {isSending && (
              <div className="roaya-chat-message is-assistant roaya-chat-typing" role="status">
                <span /><span /><span />
                <span className="sr-only">المساعد الذكي يكتب ردًا</span>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form className="roaya-chat-form" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="roaya-chat-input">اكتب رسالتك</label>
            <input
              id="roaya-chat-input"
              ref={inputRef}
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="اكتب سؤالك هنا..."
              maxLength={1200}
              disabled={isSending}
              autoComplete="off"
            />
            <button
              type="submit"
              aria-label="إرسال الرسالة"
              disabled={!draft.trim() || isSending}
            >
              <Send size={18} />
            </button>
          </form>
          <p className="roaya-chat-privacy">لخصوصيتك، ما تبعتش بيانات بطاقتك أو كلمة المرور.</p>
        </section>
      )}

      <button
        className={`roaya-chat-launcher ${isOpen ? "is-open" : ""}`}
        type="button"
        aria-label={isOpen ? "إغلاق المساعد الذكي" : "افتح المساعد الذكي"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
        {!isOpen && <span className="roaya-chat-launcher-ping" aria-hidden="true" />}
      </button>
    </div>
  );
}
