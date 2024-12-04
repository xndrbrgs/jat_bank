import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RightSide = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside
      className="hidden no-scrollbar h-screen max-h-screen flex-col  bg-black border-black rounded-l-3xl xl:flex 
    min-w-[50%] xl:overflow-y-scroll"
    >
      <section className="m-8 flex flex-col">
        <nav>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{user.firstName[0]}</AvatarFallback>
          </Avatar>
        </nav>
        <div>calendar make payment</div>
        <div>total earning total spending</div>
      </section>
    </aside>
  );
};

export default RightSide;
