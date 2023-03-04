import React from "react";
import { Nav } from "../index";
import { BsPlusSquare } from "react-icons/bs";

const data = [
  {
    name: "Sprint Athlete",
    brandName: "BATA",
    price : "2732 BDT",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Apex 2023",
    brandName: "APEX",
    price : "2732 BDT",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Adidas p90",
    brandName: "ADIDAS",
    price : "1232 BDT",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Sreeleathers Athel",
    brandName: "Sreeleathers",
    price : "569 BDT",
    src: "https://picsum.photos/100/100",
  },
  {
    name: "Nike Dunk Low Retro",
    brandName: "NIKE",
    price : "7311 BDT",
    src: "https://picsum.photos/100/100",
  },
];

const index = () => {
  return (
    <>
      <Nav />
      <div className="flex w-screen justify-between">
        <h1 className="p-4 text-2xl font-bold">My Products</h1>{" "}
        <button className="mr-6 border-black">
          <BsPlusSquare className="h-8 w-8 bg-white" />
        </button>
      </div>
      {data.map((singleData, key) => {
        return(
        <div key={key}>
          <div className="flex mt-10 gap-0" >
            <img
              src={singleData.src}
              className="mx-7 rounded-lg shadow-xl border-solid border-2 border-gray-500"
              alt="Customer Pic"
            />
            <div className="text-sm flex flex-col">
              <p className="font-semibold">{singleData.name}</p>
              <p>{singleData.brandName}</p>
              <p>{singleData.moneyAndItemCounts}</p>
            </div>
            <button className="p-1 rounded-xl bg-white w-20 h-10 mr-4 absolute right-1 shadow-2xl border-solid border-2 border-gray-500 mt-6 font-semibold">
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