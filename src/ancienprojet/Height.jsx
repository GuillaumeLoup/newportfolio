import React,{ Component } from "react";

class Height extends Component {
    
    render() {
    
        return(
            <div className="Height">
                <input readOnly type="text" value={`${this.props.size} px`}/>
            </div>
        )
    }
}

export default Height;