import React from "react";
import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../App";
import profile from '../../assets/profile.png'
import styles from "../../styles/styles";
import { FaShippingFast } from "react-icons/fa";

const ProfilePage = () => {
  const {user} = useContext(ProductsContext)
  const {name, email, order, role, city, houseNum, zip, phone} = user
  const cart = useSelector(state => state.cart.items)

  return (
    <main className={`${styles.paddingX} ${styles.paddingY} w-full`}>
      <section className="flex justify-around">
        <div className="border-2 p-4 space-y-4 h-fit">
          <div className="flex justify-center">
            <img src={profile} alt="" className="h-[100px]"/>
          </div>
          <h3 className="text-center font-nunito font-semibold text-2xl"><span className="capitalize">{name[0][0]}</span>. <span className="capitalize">{name[1]}</span></h3>
          <div className="font-nunito font-medium text-lg space-y-3 text-center">
              <p>{email}</p>
            <button className="text-md text-gray-500 border-[1px] p-1 rounded-3xl border-gray-400">{role}</button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-center font-nunito font-semibold text-2xl">Cart Summary</h3>
          
            {cart.length>0? 
            <div className="">
              {(cart).map(c => <div className="flex justify-between items-center my-2 bg-secondaryLight space-x-2 rounded-lg border-[1px] border-secondary">
                <div className="flex justify-start items-center">
                  <div>
                    <img src={c.image} alt="" className="h-[80px] w-[80px] rounded-l-lg"/>
                  </div>
                  <div className="font-nunito text-md font-semibold p-2">
                    <h3>{c.title}</h3>
                  </div>
                </div>
               <div className="flex justify-center items-center">
                <div className="font-nunito text-md text-center font-semibold p-2">
                    <h3 className="bg-white h-[25px] w-[25px] rounded-full border-[0.5px] border-secondary">{c.quantity}</h3>
                  </div>
                  <div className="font-nunito text-md font-semibold p-2">
                  <h3>${c.totalPrice}</h3>
                  </div>
               </div>
              </div>)}
              <div className="flex justify-around items-center mt-4">
                <Link to="/cart">
                  <button className="cursor-pointer p-2 w-fit border-[0.5px] bg-gray-700 font-nunito hover:bg-white text-primary hover:text-black duration-500 border-black xl:text-2xl flex">
                    <BsCart4  size={20}/><span className="ml-1">Cart Details</span>
                  </button>
                </Link>
                <Link to="/checkout">
                  <button className="cursor-pointer p-2 w-fit border-[0.5px] bg-gray-700 font-nunito hover:bg-white text-primary hover:text-black duration-500 border-black xl:text-2xl flex">
                    <FaShippingFast size={20}/><span className="ml-1">Checkout</span>
                  </button>
                </Link>
              </div>
            </div> 
            
            : 
            <div>
              <h5 className="text-center font-nunito text-xl">No items in Cart</h5>  
            </div>}
       
        </div>

        <div className="space-y-4">
          <h3 className="text-center font-nunito font-semibold text-2xl">Order History</h3>
          
            {order.length>0? 
            <div></div> 
            : 
            <div>
              <h5 className="text-center font-nunito text-xl">Any order hasn't been placed yet</h5>  
            </div>}
       
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;