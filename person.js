let person = {name : "Emmanuel",
age : 16,
gender : "SheMale",
password : "52663"
};

person.color = "Black"
person.password = "new password: 12345"
//delete person.color;
console.log(person.name);
console.log(person['name']);
//process.stdout.write
//console.log(person); #(To print whatever there is in 'Object' person)
let emma = (Object.keys(person));
console.log(Object.entries(person)); //(To print the entries in 'Object' person)
console.log(emma[2], emma[1]);
console.log(emma.length);
//console.log(Object.keys(person));