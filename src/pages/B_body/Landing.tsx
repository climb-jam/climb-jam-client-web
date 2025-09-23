import Pages from "../../components/layout/Pages";
import {useNavigate} from "react-router";
import logo from "../../assets/logo.svg";
import map from "../../assets/map.png";
import stats from "../../assets/stats-mobile.png";



const Landing = () => {
    const navigate = useNavigate();

    return (
            <Pages title={"Accueil - ClimbJAM"}>
                <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", padding: "1rem" }}>

                    <div style={{ marginBottom: "1rem" }}>
                        <img src={logo} alt="Logo ClimbJAM" style={{ height: "100px", width: "auto" }} />
                    </div>

                    <h1>ClimbJAM</h1>
                    <p style={{ marginBottom: "3rem", fontSize: "1.5rem", color: "#555" }}>
                        Découvre les plus beaux sites d’escalade naturels en France et suis tes performances.
                    </p>

                    <h2>Rejoins-nous !</h2>
                    <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "#555" }}>
                        Connecte-toi à une <b>communauté de grimpeurs</b> passionnés de plein air.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "4rem" }}>
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

                    <div style={{ marginBottom: "3rem" }}>
                    <h3>Trouve les infos des spots d'escalade</h3>
                        <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "#555" }}>
                            ClimbJAM recense les <b>sites d’escalade</b> en France. Découvre de nouvelles falaises en utilisant la recherche ou en consultant notre <b>carte des spots</b> français.
                        </p>
                    <img src={map} alt="carte des spots" style={{ maxWidth: "100%", height: "auto" }}/>
                    </div>

                    <div style={{ marginBottom: "3rem" }}>
                        <h3>Visualise ta progression</h3>
                        <p style={{ marginBottom: "1rem", fontSize: "1rem", color: "#555" }}>
                            ClimbJAM te permet d'<b>enregistrer tes sessions et les croix</b> que tu as effectuées, et de <b>suivre ta progression</b> notamment grâce à des <b>graphiques</b>.
                        </p>
                            <img src={stats} alt="statistiques" style={{ maxWidth: "100%", height: "auto" }}/>
                    </div>
                </div>
            </Pages>
    );
};

export default Landing;
