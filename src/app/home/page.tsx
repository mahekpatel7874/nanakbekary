"use client";
import Image from "next/image";
import Link from "next/link";
import User from "@/components/common/icons/user";
import React, { useState } from "react";
import { PRODUCT_ROUTE, PRODUCTDETAILS_ROUTE } from "@/constant/routes";
import { useRouter } from "next/navigation";
import CustomFooter from "@/components/common/customFooter";

const categories = ["Adidas", "Nike", "Fila", "Puma"];
export default function Home() {
  const navigate = useRouter();
  const [addWishlist, setAddWishlist] = useState(false);
  const handleSearch = (e) => {
    console.log("search : ", e);
  };

  const addToWishlist = (e) => {
    console.log("wishlist");
    setAddWishlist(!addWishlist);
  };

  const handleSelectedProduct = () => {
    navigate.push(PRODUCTDETAILS_ROUTE);
  };
  const handleSelectedCategoryProduct = () => {
    navigate.push(PRODUCT_ROUTE);
  };

  return (
    <div
      className={
        "flex justify-between flex-col items-center overflow-hidden h-screen"
      }
    >
      <div className={"px-4 pt-4 w-full"}>
        <div className={"flex justify-between"}>
          <div>
            <Image
              src={"/NANAKbakery.svg"}
              width={80}
              height={20}
              alt={"No Image"}
            />
            <div className={"text-[#8F959E]"}>Welcome to {"User"}</div>
          </div>
          <div>
            <Link href={"/login"}>
              <button
                className={
                  "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                }
              >
                <User />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={"p-4 w-full overflow-y-scroll"}>
        <div className={"pb-4"}>
          <input
            type={"text"}
            placeholder={"Search"}
            className={
              "!bg-transparent border-2 !border-[#E7E8EA] h-[55px] w-full p-2.5 outline-0 !autofill:bg-primary rounded-xl"
            }
            name={"search"}
            // value={""}
            onChange={handleSearch}
          />
        </div>
        <div className={"flex justify-between items-center"}>
          <div className={"text-lg font-bold "}>Category</div>
          <div className={"text-sm text-[#8F959E]"}>View All</div>
        </div>
        <div className={"flex flex-nowrap overflow-x-scroll"}>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={"bg-[#F5F6FA] my-4 mr-4 rounded-xl py-4 px-8"}
                onClick={handleSelectedCategoryProduct}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className={"py-4 flex justify-between items-center"}>
          <div className={"text-lg font-bold "}>New Arrival</div>
          <div className={"text-sm text-[#8F959E]"}>View All</div>
        </div>
        <div className={"grid grid-cols-2 gap-3"}>
          <div onClick={handleSelectedProduct}>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={addWishlist ? "/HeartRed.svg" : "/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}
