import Pages from "../../components/layout/Pages.tsx";
import RegisterForm from "../../components/auth/RegisterForm.tsx";

const Register = () => {
    return (
        <Pages title={"S'inscrire"}>
            <RegisterForm />
        </Pages>
    );
};

export default Register;