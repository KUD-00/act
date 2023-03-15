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
			<div class="confirm-title">More</div>
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
			`,
			address:`
			<div class="flex-wrap">
				<div class="flex-column-wrap">
					<div class="confirm-title">{country.label}</div>
					<div class="confirm-answer">{country}</div>
				</div>
			</div>			
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
			amount: '支付金额',
			method: '选择支付方式',
			cardNo: '卡号',
			expire: '有效期限',
			errMethod: '支払い方法をお選びください',
			errInput: '请输入正确信息',
		}
	};
}();