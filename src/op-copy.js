import OpTest from "./op-test";

export default function OpCopy(object, name) {
	if(OpTest(object, name)) {
		return object[name].slice()
	}
	else {
		return []
	}
}