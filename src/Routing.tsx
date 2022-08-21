import { Routes , Route } from "react-router-dom";
import paths from "./paths";

import Scenario1 from "./scenario-one/Scenario1";
import Scenario2 from "./scenario-two/Scenario2";

const Routing = () => {
    return (
      <Routes>    
        <Route path={paths.welcome.path} element={null} />
        <Route path={paths.scenario1.path} element={<Scenario1/>} />
        <Route path={paths.scenario2.path} element={<Scenario2/>} />
      </Routes>
    );
  };

export default Routing; 