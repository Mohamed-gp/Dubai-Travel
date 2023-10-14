import { NavLink } from "react-router-dom"

const Footer = ({languages,currencies}) => {
  return (
    <footer className="bg-[#1a2b49] text-white py-12">
        <div className="flex justify-between container px-4 gap-3 flex-wrap">
            <div className="flex flex-col gap-2 w-5/12 lg:w-2/12">
                <label htmlFor="languages" className="text-2xl font-bold">Language</label>
                <select name="" id="languages" className="text-black">
                    {languages.map((e) => {
                        return(
                            <option value={e.value}>{e.value}</option>
                        )
                    })}
                </select>
                <label htmlFor="currency" className="text-2xl font-bold">Currency</label>
                <select name="" id="currency" className="text-black">
                    {currencies.map((e) => {
                        return(
                            <option value={e.value}>{e.value}</option>
                        )
                    })}
                </select>
            </div>
            <div className="flex flex-col gap-2 w-5/12 lg:w-2/12">
                <p className="font-bold">Support</p>
                <div className="flex flex-col pl-2">
                    <NavLink to="">Contact</NavLink>
                    <NavLink to="">Legal Notice</NavLink>
                    <NavLink to="">Privacy Policy</NavLink>
                    <NavLink to="">General Terms</NavLink>
                    <NavLink to="">Sitemap</NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-5/12 lg:w-2/12">
                <p className="font-bold">Support</p>
                <div className="flex flex-col pl-2">
                    <NavLink to="">Contact</NavLink>
                    <NavLink to="">Legal Notice</NavLink>
                    <NavLink to="">Privacy Policy</NavLink>
                    <NavLink to="">General Terms</NavLink>
                    <NavLink to="">Sitemap</NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-2 w-5/12 lg:w-2/12">
                <p className="font-bold">Support</p>
                <div className="flex flex-col pl-2">
                    <NavLink to="">Contact</NavLink>
                    <NavLink to="">Legal Notice</NavLink>
                    <NavLink to="">Privacy Policy</NavLink>
                    <NavLink to="">General Terms</NavLink>
                    <NavLink to="">Sitemap</NavLink>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer