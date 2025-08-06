import { Current } from "./classes/Current.js";
import { Savings } from "./classes/Savings.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import type { HasFormatter } from "./interfaces/HasFormatter.js";

const type = document.querySelector("#type") as HTMLSelectElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const clientName = document.querySelector("#client") as HTMLInputElement;

const ul = document.querySelector(".beneficiaries") as HTMLUListElement;
const list = new ListTemplate(ul);

const addBtn = document.querySelector(".btn") as HTMLButtonElement;
addBtn.addEventListener("click", (e: Event) => {
  e.preventDefault();
  console.log("clicked");

  let beneficiary: HasFormatter;

  if (type.value === "current") {
    beneficiary = new Current(
      clientName.value,
      type.value,
      amount.valueAsNumber
    );
  } else {
    beneficiary = new Savings(
      clientName.value,
      type.value,
      amount.valueAsNumber
    );
  }

  list.render(beneficiary, type.value, "start");
});
