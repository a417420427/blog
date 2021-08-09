export const sortedMenu = (menu: Menu[]) =>
  menu.sort(
    (a, b) => a.parentPath.split('/').length - b.parentPath.split('/').length,
  )
