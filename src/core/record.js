import { recordUiTemplate } from "./selectors";

export const createRecord = ({ title, abbreviation, fee }) => {
  const recordUi = recordUiTemplate.content.cloneNode(true);
  recordUi.querySelector(".record-title").innerText = title;
  recordUi.querySelector(".record-short").innerText = abbreviation;
  recordUi.querySelector(".record-fee").innerText = fee;
  return recordUi;
};
