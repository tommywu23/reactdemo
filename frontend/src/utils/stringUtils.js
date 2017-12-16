export const stringUtils = {
	cutBySpecifyLength
};

function cutBySpecifyLength(StringStr, needLength) {
	if (!StringStr) {
		return 0;
	}
	let l = StringStr.length;
	let blen = 0;
	let originalLen = 0;
	for (let i = 0; i < l; i++) {
		if ((StringStr.charCodeAt(i) & 0xff00) != 0) {
			blen++;
		}
		blen++;
		originalLen++;
		if (blen >= needLength) {
			StringStr = StringStr.substring(0, originalLen) + '...';
			break;
		}
	}
	return StringStr;
}
