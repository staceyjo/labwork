// // Part I: HTML
// // 3

// Part II: JavaScript Reps
// Easy Going
// Write a for loop that will log the numbers 1 through 20.
for(let x = 1; x <=20; x++) {
    console.log(x)
}

// The commit message should read:
// "Easy Going answered"

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.
// Hint: Think about the increment expression

for (let y = 0; y <=200; y++) {
    if(y % 2 === 0) {
        console.log(y + "is an even number")
    }
}

// The commit message should read:
// "Get Even answered"

// Fizz Buzz
// This is a classic problem that you should get really comfortable solving. 
// If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

for (b = 1; b <= 100; b++) {
    if(b % 3 === 0 && b % 5 === 0) {
        console.log("Fizzbuzz")
    } else if(b % 3 == 0) {
        console.log("Fizz")
    } else if(b % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(b)
    }
}

// The commit message should read:
// "Fizz Buzz answered"


// Wild Wild Life
// Use the following arrays to answer the questions below (name, species ,age, hometown): 
// You should be modifying the elements by accessing them. 
// It is up to you which methods to use.

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
plantee[2]++
console.log(plantee[2])

// 2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City"
console.log(wolfy[3])

// 3. Give D'Art a second hometown by adding "Hawkins"
dart.push("Hawkins")
console.log(dart)

// 4. Porgee decides that Wolfy can't be named "Wolfy" anymore. 
// Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy[0] = "Gameboy"
console.log(wolfy[0])


// The commit message should read:
// "Wild Wild Life answered"

// Yell at the Ninja Turtles
// Create an array with the members of the ninja turtles 
// (Donatello, Leonardo, Raphael, Michaelangelo)
    // Use a for of loop(not a typo - try it out! Try a for of loop) 
    // to call toUpperCase()on each of them and print out the result.
const array1 = ["Donatello", "Leonoardo", "Raphael", "Michaelangelo"];

for (const element of array1) {
    console.log(element.toUpperCase())
}
    // As a developer, you'll be a lifelong learner and constantly encountering new things. 

    // We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. 
    // You've got this!

// The commit message should read:
// "Yell at the Ninja Turtles answered"



// Methods, Revisited
// Here is a list of favMovies:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
console.log(favMovies[8])

// Do the following and console.log the final results 
    // (I have included some thought questions, you don't have to write out an answer for those marked as such):
// Note: if you have to add to the array, feel free to add any movie you'd like

// use the .sort method 
// Thought question: what did this do to the array? Did it permanently alter it?
favMovies.sort()
console.log(favMovies)
console.log("It sorted the items in the array")


// Use the method pop
favMovies.pop()
console.log(favMovies)
console.log("It removed Volver from the list")

// push "Guardians of the Galaxy"
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)
console.log("It added to the end of the list")

// Reverse the array
favMovies.reverse()
console.log(favMovies)


// Use the shift method
favMovies.shift()
console.log(favMovies)
console.log(("Took first element of the movie array off"))

// unshift- what does it return?
favMovies.unshift()
console.log(favMovies)
console.log("It returns the same list, because we didn't put anything in the parens")

// splice "Django Unchained" and add "Avatar" 
//(try finding the index of "Django Unchained", 
// instead of counting it yourself) 
//Thought question: did this permanently alter our array?

console.log(favMovies.indexOf("Django Unchained"))
favMovies.splice(favMovies.indexOf('Django Unchained'), 14, "Avatar");
console.log(favMovies)

// slice the last half of the array 
// (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) 
// - Thought question: did this permanently alter our array?


// store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log your final results


// After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?


// Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?


// The commit message should read:
// "Methods Revisited answered"



// Where is Waldo
// With the following multi-dimensional array

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
// Change "Neff" to "No One"
// Access and console.log "Waldo"

// The commit message should read:
// "Where is Waldo answered"



// Excited Kitten
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
// For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.
// Hint 1
// Hint 2
// Hint 3
// Hint 4
// Hint 5
// Hint 6

// The commit message should read:
// "Excited Kittens answered"



// Find the Median
// Find the median number in the following numsarray, then console.log that number.
// hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something )

// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// Expected output:
// => 15