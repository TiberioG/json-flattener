const myJson = require(process.argv.slice(2)[1] || "./default.json");
const option = process.argv.slice(2)[0];

/**
 * This function takes an object and returns a flattened obj
 * where keys are the path to every terminal value in the input JSON obj
 * It uses reduce and forEach
 * @param obj
 * @returns {{[p: string]: any}} a flattened object, use JSON.stringify if you want it stringified
 */
const flatFunctional = (obj) => {
  if (obj === null || obj === undefined) {
    throw new Error("input is null or undefined");
  }
  const _recursiveReduce = (obj, fatherKey) => {
    //since typeof null is object we must return now
    //otherwise later we would try to get entries of null which is not good
    if (obj === null) {
      //here I choose to stringify null but other solution are possible
      //like ignoring that case, or using an empty string
      return [[fatherKey, "null"]];
    }
    return Object.entries(obj).reduce((acc, [key, val]) => {
      typeof val === "object"
        ? //recursive call we pass the key of this node and explore in depth
          _recursiveReduce(val, key).forEach(([key, val]) =>
            acc.push([fatherKey ? `${fatherKey}.${key}` : key, val])
          )
        : //if we reached a terminal we add this to the accumulator
          acc.push([fatherKey ? `${fatherKey}.${key}` : key, val]);
      return acc;
    }, []);
  };
  //here I just return a JS object, if you want instead a string you can easily use the following
  //return JSON.stringify(Object.fromEntries(_recursiveReduce(obj)), null, 2)
  return Object.fromEntries(_recursiveReduce(obj));
};

/**
 * This function takes an object and returns a flattened obj
 * where keys are the path to every terminal value in the input JSON obj
 * It uses a simple recursive depth first scan of an object
 * @param node your input object
 * @param flattened it is used by recursive calls, defaults to empty obj
 * @param fatherKey it is used by recursive calls, you can use to set a top level key
 * @returns {{}} a flattened object, use JSON.stringify if you want it stringified
 */
function flatProcedural(node, flattened = {}, fatherKey = null) {
  if (typeof node === "object" && node !== null) {
    // iterating over all the first level childs of the object
    for (const key in node) {
      if (node.hasOwnProperty(key)) {
        let childKey;
        //this is used to avoid adding the father key on fist call
        if (fatherKey) {
          childKey = fatherKey + "." + key;
        } else childKey = key;
        //recursive cal passing the child node and the new key
        flatProcedural(node[key], flattened, childKey);
      }
    }
  }
  else if (node === null){
    //here I choose to stringify null but other solution are possible
    //like ignoring that case, or using an empty string
    flattened[fatherKey] = 'null'
  }
  //this branch if we reached a leaf, so we push the value in our flattened object
  else {
    flattened[fatherKey] = node;
  }
  return flattened; //return finally the flattened obj
}

module.exports = {
  func: flatFunctional,
  proc: flatProcedural,
};

switch (option) {
  case "--proc":
    console.log(flatProcedural(myJson));
    break;
  case "--func":
    console.log(flatFunctional(myJson));
    break;
  default:
    console.log(
      "You must specify an option --proc or --func before path to JSON"
    );
}
