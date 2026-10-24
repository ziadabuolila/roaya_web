import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEnhancer from "@/components/MotionEnhancer";
import NavigationProgress from "@/components/NavigationProgress";
import RoayaAssistant from "@/components/RoayaAssistant";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "رؤية باي | حلول السداد والبرمجيات",
    template: "%s | رؤية باي",
  },
  description:
    "رؤية باي لحلول السداد والبرمجيات — حلول دفع رقمية وأنظمة أعمال وبرمجيات تسهم في تطوير الأعمال.",
  metadataBase: new URL("https://roaya-pay.com"),
  openGraph: {
    title: "رؤية باي | حلول السداد والبرمجيات",
    description: "نقرّب المستقبل الرقمي من أعمالك.",
    locale: "ar_EG",
    type: "website",
  },
  icons: {
    icon: "/images/logo_roaya.png",
    shortcut: "/images/logo_roaya.png",
    apple: "/images/logo_roaya.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
            try {
              var savedTheme = localStorage.getItem("roaya-theme");
              var initialTheme = savedTheme === "dark" || savedTheme === "light"
                ? savedTheme
                : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
              document.documentElement.dataset.theme = initialTheme;
            } catch (_) {
              document.documentElement.dataset.theme = "light";
            }
          })();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <MotionEnhancer />
          <NavigationProgress />
          <Header />
          {children}
          <Footer />
          <RoayaAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
