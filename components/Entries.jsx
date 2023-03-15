import { useState } from "react";
import Address from "./entries/Address";
import Email from "./entries/Email";
import Sel from "./entries/Sel";
import Txt from "./entries/Txt"

const Entries = (props) => {
    /*     const [isPreview, setIsPreview] = useState(false);
    
        const handleSubmit = () => {
            setIsPreview(true);
        }
    
        const handleBack = () => {
            setIsPreview(false);
        } */

    const makeEntries = (entry, key) => {
        // change to switch grammer, but after compile it may be the same performance for babel?
        if (entry.entry_type_cd == "opt") {
            return (
                <Sel key={key} {...entry}></Sel>
            )
        }

        if (entry.entry_type_cd == "txt") {
            return (
                <Txt key={key} {...entry}></Txt>
            )
        }
    }

    const mountEntries = () => {
        if (props.entries != undefined) {
            return props.entries.map((entry) =>
            makeEntries(entry)
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    return (
        <div className="entry-container">
            {mountEntries()}
            {/*<Email isPreview={isPreview} handleBack={handleBack}></Email>
            <Address isPreview={isPreview} handleBack={handleBack}></Address>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleBack}>Back</button> */}
        </div>
    );
}

export default Entries;
