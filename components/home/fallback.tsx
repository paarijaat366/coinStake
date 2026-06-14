import React from "react";
import DataTable from "../ui/DataTable";

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton animate-pulse" />
        <div className="info">
          <div className="header-line-sm skeleton animate-pulse rounded" />
          <div className="header-line-lg skeleton animate-pulse rounded" />
        </div>
      </div>
      <div className="flex gap-2 mb-4">
        <div className="period-button-skeleton skeleton animate-pulse rounded-sm" />
        <div className="period-button-skeleton skeleton animate-pulse rounded-sm" />
        <div className="period-button-skeleton skeleton animate-pulse rounded-sm" />
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton animate-pulse" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const skeletonRows = Array(6)
    .fill(null)
    .map((_, i) => ({
      id: `skeleton-${i}`,
    }));

  const columns = [
    {
      header: "Title",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton animate-pulse rounded-full" />
          <div className="name-line skeleton animate-pulse rounded" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: () => (
        <div className="price-change">
          <div className="change-line skeleton animate-pulse rounded" />
          <div className="change-icon skeleton animate-pulse" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <div className="price-line skeleton animate-pulse rounded" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending coins</h4>
      <DataTable
        data={skeletonRows}
        columns={columns}
        rowKey={(_, index) => `skeleton-row-${index}`}
        tableClassName="trending-coins-table"
      />
    </div>
  );
};
