// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Genre = {
  name: string;
  shows: Array<string>;
};

export type GenresResponse = {
  data: Array<Genre>;
};

const GENRES = [
  {
    name: "Comedy",
    shows: ["1", "2", "3", "4", "5"],
  },
  {
    name: "Horror",
    shows: ["6", "7", "8", "9", "10"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    setTimeout(() => {
      res.status(200).json({ data: GENRES });
    }, 1000);
  } catch (error) {
    res.status(500).json({ error: "failed to load data" });
  }
}
