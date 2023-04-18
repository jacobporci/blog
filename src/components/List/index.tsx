import Link from "next/link";
import { useMemo } from "react";

export interface ListProps {
  items: Array<ListItemProps>;
  limit?: number;
}
export const List = ({ items, limit }: ListProps) => {
  return (
    <div className="space-y-3">
      {items.slice(0, limit || items.length).map((item, index) => (
        <ListItem key={`list-item-${index}`} {...item} />
      ))}

      <div className="grid grid-cols-2 gap-3 mx-3">
        {items.slice(limit, items.length).map((item, index) => (
          <ListItem key={`list-item-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export interface ListItemProps {
  title: string;
  description?: string;
  actions?: JSX.Element;
  content: string;
  href?: string;
}
const ListItem = ({
  title,
  description,
  actions = <></>,
  href = "#",
}: ListItemProps) => {
  return (
    <div className="bg-black p-20 text-center cursor-pointer">
      <Link href={href}>
        <h2
          className={`text-6xl font-medium ${description ? "mb-5" : "mb-10"}`}
        >
          {title}
        </h2>
        <p className="text-3xl mb-5">{description}</p>
        {actions}
      </Link>
    </div>
  );
};
