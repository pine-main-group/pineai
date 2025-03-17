import image from '../assets/img/portfolio/portfolio-image.png'

const Projects = () => {
    return (
    <main className={"flex align-baseline font-montserrat"}>
        <ul className={"ml-28"}>
            <li className={"font-semibold text-4xl"}>Portfolio</li>
            <li className={"font-medium text-2xl mb-2"}>Description</li>
            <li className="font-light mt-1 w-72">
                Design using <span className="text-purple-600 font-medium">Figma</span>. Developed a nice-looking portfolio page built using <span className="text-purple-600 font-medium">React</span> with <span className="text-purple-600 font-medium">Vite</span>, with <span className="text-purple-600 font-medium">Tailwind</span>.
            </li>
        </ul>
        <ul className={"flex justify-center w-screen"}>
            <li className={"border-2 border-[#18092E]"}><img src={image} alt="" className={"h-60"} /></li>
        </ul>
    </main>
)
}

export default Projects