namespace shoppinglist {

  export interface ItemAdded {
    newItem: string;
    amount: number;
    comment: string;
    date: string; 
  }

  export interface Data {
    [name: string]: ItemAdded[];
  }

  export let data: Data = {
    Liste: [
      { newItem: "bananas", amount: 1, comment: "schön gelb", date: "12.11.2022" },
      { newItem: "apples", amount: 1, comment: "knackig", date: "12.11.2022" }
    ]
  };
}