import OpTest from "./op-test";

export default function OpAdd(object, name, value) {
	if(OpTest(object, name)) {
		object[name].indexOf(value) === -1 && object[name].push(value);
	}
	else {
		object[name] = [value];
	}
	return object;
}