import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div class="entry-preview">
                    <div class="preview-title">{this.props.title}</div>
                    <div class="preview-answer">{this.props.value}</div>
                </div>
            </>
        )
    }
}

export default Preview;
