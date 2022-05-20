//npm run dev
(()=>{

    type Gender = 'M'|'F';
    /*
    class Person{
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    */

    /*Forma corta de manejar las clases en typescript */
    class Person{
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
}

const newPerson = new Person('Fulano', 'M', new Date('1900-01-01'));
console.log({newPerson})
})();