import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage , faUserFriends , faCity, faGlobe} from '@fortawesome/free-solid-svg-icons'

const Traveltype = () => {
  return (
    <>
        <div className="container px-2 flex justify-evenly my-6 sm:flex-row flex-col gap-y-3">
            <div className='flex gap-2 px-2  bg-blue-500 sm:w-auto w-full rounded-2xl py-2 text-white justify-center items-center'>
                <FontAwesomeIcon icon={faImage} className="text-lg fa-fw" />
                <p>Adventures</p>
            </div>
            <div className='flex gap-2 px-2  bg-blue-500 sm:w-auto w-full rounded-2xl py-2 text-white justify-center items-center'>
                <FontAwesomeIcon icon={faGlobe} className="text-lg fa-fw" />
                <p>Multy-day trips</p>
            </div>
            <div className='flex gap-2 px-2  bg-blue-500 sm:w-auto w-full rounded-2xl py-2 text-white justify-center items-center'>
                <FontAwesomeIcon icon={faCity} className="text-lg fa-fw" />
                <p>City cards</p>
            </div>
            <div className='flex gap-2 px-2  bg-blue-500 items-center sm:w-auto w-full rounded-2xl py-2 text-white justify-center items-center'>
                <FontAwesomeIcon icon={faUserFriends} className="text-lg fa-fw" />
                <p>Family tours</p>
            </div>

        </div>
    </>
  )
}

export default Traveltype