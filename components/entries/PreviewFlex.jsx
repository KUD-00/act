import React from 'react';

class PreviewFlex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="sub-entry-preview">
                    <div className="entry-preview-flex">
                        <div className="flex-item-preview">
                            <p className="preview-title">郵便番号</p>
                            <p className="preview-answer">131-0043</p>
                        </div>
                        <div className="flex-item-preview">
                            <p className="preview-title">都道府県</p>
                            <p className="preview-answer">東京都</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PreviewFlex;
