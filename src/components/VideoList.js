import React from "react";
import VideoListItem from "./VideoListItem";
import { connect } from "react-redux";

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onUserSelected={props.onVideoSelect}
                key={video.etag}
                video={video} />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

function mapStateToProps(state){
    return{
        videos:state.videos
    };
}
export default connect(mapStateToProps)(VideoList);