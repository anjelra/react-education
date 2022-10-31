class Person {    
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }
    getName() {
        return this.name;
    }
}

const hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

