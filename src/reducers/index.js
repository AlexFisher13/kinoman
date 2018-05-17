import marvel from '../store/marvel'
import starWars from '../store/starWars'
import marvelDisney from '../store/marvelDisney'
import dc from '../store/dc'
import marvelFox from '../store/marvelFox'
import ringLord from '../store/ringLord'

export default function movieState(store=marvelFox, action) {
    switch (action.type) {
        case('SEARCH_MOVIE'):
            return [
                ...action.payload.Search
            ]
        case('PLAYLIST_MARVEL'):
            return marvel
        case('PLAYLIST_STAR_WARS'):
            return starWars
        case('PLAYLIST_MARVEL_DISNEY'):
            return [...marvelDisney]
        case('PLAYLIST_DC'):
            return dc
        case('PLAYLIST_MARVEL_FOX'):
            return marvelFox
        case('PLAYLIST_RING_LORD'):
            return ringLord
        default: return store
    }
}