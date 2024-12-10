import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transactionCategoryStyles } from "@/constants";
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

const TransactionTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="max-md:hidden">Channel</TableHead>
          <TableHead className="max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date));
          const amount = formatAmount(t.amount);
          const isDebit = t.type === "debit";
          const isCredit = t.type === "credit";

          return (
            <TableRow key={t.id} className="max-w-[15.625rem] pl-2 pr-10">
              <TableCell className="truncate">
                {removeSpecialCharacters(t.name)}
              </TableCell>
              <TableCell
                className={`${
                  isDebit || amount[0] === "-"
                    ? "text-red-400"
                    : "text-[#76eea2]"
                }`}
              >
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>
              <TableCell>
                <CategoryBadge category={status} />
              </TableCell>
              <TableCell className="min-w-32">
                {formatDateTime(new Date(t.date)).dateTime}
              </TableCell>
              <TableCell className="max-md:hidden capitalize">
                {t.paymentChannel}
              </TableCell>
              <TableCell className="max-md:hidden">
                <CategoryBadge category={t.category} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionTable;
