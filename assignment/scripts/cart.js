console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;
console.log (`basket is ${basket}`);

function addItem( item ) {
    console.log( isFull() );
    if ( isFull() === true){
        isFull( basket );
        basket.push( item );
        return true;
    }
}
addItem( 'chips' );
addItem( 'bread' );
addItem( 'milk' );
addItem( 'cookies' );
addItem( 'popcorn' );
addItem( 'cheese' );
console.log ( basket );

function listItems() {
    for(let groceries of basket) {
        console.log(groceries);
    }
}

listItems();

function empty() {
   basket = [];
}

empty();
console.log (basket);



function isFull() {
    if (basket.length < maxItems) {
    return true;
    } else {
    return false;
    }
}

