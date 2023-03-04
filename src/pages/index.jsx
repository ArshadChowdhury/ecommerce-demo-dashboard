import { CgMenu } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import {useState} from "react";
import Link from "next/link";
import {FaHome} from "react-icons/fa";
import {FaInbox} from "react-icons/fa";
import {FaBox} from "react-icons/fa";
import {FaFolder} from "react-icons/fa";
import {FaPeopleArrows} from "react-icons/fa";
import {MdSettings} from "react-icons/md";
import {AiOutlineCaretDown} from "react-icons/ai"

const userName = {
  name: "Arshad",
};

const data = {
  orders : 239,
  sales : 25+" "+791,
  storeViews :59+" "+213,
  productViews : 97+" "+581
}

export function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <nav className="h-20 w-full bg-white shadow p-5">
        <div className="flex mt-1">
          <button onClick={()=> setMenuOpen(!menuOpen)}><CgMenu className="h-8 w-8 cursor-pointer" /></button>         
          <BsSearch className="h-8 w-8 ml-4 cursor-pointer" />
        </div>
            <ul className={`${menuOpen ? "flex items-start border-2 border-gray-200 justify-left absolute left-0 top-20 h-screen w-3/4 px-5 flex-col z-50 bg-white transition delay-150 duration-300 ease-in-out" : "hidden transition delay-150 duration-300 ease-in-out"}`}>
            <li className="my-3 flex items-center justify-center"><FaHome className="h-6 w-6"/><Link className="text-xl hover:text-cyan-500 duration-500 ml-3" href="/">Dashboard</Link></li>
            <li className="my-3 flex items-center justify-center"><FaInbox className="h-6 w-6"/><Link className="text-xl hover:text-cyan-500 duration-500 ml-3" href="/orders">Orders</Link></li>
            <li className="my-3 flex items-center justify-center"><FaBox className="h-6 w-6" /><Link className="text-xl hover:text-cyan-500 duration-500 ml-3" href="/products">Products</Link></li>
            <li className="my-3 flex items-center justify-center"><FaFolder className="h-6 w-6" /><Link className="text-xl hover:text-cyan-500 duration-500 ml-3" href="/categories">Categories</Link></li>
            <li className="my-3 flex items-center justify-center"><FaPeopleArrows className="h-6 w-6" /><Link className="text-xl hover:text-cyan-500 duration-500 ml-3" href="/customers">Customers</Link></li>
            <li className="my-3 flex items-center justify-center"><MdSettings className="h-6 w-6" /><Link className="text-xl hover:text-cyan-500 duration-500 ml-3" href="/settings">Settings</Link></li>
            </ul>       
      </nav>
    </>
  );
}



export default function Home() {
  return (
    <>
      <Nav />
          <section className="-z-10">
        <div className="flex items-center justify-around">
          <p className="text-lg py-10 px-4">
            Welcome <span className="font-bold">{userName.name}</span>👋
          </p>
          <button className="font-semibold bg-white h-14 w-32 rounded-lg shadow-lg relative">
           <span className="mr-4">Today</span><AiOutlineCaretDown className="absolute right-4 top-5" />
          </button>
        </div>
        <div className="grid grid-cols-2">
          <div className="bg-white m-4 p-4 rounded-lg">
            <p className="text-sm">ORDERS</p>
            <p className="font-semibold">{data.orders}</p>
          </div>
          <div className="bg-white m-4 p-4 rounded-lg">
            <p className="text-sm">TOTAL SALES</p>
            <p className="font-semibold">{data.sales} BDT</p>
          </div>
          <div className="bg-white m-4 p-4 rounded-lg">
            <p className="text-sm">STORE VIEWS</p>
            <p className="font-semibold">{data.storeViews}</p>
          </div>
          <div className="bg-white m-4 p-4 rounded-lg">
            <p className="text-sm">PRODUCT VIEWS</p>
            <p className="font-semibold">{data.productViews}</p>
          </div>
        </div>
        <h2 className="font-bold text-2xl pl-4">Recent Orders</h2>
        <div className="bg-white h-96 mt-4"></div>
      </section>
    </>
  );
}
