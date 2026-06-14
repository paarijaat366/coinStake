import React, { Suspense } from "react";
import CoinOverview from "@/components/home/CoinOverview";
import TrendingCoins from "@/components/home/TrendingCoins";
import { CoinOverviewFallback, TrendingCoinsFallback } from "@/components/home/fallback";

const page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>
import React, { Suspense } from 'react'
import { CoinOverviewFallback, TrendingCoinsFallback } from './fallback'

const page = () => {
  return (
    <div className="space-y-6 p-6">
      <Suspense fallback={<CoinOverviewFallback />}>
        {/* TODO: Replace with real CoinOverview component */}
        <div>Coin Overview (server component)</div>
      </Suspense>

      <Suspense fallback={<TrendingCoinsFallback />}>
        {/* TODO: Replace with real TrendingCoins component */}
        <div>Trending Coins (server component)</div>
      </Suspense>
    </div>
  )
}

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
};

export default page;
