import { useReducer, useState, createContext } from "react";
import MultiSelectionFn from "./MultiSelectionFn";

const GlobalContext = createContext()

function reducer(state, action) {
    return {
      age: state.age + action.type
    };
}

const EntriesFn = () => {
    const initialData = {
        date: 0
    }

    const [state, dispatch] = useReducer(reducer, initialData)

    const data = {
        multiSelection:
            [{
                value: "balloon",
                requirement: 4,
                data: {
                    date: {

                    }
                }
            },
            {
                value: "flower",
                requirement: 2,
            },
            {
                value: "dinner",
                requirement: 3,
            }]
    }

    return (
        <div className="entry-container">
            {console.log(state.date)}
            <GlobalContext.Provider value={{dispatch: dispatch, state: state}}>
                    <MultiSelectionFn selections={data.multiSelection} ></MultiSelectionFn>
            </GlobalContext.Provider>
        </div>
    )
}

export default EntriesFn;