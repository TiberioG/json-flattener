const flatReduce = (obj) => {

  const _recursiveReduce = (obj, fatherKey) => {
    return Object.entries(obj).reduce((acc, [key, val]) => {
      (typeof val != 'object')
        ? acc.push([fatherKey ? `${fatherKey}.${key}` : key, val])
        : _recursiveReduce(val, key).forEach(([key, val]) => acc.push([fatherKey ? `${fatherKey}.${key}` : key, val]))
      return acc
    }, [])
  }
  return (Object.fromEntries(_recursiveReduce(obj)))
}


let mock = {
  a: 1,
  b: true,
  c: {
    d: 3,
    e: "test",
    f: {
      g: {
        h: "testdeep"
      }
    }
  }
}


console.log(flatReduce(mock))
