/* tslint:disable */
/* eslint-disable */
/**
* @param {string} code
* @returns {string}
*/
export function run_gradia(code: string): string;
/**
*/
export class Gradia {
  free(): void;
/**
*/
  constructor();
/**
* @param {string} code
*/
  run(code: string): void;
/**
* @param {string} code
* @returns {string}
*/
  eval(code: string): string;
/**
* @returns {string}
*/
  get_stdout(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_gradia_free: (a: number, b: number) => void;
  readonly gradia_new: () => number;
  readonly gradia_run: (a: number, b: number, c: number) => void;
  readonly gradia_eval: (a: number, b: number, c: number, d: number) => void;
  readonly gradia_get_stdout: (a: number, b: number) => void;
  readonly run_gradia: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
