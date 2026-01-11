import * as Yup from "yup";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import "./AuthForms.css";
import logo from "../../assets/logoFull.webp";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router";
import {useState} from "react";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type RegisterFormInputs = {
    email: string;
    password: string;
    username: string;
};

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const validation = Yup.object().shape({
    email: Yup.string().required("L'email est obligatoire")
        .matches(emailRegex,"Email invalide"),
    password: Yup.string().required("Le mot de passe est obligatoire")
        .min(12, "Minimum 12 caractères")
        .matches(/[@$!%*#?&]/, "Le mot de passe doit contenir un symbole: @$!%*#?&")
        .matches(/[A-Z]/, "Au moins une majuscule est obligatoire")
        .matches(/[a-z]/, "Au moins une minuscule est obligatoire")
        .matches(/[0-9]/, "Au moins un chiffre est obligatoire"),
    username: Yup.string()
        .required("Le nom d'utilisateur est obligatoire")
        .min(3, "Minimum 3 caractères"),
});

const RegisterForm = () => {
    const {registerUser} = AuthContext();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm<RegisterFormInputs>({
        resolver: yupResolver(validation),
        mode: "onChange",
    });

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (form: RegisterFormInputs) => {
        registerUser(form.email, form.password, form.username);
    };

    return (
        <Stack alignItems={"center"} justifyContent={"center"} textAlign={"center"} minHeight={"90vh"}>
            <section className="auth-section">
                <div className="auth-container">
                    {/* Logo */}
                    <div className="auth-logo">
                        <img src={logo} alt="ClimbJAM" onClick={() => navigate("/")}/>
                    </div>

                    {/* Card */}
                    <div className="auth-card">
                        <h1 className="auth-title">Créer un compte</h1>

                        <form onSubmit={handleSubmit(handleRegister)} className="auth-form">

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

                            {/* Username */}
                            <div className="form-group">
                                <label htmlFor="username">Nom d'utilisateur</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Nom d'utilisateur"
                                    {...register("username")}
                                />
                                {errors.username && (
                                    <p className="error-message">{errors.username.message}</p>
                                )}
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className={`btn-submit ${!isValid ? "gray" : ""}`}
                                disabled={!isValid}
                            >
                                S'inscrire
                            </button>

                            {/* Footer */}
                            <p className="signup-text">
                                Déjà un compte ?{" "}
                                <a href="/login" className="signup-link">
                                    Se connecter
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </Stack>
    );
};

export default RegisterForm;
