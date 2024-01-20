import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const AboutPage = ({ params: { locale } }) => {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("AboutPage");

  return <h1>{t("title")}</h1>;
};

export default AboutPage;
