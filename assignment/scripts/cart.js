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


console.log (basket);



function isFull() {
    if (basket.length < maxItems) {
    return true;
    } else {
    return false;
    }
}


function removeItem( item ) {
    let index = basket.indexOf( item );
    if ( index !== -1 ) {
        basket.splice( index, 1 );
        return `${item} was removed`
    } else {
        return `null`
    }
}


console.log( removeItem( 'cookies') );
console.log( removeItem( 'chips') );
console.log( basket );

listItems();

empty();
console.log(basket);