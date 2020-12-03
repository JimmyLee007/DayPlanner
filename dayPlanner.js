// Data structure to hold message components
const messageComponents = {
    excercise : ['Jogging', 'Cycling', 'Dancing', 'Rowing', 'Swimming', 'Body weight excercises'],
    meal : ['Porridge', 'Bread', 'Veg', 'Salad', 'Rice', 'Fruit'],
    relaxation : ['Watch a film', 'read a book', 'play computer game', 'surf the internet']
};

// returning an array of the randomly selected components
function selectMessageComponents(object){
let selectedMessageComponents = [];
for(key in object){
    let indexNumber = Math.floor(Math.random() * object[key].length);
    selectedMessageComponents.push(object[key][indexNumber]);
};
return selectedMessageComponents;
}

console.log(selectMessageComponents(messageComponents));