import { compileString } from "sass"

const Pagination = ({pagesNumber,currentPage,setcurrentPage}) => {
    const emptyArray = []
    for (let i = 1; i <= pagesNumber; i++) {
        emptyArray.push(i)
    }

    
  return (
    <>
        <div className="flex justify-center text-white">
            <button disabled={currentPage == 1} className="px-5 py-2 bg-gray-700 rounded-l-lg border-black border" onClick={() => {setcurrentPage(currentPage - 1)}}>Precedent</button>
            {
                emptyArray.map(e => {
                    return(
                        <button className={`serbas px-5  py-2 border-black border bg-gray-700 ${e == currentPage ? "activepage" : ""}`}  onClick={() => {setcurrentPage(e)}}>{e}</button>
                    )
                })
            }
            <button disabled={currentPage == 4} className="px-5 py-2 bg-gray-700 rounded-r-lg border-black border" onClick={() => {setcurrentPage(currentPage + 1)}}>Next</button>
        </div>
    </>
  )
}

export default Pagination