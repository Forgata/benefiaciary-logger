import { Current } from "./classes/Current.js";
import { Savings } from "./classes/Savings.js";
import { ListTemplate } from "./classes/ListTemplate.js";
const type = document.querySelector("#type");
const amount = document.querySelector("#amount");
const clientName = document.querySelector("#client");
const ul = document.querySelector(".beneficiaries");
const list = new ListTemplate(ul);
const addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("clicked");
    let beneficiary;
    if (type.value === "current") {
        beneficiary = new Current(clientName.value, type.value, amount.valueAsNumber);
    }
    else {
        beneficiary = new Savings(clientName.value, type.value, amount.valueAsNumber);
    }
    list.render(beneficiary, type.value, "start");
});
//# sourceMappingURL=app.js.map