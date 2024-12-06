import { formatAmount } from "@/lib/utils";
import React from "react";
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
    <div className="p-1">
      <Card className="h-[15rem] bg-gradient-to-r from-red-600 via-red-500 to-red-700 border-none">
        <CardContent className="flex flex-col p-6">
          <div className="flex justify-between">
            <span className="">{account}</span>
            <span className="">**** {mask}</span>
          </div>
          <div>
            <span className="text-2xl">{formatAmount(balance)}</span>
          </div>
          <div>
            <span>{officialName}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankCard;
