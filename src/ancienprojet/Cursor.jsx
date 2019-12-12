import React, { Component } from "react";

class Cursor extends Component {
    render() {
        return(
            <div className="Cursor">
                <input readOnly type="text" value={`${this.props.position}/${this.props.position2}`} />  
            </div>
        )
    }
}
export default Cursor;