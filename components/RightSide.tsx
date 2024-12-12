import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { countTransactionCategories } from "@/lib/utils";
import Category from "./Category";
import QuickTransfer from "./QuickTransfer";

const RightSide = async ({
  user,
  transactions,
  banks,
  searchParams,
}: RightSidebarProps) => {
  const { id, page } = await searchParams;
  const categories: CategoryCount[] = countTransactionCategories(transactions);
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });
  return (
    <aside
      className="hidden flex-col border-l h-full border-gray-800 xl:flex 
    min-w-[40%]"
    >
      <section className="flex flex-col">
        <div className="border-b border-gray-800 p-8">
          <h1 className="text-xl">Quick Transfer</h1>
          <QuickTransfer accounts={accountsData} />
        </div>
        <div className="p-8 flex flex-col flex-1">
          <h2 className="text-lg">{user.firstName}'s Top Categories</h2>
          <div className="space-y-5 my-8">
            {categories.map((category, index) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightSide;
