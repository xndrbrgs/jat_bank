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
        <h1>Card Management</h1>
        <div className="flex space-x-2 text-gray-400 hover:text-gray-200 transition duration-150 cursor-pointer">
          <span>
            <CirclePlus />
          </span>
          <span>Add Card</span>
        </div>
      </div>
      <div className="mt-6 w-full md:w-[40%]">
        <Carousel className="w-full">
          <CarouselContent>
            {banks.map((bank, i) => (
              <CarouselItem key={i}>
                <BankCard
                  key={bank.$id}
                  account={bank?.currentBalance}
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
