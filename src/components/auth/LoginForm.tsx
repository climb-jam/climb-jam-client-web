import * as Yup from "yup";
import {AuthContext} from "../../context/AuthContext.tsx";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import "./LoginForm.css";
import logo from "../../assets/logoFull.png";
import Stack from "@mui/material/Stack";

type LoginFormInputs = {
    email: string,
    password: string,
}

const validation = Yup.object().shape({
    email: Yup.string().required("L'email est obligatoire").email("Email invalide"),
    password: Yup.string().required("Le mot de passe est obligatoire").min(8, "Minimum 8 caractères"),
});

const LoginForm = () => {
    const { loginUser } = AuthContext();
    const {register, handleSubmit, formState: { errors }} = useForm<LoginFormInputs>({ resolver: yupResolver(validation)});

    const handleLogin = (form: LoginFormInputs) => {
        loginUser(form.email, form.password);
    }
    return (
        <Stack alignItems={"center"} justifyContent={"center"} textAlign={"center"} minHeight={"90vh"}  >
        <section className="login-section">
            <div className="login-container">
                {/* Logo */}
                <div className="login-logo">
                    <img src={logo} alt="ClimbJAM" />
                </div>

                {/* Form container */}
                <div className="login-card">
                    <h1 className="login-title">Connexion</h1>

                    <form onSubmit={handleSubmit(handleLogin)} className="login-form">
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

                        {/* Options */}
                        <div className="form-options">
                            <a href="#" className="forgot-password">
                                {/*Mot de passe oublié ?*/}
                            </a>
                        </div>

                        {/* Button */}
                        <button type="submit" className="btn-submit">
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