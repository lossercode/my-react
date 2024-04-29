import { createFiberRoot } from "../Reconcile/reactFiberReconcile";

/**
 * 
 * @param {*} container 根节点，例如 document.getElementById('root')

 */
export function createRoot(container) {
  // 返回 FiberRootNode, fiber 树的头节点
  const root = createFiberRoot(
    container,
    1, // 当前的更新优先级
    null
  );

  //
  return new ReactDOMRoot(root);
}

function ReactDOMRoot(internalRoot) {
  this._internalRoot = internalRoot;
}

// 原型上挂载一个 render 方法
ReactDOMRoot.prototype.render = function (children) {
  const root = this._internalRoot;

  updateContainer(children, root);
};
