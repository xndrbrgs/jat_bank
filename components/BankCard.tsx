import { formatAmount } from "@/lib/utils";
import React from "react";
import CardDetails from "./CardDetails";
import { Card, CardContent } from "./ui/card";

const BankCard = ({
  account,
  balance,
  mask,
  userName,
  officialName,
  showBalance = true,
}: BankProps) => {
  return (
    <div className="w-max">
      <Card className="relative w-96 h-48 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl shadow-xl border-gray-800 overflow-hidden">
        <CardContent className="">
          {/* <!-- Glassmorphism Effect (Backdrop Blur) --> */}
          <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl"></div>

          {/* <!-- Glossy shine effect --> */}
          <div className="absolute inset-0 bg-gradient-to-t from-white opacity-15 pointer-events-none"></div>

          {/* <!-- Card Holder Label --> */}
          <div className="absolute top-4 left-4 text-white text-lg tracking-wide">
            {userName}
          </div>

          {/* <!-- Card Number --> */}
          <div className="absolute top-14 left-4 text-white text-xl tracking-widest">
            **** **** **** {mask}
          </div>
          <div className="absolute bottom-16 left-4 text-white text-xl tracking-widest">
            {formatAmount(balance)}
          </div>

          {/* <!-- Optional Card Brand (Visa, MasterCard, etc.) --> */}
          <div className="absolute bottom-4 left-4 text-white text-sm">
            <span className="bg-gray-200 text-black px-2 py-1 rounded-lg">
              {officialName}
            </span>
          </div>
        </CardContent>
      </Card>
      <p>{showBalance && <CardDetails title={account} />}</p>
    </div>
  );
};

export default BankCard;
