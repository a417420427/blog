export type MenuParams = {
  name: string
  type: string
}

export const getMenuParamsByMenu = (menu: Menu): MenuParams => {
  const type = menu.parentPath.split('/').filter(Boolean)[0]
  const name = menu.name.replace('.md', '')
  return {
    name,
    type,
  }
}
export const findTargetMenuByParams = (menus: Menu[], params: MenuParams) => {
  const { type, name } = params

  return menus.find((menu) => {
    const menuParams = getMenuParamsByMenu(menu)
    return menuParams.type === type && menuParams.name === name
  })
}

export const getMarksByMenu = (menus: Menu[]) => {
  const marks = menus.map((menu) => {
    const parentPath = menu.parentPath.substr(1)
    const index =
      parentPath.indexOf('/') === -1
        ? parentPath.length - 1
        : parentPath.indexOf('/')
    return parentPath.substr(0, index + 1)
  })
  return marks
}
