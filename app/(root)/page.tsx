import CardManagement from "@/components/CardManagement";
import Header from "@/components/Header";
import RightSide from "@/components/RightSide";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async ({ searchParams }: SearchParamProps) => {
  const { id, page } = await searchParams;
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  console.log({
    accountsData,
    account,
  });

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

        <div>
          {" "}
          <CardManagement banks={accountsData?.slice(0, 2)} />
          LAST TRANSACTIONS
        </div>
      </div>

      <RightSide user={loggedIn} transactions={accounts?.transactions} />
    </div>
  );
};

export default Home;
