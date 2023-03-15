const TalkappiEntryFrontTxt = function() {
	/*  */
	const _input_components = {
		text:`
		<input type="text" class="entry-field text-long" value="" placeholder="{placeholder}" style="border-color: rgb(227, 229, 232);">
		`,
		mail:`
		<input type="email" class="entry-field text-long" value="" placeholder="sample@sample.com" style="border-color: rgb(227, 229, 232);">
		<div class="entry-title" style="margin-top:28px;">{title}${TalkappiEntryFrontLocale.mail_confirm}</div>
		<input type="email" class="entry-field text-long" value="" placeholder="sample@sample.com" style="border-color: rgb(227, 229, 232);">
		`,
		'date-time':``,
		'date':``,
	};
	/*  */
	const _confirm_components = {
		text:`
		<div class="flex-wrap">
			<div class="flex-column-wrap" style="border-right:none;">
				<div class="confirm-answer">{date}</div>
			</div>
			<div class="flex-column-wrap">
				<div class="confirm-answer" style="text-align:right;">{amount}</div>
			</div>
		</div>`,
	}
	const _create = function(entry, value) {
		let html = '';
		if (entry.input_rules.type == 'text') {
			if (entry.placeholder != '') {
				html = _input_components[entry.input_rules.type].replace('{placeholder}', entry.placeholder);
			}
			else {
				const range = TalkappiEntryFrontLocale.placeholder_text_range.replace('{min}', entry.input_rules.min_length).replace('{max}', entry.input_rules.max_length);
				html = _input_components[entry.input_rules.type].replace('{placeholder}', range);
			}
		}
		else if (entry.input_rules.type == 'mail') {
			html = _input_components[entry.input_rules.type].replace('{title}', entry.title);
		}
		return TalkappiEntryFrontComponent.entryContainer.replace('{input}', html).replace('{title}', entry.title).replace('{entry-data}', JSON.stringify(entry));
	}

	const _confirm = function(entry, value) {
		let html;
		if (value == undefined) {
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
		data:function(entry) {
			
		}
    }
}();