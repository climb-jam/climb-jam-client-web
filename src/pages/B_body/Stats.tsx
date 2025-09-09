import Pages from "../../components/layout/Pages";
import CragList from "../../components/crags/CragList.tsx";

const Stats = ({}) => {

    return (
        <Pages title={"Statistiques"}>
        <div>
            <h1>My stats</h1>
            <CragList/>

        </div>
        </Pages>
    );
};

export default Stats;
