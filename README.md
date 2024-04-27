# 动手实现简易版 react

> 参考资源：https://www.bilibili.com/video/BV1KK4y1i7rx?p=6&spm_id_from=pageDriver&vd_source=0e9f2271fe4c2649a7f4d4292f2993d5

## 配置

- 安装依赖

```bash
pnpm add webpack webpack-cli html-webpack-plugin webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react
```

- 启动项目

```bash
pnpm run dev
```

## 详解

### JSX

jsx 文件经过 babel 转义后变成 `React.createElement(tyep, prosp, children)`

首先实现 createElement

```js
function createElement(type, configs, ...children) {
  const props = {};

  let key = null;
  let ref = null;
  let self = null;
  let source = null;

  if (config != null) {
    // react 中的 key 最终都会变成字符串
    key = "" + config.key;

    // 把 config 里面的东西都移动到 props 里面
    for (propName in config) {
      if (hasOwnProperty.call(config, propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // 一个 createElement 方法可以接收多个 children, 将 children 挂载到 props 里面
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // 返回一个对象，例如 {"type":"div","key":null,"ref":null,"props":{"children":"Hello World"},"_owner":null}

  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props
  );
}
```
