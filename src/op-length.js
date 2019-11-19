import OpTest from "./op-test";

/**
 * @return {number}
 */
export default function OpLength(object, name) {
	if(OpTest(object, name)) {
		return object[name].length
	}
	else {
		return 0
	}
}