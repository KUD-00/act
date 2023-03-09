import React from 'react';
import BaseEntry from './BaseEntry';

class Address extends BaseEntry{
    constructor(props) {
        super(props);
        this.state = {
            post: "",
            prefectures: "",
            city: "",
            banchi: "",
            building: ""
        };
    }

    validate = () => {
    };

    handleChange = e => {
    };

    _render() {
        return (
            <>
                <div className="sub-entry">
                    <div className="entry-flex">
                        <div className="flex-item">
                            <p className="title">郵便番号</p>
                            <input type="text" className="txt" value={this.state.post} placeholder="123-4567" />
                            <p className="validation-error">半角数字で入力してください（ハイフン省略可）</p>
                        </div>
                        <div className="flex-item">
                            <p className="title">都道府県</p>
                            <input type="text" className="txt" value={this.state.prefectures} placeholder="〇〇県" />
                        </div>
                    </div>
                </div>
                <div class="sub-entry">
                    <div class="entry-flex">
                        <div class="flex-item">
                            <p class="title">市区町村</p>
                            <input type="text" class="txt" value="" placeholder="〇〇市" />
                        </div>
                        <div class="flex-item">
                            <p class="title">番地</p>
                            <input type="text" class="txt" value="" placeholder="12-34" />
                        </div>
                    </div>
                </div>
                <div class="sub-entry">
                    <div class="flex-item">
                        <p class="title">建物名・部屋番号（任意）</p>
                        <input type="text" class="txt" value="" placeholder="〇〇市" />
                    </div>
                </div>
            </>
        )
    }
}

export default Address;
