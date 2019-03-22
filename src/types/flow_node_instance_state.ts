/**
 * Lists the various states that a FlowNodeInstance can be in.
 */
export enum FlowNodeInstanceState {
  running = 'running',
  suspended = 'suspended',
  finished = 'finished',
  interrupted = 'interrupted',
  terminated = 'terminated',
  error = 'error',
}
