import * as Yup from "yup";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import "./AuthForms.css";
import logo from "../../assets/logoFull.webp";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router";
import {useEffect, useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type LoginFormInputs = {
    email: string,
    password: string,
}

const validation = Yup.object().shape({
    email: Yup.string().required("L'email est obligatoire").email("Email invalide"),
    password: Yup.string().required("Le mot de passe est obligatoire")
        .min(12, "Minimum 12 caractères")
        .matches(/[@$!%*#?&]/, "Le mot de passe doit contenir un symbole: @$!%*#?&")
        .matches(/[A-Z]/, "Au moins une majuscule est obligatoire")
        .matches(/[a-z]/, "Au moins une minuscule est obligatoire")
        .matches(/[0-9]/, "Au moins un chiffre est obligatoire"),
});



const LoginForm = () => {
    const {loginUser} = AuthContext();
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<LoginFormInputs>({
        resolver: yupResolver(validation),
        mode: "onChange",
    });
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (form: LoginFormInputs) => {
        loginUser(form.email, form.password);
    }
    return (
        <Stack alignItems={"center"} justifyContent={"center"} textAlign={"center"} minHeight={"90vh"}>
            <section className="auth-section">
                <div className="auth-container">
                    {/* Logo */}
                    <div className="auth-logo">
                        <img src={logo} alt="ClimbJAM" onClick={() => navigate("/")}/>
                    </div>

                    {/* Form container */}
                    <div className="auth-card">
                        <h1 className="auth-title">Connexion</h1>

                        <form onSubmit={handleSubmit(handleLogin)} className="auth-form">
                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="error-message">{errors.email.message}</p>
                                )}
                            </div>

                            {/* Password */}
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe</label>
                                <div style={{position: "relative"}}>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        placeholder="••••••••"
                                        {...register("password")}
                                        style={{paddingRight: "2.5rem"}}
                                    />
                                    {/* Eye/Visibility icon */}
                                    <span
                                        onClick={() => setShowPassword(prev => !prev)}
                                        style={{
                                            position: "absolute",
                                            right: "10px",
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                            </span>
                                </div>
                                {errors.password && (
                                    <p className="error-message">{errors.password.message}</p>
                                )}

                            </div>


                            {/* Options */}
                            <div className="form-options">
                                <a href="#" className="forgot-password">
                                    {/*Mot de passe oublié ?*/}
                                </a>
                            </div>

                            <button
                                type="submit"
                                className={`btn-submit ${!isValid ? "gray" : ""}`}
                                disabled={!isValid}
                            >
                                Se connecter
                            </button>

                            {/* Footer */}
                            <p className="signup-text">
                                Pas encore de compte ?{" "}
                                <a href="/register" className="signup-link">
                                    S'inscrire
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Stack>
    );
};

export default LoginForm;