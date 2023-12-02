import { url } from "./functions";
import { recordGroup, recordUiTemplate } from "./selectors";

export const createRecord = ({ title, abbreviation, fee, id }) => {
  const recordUi = recordUiTemplate.content.cloneNode(true);
  recordUi.querySelector("tr").setAttribute("data-id", id);
  recordUi.querySelector(".record-id").innerText = id;
  recordUi.querySelector(".record-title").innerText = title;
  recordUi.querySelector(".record-short").innerText = abbreviation;
  recordUi.querySelector(".record-fee").innerText = fee;
  return recordUi;
};

export const renderRecord = (lists) => {
  recordGroup.innerHTML = "";
  lists.forEach((list) => recordGroup.append(createRecord(list)));
};

export const removeRecord = (id) => {
  fetch(url("/courses/" + id), {
    method: "DELETE",
  });
};
