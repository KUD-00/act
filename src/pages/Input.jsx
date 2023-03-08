import React, { useEffect, useState } from "react";
import Overview from "../../components/Overview";
import Entries from "../../components/Entries";
import Navigation from "../../components/Navigation";
import Inquiry from "./templates/Inquiry";
import axios from "axios";

const Input = () => {
    const [data, setData] = useState([]);
    const apiData = ({ "$": { "inquiry_id": "17050", "base_ver_id": null, "bot_id": "17", "inquiry_name": "#24220", "inquiry_type_cd": "000", "inquiry_status_cd": "01", "support_lang_cd": "ja,en", "class_cd": "", "inquiry_cd": "17050", "scene_cd": "", "label_id": "15", "secret_mode": "0", "password": "", "template_cd": "", "entry_count": "4", "duration": "5", "inquiry_data": { "cancelable": "0", "cancel_policy": [], "receiption_id_prefix": "", "gtm_tag_id": "", "payment": [] }, "start_date": null, "end_date": null, "present": null, "redirect_url": "", "mail_member_flg": "1", "mail_user_flg": "0", "mail_users": "", "member_mail_template": "inquiry_user_mail_template", "member_mail_from": "", "user_mail_template": "", "user_in_charge": "3514", "support_flg": "0", "faq_scene": "", "delete_flg": "0", "upd_user": "1", "upd_time": "2023-03-01 16:32:49" }, "description": { "title": "回答画面", "image": ["https:\/\/s3-ap-northeast-1.amazonaws.com\/contents.talkappi.com\/17\/inquiry\/1677573613.jpg"], "confirm_info": null, "complete_info": null, "input_info": [{ "title": "規約", "description": "・本フォームからご希望のチケットやオプションをお申込みください。\n\n・本フォームから体験日の前日23:59までご予約が可能です。当日予約はお電話（047-355-5555 内線 2445）にてお問合せ下さい。\n\n・宿泊者の方、宿泊者以外の方もお申込み頂けます。\n\n・宿泊者の方は、受付時にルームナンバーとお名前を確認させて頂きます。\n\n・個人使用以外を目的とする写真撮影、及びビデオ撮影禁止しておりますので予めご了承ください。\n・動きやすい服装、平底の靴でお越し下さい。\n\n・年齢制限はございませんが、身長146cm以下のお子様はコックピットから外の景色が見えづらい場合がございます。その場合は保護者様の膝上に座って体験することをお勧めしております。\n・当店ではパイロットシャツのレンタルをご用意しております。また、ご自身のパイロット制服をお持ちの方はご持参いただいてもかまいません。\n・フライトシミュレーターはとても繊細な機器の為、システム上に稀に不具合が生じる場合がございます。 その際は事前にお客様にご連絡いたします。", "fold": "show" }] }, "entry": [{ "no": "1", "lang_cd": "ja", "label_no": "1", "title": "選択ください", "title_description": "", "placeholder": "", "description": "", "entry_type_cd": "opt", "must_answer": "1", "required": "0", "input_rules": [], "next_page": "0", "actions": "", "entry_data": ["タイトル１", "場所２"], "section_no": "1" }, { "no": "2", "lang_cd": "ja", "label_no": null, "title": "メール", "title_description": "", "placeholder": "", "description": "", "entry_type_cd": "txt", "must_answer": "1", "required": "0", "input_rules": { "type": "mail", "regex": "\"^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$\"", "minute_span": "", "min_length": "", "max_length": "", "num_min": "", "num_max": "", "confirm": false, "range": "", "periods": [{ "start_calendar": "", "start_date": "", "end_calendar": "", "end_date": "", "span": "", "weekday": [], "holiday": "", "excludedDates": [], "mode": "", "limit": "", "start_time": "", "end_time": "", "excluded_times": [{ "start_time": "", "end_time": "" }], "display_mode": "" }], "send_mail": 0 }, "next_page": "0", "actions": "", "entry_data": [], "section_no": "1" }, { "no": "3", "lang_cd": "ja", "label_no": null, "title": "メール２", "title_description": "", "placeholder": "", "description": "", "entry_type_cd": "txt", "must_answer": "1", "required": "0", "input_rules": { "type": "mail", "regex": "\"^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$\"", "minute_span": "", "min_length": "", "max_length": "", "num_min": "", "num_max": "", "confirm": true, "range": "", "periods": [{ "start_calendar": "", "start_date": "", "end_calendar": "", "end_date": "", "span": "", "weekday": [], "holiday": "", "excludedDates": [], "mode": "", "limit": "", "start_time": "", "end_time": "", "excluded_times": [{ "start_time": "", "end_time": "" }], "display_mode": "" }], "send_mail": 1 }, "next_page": "0", "actions": "", "entry_data": [], "section_no": "1" }, { "no": "4", "lang_cd": "ja", "label_no": null, "title": "メール３", "title_description": "", "placeholder": "", "description": "", "entry_type_cd": "txt", "must_answer": "1", "required": "0", "input_rules": { "type": "mail", "regex": "\"^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$\"", "minute_span": "", "min_length": "", "max_length": "", "num_min": "", "num_max": "", "confirm": false, "range": "", "periods": [{ "start_calendar": "", "start_date": "", "end_calendar": "", "end_date": "", "span": "", "weekday": [], "holiday": "", "excludedDates": [], "mode": "", "limit": "", "start_time": "", "end_time": "", "excluded_times": [{ "start_time": "", "end_time": "" }], "display_mode": "" }], "send_mail": 0 }, "next_page": "0", "actions": "", "entry_data": [], "section_no": "1" }], "branch": [] })

    async function fetchData() {
        try {
            const response = await axios.get("https://st.talkappi.com/service/inquiry?id=17050&lang_cd=ja")
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])
 
    const makeChildren = () => {
        const data = {
            descriptionTitle: {
                title: "title"
            }
        }

        return (
            <>
                <Overview {...data}></Overview>
                <Navigation></Navigation>
                <Entries entries={apiData.entry}></Entries>
            </>
        )
    }
    return (
        <div className="page-container">
            <Inquiry>{makeChildren()}</Inquiry>
        </div>
    )
}

export default Input;
