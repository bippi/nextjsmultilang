import { locales } from "@/config";
import { unstable_setRequestLocale } from "next-intl/server";
export default function LocaleLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}
