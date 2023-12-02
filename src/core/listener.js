import { createCourseFormHandler, recordGroupHandler } from "./handlers";
import { createCourseForm, recordGroup } from "./selectors";

const listeners = () => {
  createCourseForm.addEventListener("submit", createCourseFormHandler);
  recordGroup.addEventListener("click", recordGroupHandler);
};

export default listeners;
