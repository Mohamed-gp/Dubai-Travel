import { useState } from "react";
import Booking from "../Component/Booking";
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import Tours from "../Component/Tours";
import Traveltype from "../Component/Traveltype";
import { toursList, languages, currencies } from "../data";
import Pagination from "../Component/Pagination";
import Sorting from "../Component/sorting";


const Home = () => {
  const [currentPage,setcurrentPage] = useState(1)
  const cardsPerPage = 6
  const pagesNumber = Math.ceil(toursList.length / cardsPerPage)
  const startIndex = cardsPerPage * (currentPage -  1)
  const endIndex = cardsPerPage * (currentPage)


  const [sort,setsort] = useState("recomended")
    if (sort == "recomended") {
        toursList.sort((a,b) => {
            return (b.rating - a.rating)
        })
    }
    else if (sort == "htl") {
        toursList.sort((a,b) => {
            return (b.priceFrom - a.priceFrom)
        })

    }
    else{
        toursList.sort((a,b) => {
            return (a.priceFrom - b.priceFrom )
        })
    }

  const pureCards = toursList.slice(startIndex,endIndex)
  return (
    <>
      <Hero />
      <Traveltype />
      <Sorting toursListlenght={toursList.length} setsort={setsort}/>
      <Tours toursList={pureCards} toursListlenght={toursList.length} />
      <Pagination pagesNumber={pagesNumber} currentPage={currentPage} setcurrentPage={setcurrentPage}/>
      <Booking />
      <Footer languages={languages} currencies={currencies}/>
    </>
  );
};

export default Home;
