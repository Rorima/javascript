let programmer = {
    firstName: "John",
    lastName: "Doe",
    language: "JavaScript",
    salary: 100000,
    employed: true
}

let teacher = {
    firstName: "Jane",
    lastName: "Doe",
    area: "Ancient Languages",
    salary: 70000,
    employed: true
}

for(key in programmer)
{
    if(programmer.hasOwnProperty(key))
    {
        console.log(key + ": " + programmer[key]);
    }
}