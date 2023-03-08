import axios from "axios";
class Util {
    constructor() {

    }

    fetchData = async (url) => {
        try {
            const response = await axios.get("https://st.talkappi.com/service/inquiry?id=17050&lang_cd=ja" + url)
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }
}