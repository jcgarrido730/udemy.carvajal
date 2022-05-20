//npm run dev
(() => {

    //No aplicando el principio de responsabilidad única
    //Refactorizando el ejercicio anterior
    type Gender = 'M'|'F';

    interface PersonProps{
        birthdate : Date;
        gender : Gender;
        name : string;
    }

    class Person {
        public birthdate : Date;
        public gender : Gender;
        public name : string;

        constructor({birthdate, gender, name } : PersonProps){
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }
    } 

    interface UserProps{
        birthdate : Date;
        email : string;
        gender : Gender;
        name : string;
        role : string;
    }

    class User extends Person {
        public email : string;
        public lastAccess : Date;
        public role : string;

        constructor(
            {birthdate, email, gender, name, role} : UserProps
        ) {
            super({birthdate, gender, name});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps{
        birthdate : Date;
        email : string;
        gender : Gender;
        lastOpenFolder : string;
        name : string;
        role : string;
        workingDirectory : string;
    }


    class UserSettings extends User {
        public workingDirectory : string;
        public lastOpenFolder : string;

        constructor({
            workingDirectory,
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role
        } : UserSettingsProps) {
            super({birthdate, email, gender, name, role});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory : '/home/Fulano',
        lastOpenFolder : '/home/Fulano',
        email : 'Fulano@gmail.com',
        role : 'Admin',
        name : 'Fulano',
        gender : 'M',
        birthdate : new Date('1985-10-21')
    });

    console.log({ userSettings });

})();