import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionEnhancer from "@/components/MotionEnhancer";
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <MotionEnhancer />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
