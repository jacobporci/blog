import Image from "next/image";
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
        {items.slice(limit, items.length).map((item, index) => {
          return (
            <ListItem
              theme={Math.floor(index / 2) % 2 === 0 ? "dark" : "light"}
              key={`list-item-${index}`}
              {...item}
            />
          );
        })}
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
  theme?: "dark" | "light";
  image?: string;
}
const ListItem = ({
  title,
  description,
  actions = <></>,
  href = "#",
  theme = "dark",
  image,
}: ListItemProps) => {
  const isDark = useMemo(() => theme === "dark", [theme]);
  const fontColor = useMemo(
    () => (isDark ? "text-white" : "text-black"),
    [isDark]
  );
  return (
    <div
      className={`${
        isDark ? "bg-black" : "bg-white"
      } p-20 pb-0 text-center cursor-pointer`}
    >
      <Link href={href}>
        <h2
          className={`text-6xl font-medium ${
            description ? "mb-5" : "mb-10"
          } ${fontColor}`}
        >
          {title}
        </h2>
        <p className={`text-3xl mb-5 ${fontColor}`}>{description}</p>
        {actions}
        {image && (
          <div className="flex justify-center mt-10">
            <img src={image} alt={`image-${title}`} width={1000} height={200} />
          </div>
        )}
      </Link>
    </div>
  );
};
