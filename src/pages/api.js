import axios from "axios";

export const getData = async () => {
    return await axios.get("https://st.talkappi.com/service/inquiry?id=99990014&lang_cd=ja");
};