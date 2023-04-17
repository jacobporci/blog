import Image from "next/image";
import { Inter } from "next/font/google";
import { List, ListProps } from "@/components/List";
import { Button } from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

const ITEMS: ListProps["items"] = [
  {
    title: "Hi I'm Sonic",
    description: "Software Engineer. Home Barista",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    actions: <Button text="Learn More" className="!bg-white text-black" />,
    href: "me",
  },
  {
    title:
      "Veniam quis excepteur incididunt occaecat cupidatat ipsum esse sint aute culpa magna culpa nisi.",
    description: "Occaecat.exercitation.ad veniam anim eiusmod.",
    actions: (
      <>
        <Button text="Buy" />
        <Button text="Learn more" type="secondary" />
      </>
    ),
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
  },
  {
    title:
      "Ad Lorem occaecat non qui exercitation elit minim ad est ex nostrud qui do.",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
  },
  {
    title:
      "Ad Lorem occaecat non qui exercitation elit minim ad est ex nostrud qui do.",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
  },
  {
    title:
      "Ad Lorem occaecat non qui exercitation elit minim ad est ex nostrud qui do.",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
  },
  {
    title:
      "Ad Lorem occaecat non qui exercitation elit minim ad est ex nostrud qui do.",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
  },
  {
    title:
      "Ad Lorem occaecat non qui exercitation elit minim ad est ex nostrud qui do.",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center my-3">
      <List items={ITEMS} limit={3} />
    </main>
  );
}
