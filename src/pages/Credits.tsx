// @ts-ignore
import image from '../assets/react.svg';

const Credits = () => {
    return(
        <main className={"bg-[#18092E] w-full h-screen flex items-center justify-center gap-5"}>
            <div className={"bg-purple-950 w-80 h-36 rounded-lg"}>
                <ul className={"flex align-baseline"}>
                    <img src={image} alt="user image" className={"h-24 mt-6 flex items-center ml-4"} />
                    <li className={"list-none"}>
                        <h4 className={"text-2xl font-medium mt-5 ml-4 mb-1.5 text-purple-600"}>Tabur</h4>
                        <p className={"ml-4"}>Hi i'm the <span className={"text-purple-600"}>Web Developer</span> of Pine AI</p>
                    </li>
                </ul>
            </div>
            <div className={"bg-purple-950 w-80 h-36 rounded-lg flex"}>
                <ul className={"flex align-baseline"}>
                    <img src={image} alt="user image" className={"h-24 mt-6 flex items-center ml-4"} />
                    <li className={"list-none"}>
                        <h4 className={"text-2xl font-medium mt-5 ml-4 mb-1.5 text-purple-600"}>AlexBartles</h4>
                        <p className={"ml-4"}>Hi i'm the <span className={"text-purple-600"}>Owner </span>and<span className={"text-purple-600"}> developer</span> of Pine AI</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default Credits