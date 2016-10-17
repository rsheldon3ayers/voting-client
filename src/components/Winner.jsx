import React from 'react';

export default React.CreateClass({
    render: function () {
        return <div className="winner">
            Winner is {this.props.winner}!
            </div>;
    }
})