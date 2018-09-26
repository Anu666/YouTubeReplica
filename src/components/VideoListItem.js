import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {selectedVideoAction} from '../actions/selectedVideoAction';

const VideoListItem = (props) => {
    const video = props.video;
    //const onUserSelected = props.onUserSelected;
    //console.log(video);
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={()=>props.selectedVideoAction(video)} className="list-group-item m-1">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>        
        </li>
    );
};

function mapStateToProps(state) {
    return {
        selectedVideo: state.selectedVideo
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectedVideoAction:selectedVideoAction},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(VideoListItem);

