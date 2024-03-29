// 1. Implement topWatchlistedMoviesAmongFriends method that will return an array of top four movie titles, that have been most watchlisted by friends of a given user.
// 2. If there are no such movies, then an empty list should be returned or as many movies as possible.
// 3. Movies that have equal watchlist count, should be ordered alphabetically.


let movies = [{
    "title": "The Shawshank Redemption",
    "duration": "PT142M",
    "actors": [ "Tim Robbins", "Morgan Freeman", "Bob Gunton" ],
    "ratings": [],
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
  },
  {
    "title": "The Godfather",
    "duration": "PT175M",
    "actors": [ "Marlon Brando", "Al Pacino", "James Caan" ],
    "ratings": [],
    "watchlist": [62289, 66380, 34139, 6146]
  },
  {
    "title": "The Dark Knight",
    "duration": "PT152M",
    "actors": [ "Christian Bale", "Heath Ledger", "Aaron Eckhart" ],
    "ratings": [],
    "watchlist": [51417, 62289, 6146, 71389, 7001]
  },
  {
    "title": "Pulp Fiction",
    "duration": "PT154M",
    "actors": [ "John Travolta", "Uma Thurman", "Samuel L. Jackson" ],
    "ratings": [],
    "watchlist": [7001, 9250, 34139, 6146]
  },
  {
    "title": "Schindler's List",
    "duration": "PT195M",
    "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    "watchlist": [15291, 51417, 7001, 9250, 93707]
  }];

let users = [{
        "userId": 15291,
        "email": "Constantin_Kuhlman15@yahoo.com",
        "friends": [7001, 51417, 62289]
    },
    {
        "userId": 7001,
        "email": "Keven6@gmail.com",
        "friends": [15291, 51417, 62289, 66380]
    },
    {
        "userId": 51417,
        "email": "Margaretta82@gmail.com",
        "friends": [15291, 7001, 9250]
    },
    {
        "userId": 62289,
        "email": "Marquise.Borer@hotmail.com",
        "friends": [15291, 7001]
 }];


function getUserWatchList(userNum) {
    var userWatchList = [];
    for(let i = 0; i < movies.length; i++){
        for(let j= 0; j < movies[i].watchlist.length; j++){
            if(movies[i].watchlist[j] == userNum) {
                userWatchList.push({name: movies[i].title, count: 1});
                break;
            }
        }
    }
    return userWatchList;
}


function topWatchlistedMoviesAmongFriends(userMovieList) {
    for(let key in movies){
        // console.log(movies[key].title);
    }
}

var userList = getUserWatchList(7001);
console.log(userList);
topWatchlistedMoviesAmongFriends();