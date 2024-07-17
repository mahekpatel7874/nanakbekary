import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  CART_ROUTE,
  HOME_ROUTE,
  ORDERLIST_ROUTE,
  WISHLIST_ROUTE,
} from "@/constant/routes";

export default function CustomFooter() {
  return (
    <div
      className={
        "w-full flex justify-between items-center h-[70px] bg-[#fff] py-4 px-14"
      }
    >
      <div>
        <Link href={HOME_ROUTE}>
          <Image src={"/Home.svg"} width={20} height={20} alt={"No Image"} />
        </Link>
      </div>
      <div>
        <Link href={WISHLIST_ROUTE}>
          <Image src={"/Heart.svg"} width={20} height={20} alt={"No Image"} />
        </Link>
      </div>
      <div>
        <Link href={CART_ROUTE}>
          <Image src={"/Cart.svg"} width={20} height={20} alt={"No Image"} />
        </Link>
      </div>
      <div>
        <Link href={ORDERLIST_ROUTE}>
          <Image src={"/Orders.svg"} width={20} height={20} alt={"No Image"} />
        </Link>
      </div>
    </div>
  );
}
