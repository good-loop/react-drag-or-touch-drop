
/**
 * Convenience for spacing base-css-class + optional-extra-css-class.
 * Skips falsy, so you can do e.g. `space(test && "value")`.
 * Recursive, so you can pass an arg list or an array OR multiple arrays.
 * @returns {!string}
 */
export const space = (...strings) => {
	let js = '';
	if ( ! strings) return js;
	strings.forEach(s => {
		if ( ! s) return;
		if (s.forEach && typeof(s) !== 'string') {
			// recurse
			s = space(...s);
			if ( ! s) return;
		}
		js += ' '+s;
	});
	return js.trim();
};

/**
 * preventDefault + stopPropagation
 * @param e {?Event|Object} a non-event is a no-op 
 * @returns true (so it can be chained with &&)
 */
export const stopEvent = (e) => {
	if ( ! e) return true;
	if (e.preventDefault) {
		try {
			e.preventDefault();
			e.stopPropagation();
		} catch(err) {
			console.warn("(swallow) stopEvent cant stop", e, err);
		}
	}
	return true;
};
