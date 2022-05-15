//ejecutar en la terminal npm run dev
(() => {

    function isRedFruit( fruit: string ): boolean {
        
        const redFruits = ['manzana', 'cereza', 'ciruela']
        return redFruits.includes(fruit);
    }

    //solucion 2
    type FruitColor = 'red'|'yellow'|'purple';
    function getFruitsByColor( color: FruitColor ): string[] {

        //solucion 1
        /*
        switch(color){
            case 'red':
                return ['manzana','fresa'];
            case 'yellow':
                return ['piña','banana'];
            case 'purple':
                return ['moras','uvas'];    
            default:
                throw Error('the color must be: red, yellow, purple');
        }
        */

        //solucion 2
        const fruitsByColor = {
            red:    ['manzana','fresa'],
            yellow: ['piña','banano'],
            purple: ['moras','uvas'],
        };

        if (!Object.keys(fruitsByColor).includes(color)) {
            throw Error('the color must be: red, yellow, purple');
        }
            
        return fruitsByColor[color];
    }

    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if( !isFirstStepWorking ) return 'First step broken.';

        if( !isSecondStepWorking ) return 'Second step broken.';

        if( !isThirdStepWorking ) return 'Third step broken.';

        if( !isFourthStepWorking ) return 'Fourth step broken.';

        return 'Working properly!';
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();