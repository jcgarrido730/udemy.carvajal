interface Bird{
    eat(): void;
}

interface FlyingBird{
    fly(): number;
}

interface RunnigBird{
    run(): void;
}

interface SwimmerBird{
    swing(): void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){ return 100; }
    public eat(){}
}

class Hummingbird implements Bird, FlyingBird{
    public fly(){ return 200; }
    public eat(){}
}

class Ostrich implements Bird, RunnigBird{
    public eat(){}
    public run(){}
}

class Penguin implements Bird, SwimmerBird{
    public eat(){}
    public swing(){}
}
