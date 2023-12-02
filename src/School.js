import listeners from "./core/listener";
import render from "./core/render";

class School {
  init() {
    console.log("project initiates");
    listeners();
    render();
  }
}

export default School;
