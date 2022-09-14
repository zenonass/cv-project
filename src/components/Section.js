import React from "react";

class Section extends React.Component {
    render () {
        const {title, children} = this.props;
        
        return (
            <div className="section">
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
}

export default Section