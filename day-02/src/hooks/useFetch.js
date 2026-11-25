import { useState, useEffect } from 'react'

/**
 * useFetch – fetch JSON from a URL.
 * Returns { data, loading, error }.
 * Cleans up with AbortController so stale requests are cancelled.
 */
function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Reset state each time url changes
    setData(null)
    setLoading(true)
    setError(null)

    const controller = new AbortController()

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((json) => setData(json))
      .catch((err) => {
        // AbortError is not a real error – ignore it
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })

    // Cleanup: cancel in-flight request when url changes or component unmounts
    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch
