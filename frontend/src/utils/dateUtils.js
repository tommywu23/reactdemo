export const dateUtils = {
	getAroundDate
};

function getAroundDate(preMonth, currentDate, separativeSign, rule) {
	const reg = /^[1-9]\d{3}-(0[1-9]|1[0-2]|[1-9])-(0[1-9]|[1-2][0-9]|3[0-1]|[1-9])$/;
	const regExp = new RegExp(reg);
	if (regExp.test(currentDate) && preMonth) {
		let ymd = currentDate.split('-');
		let year = ymd[0];
		let month = ymd[1];
		let day = ymd[2];
		switch (rule) {
			case 'MINUS':
				for (let i = 1; i < preMonth; i++) {
					if (month == 1) {
						month = 12;
						year--;
					} else {
						month--;
					}
				}
				break;
			case 'ADD':
				for (let i = 1; i < preMonth; i++) {
					if (month == 12) {
						month = 1;
						year++;
					} else {
						month++;
					}
				}
				break;
			default:
		}
		month = month + 0;
		return (
			year +
			separativeSign +
			(month < 10 ? '0' + month : month) +
			separativeSign +
			day
		);
	} else {
		return '';
	}
}
