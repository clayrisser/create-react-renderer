import ReactReconciler from "react-reconciler";
import { DefaultEventPriority, NoEventPriority } from "react-reconciler/constants.js";
import { createContext } from "react";
import createElement from "./createElement";
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
    return false;
  },

  createTextInstance(
    _text: string,
    _rootContainerInstance: Container,
    _hostContext: HostContext,
    // @ts-expect-error the text instance is created in a later phase
  ): TextInstance {
    log.debug("createTextInstance");
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
  },

  commitTextUpdate(_textInstance: TextInstance, _oldText: string, _newText: string): void {
    log.debug("commitTextUpdate");
  },

  removeChild(_parentInstance: Instance, _child: Instance | TextInstance): void {
    log.debug("removeChild");
  },

  removeChildFromContainer(_container: Container, _child: Instance | TextInstance): void {
    log.debug("removeChildFromContainer");
  },

  insertBefore(
    _parentInstance: Instance,
    _child: Instance | TextInstance,
    _beforeChild: Instance | TextInstance,
  ): void {
    log.debug("insertBefore");
  },

  appendChildToContainer(container: Container, child: Instance | TextInstance): void {
    log.debug("appendChildToContainer");
    container.appendChild(child);
  },

  appendChild(parentInstance: Instance, child: Instance | TextInstance): void {
    log.debug("appendChild");
    parentInstance.appendChild(child);
  },

  shouldSetTextContent(_type: Type, _props: Props): boolean {
    log.debug("shouldSetTextContent");
    return false;
  },

  getRootHostContext(_rootContainerInstance: Container): HostContext {
    log.debug("getRootHostContext");
    return {};
  },

  getChildHostContext(
    _parentHostContext: HostContext,
    _type: Type,
    _rootContainerInstance: Container,
  ): HostContext {
    log.debug("getChildHostContext");
    return {};
  },

  commitUpdate(
    _instance: Instance,
    _type: Type,
    _oldProps: Props,
    _newProps: Props,
    _internalHandle: any,
  ): void {
    log.debug("commitUpdate");
  },

  commitMount(_instance: Instance, _type: Type, _newProps: Props): void {
    log.debug("commitMount");
  },

  scheduleTimeout(_handler: (...args: any[]) => void, _timeout: number): TimeoutHandle | NoTimeout {
    log.debug("scheduleTimeout");
  },

  cancelTimeout(_handle: TimeoutHandle | NoTimeout): void {
    log.debug("cancelTimeout");
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
