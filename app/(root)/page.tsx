import CardManagement from "@/components/CardManagement";
import Header from "@/components/Header";
import LastTransactions from "@/components/LastTransactions";
import RightSide from "@/components/RightSide";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async ({ searchParams }: SearchParamProps) => {
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

  return (
    <div className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Overview"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions"
          />
        </header>

        <CardManagement banks={accountsData?.slice(0, 2)} />
        <LastTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      <RightSide user={loggedIn} transactions={account?.transactions} />
    </div>
  );
};

export default Home;
