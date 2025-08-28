function removingBugs(){
    array = [2, 3, 4, 1, 0, 6, 2, 0, 6, 4]
    return array.filter(array => array > 0 && array < 6);
}

function namesOfCustomers(){
    array = [{"Ebuka": 90}, {"Femi":89}, {"John":70}, {"Caleb": 78}, {"Emma": 81}]
    names = []
    for (let item = 0; item < array.length; item++){
        if(Object.values(array[item]) >= 80){
            names.push(Object.keys(array[item]))
        }
    }
    return names.sort()
}

function sortedListOfCustomers(){
    array = [{"Ebuka": 90}, {"Femi":89}, {"John":70}, {"Caleb": 78}, {"Emma": 81}]
    return array.filter(array => Object.values(array) >= 80)
}

function customersList(){
    array = [{"Ebuka": 90}, {"Femi":89}, {"John":70}, {"Caleb": 78}, {"Emma": 81}]
    for (let item = 0; item < array.length; item++){
        let temp = array[item]
        if((array[array.length - item]) >= 80 && array[item] < 80){
            array[item] = array[array.length - item]
            array[array.length - item] = temp
        }
        if (array[array.length - item] < 80){
            array[array.length - item].pop()
        }
    }
    return array
}


console.log(namesOfCustomers())
console.log(sortedListOfCustomers())
console.log(customersList())
//console.log(removingBugs())