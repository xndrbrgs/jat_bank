import Link from "next/link";
import React from "react";

const LastTransactions = ({
  accounts,
  transactions,
  appwriteItemId,
  page = 1,
}: LastTransactionsProps) => {
  return (
    <section className="w-full mt-6">
      <h1 className="text-lg">Last Transactions</h1>
      <div className="flex flex-1 flex-col gap-4 p-4">
        {Array.from({ length: 24 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video h-12 w-full rounded-lg bg-muted/50"
          >
            <Link href={`/transaction-history/?id=${appwriteItemId}`}>
              View All
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastTransactions;
