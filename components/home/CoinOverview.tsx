import { fetcher } from "@/lib/coingecko.action";
import React from "react";

const CoinOverview = async () => {
  let coin: CoinDetailsData | null = null;

  try {
    coin = await fetcher<CoinDetailsData>("/coins/bitcoin", {
      dex_pair_format: "symbol",
    });
  } catch (error) {
    console.error("CoinOverview fetch failed", error);
    return (
      <div id="coin-overview" className="p-4 bg-dark-500 rounded-xl">
        <div className="header pt-2">
          <div className="w-14 h-14 rounded-full bg-dark-400" />
          <div className="info">
            <p className="text-sm text-muted-foreground">Unable to load coin overview.</p>
            <h1 className="text-xl font-semibold">Please try again later.</h1>
          </div>
        </div>
      </div>
    );
  }

  if (!coin) {
    return null;
  }

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
