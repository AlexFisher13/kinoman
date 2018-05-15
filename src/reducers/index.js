import marvelDisney from '../store/marvelDisney'
import marvelFox from '../store/marvelFox'

export default function movieState(store=marvelFox, action) {
    if (action.type === 'SEARCH_MOVIE') {
        return [
            ...action.payload.Search
        ]
    }
    return store
}