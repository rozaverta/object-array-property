import OpTest from "./op-test";

/**
 * @return {boolean}
 */
export default function OpIncludes(object, name, value) {
	if(OpTest(object, name)) {
		return object[name].indexOf(value) > -1
	}
	else {
		return false
	}
}