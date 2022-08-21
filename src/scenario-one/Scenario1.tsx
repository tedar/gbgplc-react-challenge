import {Parent} from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const Scenario1 = () => {
    return <>
            <p>
                Scenario 1 page
            </p>            
            
            <FunctionComponent/>
            {<Parent/>}
        </>
};

export default Scenario1;