export default function OpTest(object, name) {
	return object != null && Array.isArray(object[name]);
}