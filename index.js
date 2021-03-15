let mock = {
  a: 1,
  b: true,
  c: {
    d: 3,
    e: "test",
    f : {
      g : {
        h: "testdeep"
      }
    }

  }
}


const flatReduce = (obj, fatherKey) => {


  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (typeof val != 'object') {
      !fatherKey ?
        acc.push([key, val])
        : acc.push([fatherKey + '.' + key, val])
    } else {
      flatReduce(val, key).forEach(([key, val] ) => {
        !fatherKey ?
          acc.push([key, val])
          : acc.push([fatherKey + '.' + key, val])
      })
    }
    return acc
  }, [])


}


console.log(Object.fromEntries(flatReduce(mock)))
