import OpTest from "./op-test";

export default function OpAdd(object, name, ...values) {
	if(!values.length) {
		return object;
	}
	if(!OpTest(object, name)) {
		object[name] = [];
	}
	for(let i = 0, value; i < values.length; i++) {
		value = values[i];
		object[name].indexOf(value) === -1 && object[name].push(value);
	}
	return object;
}