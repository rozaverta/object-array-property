import OpTest from "./op-test";
import OpDestroy from "./op-destroy";

export default function OpGet(object, name, destroy = false) {
	if(!OpTest(object.name)) {
		object[name] = [];
	}
	if(destroy) {
		const array = object[name];
		OpDestroy(object, name);
		return array;
	}
	return object[name];
}