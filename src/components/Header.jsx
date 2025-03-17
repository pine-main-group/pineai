import github from '../assets/img/github_logo.png';
import "../App.css";


const Header = () => {
    return (
        <header className="border-b-2 h-16 dark:border-gray-900 dark:bg-[#190A2E] flex items-center justify-between px-4 md:px-6 lg:px-6 font-montserrat transition ease-in-out duration-300">
            <div className="cursor-pointer font-bold italic text-2xl text-white">
                <a href="/#Hero" className={"hover:text-purple-600"}>Ahmad Ateeb</a>
            </div>
            <ul className="font-medium text-[20px] sm:flex sm:space-x-6 text-white">
                <li><a href="/#" className="hover:text-gray-300 active:text-purple-600">
                    {/*<FontAwesomeIcon icon={faHouse} />*/}
                    Home</a></li>
                <li><a href="/#Projects" className="hover:text-gray-300 active:text-purple-600">Projects</a></li>
                <li><a href="/About" className="hover:text-gray-300 active:text-purple-600">About me</a></li>
                <li><a href="/#Contact" className="hover:text-gray-300 active:text-purple-600">Contact</a></li>
                <li><a href="/#Technologies" className="hover:text-gray-300 active:text-purple-600">Tools</a></li>
                <li><a href="/resume.pdf" className="hover:text-gray-300 active:text-purple-600">Resume</a></li>
            </ul>

            <div>
                <a href="https://github.com/taburshunu" target={"_black"}><img src={github} alt="GitHub Logo" className="h-10 cursor-pointer" /></a>
            </div>
        </header>
    );
};

export default Header;
