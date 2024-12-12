import Header from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import TransactionTable from "@/components/TransactionTable";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { formatAmount } from "@/lib/utils";
import React from "react";

const TransactionHistory0 = async ({ searchParams }: SearchParamProps) => {
  const { id, page } = await searchParams;
  const currentPage = Number(page as string) || 1;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  const rowsPerPage = 10;
  const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account?.transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  return (
    <div className="no-scrollbar w-full max-xl:max-h-screen max-xl:overflow-y-scroll pt-8 px-8">
      <Header
        title="Transaction History"
        subtext="See your bank details and transactions."
      />

      <div className="border p-4 w-max my-8 rounded-xl">
        <h2 className="text-lg">{account?.data.name}</h2>
        <div className="pt-3">
          <p className="text-sm">{account?.data.officialName}</p>
          <p className="text-sm">**** **** **** {account?.data.mask}</p>
        </div>

        <div className="mt-6 py-6 border bg-gray-800 rounded-xl flex flex-col justify-center items-center">
          <p className="text-sm">Current Balance:</p>
          <span className="text-green-300 text-xl">
            {formatAmount(account?.data.currentBalance)}
          </span>
        </div>
      </div>

      <section className="flex w-full flex-col gap-6">
        <TransactionTable transactions={currentTransactions} />
        {totalPages > 1 && (
          <div className="my-4 w-full">
            <Pagination totalPages={totalPages} page={currentPage} />
          </div>
        )}
      </section>
    </div>
  );
};

export default TransactionHistory0;
