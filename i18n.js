import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

// Can be imported from a shared config

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) notFound();

  return {
    messages: (
      await (locale === "is"
        ? // When using Turbopack, this will enable HMR for `en`
          import("./messages/is.json")
        : import(`./messages/${locale}.json`))
    ).default,
  };
});
