import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState({});

    // Similar to componentDidMount and componentDidUpdate:
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
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                        {data.description.title}
                    </button>
                </div>
            }
        </>
    );
}
export default Test