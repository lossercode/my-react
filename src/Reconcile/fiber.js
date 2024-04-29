export function FiberNode(
    tag,
    pendingProps,
    key,
    mode,
  ) {
    // Instance
    this.tag = tag;
    this.key = key;
    this.elementType = null;
    this.type = null;
    this.stateNode = null;
  
    // Fiber
    this.return = null;
    this.child = null;
    this.sibling = null;
    this.index = 0;
  
    this.ref = null;
    this.refCleanup = null;
  
    this.pendingProps = pendingProps;
    this.memoizedProps = null;
    this.updateQueue = null;
    this.memoizedState = null;
    this.dependencies = null;
  
    this.mode = mode;
  
    // Effects
    this.flags = NoFlags;
    this.subtreeFlags = NoFlags;
    this.deletions = null;
  
    this.lanes = NoLanes;
    this.childLanes = NoLanes;
  
    this.alternate = null;

  }