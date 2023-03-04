import React from "react";
import { Nav } from "../index";
import { BsPlusSquare } from "react-icons/bs";

const data = [
  {
    name: "Lionel Messi",
    timeOfOrder: "1 WEEK AGO",
    moneyAndItemCounts : "2732 BDT ⸱ 7 ITEMS",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Sunny Batra",
    timeOfOrder: "2 MONTHS AGO",
    moneyAndItemCounts : "2732 BDT ⸱ 7 ITEMS",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Ras Putin",
    timeOfOrder: "2 MONTHS AGO",
    moneyAndItemCounts : "1232 BDT ⸱ 4 ITEMS",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Ash Alam",
    timeOfOrder: "3 MONTHS AGO",
    moneyAndItemCounts : "569 BDT ⸱ 4 ITEMS",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Hero Alam",
    timeOfOrder: "2 MONTHS AGO",
    moneyAndItemCounts : "7311 BDT ⸱ 9 ITEMS",
    src: "https://picsum.photos/100/100",
  },
];

const index = () => {
  return (
    <>
      <Nav />
      <div className="flex w-screen justify-between">
        <h1 className="p-4 text-2xl font-bold">My Orders</h1>{" "}
        <button className="mr-6 border-black">
          <BsPlusSquare className="h-8 w-8 bg-white" />
        </button>
      </div>
      {data.map((singleData, key) => {
        return(
        <div key={key}>
          <div className="flex mt-10 gap-1" >
            <img
              src={singleData.src}
              className="mx-7 rounded-full"
              alt="Customer Pic"
            />
            <div className="text-sm flex flex-col">
              <p className="font-semibold">{singleData.name}</p>
              <p>{singleData.timeOfOrder}</p>
              <p>{singleData.moneyAndItemCounts}</p>
            </div>
            <button className="p-1 rounded-xl bg-white w-20 h-10 mr-4 absolute right-1 shadow-2xl border-solid border-2 border-gray-500 mt-5 font-semibold">
            View
          </button>
          </div>
          <hr className="h-px mt-8 w-3/4 mx-auto bg-gray-400 border-0 dark:bg-gray-700" />
        </div>
       
        )
      })}
    </>
  );
};

export default index;
