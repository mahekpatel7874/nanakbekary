"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import User from "@/components/common/icons/user";
import Back from "@/components/common/icons/back";
import { HOME_ROUTE, PRODUCTDETAILS_ROUTE } from "@/constant/routes";
import { useRouter } from "next/navigation";
import {
  collection,
  doc,
  getDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore/lite";
import { db } from "@/services/firebase";
// import { onSnapshot } from "@firebase/firestore";

export default function Product({ categoryId }) {
  const navigate = useRouter();
  const [categoryName, setCategoryName] = useState("");
  const [product, setProduct] = useState([]);
  const handleSelectedProduct = (prId) => {
    console.log("prId : ", prId);
    // navigate.push(PRODUCTDETAILS_ROUTE);
  };

  const getProductByCategoryId = async () => {
    const categoryById = doc(db, "categories", categoryId);
    try {
      const category = await getDoc(categoryById);
      let title: object = category.data();
      setCategoryName(title.name);

      const products = query(
        collection(db, "products"),
        where("category", "==", Number(categoryId)),
      );

      const queryProducts = await getDocs(products);
      queryProducts.forEach((doc) => {
        let prod = doc.data();
        console.log("prod : ", prod);
        Object.defineProperty(prod, "prId", {
          value: Number(doc.id),
          writable: false,
        });
        setProduct((prevPr) => [...prevPr, prod]);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProductByCategoryId();
  }, []);

  return (
    <div className={"flex justify-between flex-col h-screen"}>
      <div className={"px-4 py-4 w-full flex justify-between items-center"}>
        <Link
          href={HOME_ROUTE}
          className={
            "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
          }
        >
          <Back />
        </Link>
        <div className={"font-bold text-2xl"}>{categoryName}</div>
        <Link href={"#"}>
          <button
            className={
              "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
            }
          >
            <User />
          </button>
        </Link>
      </div>
      <div className={"p-4 overflow-y-scroll"}>
        <div>
          <div className={"text-lg font-bold "}>365 Items</div>
          <div className={"text-sm text-[#8F959E]"}>Available in stock</div>
        </div>
        <div className={"pt-4 grid grid-cols-2 gap-3"}>
          {product.map((product, index) => {
            return (
              <div
                onClick={() => handleSelectedProduct(product.prId)}
                key={index + 1}
              >
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
                <div className={"text-sm font-medium px-1"}>{product.name}</div>
                <div className={"font-bold px-1"}>
                  &#x20b9;&nbsp;{product.price}
                </div>
              </div>
            );
          })}

          {/*<div>*/}
          {/*  <div className={"flex justify-center items-center w-full"}>*/}
          {/*    <div className={"relative"}>*/}
          {/*      <Image*/}
          {/*        src={"/product.png"}*/}
          {/*        width={180}*/}
          {/*        height={80}*/}
          {/*        alt={"No Image"}*/}
          {/*        className={"bg-[#f4f5f8] rounded-2xl"}*/}
          {/*      ></Image>*/}
          {/*      <div className={"absolute top-4 right-4"}>*/}
          {/*        <Image*/}
          {/*          src={"/Heart.svg"}*/}
          {/*          alt={"No Image"}*/}
          {/*          width={20}*/}
          {/*          height={20}*/}
          {/*          // onClick={addToWishlist}*/}
          {/*        ></Image>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={"text-sm font-medium px-1"}>*/}
          {/*    Nike Sportswear Club Fleece*/}
          {/*  </div>*/}
          {/*  <div className={"font-bold px-1"}>$99</div>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <div className={"flex justify-center items-center w-full"}>*/}
          {/*    <div className={"relative"}>*/}
          {/*      <Image*/}
          {/*        src={"/product.png"}*/}
          {/*        width={180}*/}
          {/*        height={80}*/}
          {/*        alt={"No Image"}*/}
          {/*        className={"bg-[#f4f5f8] rounded-2xl"}*/}
          {/*      ></Image>*/}
          {/*      <div className={"absolute top-4 right-4"}>*/}
          {/*        <Image*/}
          {/*          src={"/Heart.svg"}*/}
          {/*          alt={"No Image"}*/}
          {/*          width={20}*/}
          {/*          height={20}*/}
          {/*          // onClick={addToWishlist}*/}
          {/*        ></Image>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={"text-sm font-medium px-1"}>*/}
          {/*    Nike Sportswear Club Fleece*/}
          {/*  </div>*/}
          {/*  <div className={"font-bold px-1"}>$99</div>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <div className={"flex justify-center items-center w-full"}>*/}
          {/*    <div className={"relative"}>*/}
          {/*      <Image*/}
          {/*        src={"/product.png"}*/}
          {/*        width={180}*/}
          {/*        height={80}*/}
          {/*        alt={"No Image"}*/}
          {/*        className={"bg-[#f4f5f8] rounded-2xl"}*/}
          {/*      ></Image>*/}
          {/*      <div className={"absolute top-4 right-4"}>*/}
          {/*        <Image*/}
          {/*          src={"/Heart.svg"}*/}
          {/*          alt={"No Image"}*/}
          {/*          width={20}*/}
          {/*          height={20}*/}
          {/*          // onClick={addToWishlist}*/}
          {/*        ></Image>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={"text-sm font-medium px-1"}>*/}
          {/*    Nike Sportswear Club Fleece*/}
          {/*  </div>*/}
          {/*  <div className={"font-bold px-1"}>$99</div>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <div className={"flex justify-center items-center w-full"}>*/}
          {/*    <div className={"relative"}>*/}
          {/*      <Image*/}
          {/*        src={"/product.png"}*/}
          {/*        width={180}*/}
          {/*        height={80}*/}
          {/*        alt={"No Image"}*/}
          {/*        className={"bg-[#f4f5f8] rounded-2xl"}*/}
          {/*      ></Image>*/}
          {/*      <div className={"absolute top-4 right-4"}>*/}
          {/*        <Image*/}
          {/*          src={"/Heart.svg"}*/}
          {/*          alt={"No Image"}*/}
          {/*          width={20}*/}
          {/*          height={20}*/}
          {/*          // onClick={addToWishlist}*/}
          {/*        ></Image>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={"text-sm font-medium px-1"}>*/}
          {/*    Nike Sportswear Club Fleece*/}
          {/*  </div>*/}
          {/*  <div className={"font-bold px-1"}>$99</div>*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <div className={"flex justify-center items-center w-full"}>*/}
          {/*    <div className={"relative"}>*/}
          {/*      <Image*/}
          {/*        src={"/product.png"}*/}
          {/*        width={180}*/}
          {/*        height={80}*/}
          {/*        alt={"No Image"}*/}
          {/*        className={"bg-[#f4f5f8] rounded-2xl"}*/}
          {/*      ></Image>*/}
          {/*      <div className={"absolute top-4 right-4"}>*/}
          {/*        <Image*/}
          {/*          src={"/Heart.svg"}*/}
          {/*          alt={"No Image"}*/}
          {/*          width={20}*/}
          {/*          height={20}*/}
          {/*          // onClick={addToWishlist}*/}
          {/*        ></Image>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  <div className={"text-sm font-medium px-1"}>*/}
          {/*    Nike Sportswear Club Fleece*/}
          {/*  </div>*/}
          {/*  <div className={"font-bold px-1"}>$99</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
