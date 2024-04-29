import { FiberNode } from "./fiber";

export function createFiberRoot(containerInfo, tag) {
  // 生成 FiberRootNode 根节点
  const root = new FiberRootNode(containerInfo, tag);

  // 创建一个 HostRootFiber 对象，tag 为 div
  const uninitializedFiber = createHostRootFiber(tag);

  // FiberRootNode 的 current 指向 rootFiber
  root.current = uninitializedFiber;

  // rootFiber 的 dom 实例 指向 root
  uninitializedFiber.stateNode = root;

  // 创建一个更新队列
  initializeUpdateQueue(uninitializedFiber);

  return root;
}

function createHostRootFiber(tag) {
  return new FiberNode(tag, null, null, 0);
}

function initializeUpdateQueue(fiber) {
  const queue = {
    baseState: fiber.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      lanes: NoLanes,
      hiddenCallbacks: null,
    },
    callbacks: null,
  };
  fiber.updateQueue = queue;
}

/**
 * 
 * @param {*} element App 根组件
 * @param {*} container FiberRootNode
 * @param {*} parentComponent 
 * @param {*} callback 
 * @returns 一个优先级 lane
 */
export function updateContainer(
    element,
    container,
  ) {
    // 首次加载时 current 指向 rootFiber
    const current = container.current;
    const lane = requestUpdateLane(current);
    const update = createUpdate(lane);
    // Caution: React DevTools currently depends on this property
    // being called "element".
    update.payload = {element};
  
  
    const root = enqueueUpdate(current, update, lane);
    if (root !== null) {
      scheduleUpdateOnFiber(root, current, lane);
      entangleTransitions(root, current, lane);
    }
  
    return lane;
  }