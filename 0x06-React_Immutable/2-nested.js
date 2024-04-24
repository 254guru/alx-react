import { fromJS, Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    let result = fromJS(object);
    for (const key of array) {
        if (Map.isMap(result)) {
            result = result.get(key);
        } else if (typeof result === 'object' && result !== null) {
            result = result[key];
        } else {
            return undefined;
        }
    }
    return result;
}
