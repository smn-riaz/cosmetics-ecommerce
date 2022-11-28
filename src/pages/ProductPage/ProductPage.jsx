import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { data } from "../../data";
import styles from "../../styles/styles";

const ProductPage = () => {
  const location = useLocation().pathname.split("/");
  const productType = location[location.length - 1];
  const productData = data.filter((product) => product.id === productType)[0];
  const [amount, setAmount] = useState(1);
  const {
    title,
    image,
    description,
    instock,
    category,
    tags,
    price,
    id,
    producttype,
  } = productData;

  return (
    <section className={`sm:px-10 px-6 py-2 w-full`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center md:p-12 space-x-10">
        <div className="md:p-8 my-4 mx-2">
          <img src={image} alt="" />
        </div>

        <div className="flex flex-row justify-end items-center md:p-8 my-4 mx-2">
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className={`${styles.headLine1}`}>Organic Cosmetics</h3>
              <h1 className={`${styles.headLine2}`}>{title}</h1>
              <div className="flex justify-start space-x-3 font-semibold text-gray-500"><h4>#{id}</h4> <h4>#{producttype}</h4></div>
              <p className="border-l-2 border-secondary px-3">
                {description[0]}
              </p>
              <p className={`${styles.detailText1}`}>{description[1]}</p>
            </div>

            <div className="">
              <div className="m-2 space-y-3">
                <p className="text-xl font-semibold font-nunito">
                  <span className="text-secondary">${price}</span>{" "}
                  <sub className="text-gray-600 text-md font-bold">
                    <del> ${price + 4}</del>
                  </sub>
                </p>
                <p className="text-md font-medium font-raleway">
                  CATEGORY: <span className="text-gray-500">{category}</span>
                </p>
                <p className="text-md font-medium font-raleway">
                  TAGS:{" "}
                  {tags.map((tag) => (
                    <button className="text-gray-500 capitalize mx-2 border-black border-[.5px] p-[2px] hover:border-secondary hover:bg-secondary  hover:text-black duration-500">
                      {tag}
                    </button>
                  ))}
                </p>
                <p className="text-md">
                  INSTOCK: <span className="font-medium"> {instock}</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex">
                <button
                  className="cursor-pointer mx-3 bg-white fs-4 fw-bold border-[0.3px] border-black w-[40px] h-[40px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                  onClick={() => {
                    if (amount > 1) {
                      setAmount(amount - 1);
                    }
                  }}
                >
                  <AiOutlineMinus size={18}/>
                </button>
                <button className="bg-secondary w-[40px] h-[40px] font-semibold text-lg rounded-full">
                  {amount}
                </button>
                <button
                   className="cursor-pointer mx-3 bg-white fs-4 fw-bold border-[0.3px] border-black w-[40px] h-[40px] flex justify-center items-center hover:bg-black hover:text-white duration-500 font-bold"
                  onClick={() => {
                    if (amount < instock) {
                      setAmount(amount + 1);
                    }
                  }}
                >
                  <AiOutlinePlus />
                </button>
              </div>
              <div>
                <button className="px-6 w-fit py-3 border-[0.5px] hover:bg-gray-700 font-raleway bg-white hover:text-primary duration-500 border-black uppercase xl:text-4xl xl:px-8 xl:py-6">
                  {" "}
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;