/*The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

title, which is a String representing the title of the movie
studio, which is a String representing the studio that made the movie
rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”*/

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }
}

let movie1 = new Movie("Baahubali","ARKA")
let movie2 = new Movie("RRR","hello studios","10")
let movie3 = new Movie("titanic","james studios");
let movie4 = new Movie("Avatar","James studios","9");
let movie5 = new Movie("13","horror Studios");

let movies = [movie1,movie2,movie3,movie4,movie5];

const getPG = (movie) =>{
    let arr = []
   for ( let mov of movie){
    if(mov.rating ==="PG")
    arr.push(mov)
   }
   console.log(arr);
   return arr;
}

getPG(movies);


let movie6 = new Movie("Casino Royale","Eon Productions","PG13")