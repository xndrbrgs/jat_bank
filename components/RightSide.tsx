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
      className="hidden no-scrollbar flex-col border-l border-gray-800 xl:flex 
    min-w-[40%] max-h-screen h-full"
    >
      <section className="m-8 flex flex-col">
        <div>
          <h1 className="text-lg">Quick Transfer</h1>
          <QuickTransfer accounts={accountsData} />
        </div>
        <div className="mt-10 flex flex-col flex-1">
          <h2 className="text-lg">{user.firstName}'s Top Categories</h2>
          <div className="space-y-5 mt-4">
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
