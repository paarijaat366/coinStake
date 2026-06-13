import { fetcher } from "@/lib/coingecko.action";
import React from "react";
import DataTable from "../ui/DataTable";

const CoinOverview = async () => {
  const coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
    dex_pair_format: "symbol",
  });
  return (
    <div>
      <div id="coin-overview">
        <div className="header pt-2">
          <img src={coin.image.large} alt={coin.name} width={56} height={56} />
          <div className="info">
            <p>
              {coin.name} / {coin.symbol.toUpperCase()}
            </p>
            <h1>{coin.market_data.current_price.usd?.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinOverview;
