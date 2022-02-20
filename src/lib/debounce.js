export const debounce = (func, timeout) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timer);
		return result;
	};
};
