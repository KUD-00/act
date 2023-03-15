import React, { useEffect, useState, useRef } from "react";
import Overview from "../../components/Overview";
import Entries from "../../components/Entries";
import axios from "axios";

const Input = () => {
    const [data, setData] = useState({})

    useEffect(() => {
        axios
            .get("https://dev1-api.talkappi.com/service/v1/inquiry/get?id=17070&lang_cd=ja")
            .then((res) => {
                setData(res.data)
            })
    }, [])


    return (
        <>
            {data.description &&
                <div className="page-container">
                    <Overview {...data.description}></Overview>
                    <Entries entries={data.entry}></Entries>
                </div>
            }
        </>
    )
}

export default Input;
