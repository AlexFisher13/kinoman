const initialState = [
    // {Title: 'TestFilm', Year: '2018'}
]

export default function movieState(store=initialState, action) {
    if (action.type === 'SEARCH_MOVIE') {
        return [
            ...store,
            action.payload
        ]
    }
    return store
}