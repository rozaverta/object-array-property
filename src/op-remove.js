import OpTest from "./op-test";
import OpDestroy from "./op-destroy";

function remove(array, value) {
	do {
		const index = array.indexOf(value);
		if(index < 0) {
			break;
		}
		array.splice(index, 1);
	} while (array.length > 0);
}

export default function OpRemove(object, name, ...values) {
	if(OpTest(object, name)) {
		const array = object[name];
		for(let i = 0; i < values.length; i++) {
			remove(array, values[i]);
			if(array.length < 1) {
				OpDestroy(object, name);
				break;
			}
		}
	}
	return object;
}