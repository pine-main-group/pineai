import locationIcon from '../assets/img/location.png'
import calendarIcon from '../assets/img/calendar.png'
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <main className={"flex pt-48 justify-center w-full h-screen font-montserrat"}>
            <ul className={"bg-[#190A2E] h-64 w-96 rounded-xl"}>
                <h3 className={"text-purple-600 font-bold text-[32px] pl-20 pt-5"}>Ahmad Ateeb</h3>
                <h6 className={"font-medium text-[15px] pl-20"}>FrontEnd Developer</h6>
                <p className={"text-xs pl-20"}>upcoming</p>
                <h6 className={"font-medium text-[15px] pl-20 line-through"}>FullStack Developer</h6>
                <ul className={"ml-5 h-fit"}>
                    <li className={"flex align-baseline font-medium text-[15px]"}><img src={locationIcon} alt="location icon" className={"w-[32.29px] h-9 ml-14"} /> <li className={'pt-1.5'}>Pakistan, Punjab</li></li>
                    <li className={"flex align-baseline font-medium text-[15px] mt-1 mb-7"}><img src={calendarIcon} alt="location icon" className={"w-6 h-6 ml-15"} /> <li className={'pl-1 font-medium'}>11 years old</li></li>
                </ul>
                <Link to={"/about"} className="font-normal text-[16px] ml-8 text-purple-700 hover:underline hover:text-purple-600 transition ease-in-out duration-300">
                    learn more about me
                </Link>
            </ul>
        </main>

    )
}

export default Hero