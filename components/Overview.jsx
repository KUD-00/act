import OverviewMenu from "./OverviewMenu";
import OverviewTitle from "./OverviewTitle";

const Overview = (props) => {
    return (
        <div className="overview-container">
            <OverviewTitle {...props.descriptionTitle}></OverviewTitle>
            <OverviewMenu></OverviewMenu>
        </div>
    )
}

export default Overview;
