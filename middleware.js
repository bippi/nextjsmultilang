import createMiddleware from "next-intl/middleware";
import {
  pathnames,
  locales,
  defaultLocale,
  localeDetection,
  localePrefix,
} from "@/config";
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  pathnames,
  // Used when no locale matches
  defaultLocale,
  localeDetection,
  localePrefix,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(is|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};
