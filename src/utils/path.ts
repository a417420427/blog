export const join = (path: string, name: string) => {
  return !path
    ? '/' + name
    : path.lastIndexOf('/') === path.length - 1
    ? path + name
    : path + '/' + name
}

export const getQueryString = (name: string, search: string) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  }
  return null
}
