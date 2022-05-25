interface Bird{
    fly(): void;
    eat(): void;
    run(): void;
    swing(): void;
}

class Tucan implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
    public swing(){}
}

class Hummingbird implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
    public swing(){}
}

class Ostrich implements Bird{
    public fly(): void {
        throw new Error('Esta ave no vuela');
    }
    public eat(){}
    public run(){}
    public swing(){}
}

class Penguin implements Bird{
    public fly(): void {
        throw new Error('Esta ave no vuela');
    }
    public eat(){}
    public run(){}
    public swing(){}
}