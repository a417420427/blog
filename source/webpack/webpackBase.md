<!--
  name: webpack 基础
  description: Webpack 核心概念，Webpack 调优，Webpack 运行原理
-->

# Webpack 基础

## 配置项

1. 入口(entry)

- 入口是 webpack 构建开始的地方，通过入口文件，webpack 可以找到入口文件所依赖的文件，并逐步递归，找出所有依赖的文件。
- 可指定一个入口起点（或多个入口起点

```js
module.exports = {
  /**
   * entry: {
   *  file1: './path/to/file1.js',
   *  file2: './path/to/file2.js',
   * }
   * */
  entry: './path/to/file.js',
}
```

2. 出口(output)

- output 属性告诉 webpack 在哪里输出它所创建的 bundles，以及如何命名这些文件，默认值为 ./dist
- output.path 必须是绝对路径

```js
module.exports = {
  entry: './path/to/file.js',
  output: {
    // webpack默认输出路径为dist
    path: path.resolve(__dirname, 'dist')
    filename: '[name].js'
  }
}
```

3. loader

- 本质上，webpack loader 将所有类型的文件，转换为应用程序的依赖图（和最终的 bundle）可以直接引用的模块。
- loader 其实就是一个 function，接收一个参数 source，就是当前的文件内容，然后稍加处理，就可以 return 出一个新的文件内容

```js
// sampleLoader.js
module.exports = function () {
  this.callback(null, "console.log('sampleLoader worked')" + source)

  // 或者 return  "console.log('sampleLoader worked')" + source
}
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\*.js$/,
        loader: 'path/to/sampleLoader',
      },
    ],
  },
}
```

4. 插件(plugins)

- 通过监听 webpack 执行流程上的钩子函数，可以更精密地控制 webpack 的输出，包括：打包优化、资源管理和注入环境变量等

```js
class SamplePlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('SamplePlugin', (compilation) => {
      // compilation.hooks列表
      // https://webpack.js.org/api/compilation-hooks/#root
      compilation.hooks.afterOptimizeChunkAssets.tap(
        'SamplePlugin',
        (chunks) => {
          //  这边拿到chunk实例，进行更多操作
          console.log('SamplePlugin worked', chunks)
        },
      )
    })
  }
}
// webpack.config.js
module.exports = {
  plugins: [new SamplePlugin()],
}
```

## 优化

- 常规优化

1. 在处理 loader 时，配置 include，缩小 loader 检查范围。

2. 使用 alias 可以更快地找到对应文件。

3. 如果在 require 模块时不写后缀名，默认 webpack 会尝试.js,.json 等后缀名匹配，配置 extensions，可以让 webpack 少做一点后缀匹配。

4. thread-loader 可以将非常消耗资源的 loaders 转存到 worker pool 中。

5. 使用 cache-loader 启用持久化缓存。使用 package.json 中的 postinstall 清除缓存目录。

6. 使用 mode 中的 noParse 属性，可以设置不必要的依赖解析，例如：我们知道 lodash 是无任何依赖包的，就可以设置此选项，缩小文件解析范围。
