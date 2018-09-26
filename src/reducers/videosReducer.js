function videosReducer(state = [], action) {
    switch(action.type) {
        case "VIDEOS_ACTION" :
            return action.payload;
        default :
            return state;
    }
};

export default videosReducer;