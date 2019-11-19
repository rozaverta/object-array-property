import OpTest from "./op-test";
import OpDestroy from "./op-destroy";

export default function OpRemove(object, name, value) {
	if(OpTest(object, name)) {
		const array = object[name];
		do {
			const index = array.indexOf(value);
			if(index < 0) {
				break;
			}
			array.splice(index, 1);
		} while (array.length > 0);
		if(array.length < 1) {
			OpDestroy(object, name);
		}
	}
	return object;
}