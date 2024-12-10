"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { cn, formUrlQuery } from "@/lib/utils";

const BankAccountTab = ({ account, appwriteItemId }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(
        `gap-[18px] border-gray-800 border-b-2 flex px-2 sm:px-4 py-2 transition-all`,
        {
          " border-white": isActive,
        }
      )}
    >
      <p
        className={cn(`text-sm line-clamp-1 flex-1 text-gray-500`, {
          " text-white": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};

export default BankAccountTab;
