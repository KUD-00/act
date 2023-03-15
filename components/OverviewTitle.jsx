const OverviewTitle = ({title}) => {
    return (
        <div className="title-container">
            <div className="title-flex">
                <div className="title-logo"></div>
                <div className="title-text">{title}</div>
            </div>
        </div>
    )
}

export default OverviewTitle;
