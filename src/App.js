import React, { Component } from 'react';
import './App.css';

function PlayButton(props) {
    const className = props.isMusicPlaying ? 'play active' : 'play';
    return <a onClick={props.onClick} href="#" title="play music" className={className}/>;
}

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {isMusicPlaying: false};
    }

    handleClick(event) {
        this.state.isMusicPlaying ? this.audio.pause() : this.audio.play();

        this.setState(prevState => {
            return{
                isMusicPlaying: !prevState.isMusicPlaying
            };
        });
    };

    render() {
        let status = this.state.isMusicPlaying ? 'Playing' : 'Not playing';
        return (
            <div>
                <h1>{status}</h1>
                <PlayButton
                    onClick={this.handleClick.bind(this)}
                    isMusicPlaying={this.state.isMusicPlaying}
                />
                <audio ref={(audioTag) => { this.audio = audioTag}} id="audio"/>
            </div>
        );
    }
}

export default Container;
