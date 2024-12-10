import { CircleArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankAccountTab from "./BankAccountTab";
import BankInfo from "./BankInfo";
import TransactionTable from "./TransactionTable";

const LastTransactions = ({
  accounts,
  transactions,
  appwriteItemId,
  page = 1,
}: LastTransactionsProps) => {
  return (
    <section className="w-full mt-8">
      <div className="flex items-center">
        <h1 className="text-lg mr-12">Your Last Transactions</h1>
        <div className="text-sm space-x-2 text-gray-400 hover:text-gray-200 transition duration-150 cursor-pointer flex">
          <CircleArrowOutUpRight className="size-5" />
          <Link href={`/transaction-history/?id=${appwriteItemId}`}>
            View All
          </Link>
        </div>
      </div>
      <div>
        <Tabs defaultValue={appwriteItemId} className="w-full">
          <TabsList className="flex space-x-5 mt-3">
            {accounts.map((account: Account) => (
              <TabsTrigger key={account.id} value={account.appwriteItemId}>
                <BankAccountTab
                  key={account.id}
                  account={account}
                  appwriteItemId={account.appwriteItemId}
                />
              </TabsTrigger>
            ))}
          </TabsList>
          {accounts.map((account: Account) => (
            <TabsContent
              value={account.appwriteItemId}
              key={account.id}
              className="space-y-4"
            >
              <BankInfo
                account={account}
                appwriteItemId={account.appwriteItemId}
                type="full"
              />
              <TransactionTable transactions={transactions} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default LastTransactions;
