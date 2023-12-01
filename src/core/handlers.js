import { url } from "./functions";
import { createCourseForm, drawerRightExample } from "./selectors";

export const createCourseFormHandler = async (event) => {
  event.preventDefault();

  const formData = new FormData(createCourseForm);

  const jsonData = {
    title: formData.get("course_title"),
    abbreviation: formData.get("short_name"),
    fee: formData.get("course_fees"),
  };

  const response = await fetch(url("/courses"), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(jsonData),
  });
  const data = await response.json();
  console.log(data);

  createCourseForm.reset(); // clearing out data
  drawerRightExample.close();
};
