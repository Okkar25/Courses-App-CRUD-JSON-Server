import { url } from "./functions";
import { renderRecord } from "./record";

const render = () => {
  fetch(url("/courses"))
    .then((res) => res.json())
    .then((data) => renderRecord(data));
};

export default render;
