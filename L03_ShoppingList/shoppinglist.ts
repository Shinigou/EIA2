/*
Aufgabe: Aufg 03 Shopping List
Name: Gerrit Sudarbo
Matrikel: 269362
Datum: 29.10.2022
Quellen: Orientiert an Lisa Blindenhöfer 
*/

namespace shoppinglist {
    window.addEventListener("load", hndlaod);

    function hndlaod(): void{
        const form = document.querySelector("form") as HTMLButtonElement;
        
        document.querySelector("#addbutton").addEventListener("click", newlistelement);
        document.querySelector("#editpen").addEventListener("click", editlistelement);
        document.querySelector("#trashcan").addEventListener("click", deletelistelement);
        document.querySelector("#check").addEventListener("click", checklistelement);
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