namespace shoppinglist {

  export interface ItemAdded {
    newItem: string;
    amount: number;
    comment: string;
  }

  export interface Data {
    [itemNumber: number]: ItemAdded[]; 
}

export let data: Data = {
    1: [
        { newItem: "bananas", amount: 1, comment: "schön gelb"}
    ], 
    2: [
        { newItem: "apples", amount: 1, comment: "knackig"}
    ]
}; 
}