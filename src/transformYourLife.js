var loop = function(collection, func){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// 1. Build transform.


// 2. allNumbersMultipliedByThree
var numbers = [1, 2, 3, 4, 5];


// 3. bestSentenceToUpperCase
var bestSentence = "This is the best six week course ever!";

// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};

// 5. multByThree

// 6. upperCase

// 7. contentsCollection

// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 