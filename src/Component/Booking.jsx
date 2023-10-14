
const Booking = () => {
  return (
    <>
    <div className="my-8 relative dubai-waiting-bg flex justify-center items-center h-56">
        <div className="absolute w-full h-full bg-[#000000ab]"></div>
        <p className="text-white font-bold text-3xl relative">DUBAI IS WAITING FOR YOU</p>
    </div>
    <div className="flex items-center flex-col lg:flex-row bg-[#d1f6e2] my-32">
        <div className="w-10/12 lg:w-1/2">
            <img src="/public/assests/newsletterimage.jpg" alt="newsletterimage" />
        </div>
        <div className="w-10/12 lg:w-1/2 h-96 lg:h-56 flex-col gap-5 flex justify-center bg-[#d1f6e2] text-center px-4">
            <p className="font-bold text-3xl">Your Dubai itinerary is waiting.</p>
            <p className="font-bold text-base text-gray-500">Recieve a curated 48-hour itinerary featuring the most iconic experience in Dubai, straight to your inbox.</p>
            <input type="text" placeholder="Your Email" className="py-5 pl-2 rounded-lg border-2 border-gray-600"/>
            <p className="w-fit mx-auto rounded-lg px-4 cursor-pointer py-1 text-white bg-[#0000ff]">Sign Up</p>
        </div>
    </div>
    </>
  )
}

export default Booking

