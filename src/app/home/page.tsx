"use client";
import Image from "next/image";
import Link from "next/link";
import User from "@/components/common/icons/user";
import React, { useEffect, useState } from "react";
import {
  CATEGORYWISE_ROUTE,
  PRODUCT_ROUTE,
  PRODUCTDETAILS_ROUTE,
  PROFILE_ROUTE,
} from "@/constant/routes";
import { useRouter } from "next/navigation";
import CustomFooter from "@/components/common/customFooter";
import { db } from "@/services/firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore/lite";
// import { getDoc } from "@firebase/firestore";

export default function Home() {
  const navigate = useRouter();
  const [addWishlist, setAddWishlist] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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
  const handleSelectedCategoryProduct = async (id) => {
    console.log("id : ", id);
    // const categoryById = doc(db, "categories", id);
    // try {
    //   const category = await getDoc(categoryById);
    //   console.log("category : ", category.data());
    // } catch (e) {
    //   console.log(e);
    // }

    navigate.push(`${CATEGORYWISE_ROUTE + "/" + id}`);
  };

  const getAllCategories = async () => {
    const queryGetCategories = await getDocs(collection(db, "categories"));
    queryGetCategories.forEach((doc) => {
      let cat = doc.data().name;
      // console.log(doc.id);
      setCategories((prevCat) => [
        ...prevCat,
        { ["catId"]: doc.id, ["name"]: cat },
      ]);
      // setUserEmailPass({ ...userEmailPass, [name]: value });
    });
  };

  const getAllProducts = async () => {
    const queryGetCategories = await getDocs(collection(db, "products"));
    queryGetCategories.forEach((doc) => {
      let prod = doc.data();
      Object.defineProperty(prod, "prId", {
        value: Number(doc.id),
        writable: false,
      });
      setProducts((prevPr) => [...prevPr, prod]);
    });
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

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
            <Link href={PROFILE_ROUTE}>
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
          <div className={"text-sm text-[#8F959E] cursor-pointer"}>
            View All
          </div>
        </div>
        <div className={"flex flex-nowrap overflow-x-scroll"}>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                className={"bg-[#F5F6FA] my-4 mr-4 rounded-xl py-4 px-8"}
                onClick={() => handleSelectedCategoryProduct(category.catId)}
              >
                {category.name}
              </button>
            );
          })}
        </div>
        <div className={"py-4 flex justify-between items-center"}>
          <div className={"text-lg font-bold "}>New Arrival</div>
          <div className={"text-sm text-[#8F959E] cursor-pointer"}>
            View All
          </div>
        </div>
        <div className={"grid grid-cols-2 gap-3"}>
          {products.map((product, index) => {
            return (
              <div onClick={handleSelectedProduct} key={index}>
                <div className={"flex justify-center items-center w-full"}>
                  <div className={"relative"}>
                    <Image
                      src={"/product.png"}
                      width={180}
                      height={80}
                      alt={"No Image"}
                      className={"bg-[#f4f5f8] rounded-2xl"}
                    ></Image>
                    <div className={"absolute top-1 right-1 p-4"}>
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
                <div className={"text-sm font-medium px-1"}>{product.name}</div>
                <div className={"font-bold px-1"}>
                  &#x20b9;&nbsp;{product.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}
