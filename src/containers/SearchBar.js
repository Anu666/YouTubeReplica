import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { termAction } from "../actions/termAction";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        //this.state = { term: ''};

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        //this.setState({ term: event.target.value });
        this.props.onSearchTermChange(event.target.value);
        this.props.termAction(event.target.value);
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                value={this.props.term}
                onChange={this.onInputChange} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        term:state.term
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({termAction:termAction},dispatch);
}


export default connect(mapStateToProps,matchDispatchToProps)(SearchBar);