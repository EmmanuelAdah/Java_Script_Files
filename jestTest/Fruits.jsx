const inventory = {
    apple : 10,
    banana : 5,
    orange : 8,
    mango : 12};


function printDetails(fruits){
    console.log("Fruit \t Quantity");
    let total = 0;
    for (let fruit in fruits){
        console.log(`${fruit} \t ${fruits[fruit]}`);
        total += fruits[fruit];
    }
    console.log(`Total = ${total}`)
}

function fruitDetails(fruits){
    console.log("Fruit \t Quantity");
    let total = 0;
    Object.entries(fruits).forEach(([key, value]) => {
        console.log(`${key} \t ${value}`);
        total += value;
    })
    console.log(`Total = ${total}`)
}


printDetails(inventory);