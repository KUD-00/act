const TalkappiEntryFront = function() {


	/* エントリーコンテナ共通部分 INPUTb*/
	const _entryContainer = ``;
	/* エントリーコンテナ共通部分 CONFIRM */
	const _entryConfirmContainer = `<div class="confirm-entry-container">
										<div class="confirm-title">{title}</div>
										<div class="confirm-answer">{answer}</div>
									</div>`;

	const _entryConfirmContainer2 = `<div class="confirm-entry-container">
		<div class="confirm-title">{title}</div>
		<div class="confirm-answer">{answer}</div>
		<div class="confirm-title">その他の記入</div>
		<div class="confirm-answer">{other}</div>
	</div>`;
	/*  */
	const _spl = {
		date_time_maximum:`
		<div class="flex-wrap">
			<div class="flex-column-wrap" style="border-right:none;">
				<div class="confirm-answer">{date}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;">{amount}</div>
			</div>
		</div>`,
		num_price:`
		<div class="flex-wrap" style="margin-top:0;">
			<div class="flex-column-wrap" style="border-right:none;">
				<div class="confirm-answer">{item}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;">{amount}</div>
			</div>
		</div>`,
		sub_total:`
		<div class="flex-wrap" style="margin-top:-15px;">
			<div class="flex-column-wrap" style="border-right:none;">
				<div class="confirm-answer"></div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;">{amount}:<span style="text-align:right;color:#FF9551;">{amount2}</span></div>
			</div>
		</div>`,
		amount_total:`
		<div class="flex-wrap" style="margin-top:0;padding-top:20px;border-top: 1px solid #e3e5e8;">
			<div class="flex-column-wrap" style="border-right:none;">
				<div class="confirm-answer">{title}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;color:#FF9551;">{amount}</div>
			</div>
		</div>`,
		name_full:`
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{full_name.label}</div>
				<div class="confirm-answer">{full_name}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{furigana.label}</div>
				<div class="confirm-answer">{furigana}</div>
			</div>
		</div>`,
		name_separate:`
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{last_name.label}</div>
				<div class="confirm-answer">{last_name}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{first_name.label}</div>
				<div class="confirm-answer">{first_name}</div>
			</div>
		</div>
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{last_name_kana.label}</div>
				<div class="confirm-answer">{last_name_kana}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{first_name_kana.label}</div>
				<div class="confirm-answer">{first_name_kana}</div>
			</div>
		</div>		
		`,
		address:`
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{postcode.label}</div>
				<div class="confirm-answer">{postcode}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{address1.label}</div>
				<div class="confirm-answer">{address1}</div>
			</div>
		</div>
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{address2.label}</div>
				<div class="confirm-answer">{address2}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{address3.label}</div>
				<div class="confirm-answer">{address3}</div>
			</div>
		</div>
		<div class="flex-wrap">
			<div class="flex-column-wrap" style="border:none;">
				<div class="confirm-title">{address4.label}</div>
				<div class="confirm-answer">{address4}</div>
			</div>
		</div>
		`,
		coupon: `
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="border-right:none;">{answer}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;">{discount}</div>
			</div>
		</div>`,
	}

	const _createConfirmEntry = function(entry, value) {
		let html;
		if (value == undefined) {
			// value = {};
			// value.entry_data = '-';
			// value.entry_result = '{}';
			return '';
		}
		let entry_extra_info = null;
		if (value.entry_extra_info) {
			entry_extra_info = $.parseJSON(value.entry_extra_info);
		}
		if (entry.entry_type_cd == 'spl') {
			const inputrules = $.parseJSON(entry.input_rules);
			html = TalkappiEntryFrontLocale._spl[inputrules.type];
			pair = $.parseJSON(value.entry_result);
			for(const k in inputrules) {
				if (inputrules[k].label) {
					html = html.replace('{' + k + '.label}', inputrules[k].label);
					if (pair[k]) {
						html = html.replace('{' + k + '}', pair[k]);
					}
					else {
						html = html.replace('{' + k + '}', '-');
					}
				}
			}
		}
		else if (entry.entry_type_cd == 'fup') {
			const arr = value.entry_data.split('.');
			const ext = arr[arr.length - 1].toLowerCase();
			if (['jpg', 'png', 'jpeg', 'gif', 'svg'].indexOf(ext) >= 0) {
				html = `<img class="imageThumb" src="${value.entry_data}" />`;
			}
			else {
				html = value.entry_data;
			}
		}
		else if (entry.entry_type_cd == 'txt') {
			html = value.entry_data;
			if (entry_extra_info) {
				if (entry_extra_info.coupon) {
					let discount = 0;
					if (entry_extra_info.coupon.discount_result) discount = Number(entry_extra_info.coupon.discount_result);
					let detail = _spl['coupon'];
					detail = detail.replace('{answer}', value.entry_data).replace('{discount}', '-￥' + Number(discount).toLocaleString());
					html = detail;
				}
				if (entry_extra_info.detail) {
					let detail = _spl['date_time_maximum'];
					if (value.entry_result == value.entry_data) {
						detail = detail.replace('{date}', '').replace('{amount}', entry_extra_info.detail);
					}
					else {
						detail = detail.replace('{date}', value.entry_result).replace('{amount}', entry_extra_info.detail);
					}
					html = html + '<br/>' + detail;
				}
				if (entry_extra_info.total) {
					const content = entry_extra_info.total.split(':');
					let total = _spl['amount_total'];
					total = total.replace('{title}', content[0]).replace('{amount}', content[1]);
					html = html + '<br/>' + total;
				}
			}
		}
		else if (entry.entry_type_cd == 'frs') {
			html = '';
		}
		else {
			if (entry.entry_data === '') entry.entry_data = '[]';
			const entrydata = $.parseJSON(entry.entry_data);
			for(e of entrydata) {
				if (typeof e === 'string' && e.indexOf('...') >= 0) {
					const othertitle = e.replace('...', '').replace('*', '');
					const pos = value.entry_data.indexOf(',' + othertitle + '(');
					if (pos > 0) {
						const answer = value.entry_data.substring(0, pos);
						const other = value.entry_data.substring(pos + othertitle.length + 2, value.entry_data.length - 1);
						return TalkappiEntryFrontLocale._entryConfirmContainer2.replace('{answer}', answer).replace('{title}', entry.title).replace('{other}', other);
					}
				}
			}
			if (entry_extra_info) {
				html = '';
				if (entry_extra_info.select) {
					const html_arr = [];
					const item = value.entry_result.split(',');
					let pos = 0;
					for(e of entry_extra_info.select) {
						html = _spl['num_price'];
						html = html.replace('{item}', entrydata[item[pos]-1].title).replace('{amount}', e.price + ' × ' + e.num);
						html_arr.push(html);
						pos++;
					}
					html = html_arr.join('<br/>');
				}
				if (entry_extra_info.detail) {
					const content = entry_extra_info.detail.split(':');
					let total = _spl['sub_total'];
					total = total.replace('{amount}', content[0]).replace('{amount2}', content[1]);
					html = html + '<br/>' + total;
				}
				if (entry_extra_info.total) {
					const content = entry_extra_info.total.split(':');
					let total = _spl['amount_total'];
					total = total.replace('{title}', content[0]).replace('{amount}', content[1]);
					html = html + '<br/>' + total;
				}
			}
			else {
				html = value.entry_data.replace(/\n|\r/g, '<br/>');
			}
		}
		return TalkappiEntryFrontLocale._entryConfirmContainer.replace('{answer}', html).replace('{title}', entry.title);
	}
    return {
		createConfirm:function(entry, value) {
			return _createConfirmEntry(entry, value);
		},
		validate:function(item) {
		},
    }
}();