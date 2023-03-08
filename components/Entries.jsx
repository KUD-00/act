import Sel from "./entries/Sel";
import Txt from "./entries/Txt"

const Entries = (props) => {
    const handleSubmit = () => {
    }

    const makeEntries = (entry, key) => {
        // change to switch grammer, but after compile it may be the same performance for babel?
        if (entry.entry_type_cd == "opt") {
            return (
                <Sel key={key} {...entry}></Sel>
            )
        }

        if (entry.entry_type_cd == "txt") {
            return (
                <Txt key={key}></Txt>
            )
        }
    }

    const entries = props.entries.map((entry) =>
        // <BaseEntry entry={entry} key={entry.id}></BaseEntry>
        makeEntries(entry)
    )

    return (
        <div className="entry-container">
                {entries}
                <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Entries;
