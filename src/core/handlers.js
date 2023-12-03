import { disableForm, enableForm, toast, url } from "./functions";
import { createRecord, removeRecord } from "./record";
import { createCourseForm, recordGroup } from "./selectors";

// create
export const createCourseFormHandler = async (event) => {
  event.preventDefault();

  const formData = new FormData(createCourseForm);

  const jsonData = {
    title: formData.get("course_title"),
    abbreviation: formData.get("short_name"),
    fee: formData.get("course_fees"),
  };

  // disable form (to avoid "CREATE" btn being clicked multiple times)
  disableForm(createCourseForm);

  const response = await fetch(url("/courses"), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(jsonData),
  });
  const dataFromServer = await response.json();
  recordGroup.append(createRecord(dataFromServer)); // adding newly created record into row

  // undo disable form
  enableForm(createCourseForm);

  // courses added toast
  toast("New Course Added");

  createCourseForm.reset(); // clearing out data
};

// delete
export const recordGroupHandler = (event) => {
  if (event.target.classList.contains("record-del")) {
    const currentRow = event.target.closest("tr");
    const currentId = currentRow.getAttribute("data-id");

    Swal.fire({
      title: "Are you sure?",
      text: "This course will be removed !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Remove",
    }).then((result) => {
      if (result.isConfirmed) {
        removeRecord(currentId);
        currentRow.remove();
      }
    });
  }
};
