// @ts-ignore
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="bg-[#190A2E]] h-16 flex items-center justify-between px-4 md:px-6 lg:px-6 font-montserrat transition ease-in-out duration-300">
            <div className="cursor-pointer font-bold italic text-2xl dark:text-white">
                <img src={logo} alt="logo" />
            </div>
            <ul className="font-medium text-xl sm:flex sm:space-x-6 dark:text-white transition ease-in-out duration-400">
                <li><a href="/#" className="hover:text-purple-500">Home</a></li>
                <li><a href="/#Projects" className="hover:text-purple-500">Support</a></li>
                <li><a href="/#Projects" className="hover:text-purple-500">Features</a></li>
                <li><a href="/credits" className="hover:text-purple-500">Credits</a></li>
            </ul>
        </header>
)
}

export default  Header