import BankCard from "@/components/BankCard";
import Header from "@/components/Header";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });
  return (
    <section className="flex flex-col m-8 h-full md:h-[76.5vh]">
      <Header
        title="My Bank Accounts"
        subtext="Effortlessly manage your banking activities."
      />

      <div className="space-y-4 mt-8">
        <h2 className="text-lg">Your Cards</h2>
        <div className="flex flex-wrap gap-6">
          {accounts &&
            accounts.data.map((a: Account) => (
              <BankCard
                key={accounts.$id}
                officialName={a?.officialName}
                account={a?.shareableId}
                mask={a?.mask}
                balance={a?.currentBalance}
                userName={a?.name}
                showBalance={true}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
