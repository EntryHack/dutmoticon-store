import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { default: emoticon } = await import(`@/emoticons/${id}.json`);
  res.status(200).json(emoticon);
};

export default handler;
