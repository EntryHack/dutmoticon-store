import type { NextApiRequest, NextApiResponse } from "next";
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

    if (ids) res.status(200).json(ids.map((id) => emoticons.find((emoticon) => emoticon.id === id)));
    res.status(200).json(emoticons);
  } catch (_) {
    throw _;
    res.status(500).json({});
  }
};

export default handler;
