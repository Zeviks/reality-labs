import { NextApiRequest, NextApiResponse } from "next";

export default function exit(req = NextApiRequest, res = NextApiResponse) {
  res.clearPreviewData(); //If i want to use authentication we can pass a token here

  res.writeHead(307, { Location: "/" });

  res.end();
}
