import { createCourseFormHandler } from "./handlers";
import { createCourseForm } from "./selectors";

const listeners = () => {
  createCourseForm.addEventListener("submit", createCourseFormHandler);
};

export default listeners;
