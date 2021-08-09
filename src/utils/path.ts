export const join = (path: string, name: string) => {
  return !path
    ? '/' + name
    : path.lastIndexOf('/') === path.length - 1
    ? path + name
    : path + '/' + name
}
