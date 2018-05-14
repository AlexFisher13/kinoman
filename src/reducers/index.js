const initialState = [
    {Title: "Iron Man", Year: "2008", imdbID: "tt0371746", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"},
    {Title: "The Incredible Hulk", Year: "2008", imdbID: "tt0800080", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"},
    {Title: "Iron Man 2", Year: "2010", imdbID: "tt1228705", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"},
    {Title: "Captain America: The First Avenger", Year: "2011", imdbID: "tt0458339", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"},
    {Title: "Thor", Year: "2011", imdbID: "tt0800369", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BOGE4NzU1YTA…jlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
    {Title: "The Avengers", Year: "2012", imdbID: "tt0848228", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SX300.jpg"},
    {Title: "Iron Man 3", Year: "2013", imdbID: "tt1300854", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTkzMjEzMjY1M15BMl5BanBnXkFtZTcwNTMxOTYyOQ@@._V1_SX300.jpg"},
    {Title: "Thor: The Dark World", Year: "2013", imdbID: "tt1981115", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"},
    {Title: "Guardians of the Galaxy", Year: "2014", imdbID: "tt2015381", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SX300.jpg"},
    {Title: "Captain America: The Winter Soldier", Year: "2014", imdbID: "tt1843866", Type: "movie", Poster: "https://images-na.ssl-images-amazon.com/images/M/M…zQwNl5BMl5BanBnXkFtZTgwMDQ1MDkwMTE@._V1_SX300.jpg"},
    {Title: "Avengers: Age of Ultron", Year: "2015", imdbID: "tt2395427", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTM4OGJmNWM…2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
    {Title: "Ant-Man", Year: "2015", imdbID: "tt0478970", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg"},
    {Title: "Doctor Strange", Year: "2016", imdbID: "tt1211837", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"},
    {Title: "Captain America: Civil War", Year: "2016", imdbID: "tt3498820", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"},
    {Title: "Guardians of the Galaxy Vol. 2", Year: "2017", imdbID: "tt3896198", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SX300.jpg"},
    {Title: "Spider-Man: Homecoming", Year: "2017", imdbID: "tt2250912", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BNTk4ODQ1MzgzNl5BMl5BanBnXkFtZTgwMTMyMzM4MTI@._V1_SX300.jpg"},
    {Title: "Black Panther", Year: "2018", imdbID: "tt1825683", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg"},
    {Title: "Thor: Ragnarok", Year: "2017", imdbID: "tt3501632", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"},
    {Title: "Avengers: Infinity War", Year: "2018", imdbID: "tt4154756", Type: "movie", Poster: "https://ia.media-imdb.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"}
]

export default function movieState(store=initialState, action) {
    if (action.type === 'SEARCH_MOVIE') {
        return [
            ...action.payload.Search
        ]
    }
    return store
}