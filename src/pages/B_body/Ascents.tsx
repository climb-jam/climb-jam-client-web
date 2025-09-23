import Pages from "../../components/layout/Pages";
import ClimbingSessions from "../../components/ascents/ClimbingSessions.tsx";
import BackNav from "../A_nav/BackNav.tsx";

const Ascents = () => {

    return (
        <Pages title={"Mes Sessions et Croix - ClimbJAM"}>

            <ClimbingSessions/>
        </Pages>
    );
};

export default Ascents;