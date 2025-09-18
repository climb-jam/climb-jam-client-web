import Pages from "../../components/layout/Pages";
import ClimbingSessions from "../../components/ascents/ClimbingSessions.tsx";

const Ascents = () => {

    return (
        <Pages title={"Mes Sessions et Croix"}>
            <ClimbingSessions/>
        </Pages>
    );
};

export default Ascents;