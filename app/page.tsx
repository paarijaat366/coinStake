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

export default page
