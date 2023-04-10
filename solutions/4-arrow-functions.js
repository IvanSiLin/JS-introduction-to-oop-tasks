// BEGIN
export const each = (objects, callback) => {

    for(const obj of objects){

        callback.call(obj);
    }
}

export default each;
// END
