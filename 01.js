var person = {
    firstName: '',
    lastName: '',
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

var person1 = Object.create(person);
person1.firstName = 'Person';
person1.lastName = '01';
console.log(person1.getFullName());
