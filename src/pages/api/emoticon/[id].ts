import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const { default: emoticon } = await import(`@/emoticons/${id}.json`);
    await NextCors(req, res, { methods: ["GET", "POST"], origin: "https://playentry.org" });
    res.status(200).json(emoticon);
  } catch (_) {
    res.status(500).json({});
  }
};

export default handler;
