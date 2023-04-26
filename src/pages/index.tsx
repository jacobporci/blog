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
    image: "https://picsum.photos/1000/400?grayscale&random=1.jpg",
  },
  {
    title: "Test Netflix-like ",
    href: "netflix",
    description: "Occaecat.exercitation.ad veniam anim eiusmod.",
    actions: (
      <>
        <Button text="Buy" />
        <Button text="Learn more" type="secondary" />
      </>
    ),
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=2.jpg",
  },
  {
    title: "Ad Lorem occaecat ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=3.jpg",
  },
  {
    title: "Eiusmod proident magna ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=4.jpg",
  },
  {
    title: "Nisi tempor voluptate ",
    // description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=5.jpg",
  },
  {
    title: "Ea dolor ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=6.jpg",
  },
  {
    title: "Adipisicing labore adipisicing ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=7.jpg",
  },
  {
    title: "Consectetur qui est",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=8.jpg",
  },
  {
    title: "laborum proident exercitation ",
    description: "Ipsum.cillum.officia dolor",
    content:
      "Officia cupidatat laborum incididunt aute. Consectetur qui est laborum proident exercitation reprehenderit ex ex et incididunt sunt consequat aliqua aliqua. Nostrud duis Lorem elit consequat dolor quis.",
    image: "https://picsum.photos//1000/400?grayscale&random=9.jpg",
  },
];

export default function Home() {
  return (
    <>
      <List items={ITEMS} limit={3} />
    </>
  );
}
