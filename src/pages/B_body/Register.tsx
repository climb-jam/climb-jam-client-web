import Pages from "../../components/layout/Pages.tsx";
import RegisterForm from "../../components/auth/RegisterForm.tsx";

const Register = () => {
    return (
        <Pages title={"S'inscrire - ClimbJAM"}>
            <RegisterForm />
        </Pages>
    );
};

export default Register;