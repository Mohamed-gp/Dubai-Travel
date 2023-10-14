import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Rating from "./rating";

const Tours = ({toursList,toursListlenght,toursListunedited}) => {
    
  return (
    <>
    
      <div className="my-9 flex flex-wrap justify-center gap-3">
        {toursList.map((e, i) => {
             
            return(i < 6 ? <>
                <div className="w-10/12 overflow-hidden rounded-lg bg-white md:w-1/2 lg:w-3/12 hover:shadow-xl border-black " key={e.id}>
                <div className="img relative w-full">
                <img src={e.image} alt="image" className="w-full h-52" />
                <p className="absolute -bottom-4 left-3 z-10 flex h-8 w-fit items-center justify-center rounded-lg bg-[#020232] px-3 py-1 text-sm font-bold  text-white">
                    ADVENTURE
                </p>
                </div>
                <div className="px-2">
                <p className="h-12  mt-6 flex font-bold ">
                    {e.title}
                </p>
                <p className="mb-2 flex items-center gap-3 font-semibold">
                    {e.duration}
                    <p className="flexc h-1 w-1 items-center justify-center rounded-full bg-black"></p>{" "}
                    Pickup available
                </p>
                <div className="mb-2 flex items-center">
                    <Rating rating={e.rating}/>
                    <p className="ml-2 flex items-center gap-2">
                    {e.rating} <span className="text-[#808080]">({e.reviews} reviews)</span>
                    </p>
                </div>
                <p className="text-[#808080]">
                    <span className="font-bold text-[#ff0000]">From ${e.priceFrom}</span>{" "}
                    per person
                </p>
                <NavLink
                    to={e.id}
                    className="my-4 block w-full rounded-lg bg-[#0000ff] py-3 text-center font-bold text-white"
                    >
                    See More
                </NavLink>
                </div>
            </div>
            </>: <></>)
            
        })}
        </div>
    </>
  );
};

export default Tours;
