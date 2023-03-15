const TalkappiEntryFrontLocale = function() {

	return {

		/* エントリーコンテナ共通部分 CONFIRM */
		_entryConfirmContainer : `<div class="confirm-entry-container">
											<div class="confirm-title">{title}</div>
											<div class="confirm-answer">{answer}</div>
										</div>`,

		_entryConfirmContainer2 : `<div class="confirm-entry-container">
			<div class="confirm-title">{title}</div>
			<div class="confirm-answer">{answer}</div>
			<div class="confirm-title">その他の記入</div>
			<div class="confirm-answer">{other}</div>
		</div>`,
		/*  */
		_spl : {
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
		},
		payment: {
			amount: '支払い金額',
			method: '支払い方法を選ぶ',
			cardNo: 'カード番号',
			expire: '有効期限',
			errMethod: '支払い方法をお選びください',
			errInput: '正しく入力してください',
		},
		error_common_required: 'こちらは回答必須です。',
        error_text_range:'{min}~{max}文字でご入力ください',
        placeholder_text_range:'{min}~{max}文字でご入力ください',
        mail_confirm: '(確定用)',
        multi_text_title: '表示文字多言語設定',
	};
}();