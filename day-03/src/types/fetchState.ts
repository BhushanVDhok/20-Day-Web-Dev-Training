/**
 * fetchState.ts
 * Union and literal types for async fetch states.
 *
 * Key concepts demonstrated:
 *   - union types  : 'idle' | 'loading' | 'success' | 'error'
 *   - literal types : exact string values as types
 *   - generic type alias : works with any data shape T
 */

export type FetchStatus = 'idle' | 'loading' | 'success' | 'error'

export interface FetchState<T> {
  data: T | null
  status: FetchStatus
  error: string | null
}
