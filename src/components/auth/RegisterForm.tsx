import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./LoginForm.css";
import logo from "../../assets/logoFull.svg";
import Stack from "@mui/material/Stack";
import {useNavigate} from "react-router";

type RegisterFormInputs = {
    email: string;
    password: string;
    username: string;
};

const validation = Yup.object().shape({
    email: Yup.string().required("L'email est obligatoire").email("Email invalide"),
    password: Yup.string().required("Le mot de passe est obligatoire").min(8, "Minimum 8 caractères"),
    username: Yup.string()
        .required("Le nom d'utilisateur est obligatoire")
        .min(3, "Minimum 3 caractères"),
});

const RegisterForm = () => {
    const { registerUser } = AuthContext();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>({
        resolver: yupResolver(validation),
    });

    const navigate = useNavigate();

    const handleRegister = (form: RegisterFormInputs) => {
        registerUser(form.email, form.password, form.username);
    };

    return (
        <Stack alignItems={"center"} justifyContent={"center"} textAlign={"center"} minHeight={"90vh"} >
        <section className="login-section">
            <div className="login-container">
                {/* Logo */}
                <div className="login-logo">
                    <img src={logo} alt="ClimbJAM" onClick={() => navigate("/")}/>
                </div>

                {/* Card */}
                <div className="login-card">
                    <h1 className="login-title">Créer un compte</h1>

                    <form onSubmit={handleSubmit(handleRegister)} className="login-form">

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
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                {...register("password")}
                            />
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
                        <button type="submit" className="btn-submit">
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
