import FigmaLogo from "../assets/img/technologies/Figma-Logo.png";
import TailwindLogo from "../assets/img/technologies/tailwind-logo.png";
import ReactLogo from "../assets/img/technologies/React-Logo.png";
import ViteLogo from "../assets/img/technologies/Vite-Logo.png";
import DjangoLogo from "../assets/img/technologies/Django-Logo.png";

const Technologies = () => {
    return (
        <main className={"w-full h-screen font-montserrat list-none"}>
            <ul className={"ml-11"}>
                <li className={"font-semibold text-[32px]"}>Current Technologies</li>
                <li className={"font-light text-[14px]"}>I'm proficient in a range of modern technologies <br/>
                    These are some of my main  technologies.</li>
            </ul>
            <div className={"flex flex-wrap"}>
            <div className={"flex align-middle bg-[#18092E] h-24 w-72 rounded-lg ml-11 mt-5"}>
                <img src={FigmaLogo} alt="figma logo" className={"mt-2.5 ml-6 h-[73px] "} />
                <li>
                    <h4 className={"mt-3 ml-6 font-semibold text-2xl"}>Figma</h4>
                    <p className={"ml-6 font-light text-[17px]"}>Design Tool</p>
                </li>
            </div>
            <div className={"flex align-middle bg-[#18092E] h-24 w-72 rounded-lg ml-11 mt-5"}>
                <img src={TailwindLogo} alt="tailwind logo" className="mt-2.5 ml-6 h-[73px]" />
                <li>
                    <h4 className={"mt-2.5 ml-6 font-semibold text-2xl"}>Tailwind</h4>
                    <p className={"ml-6 font-light text-[17px]"}>CSS Framework</p>
                </li>
            </div>
            <div className={"flex align-middle bg-[#18092E] h-24 w-72 rounded-lg ml-11 mt-5"}>
                <img src={ReactLogo} alt="tailwind logo" className={"mt-2.5 ml-6 h-[73px] "} />
                <li>
                    <h4 className={"mt-2.5 ml-6 font-semibold text-2xl"}>React </h4>
                    <p className={"ml-6 font-light text-[17px]"}>JavaScript Library</p>
                </li>
            </div>
            <div className={"flex align-middle bg-[#18092E] h-24 w-72 rounded-lg ml-11 mt-5"}>
                <img src={ViteLogo} alt="tailwind logo" className={"mt-2.5 rounded-md ml-6 h-[73px] "} />
                <li>
                    <h4 className={"mt-2.5 ml-6 font-semibold text-2xl"}>Vite</h4>
                    <p className={"ml-6 font-light text-[17px]"}>React Framework</p>
                </li>
            </div>
            <div className={"flex align-middle bg-[#18092E] h-24 w-72 rounded-lg ml-11 mt-5"}>
                <img src={DjangoLogo} alt="tailwind logo" className={"mt-2.5 rounded-md ml-6 h-[73px] "} />
                <li>
                    <h4 className={"mt-2.5 ml-6 font-semibold text-2xl"}>Django</h4>
                    <p className={"ml-6 font-light text-[17px]"}>Backend tool</p>
                </li>
            </div>
            </div>
        </main>
    )
}

export default Technologies