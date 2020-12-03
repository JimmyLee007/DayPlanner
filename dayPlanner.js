// Data structure to hold message components
const messageComponents = {
    excercise : ['Jogging', 'Cycling', 'Dancing', 'Rowing', 'Swimming', 'Body weight excercises'],
    meal : ['Porridge', 'Bread', 'Veg', 'Salad', 'Rice', 'Fruit'],
    relaxation : ['watch a film', 'read a book', 'play computer games', 'surf the internet']
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

// formatting the message using the components
function generateMessage(){
    const Components = selectMessageComponents(messageComponents);
    console.log(`Todays morning excercise will be ${Components[0]}. The main meal of the day is ${Components[1]}. This evening you will ${Components[2]}.`);
}

generateMessage();