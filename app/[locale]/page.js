import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Index({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Index");
  return <h1>{t("title")}</h1>;
}
