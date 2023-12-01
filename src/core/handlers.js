import { createCourseForm } from "./selectors";

export const createCourseFormHandler = (event) => {
  event.preventDefault();

  const formData = new FormData(createCourseForm);
  console.log(
    formData.get("course_title"),
    formData.get("short_name"),
    formData.get("course_fees")
  );
};
