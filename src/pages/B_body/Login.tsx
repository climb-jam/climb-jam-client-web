import Pages from "../../components/layout/Pages.tsx";
import LoginForm from "../../components/auth/LoginForm.tsx";

const Login = () => {
    return (
        <Pages title={"Me connecter"}>
            <LoginForm />
        </Pages>
    );
};

export default Login;