(() => {

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface Movie{
        cast:        string[]
        description: string;
        rating:      number;
        title:       string;
    }
    function createMovie({title, description, rating, cast } : Movie) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName(fullName: string){
        console.log({fullName});
        return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    


})();