/*
Aufgabe: Aufg 04 Shopping List Data Structure
Name: Gerrit Sudarbo
Matrikel: 269362
Datum: 05.11.2022
Quellen: Reck Henning, Yannik König
*/

namespace shoppinglist {
    window.addEventListener("load", hndlaod);

    function hndlaod(): void {
        document.querySelector("#addbutton")?.addEventListener("click", newlistelement);
        document.querySelector(".fa-pen")?.addEventListener("click", editlistelement);
        document.querySelector(".fa-trash")?.addEventListener("click", deletelistelement);
        document.querySelector("#check")?.addEventListener("click", checklistelement);
    }

    function newlistelement(): void {
        console.log("click on button: create new list element including item, amount, comment and date");
    }
    function editlistelement(): void {
        console.log("list element edited");
    }
    function deletelistelement(): void {
        console.log("list element deleted");
    }
    function checklistelement(): void {
        console.log("list element checked");
    }
}