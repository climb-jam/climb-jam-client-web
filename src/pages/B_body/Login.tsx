import Pages from "../../components/layout/Pages.tsx";
import LoginForm from "../../components/auth/LoginForm.tsx";
import BackNav from "../A_nav/BackNav.tsx";

const Login = () => {
    return (
        <Pages title={"Me connecter"}>
            <LoginForm />
        </Pages>
    );
};

export default Login;