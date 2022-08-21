import {Parent} from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const Scenario1 = () => {
    return <>
            <p>
                Scenario 1 page
            </p>
            <Parent/>
            <FunctionComponent/>
        </>
};

export default Scenario1;