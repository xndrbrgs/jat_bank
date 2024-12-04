import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RightSide = ({ user, transactions }: BankProps) => {
  return (
    <aside
      className="hidden no-scrollbar h-screen max-h-screen flex-col  bg-black border-black rounded-l-3xl xl:flex 
    min-w-[50%] xl:overflow-y-scroll"
    >
      <section className="m-8 flex flex-col">
        <nav className="flex items-center space-x-5 justify-end">
          <div className="flex flex-col text-end">
            <span>
              {user.firstName} {user.lastName}
            </span>
            <span className="text-gray-400">{user.email}</span>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>{user.firstName[0]}</AvatarFallback>
            </Avatar>
          </div>
        </nav>
        <div>calendar make payment</div>
        <div>total earning total spending</div>
      </section>
    </aside>
  );
};

export default RightSide;
