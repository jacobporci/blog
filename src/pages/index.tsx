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
    image: "https://picsum.photos/1000/300?grayscale&random=1",
  },
  {
    title: "Veniam quis ",
    description: "Occaecat.exercitation.ad veniam anim eiusmod.",
    actions: (
      <>
        <Button text="Buy" />
        <Button text="Learn more" type="secondary" />
      </>
    ),
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/300?grayscale&random=2",
  },
  {
    title: "Ad Lorem occaecat ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/300?grayscale&random=3",
  },
  {
    title: "Eiusmod proident magna ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/300?grayscale&random=4",
  },
  {
    title: "Nisi tempor voluptate ",
    // description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/300?grayscale&random=5",
  },
  {
    title: "Ea dolor ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/300?grayscale&random=6",
  },
  {
    title: "Adipisicing labore adipisicing ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/300?grayscale&random=7",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center my-3">
      <List items={ITEMS} limit={3} />
    </main>
  );
}
