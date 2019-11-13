export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject

  if (type === 'string') {
    // empty string
    return stringArrayOrObject === ''
  }

  if (type === 'array') {
    // empty array
    return stringArrayOrObject.length === 0
  }

  if (type === 'object') {
    // empty objects, use Object.entries or Object.keys or Object.values
    return Object.entries(stringArrayOrObject).length === 0
  }

}
