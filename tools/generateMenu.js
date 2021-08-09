const { readdirSync, lstatSync, statSync, writeFile } = require('fs')
const { join, resolve } = require('path')

/**
 * @typedef {Object} MenuTree
 * @property {string} name
 * @property {string} parentPath
 */
function getMenuTree(folder) {
  const source = []
  /**
   *
   * @param {string} folder
   * @param {MenuTree} menuTree
   */
  const readFolder = function (folder, menuTree) {
    if (!statSync(folder)) {
      throw new Error('文件夹不存在')
    }

    const files = readdirSync(folder)
    files.forEach(function (file) {
      const currentPath = join(folder, file)
      const stat = lstatSync(currentPath)

      if (stat.isDirectory()) {
        readFolder(currentPath, menuTree)
      } else {
        if (/\.(md|markdown)$/.test(file)) {
          menuTree.push({
            name: file,
            parentPath: folder,
          })
        }
      }
    })

    return menuTree
  }

  readFolder(folder, source)
  return source.map((s) => ({
    ...s,
    parentPath: s.parentPath.replace(folder, ''),
  }))
}

function writeMenuFile() {
  const source = getMenuTree(resolve(__dirname, '../source'))
  writeFile(
    resolve(__dirname, '../src/menu.ts'),
    `export default ${JSON.stringify(source)}`,
    {},
    function (err) {
      console.log(err)
    },
  )
}
const pluginName = 'GenerateMenuTreePlugin'
writeMenuFile()
class GenerateMenuTreePlugin {
  constructor(options) {}
  apply(compiler) {
    // console.log(compiler)
    compiler.hooks.beforeRun.tap(pluginName, (compilation) => {
      console.log(compilation)
      writeMenuFile()
    })
  }
}

module.exports.GenerateMenuTreePlugin = GenerateMenuTreePlugin
