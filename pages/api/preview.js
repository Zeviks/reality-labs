import { NextApiRequest, NextApiResponse } from "next";

//This allows us to handle the incoming request
export default function preview(req = NextApiRequest, res = NextApiResponse) {
  //Then we set the response, we store it in an empty object
  res.setPreviewData({}); //If i want to use authentication we can pass a token here
  //We then redirect the user back to the home page
  res.writeHead(307, { Location: "/" });
  //then we send back the response
  res.end();
}
