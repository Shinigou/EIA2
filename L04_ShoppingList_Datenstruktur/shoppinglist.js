"use strict";
/*
Aufgabe: Aufg 04 Shopping List Data Structure
Name: Gerrit Sudarbo
Matrikel: 269362
Datum: 05.11.2022
Quellen: Reck Henning, Yannik König
*/
var shoppinglist;
(function (shoppinglist) {
    window.addEventListener("load", hndlaod);
    let newDate = new Date();
    shoppinglist.currentDate = newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear();
    function hndlaod() {
        document.querySelector("#addbutton")?.addEventListener("click", newlistelement);
        document.querySelector("#check")?.addEventListener("click", checklistelement);
        for (let i = 0; i < shoppinglist.data.Liste.length; i++) {
            shoppinglist.addListElement(shoppinglist.data.Liste[i].newItem, shoppinglist.data.Liste[i].amount, shoppinglist.data.Liste[i].comment, shoppinglist.data.Liste[i].date);
        }
    }
    //Form Data wird ausgelesen und dann übergeben in function editlistelement
    function newlistelement() {
        let formData = document.getElementById("form");
        let dataForm = new FormData(formData);
        let itemName = `${dataForm.get("additem")}`;
        let amount = parseInt(`${dataForm.get("amount")}`);
        let comment = `${dataForm.get("comment")}`;
        let dataItem = {
            newItem: itemName,
            amount: amount,
            comment: comment,
            date: shoppinglist.currentDate
        };
        shoppinglist.data.Liste.push(dataItem);
        shoppinglist.addListElement(itemName, amount, comment, shoppinglist.currentDate);
    }
    function checklistelement() {
        console.log("list element checked");
    }
})(shoppinglist || (shoppinglist = {}));
//# sourceMappingURL=shoppinglist.js.map