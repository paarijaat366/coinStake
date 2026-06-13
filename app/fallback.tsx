import React from 'react'

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback" className="p-4 bg-card rounded-md animate-pulse">
      <div className="h-6 w-1/3 bg-muted rounded mb-3" />
      <div className="space-y-2">
        <div className="h-32 bg-muted rounded" />
      </div>
    </div>
  )
}

export function TrendingCoinsFallback() {
  return (
    <div id="trending-coins-fallback" className="p-4 bg-card rounded-md animate-pulse">
      <div className="h-6 w-1/3 bg-muted rounded mb-3" />

      <table className="w-full table-auto datatable">
        <thead>
          <tr>
            <th className="text-left">#</th>
            <th className="text-left">Coin</th>
            <th className="text-left">Price</th>
            <th className="text-left">24h</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => (
            <tr key={i} className="h-8">
              <td className="w-8"><div className="h-4 bg-muted rounded" /></td>
              <td><div className="h-4 bg-muted rounded" /></td>
              <td><div className="h-4 bg-muted rounded" /></td>
              <td><div className="h-4 bg-muted rounded" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
