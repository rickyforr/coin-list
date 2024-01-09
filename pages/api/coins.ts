// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  coins: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | any>
) {
    try {
      const response = await axios.get(
        "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest",
        {
          headers: {
            "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY!,
          },
          params: {
            symbol: "BTC,ETH,SOL,XRP,SHIB,BNB",
            convert: "USD",
          },
        }
      );
      res.status(200).json({coins: response.data.data})
    } catch (error) {
      res.status(500).json({ error })
      console.log("error", error);
    }
}
