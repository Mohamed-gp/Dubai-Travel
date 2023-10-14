import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar ,faStarHalfStroke} from '@fortawesome/free-solid-svg-icons'

const Rating = ({rating}) => {
  return (
    <>
    {rating >= 1 ? <FontAwesomeIcon icon={faStar} className='text-yellow-400'/> : rating >= .5 ? <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-400'/> :  <FontAwesomeIcon icon={faStar} />}
    {rating >= 2 ? <FontAwesomeIcon icon={faStar} className='text-yellow-400'/> : rating >= 1.5 ? <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-400'/> : <FontAwesomeIcon icon={faStar} />}
    {rating >= 3 ? <FontAwesomeIcon icon={faStar} className='text-yellow-400'/> : rating >= 2.5 ? <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-400'/> : <FontAwesomeIcon icon={faStar} />}
    {rating >= 4 ? <FontAwesomeIcon icon={faStar} className='text-yellow-400'/> : rating >= 3.5 ? <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-400'/> : <FontAwesomeIcon icon={faStar} />}
    {rating >= 5 ? <FontAwesomeIcon icon={faStar} className='text-yellow-400'/> : rating >= 4.5 ? <FontAwesomeIcon icon={faStarHalfStroke} className='text-yellow-400'/> : <FontAwesomeIcon icon={faStar} />}
    </>
  )
}

export default Rating