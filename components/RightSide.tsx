import { countTransactionCategories } from "@/lib/utils";
import Category from "./Category";

const RightSide = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories: CategoryCount[] = countTransactionCategories(transactions);
  return (
    <aside
      className="hidden no-scrollbar flex-col border-l border-gray-800 xl:flex 
    min-w-[40%] max-h-screen h-full"
    >
      <section className="m-8 flex flex-col">
        <div>calendar make payment</div>
        <div>total earning total spending</div>
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
