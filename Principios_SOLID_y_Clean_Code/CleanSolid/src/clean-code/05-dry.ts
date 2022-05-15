//npm run dev
//dry: don't repeat yourself (¡No te repitas!)
type Size = ''|'S'|'M'|'L'|'XL'

class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    toString(){
        //No Dry
        if(this.name.length <= 0) throw Error('the name is empty');
        if(this.price <= 0) throw Error('the price is zero');
        if(this.size.length <= 0) throw Error('the size is empty');

        return `${this.name} (${this.price}), ${this.size}`
    }
}

(() => {
const bluePants = new Product('Blue large pants', 10, 'M');
console.log(bluePants.toString());
})();
