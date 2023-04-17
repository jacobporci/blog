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
          className={`text-5xl font-medium ${description ? "mb-5" : "mb-10"}`}
        >
          {title}
        </h2>
        <p className="text-2xl mb-5">{description}</p>
        {actions}
      </Link>
    </div>
  );
};
