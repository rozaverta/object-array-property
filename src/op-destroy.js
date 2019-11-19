export default function OpDestroy(object, name) {
	if(object != null) {
		delete object[name]
	}
	return object;
}