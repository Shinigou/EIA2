/*
Aufgabe: Aufg 04 Shopping List Data Structure
Name: Gerrit Sudarbo
Matrikel: 269362
Datum: 05.11.2022
Quellen: Reck Henning, Yannik König
*/

namespace shoppinglist {
    window.addEventListener("load", hndlaod);
    let newDate: Date = new Date();
    export let currentDate: string = newDate.getDate() + "." + newDate.getMonth() + "." + newDate.getFullYear()


    function hndlaod(): void {
        document.querySelector("#addbutton")?.addEventListener("click", newlistelement);
        document.querySelector("#check")?.addEventListener("click", checklistelement);
        for (let i: number = 0; i < data.Liste.length; i++) {
            addListElement(data.Liste[i].newItem, data.Liste[i].amount, data.Liste[i].comment, data.Liste[i].date)
        }
    }
    //Form Data wird ausgelesen und dann übergeben in function editlistelement
    function newlistelement(): void {
        let formData: HTMLFormElement = <HTMLFormElement>document.getElementById("form")
        let dataForm = new FormData(formData)
        let itemName: string = `${dataForm.get("additem")}`
        let amount: number = parseInt(`${dataForm.get("amount")}`)
        let comment: string = `${dataForm.get("comment")}`
        let dataItem: ItemAdded = {
            newItem: itemName,
            amount: amount,
            comment: comment,
            date: currentDate
        }
        data.Liste.push(dataItem)
        addListElement(itemName, amount, comment, currentDate)

    }
    function checklistelement(): void {
        console.log("list element checked");
    }
}
