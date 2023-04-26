// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Show = {
  id: string;
  name: string;
  imageSrc: string;
};

export type ShowResponse = {
  data: Show;
};

const SHOWS: Array<Show> = [
  { id: "1", name: "Demon Slayer", imageSrc: "https://picsum.photos/200/300" },
  { id: "2", name: "F9", imageSrc: "https://picsum.photos/200/300" },
  { id: "3", name: "The Playlist", imageSrc: "https://picsum.photos/200/300" },
  { id: "4", name: "Hunger", imageSrc: "https://picsum.photos/200/300" },
  { id: "5", name: "Berserk", imageSrc: "https://picsum.photos/200/300" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const show = SHOWS.find(({ id }) => id === req.query.id);
    if (show) {
      // emulate delay in network
      setTimeout(() => {
        res.status(200).json({ data: show });
      }, 1000);
    } else {
      throw new Error("Show not found");
    }
  } catch (error) {
    res.status(500).json({ error: "failed to load data" });
  }
}
