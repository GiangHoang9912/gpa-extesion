const div_Grid = document.querySelector(".table-hover");
const score_table = div_Grid.querySelector("tbody");
const score_table_tr = div_Grid.querySelectorAll("tr");

let sum_of_credit = 0;
let sum_score = 0;

score_table_tr.forEach((tr, idx) => {
  if (idx !== 0) {
    const td = tr.querySelectorAll("td");
    if (
      td[7] &&
      td[8] &&
      td[8]?.textContent.trim() !== "" &&
      td[7].textContent !== "0" &&
      td[0].textContent !== "32"
    ) {
      const score_subject =
        Number(td[8].textContent) * Number(td[7].textContent);
      sum_of_credit += Number(td[7].textContent);
      sum_score += score_subject;
    }
  }
});

const GPA = sum_score / sum_of_credit;

const GPA_Node = document.createTextNode(" GPA: " + GPA.toFixed(2));
const title = document.querySelector(
  "#ctl00_mainContent_lblRollNumber"
).parentElement;
title.appendChild(GPA_Node);
