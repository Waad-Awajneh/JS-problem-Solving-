// Ex1: Write a function that takes a number as input and returns true if the number is less than or equal to zero, otherwise return false.
function isNegativeOrZero(variable) {

    return (variable <= 0) ?  true :  false;
  
}
console.log(isNegativeOrZero(-1));


// Ex2: Print the Next integer from the input number (ex: input= 1 -> next int= 2, input= 12 -> next int= 13)


function nextInt(n1) {
  return ++n1;
}
console.log(nextInt(5));




//Ex3: Write a function that takes an array of strings and returns only the strings with numbers in it as an array. And return an empty array, If there are no strings containing numbers.
function checkArray(array) {
  result = array.filter((ele) => {
    return (/\d+/.test(ele)) 
      
  });
  return result;
}
console.log(checkArray(["AA", "sss", "waad"]));



//Ex4: Develop a JS Code to check if a number is even or odd using recursion
function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return "even";
  } else if (num  % 2 == 1) {
    return "odd";
  } else {
    return "not a number";
  }
}

console.log(isEvenOrOdd("5"));



//   Ex5: Write a function to swap all instances of string ch1 with string ch2 and vice versa  (charSwap( "aaddeee", "a", "d") ➞ "ddaaeee")

function swap(str, ch1, ch2) {
  let arr = str.split("").map((ele) => {
    if (ele === ch1) {
      return ch2;
    } else if (ele === ch2) {
      return ch1;
    } else {
      return ele;
    }
  });
  return arr.join("");
}

console.log(swap("aaddeee", "e", "a"));

//   Ex6: Return all the names in this array  [“Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", “Dareen”]

function getNames(array) {
  return array.map((ele) => {
    return ele;
  });
}
console.log(getNames(["Rawan", "Jafar", "Muhammad", "Muhammad   ", "Esraa"]));

// Ex7: Use forEach to  Return all the names in the previous array

function names(array) {
    let n="";
  array.forEach((ele) => {
   n=n+ele+" " ;
  });
  return n;
}
console.log( names(["Rawan", "Jafar", "Muhammad", "Muhammad", "Esraa", "Dareen"]));



//   Ex8: Project an array of series into an array of {id, title} pairs using forEach()

let newSeries = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];


function idAndTittle(array) {
  newArray = [];
  array.forEach((ele) => {
    newArray.push({ id: ele.id, title: ele.title });
  });
  return newArray;
}

console.log(idAndTittle(newSeries));


// Ex 9: Use map() now to implement the same previous functionality
function idAndTittleUsingMap() {
  return newSeries.map((e) => {
    return { id: e.id, title: e.title };
  });
}

console.log(idAndTittleUsingMap());

// Ex 10: Use filter() to return the series with a rating under 5

function ratingUnderFive(array) {
  return array.filter((ele) => {
    return ele.rating < 5;
  });
}
console.log(ratingUnderFive(newSeries));



//   Ex 11: Use reduce()  function to return the longest string in an array of strings.

function longestStr(array) {
  return array.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
  });
}

console.log(longestStr(["Java", "JavaScript", "Python", "C++", "PHP"]));

//   Ex 12: Create a function displayName that, given the pokemon data, below, uses reduce to return an array containing the names of the characters.
let pokemonData = [
  {
    game_index: 76,
    version: {
      name: "red",
      url: "https://pokeapi.co/api/v2/version/1/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "blue",
      url: "https://pokeapi.co/api/v2/version/2/",
    },
  },
  {
    game_index: 76,
    version: {
      name: "yellow",
      url: "https://pokeapi.co/api/v2/version/3/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "gold",
      url: "https://pokeapi.co/api/v2/version/4/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "silver",
      url: "https://pokeapi.co/api/v2/version/5/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "crystal",
      url: "https://pokeapi.co/api/v2/version/6/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "ruby",
      url: "https://pokeapi.co/api/v2/version/7/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "sapphire",
      url: "https://pokeapi.co/api/v2/version/8/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "emerald",
      url: "https://pokeapi.co/api/v2/version/9/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "firered",
      url: "https://pokeapi.co/api/v2/version/10/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "leafgreen",
      url: "https://pokeapi.co/api/v2/version/11/",
    },
  },
  {
    game_index: 132,
    version: {
      name: "diamond",
      url: "https://pokeapi.co/api/v2/version/12/",
    },
  },
];

function displayName(array) {
  return array.reduce((acc, curr) => {
    return acc.concat(curr.version.name);
    }, []).join(', ');

}
console.log(displayName(pokemonData));



//   Ex13: Write a function that takes the following array of objects, uses binary search to search for certain email input from the user, and return its value.









// Ex14: What is the output of the following JS code segments? and Why?
