import EmailLogo from '../assets/img/Email-Logo.png';
import GithubLogo from '../assets/img/github_logo_dark_purple.png';

const Contact = () => {
    return (
        <main className={"h-full w-screen mt-20 font-montserrat"}>
            <ul className={""}>
                <li className={"font-semibold text-4xl pl-28"}>Need to <span className={"text-purple-600"}>Contact</span> me</li>
                <ul className={"ml-28 flex align-baseline mt-5 mb-8"}>
                    <img src={EmailLogo} alt="email logo" className={"h-8"} />
                    <li className={"font-medium mt-0.5 ml-1"}>ahmadateebarshad@gmail.com</li>
                </ul>
                <a href="https://github.com/taburshunu" target={"_black"}><img src={GithubLogo} alt="GitHub Logo" className="h-10 cursor-pointer mt-16 pl-28" /></a>
            </ul>
        </main>
    )
}

export default Contact