const student = function(){
    let name = "John Doe";
    let age = 22;
    let GPA = 3.8
    let courses = ["Math", "Physics", "Computer Science"];
    let address = {
        city: "New York",
        zip: 10001
    };

    return{
        getName: () =>{
            return name;
        },
        getAge: () =>{
            return age;
        },
        getSecondCourse: () =>{
            return courses[1];
        },
        getZipCode: () =>{
            return address.zip;
        },
        getGPA: () =>{
            return GPA;
        },
        setAge: (newAge) =>{
            age = newAge;
        },
        getDetails: () =>{
            return `${name} is ${age} years old and has a GPA of ${GPA}`;
        }
    }
};

module.exports = {
    student
}