"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import {
  cn,
  formUrlQuery,
  formatAmount,
  getAccountTypeColors,
} from "@/lib/utils";

const BankInfo = ({ account, appwriteItemId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className={cn(
        `gap-[18px] flex p-4 transition-all border border-gray-800 border-transparent ${colors.bg}`,
        {
          "shadow-sm border-gray-700": type === "card" && isActive,
          "rounded-xl": type === "card",
          "hover:shadow-sm cursor-pointer": type === "card",
        }
      )}
    >
      <figure
        className={`flex-center h-fit rounded-full bg-transparent ${colors.lightBg}`}
      >
        <Image
          src="/icons/connect-bank.svg"
          width={20}
          height={20}
          alt={account.subtype}
          className="m-2 min-w-5"
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="relative z-10 flex size-full max-w-[228px] flex-col justify-between rounded-l-[20px] border-gray-800 border-2 px-5 pb-4 pt-5">
          <h2
            className={`text-sm line-clamp-1 flex-1 text-white ${colors.title}`}
          >
            {account.name}
          </h2>
          {type === "full" && (
            <p
              className={`text-xs rounded-full px-3 py-1 font-medium text-black ${colors.subText} ${colors.lightBg}`}
            >
              {account.subtype}
            </p>
          )}
        </div>

        <p className={`text-sm text-white ${colors.subText}`}>
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
