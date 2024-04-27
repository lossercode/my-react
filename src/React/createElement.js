import { ReactCurrentOwner } from "./reactCurrentOwner";

export function createElement(type, config, children){
  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;
  let self = null
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

  // 一个 createElement 方法可以接收多个 children
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

  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props
  );
};

function ReactElement(type, key, ref, self, source, owner, props) {
    const element = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: Symbol.for('react.element'),
  
      // Built-in properties that belong on the element
      type: type,
      key: key,
      ref: ref,
      props: props,
  
      // Record the component responsible for creating this element.
      _owner: owner,
    };
  
  
    return element;
  }