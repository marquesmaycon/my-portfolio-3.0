"use server";

import { cookies } from "next/headers";

import { type Locale } from "./locales";

export async function setLocaleCookie(locale: Locale) {
  const store = await cookies();

  store.set("locale", locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
}
