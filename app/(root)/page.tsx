import Header from "@/components/Header";
import RightSide from "@/components/RightSide";
import React from "react";

function Home() {
  const loggedIn = { firstName: "Alex" };
  return (
    <div className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Overview"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />
        </header>

        <div>
          {" "}
          CARD MANAGEMENT <br /> LAST TRANSACTIONS
        </div>
      </div>

      <RightSide user={loggedIn} transactions={[]} banks={[]} />
    </div>
  );
}

export default Home;
