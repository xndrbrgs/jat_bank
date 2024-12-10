const RightSide = ({ user, transactions }: BankProps) => {
  return (
    <aside
      className="hidden no-scrollbar flex-col border-l border-gray-800 xl:flex 
    min-w-[40%] max-h-screen h-full"
    >
      <section className="m-8 flex flex-col">
        <div>calendar make payment</div>
        <div>total earning total spending</div>
      </section>
    </aside>
  );
};

export default RightSide;
