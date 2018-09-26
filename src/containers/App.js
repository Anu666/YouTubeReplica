import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YTSearch from "youtube-api-search";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { videosAction } from '../actions/videosAction';
import { selectedVideoAction } from "../actions/selectedVideoAction"


const API_KEY = "AIzaSyB6FhqOKkSguJf44dzfOIIHZ8Ao-rqeoh8";

class App extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     videos: [],
        //     selectedVideo: null
        // };

        this.videoSearch("React Tutorials");
    }
    
    videoSearch(searchTerm) {
        YTSearch({key: API_KEY,term: searchTerm},(data) => {
            // console.log(data);
            // this.setState({
            //     videos: data,
            //     selectedVideo: data[0]
            // });
            this.props.videosAction(data);
            this.props.selectedVideoAction(data[0]);
        });
    }


    render() {
        return (
            <div>
                <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}  />
                <VideoDetail video={this.props.selectedVideo} />
                <VideoList 
                    //onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
                    //videos={this.state.videos} 
                />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        videos:state.videos,
        selectedVideo:state.selectedVideo,
        term:state.term
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({videosAction:videosAction,selectedVideoAction:selectedVideoAction},dispatch);
}

export default connect(mapStateToProps,matchDispatchToProps)(App);