/**
 * useFetch.ts
 * Generic fetch hook — works with any JSON response type T.
 *
 * Key concepts demonstrated:
 *   - generic type parameter <T>
 *   - typed useState with FetchState<T>
 *   - typed useEffect return (cleanup function)
 */

import { useState, useEffect } from 'react'
import type { FetchState, FetchStatus } from '../types/fetchState'

function useFetch<T>(url: string): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    status: 'idle' as FetchStatus,
    error: null,
  })

  useEffect(() => {
    setState({ data: null, status: 'loading', error: null })

    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((res: Response) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`)
        return res.json() as Promise<T>
      })
      .then((data: T) => {
        setState({ data, status: 'success', error: null })
      })
      .catch((err: unknown) => {
        if (err instanceof Error && err.name === 'AbortError') return
        const message = err instanceof Error ? err.message : 'Unknown error'
        setState({ data: null, status: 'error', error: message })
      })

    // Cleanup: cancel the in-flight request on unmount or url change
    return (): void => {
      controller.abort()
    }
  }, [url])

  return state
}

export default useFetch
