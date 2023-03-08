import React from "react";
import Footer from "../../../components/Footer";

const Inquiry = (props) => {
    return (
        <>
        <div className="">
            {props.children}
        </div>
            <Footer></Footer>
        </>
    )
}

export default Inquiry;
