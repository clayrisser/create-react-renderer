import ReactReconciler from "react-reconciler";
import { DefaultEventPriority, NoEventPriority } from "react-reconciler/constants.js";
import { createContext } from "react";
import createElement from "./createElement";
import dev from "./dev";
import { Smart } from "./elements";
import {
  ChildSet,
  Container,
  FormInstance,
  HostContext,
  HydratableInstance,
  Instance,
  NoTimeout,
  Props,
  PublicInstance,
  SuspenseInstance,
  TextInstance,
  TimeoutHandle,
  TransitionStatus,
  Type,
} from "./types";

const log = console;

// react-reconciler schedules work based on an update priority, so the host
// config has to track the current priority even before any elements exist
let currentUpdatePriority: number = NoEventPriority;

// bindings to the react reconciliation lifecycle methods
export default ReactReconciler<
  Type,
  Props,
  Container,
  Instance,
  TextInstance,
  SuspenseInstance,
  HydratableInstance,
  FormInstance,
  PublicInstance,
  HostContext,
  ChildSet,
  TimeoutHandle,
  NoTimeout,
  TransitionStatus
>({
  noTimeout: -1 as NoTimeout,

  isPrimaryRenderer: true,

  supportsMutation: true,

  supportsPersistence: false,

  supportsHydration: false,

  supportsMicrotasks: true,

  createInstance(
    type: Type,
    props: Props,
    _rootContainerInstance: Container,
    _hostContext: HostContext,
  ): Instance {
    log.debug("createInstance");
    return createElement(type, props);
  },

  appendInitialChild(parentInstance: Instance, child: Instance | TextInstance): void {
    log.debug("appendInitialChild");
    parentInstance.appendChild(child);
  },

  finalizeInitialChildren(
    _parentInstance: Instance,
    _type: Type,
    _props: Props,
    _rootContainerInstance: Container,
    _hostContext: HostContext,
  ): boolean {
    log.debug("finalizeInitialChildren");
    // returning true tells react to call commitMount once the tree committed
    return true;
  },

  createTextInstance(
    text: string,
    _rootContainerInstance: Container,
    _hostContext: HostContext,
  ): TextInstance {
    log.debug("createTextInstance");
    // explicitly specify the element to use for text
    const label = new Smart({ code: text }, {});
    label.commitMount(); // prob should run at a later point
    return label;
  },

  getPublicInstance(instance: Instance | TextInstance): PublicInstance {
    log.debug("getPublicInstance");
    return instance;
  },

  prepareForCommit(_containerInfo: Container): Record<string, any> | null {
    log.debug("prepareForCommit");
    return null;
  },

  resetAfterCommit(_containerInfo: Container): void {
    log.debug("resetAfterCommit");
  },

  resetTextContent(_instance: Instance): void {
    log.debug("resetTextContent");
    // noop because this renderer does not rerender
  },

  commitTextUpdate(_textInstance: TextInstance, _oldText: string, _newText: string): void {
    log.debug("commitTextUpdate");
    throw new Error("commitTextUpdate should not be called");
  },

  removeChild(parentInstance: Instance, child: Instance | TextInstance): void {
    log.debug("removeChild");
    parentInstance.removeChild(child);
  },

  removeChildFromContainer(_container: Container, _child: Instance | TextInstance): void {
    log.debug("removeChildFromContainer");
    if (dev) log.warn("'removeChildFromContainer' not supported");
  },

  insertBefore(
    _parentInstance: Instance,
    _child: Instance | TextInstance,
    _beforeChild: Instance | TextInstance,
  ): void {
    log.debug("insertBefore");
    if (dev) log.warn("'insertBefore' not supported");
  },

  appendChildToContainer(container: Container, child: Instance | TextInstance): void {
    log.debug("appendChildToContainer");
    container.appendChild(child);
  },

  appendChild(parentInstance: Instance, child: Instance | TextInstance): void {
    log.debug("appendChild");
    parentInstance.appendChild(child);
  },

  shouldSetTextContent(_type: Type, props: Props): boolean {
    log.debug("shouldSetTextContent");
    // this is used to determine if the fiber is a text fiber
    if (typeof props.children === "string") return true;
    return false;
  },

  getRootHostContext(_rootContainerInstance: Container): HostContext {
    log.debug("getRootHostContext");
    if (dev) log.warn("'getRootHostContext' not supported");
    return {};
  },

  getChildHostContext(
    _parentHostContext: HostContext,
    _type: Type,
    _rootContainerInstance: Container,
  ): HostContext {
    log.debug("getChildHostContext");
    if (dev) log.warn("'getChildHostContext' not supported");
    return {};
  },

  commitUpdate(
    instance: Instance,
    _type: Type,
    _oldProps: Props,
    newProps: Props,
    _internalHandle: any,
  ): void {
    log.debug("commitUpdate");
    // react-reconciler 0.33 removed prepareUpdate, so commitUpdate receives
    // the old and new props directly instead of an update payload
    return instance.commitUpdate(newProps);
  },

  commitMount(instance: Instance, _type: Type, _newProps: Props): void {
    log.debug("commitMount");
    instance.commitMount();
  },

  scheduleTimeout(handler: (...args: any[]) => void, timeout: number): TimeoutHandle | NoTimeout {
    log.debug("scheduleTimeout");
    return setTimeout(handler, timeout);
  },

  cancelTimeout(handle: TimeoutHandle | NoTimeout): void {
    log.debug("cancelTimeout");
    return clearTimeout(handle);
  },

  preparePortalMount(_containerInfo: Container): void {
    log.debug("preparePortalMount");
  },

  scheduleMicrotask(callback: () => unknown): void {
    log.debug("scheduleMicrotask");
    queueMicrotask(callback);
  },

  clearContainer(_container: Container): void {
    log.debug("clearContainer");
  },

  setCurrentUpdatePriority(newPriority: number): void {
    log.debug("setCurrentUpdatePriority");
    currentUpdatePriority = newPriority;
  },

  getCurrentUpdatePriority(): number {
    log.debug("getCurrentUpdatePriority");
    return currentUpdatePriority;
  },

  resolveUpdatePriority(): number {
    log.debug("resolveUpdatePriority");
    if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
    return DefaultEventPriority;
  },

  shouldAttemptEagerTransition(): boolean {
    log.debug("shouldAttemptEagerTransition");
    return false;
  },

  requestPostPaintCallback(_callback: (time: number) => void): void {
    log.debug("requestPostPaintCallback");
  },

  trackSchedulerEvent(): void {
    log.debug("trackSchedulerEvent");
  },

  resolveEventType(): null | string {
    log.debug("resolveEventType");
    return null;
  },

  resolveEventTimeStamp(): number {
    log.debug("resolveEventTimeStamp");
    return -1.1;
  },

  maySuspendCommit(_type: Type, _props: Props): boolean {
    log.debug("maySuspendCommit");
    return false;
  },

  preloadInstance(_type: Type, _props: Props): boolean {
    log.debug("preloadInstance");
    return true;
  },

  startSuspendingCommit(): void {
    log.debug("startSuspendingCommit");
  },

  suspendInstance(_type: Type, _props: Props): void {
    log.debug("suspendInstance");
  },

  waitForCommitToBeReady(): null {
    log.debug("waitForCommitToBeReady");
    return null;
  },

  resetFormInstance(_form: FormInstance): void {
    log.debug("resetFormInstance");
  },

  NotPendingTransition: null,

  HostTransitionContext: createContext<TransitionStatus>(
    null,
  ) as unknown as ReactReconciler.ReactContext<TransitionStatus>,

  getInstanceFromNode(_node: any) {
    log.debug("getInstanceFromNode");
    return null;
  },

  getInstanceFromScope(scopeInstance: any): null | Instance {
    log.debug("getInstanceFromScope");
    if (scopeInstance.node) return scopeInstance as Instance;
    return null;
  },

  beforeActiveInstanceBlur(): void {
    log.debug("beforeActiveInstanceBlur");
  },

  afterActiveInstanceBlur(): void {
    log.debug("afterActiveInstanceBlur");
  },

  prepareScopeUpdate(_scopeInstance: any, _instance: any): void {
    log.debug("prepareScopeUpdate");
  },

  detachDeletedInstance(_node: Instance): void {
    log.debug("detachDeletedInstance");
  },
});
