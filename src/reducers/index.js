
export default function movieState(store=[], action) {
    if (action.type === 'SEARCH_MOVIE') {
        return [
            // ...store,
            ...action.payload.Search
        ]
    }
    return store
}