import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    const { default: emoticon } = await import(`@/emoticons/${id}.json`);
    res.status(200).json(emoticon);
  } catch (_) {
    res.status(500).json({});
  }
};

export default handler;
