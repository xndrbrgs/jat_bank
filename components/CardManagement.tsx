import { CirclePlus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BankCard from "./BankCard";

const CardManagement = ({ banks }: BankProps) => {
  return (
    <section className="w-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg">Card Management</h1>
        <div className="flex space-x-2 text-gray-400 hover:text-gray-200 transition duration-150 cursor-pointer">
          <span>
            <CirclePlus className="size-5" />
          </span>
          <span className="text-sm">Add Card</span>
        </div>
      </div>
      <div className="mt-6 w-full md:w-[60%]">
        <Carousel className="w-full">
          <CarouselContent>
            {banks.map((bank) => (
              <CarouselItem key={bank.id}>
                <BankCard
                  key={bank.$id}
                  officialName={bank?.officialName}
                  account={bank?.name}
                  mask={bank?.mask}
                  balance={bank?.currentBalance}
                  userName={`${bank.userId}`}
                  showBalance={false}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </div>
      <div></div>
    </section>
  );
};

export default CardManagement;
