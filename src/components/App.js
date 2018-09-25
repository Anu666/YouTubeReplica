import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const API_KEY = "AIzaSyB6FhqOKkSguJf44dzfOIIHZ8Ao-rqeoh8";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch("React Tutorials");
    }
    
    videoSearch(searchTerm) {
        YTSearch({key: API_KEY,term: searchTerm},(data) => {
            console.log(data);
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }


    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}  />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

export default App;