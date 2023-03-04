import React from "react";
import { Nav } from "../index";
import { BsPlusSquare } from "react-icons/bs";

const data = [
  {
    name: "Lionel Messi",
    orders: "7 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Sunny Batra",
    orders: "4 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Ras Putin",
    orders: "4 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Ash Alam",
    orders: "9 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Hero Alam",
    orders: "10 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Lionel Messi",
    orders: "7 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Sunny Batra",
    orders: "4 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Ras Putin",
    orders: "4 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Ash Alam",
    orders: "9 ORDERS",
    src: "https://picsum.photos/50/50",
  },
  {
    name: "Hero Alam",
    orders: "10 ORDERS",
    src: "https://picsum.photos/50/50",
  }
];

const index = () => {
  return (
    <>
      <Nav />
      <div className="flex w-screen justify-between">
        <h1 className="p-4 text-2xl font-bold">My Customers</h1>{" "}
        <button className="mr-6 border-black">
          <BsPlusSquare className="h-8 w-8 bg-white" />
        </button>
      </div>
      {data.map((singleData, key) => {
        return(
        <div key={key}>
          <div className="flex mt-10 gap-2" >
            <img
              src={singleData.src}
              className="mx-7 rounded-full"
              alt="Customer Pic"
            />
            <div className="text-base flex flex-col">
              <p className="font-semibold">{singleData.name}</p>
              <p>{singleData.orders}</p>
            </div>
            <button className="p-1 rounded-xl bg-white w-20 h-10 mr-4 absolute right-1 shadow-2xl border-solid border-2 border-gray-500 font-semibold">
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
