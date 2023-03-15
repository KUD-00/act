const TalkappiEntryFrontSpl = function() {
	const _components = {
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
				<div class="confirm-title">{first_name.label}</div>
				<div class="confirm-answer">{first_name}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{last_name.label}</div>
				<div class="confirm-answer">{last_name}</div>
			</div>
		</div>
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{first_name_kana.label}</div>
				<div class="confirm-answer">{first_name_kana}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{last_name_kana.label}</div>
				<div class="confirm-answer">{last_name_kana}</div>
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
	};
	/*  */
	const _confirm_components = {
		num_price:`
		<div class="flex-wrap">
			<div class="flex-column-wrap" style="border-right:none;">
				<div class="confirm-answer">{date}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;">{amount}</div>
			</div>
		</div>`,
		amount_total:`
		<div class="flex-wrap">
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
				<div class="confirm-title">{first_name.label}</div>
				<div class="confirm-answer">{first_name}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{last_name.label}</div>
				<div class="confirm-answer">{last_name}</div>
			</div>
		</div>
		<div class="flex-wrap">
			<div class="flex-column-wrap">
				<div class="confirm-title">{first_name_kana.label}</div>
				<div class="confirm-answer">{first_name_kana}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-title">{last_name_kana.label}</div>
				<div class="confirm-answer">{last_name_kana}</div>
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
	}
	const _create = function(entry, value) {
		let html = '';
	}
	const _confirm = function(entry, value) {
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
			html = _splConfirm[inputrules.type];
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
		else if (entry.entry_type_cd == 'txt' && entry_extra_info && entry_extra_info.detail) {
			html = _splConfirm['num_price'];
			html = html.replace('{date}', value.entry_data).replace('{amount}', entry_extra_info.detail);
		}
		else if (entry.entry_type_cd == 'tal') {
			const content = entry_extra_info.total.split(':');
			html = _splConfirm['amount_total'];
			html = html.replace('{title}', content[0]).replace('{amount}', content[1]);
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
						return TalkappiEntryFrontComponent.confirmContainer2.replace('{answer}', answer).replace('{title}', entry.title).replace('{other}', other);
					}
				}
			}
			html = value.entry_data;
		}
		return TalkappiEntryFrontComponent.confirmContainer.replace('{answer}', html).replace('{title}', entry.title);
	}
	
    return {
		create:function(entry, value) {
			return _create(entry, value);
		},
		confirm:function(entry, value) {
			return _confirm(entry, value);
		},
		validate:function(entry) {
		},
    }
}();