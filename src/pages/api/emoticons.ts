import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import emoticons from "@/emoticons/emoticons.json";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const ids = id
      ? id
          .toString()
          .split(",")
          .map((id) => id.trim())
      : undefined;

    await NextCors(req, res, { methods: ["GET", "POST"], origin: "https://playentry.org" });
    if (ids) res.status(200).json(ids.map((id) => emoticons.find((emoticon) => emoticon.id === id)));
    res.status(200).json(emoticons);
  } catch (_) {
    console.error(_);
    res.status(500).json({});
  }
};

export default handler;
