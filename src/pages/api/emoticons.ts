import type { NextApiRequest, NextApiResponse } from "next";
import emoticons from "@/emoticons/emoticons.json";

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(emoticons);
};

export default handler;
