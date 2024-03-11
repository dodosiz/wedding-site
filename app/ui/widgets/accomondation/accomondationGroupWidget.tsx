import { AccomondationGroup } from "@/app/data/accomondation";

interface AccomondationGroupProps {
  group: AccomondationGroup;
}

export function AccomondationGroupWidget({ group }: AccomondationGroupProps) {
  return (
    <>
      <div></div>
      <div>
        <h2>{group.name}</h2>
        <ul>
          {group.items.map((item, index) => {
            return (
              <li style={{fontSize: "0.9em"}} key={`item-${index}`}>
                <a href={item.link} target="_blank">
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
