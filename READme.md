#Transform Your Life (Console-Driven-Development)

## Git Workflow

**Fork the Repository**

1. On Github's website, navigate to [Transform Your Life](https://github.com/TelegraphPrep/04-2016-transformYourLife)
2. Click the "Fork" button near the top right part of the screen.
3. In the popup box, select your Github profile to copy the repository from the TelegraphPrep Github profile to your profile.

**Clone the Repository**

4. Once the repository is on your Github profile, navigate to your fork of that repository on Github's website.  
5. Click the "Copy to clipboard" button to copy the Git link for the repository.  
6. In your terminal, navigate to the folder you want to copy the repository into.  
7. In your terminal, type git clone [pasteTheLinkYouJustCopiedHere] then hit enter to clone the repository from Github to your local machine.  

**Open the Repository on Your Local Machine**

In your terminal, navigate to the repository.
View the location of that repository in your finder by typing open . into the terminal.  
To open the repository in Sublime, drag the repository folder over the Sublime icon in your Dock (at the bottom of the screen). All of the files within the repository should now be viewable in the sidebar in Sublime.

**More information on [Git Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki/blob/master/gitWorkflow.md)

## Pair Programming Dynamics
See the following document on [Pairing Dynamics Workflow](https://github.com/TelegraphPrep/PrepPlus-Wiki)

## About the Sprint:

### Goals:

1. Practice building higher order functions with other higher order functions.
2. Continue to abstract away functionality.
3. Come away with a small library of functions

## Lesson: Transform Your Life

Today you're going to focus on building and utilizing your newly minted `transform`
function. `transform` makes it easier for us to transform elements in a collection and collect the new values. `transform` is a great example of a `higher order function` built on top of a `higher order function` because it utilizes our previously built `loop` function in order to achieve its purpose.

The exercises below will take you through your journey toward mastering `transform`, and move you closer toward understanding `higher order function` inception. It is ***vital*** that you make sure you understand each line of code as you type it. This concept is confusing to most, so feel free to ask questions to get a clearer understanding of what's going on.

Good luck!


### Build Transform:

`transform` takes two parameters, collection and callback, loops through the collection transforming each item with the callback. It then collects each item into a results array and returns the final results to the user.

Finally, `transform` utilizes `loop` to achieve its purpose.

Example:

```javascript

var numbers = [1, 2, 3, 4, 5];
var allValsMultipliedByTwo = transform(numbers, function(number){
	return number * 2;
});

console.log(allValsMultipliedByTwo) // [2, 4, 6, 8, 10];

```


### allNumbersMultipliedByThree

Use your `transform` with the `numbers` array to create a new array where each value is multiplied by 3. Save that array into a variable called `allNumbersMultipliedByThree`.

Example:

```javascript

console.log(allNumbersMultipliedByThree);
//[3, 6, 9, 12, 15];

```


### bestSentenceToUpperCase

Use your `transform` with the `bestSentence` string to create a new string where each word is in all caps. Save it into a variable named `bestSentenceToUpperCase`

```javascript

console.log(bestSentenceToUpperCase) // "THIS IS THE BEST SIX WEEK COURSE EVER!"

```

### collectedContents

Use your `transform` with the `person` object to create a new **array** of arrays that contain all of the keys and values inside of our `person` object. Save it into a variabled named `collectedContents`

```javascript

console.log(collectedContents); // [ ['name', 'Jon'], ['greatestFear', 'fear itself'] ];

```

## Lesson: Enter the Matrix

So that was fun - we created 3 whole new variables using our `transform` function showing that we know how to wield it; great for us! 

Fortunately, that's only the beginning. The ***power*** of functional programming is upon you and this next lesson is going to blow your mind.

Let's first take a look at the pattern we've been using:

```javascript

var numbers = [1, 2, 3, 4, 5];

// saving the return value of transform to our variable
var allValsMultipliedByTwo = transform(numbers, function(number){
	return number * 2;
});

console.log(allValsMultipliedByTwo) // [2, 4, 6, 8, 10];


```

That's great. It does what we want for that particular collection, `numbers` on that particular line. But lets say we wanted to transform `numbers2 = [6, 7, 8, 9, 10]` by 2 as well. Sure, could use the same pattern as above or we could take our function inception further and embed the instance of `transform` that we built in a ***new*** function to be used over and over again.

Let's see what that would like:

```javascript

var numbers = [1, 2, 3, 4, 5, 6];
var numbers2 = [6, 7, 8, 9, 10];

// wrap our transform in a new function
var multByTwo = function(collection){
	// return the array that transform returns;
	return transform(numbers, function(number){
		return number * 2;
	});
};


var numbersMultByTwo = multByTwo(numbers);
var numbersTwoMultByTWo = multByTwo(numbers2);

```


As you can see, we have wrapped our transform functionality in our `multByTwo` function and are returning its return value (an array) to the user.

Do you hear that? That's the sound of your mind being blown! I'm sure you've beeng wondering why we're focused so much on functional programming - well, this is the reason! We can build very flexible functions VERY quickly using functionality we've already built. 

We don't have to type out how to loop through the array, or type out how to push the values because that ***already exists***. 

The next handful of exercises will help you practice this skill that I already know you're wanting to build.

### multByThree

`multByThree` takes a `collection` as a parameter and returns a new collection containing each value multplied by 3.

***Rebuild*** (not copy) the functionality you built for `allNumbersMultipliedByThree` and wrap it in a function named `multByThree`.

Test your function on multiple collections.

Example:

```javascript

	var numbers = [1, 2, 3, 4, 5];
	var multipliedByThree = multByThree(numbers);
	console.log(multipliedByThree) // [3, 6, 9, 12, 15];


```

### upperCase
	
`upperCase` takes a `string` as a parameter and returns a new string with each word made to be all caps.

***Rebuild*** (not copy) the functionality you built for `bestSentence` and wrap it in a function named `upperCase`.

Test your function on multiple strings.

Example: 

```javascript

	var bestSentence = "This is the best six week course ever!";
	var bestSentenceUpperCased = upperCase(bestSentence);
	console.log(bestSentence) // "THIS IS THE BEST SIX WEEK COURSE EVER!";

```

### contentsCollection
	
`contentsCollection` takes an `object` as a parameter and returns an **array** containing all of the keys and values.

***Rebuild*** (not copy) the functionality you built for `collectedContents` and wrap it in a function named `contentsCollection`.

```javascript

	var person = {name: 'Jon', greatestFear: 'fearItself'};
	var collectedContents = contentsCollection(person);
	console.log(collectedContents); // ['name', 'Jon', 'greatestFear', 'fear itself'];

```

## Quick Lesson: Expanding our Flexibility

So, this is awesome. After taking an extra step to encapsulate our `transforms` in functions we can reuse the functionality we've built over and over. 

However, there's one problem: As you've probably already noticed, each of our functions is constricted to do ***exactly what its been built to do*** which is never what we want.

The idea of flexibility is not only exciting for developers in terms of being able to work from wherever (Cuba, Bali, and Spain are my favorites) but also in terms of `function flexibility`. 

We inherently want our functions to be able to work with similar problems in different ways.

Take my multiplyByTwo for example:

```javascript

var multiplyByTwo = function(collection){
	return transform(collection, function(number){
		return number * 2;
	});
};


```

This works fine if we want to multiply each element in a collection by 2, but what if we wanted to multiply by 3? Or 4? Or Pi? I demand a function that multiplied by **whatever**. There's no way we should be building that out ***every single time***.

So, what can we do about it? Let's make our function more flexible by allowing the *user* to input the factor to multiply by.

What would this look like?

```javascript

			// inputNum param allows our user to pass in a number
var multiplyByWhatever = function(collection, inputNum){
	return transform(collection, function(number){
		return number * inputNum;
	});
};

```

Now our function is a lot more flexible! Instead of having to waste time building multiple functions for multiple numbers - we have **one** function for all cases.

Powerful concept, yeah?

Let's see it in action:

```javascript

var numbers = [1, 2, 3, 4, 5];

var numbersMultipliedBy2 = multiplyByWhatever(numbers, 2);
var numbersMultipliedBy5 = multiplyByWhatever(numbers, 5);
var numbersMultipliedByPi = multiplyByWhatever(numbers, Math.PI);

console.log(numbersMultipliedBy2) // [2, 4, 6, 8, 10];
console.log(numbersMultipliedBy5) // [5, 10, 15, 20, 25];
console.log(numbersMultipliedByPi) // I'll let you figure it out.


```

So now you know about flexibility! The next couple of exercises will **expand** your mind to think about flexibility when building out functionality.


### multByWhatever

`multByWhatever` takes a `collection` and an `inputNum` and returns a new array containing each value multiplied by the `inputNum`.

***Rebuild*** this function from scratch -- do not copy your `multByThree` function.

Example from above:

```javascript

	var numbers = [1, 2, 3, 4, 5];
	var numbersMultipliedBy2 = multiplyByWhatever(numbers, 2);
	console.log(numbersMultipliedBy2) // [2, 4, 6, 8, 10];

```

### divideByWhatever
	
`divideByWhatever` takes a `collection` and an `inputNum` and returns a new array containing each value divided by the `inputNum`.


### switchCase 

`switchCase` takes a `sentence` and a `case` as parameters and returns the string based on the case.

* [ ] `if` the `case` is 'lower', return the string to all lower case.
* [ ] `if` the `case` is 'upper', return the string to all upper case.

```javascript

	var bestSentence = "This is the best six week course ever!";
	var bestSentenceUpper = switchCase(bestSentence, 'upper');
	console.log(bestSentenceUpper) // "THIS IS THE BEST 6 WEEK COURSE EVER!";

	var bestSentenceLower = switchCase(bestSentenceUpper, 'lower');
	console.log(bestSentenceLower) // "this is the best 6 week course ever!";

```

### contentsCollector
	
`contentsCollector` takes an `object` and a `specifier` and returns an array containing:

* [ ] `if` the `specifier` is 'keys' return an array containing all of the keys.  
* [ ] `if` the `specifier` is 'values' return an array containing all of the values.  
* [ ] `if` there is no specifier passed in, return an array containing the keys and values.  

```javascript

	var person = {name: 'Jon', greatestFear: 'fearItself'};
	var allKeysInPerson = contentsCollector(person, 'keys');
	console.log(allKeysInPerson) // ['name', 'greatestFear'];

	var allValuesInPerson = contentsCollector(person, 'values');
	console.log(allValuesInPerson)  // ['Jon', 'fearItself'];

	var keysAndValuesInPerson = contentsCollector(person);
	console.log(keysAndValuesInPerson) // ['name', 'Jon', 'greatestFear', 'fearItself'];

```

## Lesson: Function Libraries

We've now gone through three different interations of functional programming. The first used our higher order function, `transform`, to transform arrays and save the contents.

We then abstracted that functionality away by embedding our tailored `transform` functions within other functions. This allowed us to use that specific functionality on any array, at any time.

We then added more flexibility to our abstracted functions by adding in multiple ways they can work based on what the user wants to accomplish. This allowed us to refrain from rebuilding functionality over and over again and gave the **user** the power to choose what they want.

Now that we know we can use higher order functions like `loop` and `transform` to achieve such powerful functionality let's focus on building out more HOF's that will make our life easier.

The rest of this exercise will take you through building a library of higher order functions, some of them built on top of `loop`. You will then use your library to achieve even cooler stuff.

### makeArray

`makeArray` takes a `number` as a parameter and returns an array starting at the integer 0 up until that number.

Use loop to achieve this functionality.


```javascript

	var arrayWith5Elements = makeArray(5);
	console.log(arrayWith5Elements) // [0, 1, 2, 3, 4];

```

### makeRow
	
`makeRow` takes an array, that we're going to call `row`, and replaces each value with an object with one property: `state`, set to 'null'.

Use either `transform` or `loop` to accomplish this.


```javascript

	var newRow = makeRow(makeArray(4));
	console.log(newRow) // [{state: null}, {state: null}, {state: null}, {state: null}];

```



### makeTicTacToeBoard

A `matrix` is an `array` containing other arrays. A lot of the time they are used simulating board games (think checkers or connect four). Each `array` inside of a matrix can be considered a `row`, while each index inside of each `array` can be considered a `column`

Example:

```javascript

		// all the 1's are a column
	var matrix =[[1, 2, 3, 4], // the array is a row
	 			 [1, 2, 3, 4]
	 			 [1, 2, 3, 4]
	 			 [1, 2, 3, 4]]

	console.log(matrix[0]); // [1, 2, 3, 4];

```

`makeTicTacToeBoard` takes a `number` as a parameter and creates a matrix that contains as many rows and columns as the number specifies.

Use your `makeArray` function to solve this 
	
example:

```javascript

	var myTicTacToeBoard = makeTicTacToe(3);
	console.log(myTicTacToeBoard)

	I now have a 3 x 3 ticTacToe board.
	/* 
	   [
		[{state: null}, {state: null}, {state: null}],
	    [{state: null}, {state: null}, {state: null}], 
	    [{state: null}, {state: null}, {state: null}],
	   ]
	*/

```


### EXTRA CREDIT:

By now you've definitely caught on to what we're accomplishing here. Using your function library you have learned how to build a ticTacToe board Awesome!

Now, to actually USE this board we're going to have to do something very special that's somewhat unrelated to higher order functions. Trust me here, it's going to make sense in a second.

### gameCreator 
	
`gameCreator` will take a `ticTacToeBoard`, add it to an `object` set to the key 'gameBoard' property and return it to the user. The `object` will **also** have a `count` property set to 0.

Example:
	
```javascript

	var gameOne = gameCreator(makeTicTacToeBoard(3));

	console.log(gameOne) // {
		gameBoard: [{state: null}, {state:null}...],
		count: 0,
	};

```

### setXorO:  

`setXorO` takes two parameters:   

1. a `game` object created with `gameCreator`.   
2. a set of `coordinates` that will always be an array,   
	
* [ ] `setXorO` will traverse the game board set on the `gameBoard` property of our `game` object.  

* [ ] It will use the `coordinates` to find which square on the `gameBoard` it should place an `x` or an `o`. The coordinates should correspond with the `row` and `column` in the game board matrix.  


* [ ] Once it finds the correct square (object in the matrix), it will check the `state` property.  
	 * [ ] if the state is 'null', check the count   
	 	* [ ] if the count is even (or 0), change the `state` to 'x'.   * [ ] increment the count by 1    
	 	* [ ] if the count is odd, change the `state` to 'o'  
	 		* [ ] increment the count by 1  
	 	
	 * [ ] if the state is already set, alert('this square has already been chosen'); 

Example:

```javascript

	 var myTicTacToeBoard = makeTicTacToe(3);
	 var gameOne = gameCreator(myTicTacToeBoard);

	 setXorO(gameOne, [0, 0]);

	 console.log(gameOne.gameBoard);

	 /* 
	   [
		[{state: 'x'}, {state: null}, {state: null}],
	    [{state: null}, {state: null}, {state: null}], 
	    [{state: null}, {state: null}, {state: null}],
	   ]
	*/

	console.log(gameOne.count); // 1

```
	
We will call `setXorO` on `gameOne` again so our second player can take their turn.

```javascript

	setXorO(gameOne, [0, 2]);


	console.log(gameOne.gameBoard);

	 /* 
	   [
		[{state: 'x'}, {state: null}, {state: 'o'}],
	    [{state: null}, {state: null}, {state: null}], 
	    [{state: null}, {state: null}, {state: null}],
	   ]
	*/

	console.log(gameOne.count); // 2
```

If we call setXorO again on a square that's been set it will alert us:

```javascript


	setXorO(gameOne, [0, 0]);

	// "this square has already been chosen";

```
	

# Done

You have now completed Week 3 of Telegraph Prep+! You should feel very proud of yourself -- graduating from fundamentals to Higher Order Functions is not an easy feat. We aren't done yet, but by this point you should feel **very** comfortable using `loop` and `transorm`. 

If you don't, go back (with your partner preferrably) and work on understanding exactly what's going on. Next week we will continue to build out our function library, and use them to start some actual applications.
