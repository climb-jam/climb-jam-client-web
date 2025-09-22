import Pages from "../../components/layout/Pages.tsx";
import RegisterForm from "../../components/auth/RegisterForm.tsx";
import BackNav from "../A_nav/BackNav.tsx";

const Register = () => {
    return (
        <Pages title={"S'inscrire"}>
            <RegisterForm />
        </Pages>
    );
};

export default Register;