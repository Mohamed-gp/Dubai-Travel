import { useState } from "react"
const Sorting = ({toursListlenght,setsort}) => {

    
  return (
    
    <>
        <div className="flex justify-between container">
        <p className="text-gray-400 text-xl px-24 font-bold">{toursListlenght} tours found </p>
        <select name="" id="" onChange={(e) => {setsort(e.currentTarget.value)}}>
            <option value="recomended">Recomended</option>
            <option value="htl">Price High To Low</option>
            <option value="lth"  >Price Low To High</option>
        </select>
    </div>
    </>
  )
}

export default Sorting