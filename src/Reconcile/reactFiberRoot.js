const NoLane = 1
const NoLanes = 1

export function FiberRootNode(
    this,
    containerInfo,
    tag,
  ) {
    this.tag = tag;
    this.containerInfo = containerInfo;
    this.pendingChildren = null;
    this.current = null;
    this.pingCache = null;
    this.finishedWork = null;
    this.cancelPendingCommit = null;
    this.context = null;
    this.pendingContext = null;
    this.next = null;
    this.callbackNode = null;
    this.callbackPriority = NoLane;
  
    this.pendingLanes = NoLanes;
    this.suspendedLanes = NoLanes;
    this.pingedLanes = NoLanes;
    this.expiredLanes = NoLanes;
    this.finishedLanes = NoLanes;
    this.errorRecoveryDisabledLanes = NoLanes;
    this.shellSuspendCounter = 0;
  
    this.entangledLanes = NoLanes;
  
  
    this.incompleteTransitions = new Map();
    
  }