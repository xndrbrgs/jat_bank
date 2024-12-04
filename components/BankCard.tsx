import React from "react";
import { Card, CardContent } from "./ui/card";

const BankCard = ({
  account,
  userName,
  showBalance = true,
}: CreditCardProps) => {
  return (
    <div className="p-1">
      <Card className="h-[15rem] bg-gradient-to-r from-red-600 via-red-500 to-red-700 border-none">
        <CardContent className="flex flex-col p-6">
          <div className="flex justify-between">
            <span className="">Bank of America</span>
            <span className="">**** 8458</span>
          </div>
          <div>$38,500.00</div>
          <div>17 / 28</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BankCard;
