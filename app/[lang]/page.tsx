import Home from "../home";

export default function LocalizedPage({
  params,
}: {
  params: { lang: string };
}) {
  return (
    <Home
      lang={params.lang === "en" || params.lang === "el" ? params.lang : "el"}
    />
  );
}
