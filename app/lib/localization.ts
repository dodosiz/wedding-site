export type SupportedLang = "el" | "en";

export type LocalizedText = { lang: SupportedLang; text: string };

export function localize(localizedTexts: LocalizedText[], lang: SupportedLang) {
  return localizedTexts.find((t) => t.lang === lang)?.text || "";
}
