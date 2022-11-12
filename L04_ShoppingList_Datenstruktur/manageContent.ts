namespace shoppinglist {
  export function addListElement(_itemName: string, _amount: number, _comment: string, _date:string): void {
    
 

    console.log("ja")
    let itemList: HTMLUListElement = <HTMLUListElement>document.getElementById("ItemsList")

    let item: HTMLLIElement = <HTMLLIElement>document.createElement("li")

    let checkbox: HTMLInputElement = <HTMLInputElement>document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.setAttribute("id", "check")

    let label: HTMLLabelElement = <HTMLLabelElement>document.createElement("label")
    label.setAttribute("id", "listtext")
    label.innerHTML = _amount + " " + _itemName + " " + _comment + " " + _date

    let edit: HTMLElement = <HTMLElement>document.createElement("i")
    edit.classList.add("fa-solid")
    edit.classList.add("fa-pen")
    edit.addEventListener("click", function (): void {label.innerHTML = prompt("Amount", `${_amount}`) + " " + prompt("Name", _itemName) + " " + prompt("Commment", _comment) + " " + currentDate

  } )
    let deleteItem: HTMLElement = <HTMLElement>document.createElement("i")
    deleteItem.classList.add("fa-solid")
    deleteItem.classList.add("fa-trash")
    deleteItem.addEventListener("click", function (): void { itemList.removeChild(item) })

    item.appendChild(checkbox)
    item.appendChild(label)
    item.appendChild(edit)
    item.appendChild(deleteItem)
    itemList.appendChild(item)
  }


}