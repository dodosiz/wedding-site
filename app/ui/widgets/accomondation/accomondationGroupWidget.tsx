import { AccomondationGroup } from "@/app/data/accomondation";
import { SupportedLang, localize } from "@/app/lib/localization";

interface AccomondationGroupProps {
  group: AccomondationGroup;
  lang: SupportedLang;
}

export function AccomondationGroupWidget({
  group,
  lang,
}: AccomondationGroupProps) {
  return (
    <>
      <div></div>
      <div>
        <h2>{localize(group.name, lang)}</h2>
        <ul>
          {group.items.map((item, index) => {
            return (
              <li style={{ fontSize: "0.9em" }} key={`item-${index}`}>
                <a href={item.link} target="_blank">
                  {localize(item.name, lang)}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
