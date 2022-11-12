"use strict";
var shoppinglist;
(function (shoppinglist) {
    function addListElement(_itemName, _amount, _comment, _date) {
        console.log("ja");
        let itemList = document.getElementById("ItemsList");
        let item = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "check");
        let label = document.createElement("label");
        label.setAttribute("id", "listtext");
        label.innerHTML = _amount + " " + _itemName + " " + _comment + " " + _date;
        let edit = document.createElement("i");
        edit.classList.add("fa-solid");
        edit.classList.add("fa-pen");
        edit.addEventListener("click", function () {
            label.innerHTML = prompt("Amount", `${_amount}`) + " " + prompt("Name", _itemName) + " " + prompt("Commment", _comment) + " " + shoppinglist.currentDate;
        });
        let deleteItem = document.createElement("i");
        deleteItem.classList.add("fa-solid");
        deleteItem.classList.add("fa-trash");
        deleteItem.addEventListener("click", function () { itemList.removeChild(item); });
        item.appendChild(checkbox);
        item.appendChild(label);
        item.appendChild(edit);
        item.appendChild(deleteItem);
        itemList.appendChild(item);
    }
    shoppinglist.addListElement = addListElement;
})(shoppinglist || (shoppinglist = {}));
//# sourceMappingURL=manageContent.js.map