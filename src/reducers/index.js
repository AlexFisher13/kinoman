const initialState = [
    {Title: 'TestFilm', Year: '2018'},
    {Title: 'TestFilm2', Year: '2019'},
    {Title: 'TestFilm3', Year: '2020'},
]

export default function movieState(store=initialState, action) {
    if (action.type === 'SEARCH_MOVIE') {
        return [
            ...store,
            {Title: action.payload, Year: '2021'}
        ]
    }
    return store
}