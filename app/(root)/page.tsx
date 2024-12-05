import CardManagement from "@/components/CardManagement";
import Header from "@/components/Header";
import RightSide from "@/components/RightSide";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const loggedIn = await getLoggedInUser()
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
          <CardManagement
            banks={[{}, {}]}
          />
          LAST TRANSACTIONS
        </div>
      </div>

      <RightSide user={loggedIn} transactions={[]} />
    </div>
  );
}

export default Home;
