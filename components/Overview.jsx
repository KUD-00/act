import OverviewMenu from "./OverviewMenu";
import OverviewTitle from "./OverviewTitle";
import OverviewBanner from "./OverviewBanner";

const Overview = ({title}) => {
    return (
        <div className="overview-container">
            <OverviewTitle title={title}></OverviewTitle>
            <OverviewBanner></OverviewBanner>
            <OverviewMenu></OverviewMenu>
        </div>
    )
}

export default Overview;
