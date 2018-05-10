import React, { Component } from 'react';
import axios from "axios";

const API_KEY = 'cb02f59c';
const url = 'http://www.omdbapi.com/?i=tt3896198&apikey=' + API_KEY;


class Finder extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        axios.get(url)
            .then(res => {
                const movie = res.data;
                this.setState({ movie });
            })
    }

    render() {
        return (
            <div className='finder'>
                <div>
                    <p>Finded movies: </p>
                </div>
            </div>
        );
    }
}

export default Finder;
