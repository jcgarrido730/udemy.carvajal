//npm run dev
(()=>{
//No aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';

    class Person{
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    class User extends Person{
        public lastAccess : Date;

        constructor(
            public email : string,
            public role : string,
            name : string,
            gender : Gender,
            birthdate : Date,
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory : String,
            public lastOpenFolder : string,
            email : string,
            role : string,
            name : string,
            gender : Gender,
            birthdate : Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/home/Fulano',
        '/home/Fulano',
        'Fulano@gmail.com',
        'Admin',
        'Fulano',
        'M',
        new Date('1900-01-01')
    );
    
    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});
})();
