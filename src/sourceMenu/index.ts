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
