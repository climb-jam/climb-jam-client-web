import Pages from "../../components/layout/Pages";
import {useNavigate} from "react-router";
import logo from "../../assets/logo.png";



const Home = () => {
    const navigate = useNavigate();

    return (
            <Pages title={"Accueil - ClimbJAM"}>
                <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "1rem" }}>

                    <div style={{ marginBottom: "1rem" }}>
                        <img src={logo} alt="Logo ClimbJAM" style={{ height: "100px", width: "auto" }} />
                    </div>

                    <h1>ClimbJAM</h1>
                    <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "#555" }}>
                        Découvre les plus beaux sites d’escalade naturels en France.
                        Suis tes performances et connecte-toi avec une communauté de grimpeurs passionnés de plein air.
                    </p>

                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
                        <button
                            onClick={() => navigate("/register")}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "white",
                                color: "#47824e",
                                border: "2px solid #47824e",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            S'inscrire
                        </button>

                        <button
                            onClick={() => navigate("/login")}
                            style={{
                                padding: "10px 20px",
                                backgroundColor: "#47824e",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Se connecter
                        </button>
                    </div>
                </div>
            </Pages>
    );
};

export default Home;
