import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="dark:bg-black border-y ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between dark:text-white tracking-widest">                 
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 ">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
                            <ul className="font-medium">
                                <li className="mb-4" >
                                    <Link to="/socialMedia" className="hover:underline">
                                        Github
                                    </Link>

                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase">Enjoy the Game</h2>
                            <ul className="font-medium">
                                <li className="mb-4" >
                                    <Link to="/game1" className="hover:underline">
                                        Tic-Tact-Toe Game
                                    </Link>
                                </li>
                                <li className="mb-4" >
                                    <Link to="/game2" className="hover:underline">
                                        Country-Capital Game
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}