import { transactionCategoryStyles } from "@/constants";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  cn,
  formatAmount,
  formatDateTime,
  getTransactionStatus,
  removeSpecialCharacters,
} from "@/lib/utils";

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;

  return (
    <div
      className={cn(
        "flex items-center justify-center truncate w-fit gap-1 rounded-2xl border-[1.5px] py-[2px] pl-1.5 pr-2",
        borderColor,
        chipBackgroundColor
      )}
    >
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={cn("text-xs", textColor)}>{category}</p>
    </div>
  );
};

const TransactionBubble = ({ transactions }: TransactionTableProps) => {
  return (
    <div className="flex flex-wrap mt-5">
      {transactions.map((t: Transaction) => {
        const status = getTransactionStatus(new Date(t.date));
        const amount = formatAmount(t.amount);
        const isDebit = t.type === "debit";
        const isCredit = t.type === "credit";

        return (
          <Card key={t.id} className="h-max w-full sm:w-[30%] m-3">
            <CardHeader>
              <CardTitle className="truncate">
                {removeSpecialCharacters(t.name)}
              </CardTitle>
              <CardDescription>
                <CategoryBadge category={t.category} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={`${
                  isDebit || amount[0] === "-"
                    ? "text-red-400"
                    : "text-[#76eea2]"
                }`}
              >
                <span className="text-lg">
                  {isDebit ? `-${amount}` : isCredit ? amount : amount}
                </span>
              </div>

              <p className="text-sm">
                {formatDateTime(new Date(t.date)).dateTime}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default TransactionBubble;
