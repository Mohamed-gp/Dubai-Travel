import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faInfo , faUserAlt , faUserPlus ,faSearch } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  return (
    <>
    <div className="hero-content relative ">
        <div className="container py-6 relative px-2">
            <FontAwesomeIcon icon={faSearch} className="text-lg fa-fw absolute top-1/2 -translate-y-1/2 z-10 left-5" />
            <input type="text" placeholder="What Are You Looking For" className="w-full py-4 rounded-3xl pl-10 focus:outline-none relative"/>
            <p className='px-3 py-1 bg-blue-500 cursor-pointer font-bold text-white absolute top-1/2 rounded-lg  -translate-y-1/2 z-10 right-5'>Search</p>
        </div>
        <div className="description-hero absolute bottom-14 left-14 font-bold text-white text-7xl leading-snug">
            <p>Dubai</p>
            <p>Desert Safaris</p>
        </div>
    </div>
    </>
  )
}

export default Hero