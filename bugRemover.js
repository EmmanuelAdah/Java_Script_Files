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

function namesOfCustomers(){
    array = [{"Ebuka": 90}, {"Femi":89}, {"John":70}, {"Caleb": 78}, {"Emma": 81}]
    for (let item = 0; item < array.length; item++){
        let temp = array[item]
        if(array[item] >= 80){
            
        }
    
    }
    return names.sort()
}


console.log(namesOfCustomers())
console.log(sortedListOfCustomers())
//console.log(removingBugs())