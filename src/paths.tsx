import { generatePath } from "react-router-dom";

const paths = {
  welcome: {
    path: "/",
    generateURL() {
      return generatePath(this.path);
    },
  },
  scenario1: {
    path: "/scenario1",
    generateURL() {
      return generatePath(this.path);
    },
  },
  scenario2: {
    path: "/scenario2",
    generateURL() {
      return generatePath(this.path);
    },
  }
};

export default paths;
