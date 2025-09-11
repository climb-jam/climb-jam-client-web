import Pages from "../../components/layout/Pages";
import {AuthContext} from "../../context/AuthContext.tsx";

const Settings = ({}) => {

    const { isLoggedIn, logout } = AuthContext();

    return (
        <Pages title={"Paramètres"}>
            <div>
                <h1>My settings</h1>
            </div>

            <nav className="relative container mx-auto p-6">
                <div className="flex items-center justify-between">
                    {isLoggedIn() && (
                        <div className="hidden lg:flex items-center space-x-6 text-back">
                            <a
                                onClick={logout}
                                className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                            >
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </Pages>
    );
};

export default Settings;
