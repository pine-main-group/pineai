const Hero = () => {
    return (
        <main className={"w-full h-screen flex items-center justify-center bg-[#190A2E] text-white]"}>
            <ul>
                <li>
                    <h4 className={"font-semibold text-8xl mb-8 text-purple-500"}>Pine AI</h4>
                    <p className={"font-light text-2xl mb-8"}>AI like never before</p>
                </li>
                <li className={"p-4 pl-0"}>
                    <a href="/hero" className={"p-4 pr-6 pl-6 rounded-lg bg-purple-900 dark:text-white font-medium hover:text-purple-500"}>Dashboard</a>
                    <a href="/hero" className={"ml-4 p-4 pr-6 pl-6 rounded-lg bg-purple-900 dark:text-white font-medium hover:text-purple-500"}>Get Started</a>
                </li>
            </ul>
        </main>
    )
}

export default Hero