import React,{ Component } from "react";

class Width extends Component {
    
    render() {

        return(
            <div className="Width">
                <input readOnly type="text" value={`${this.props.size} px`} />
            </div>
        )
    }
}

export default Width;