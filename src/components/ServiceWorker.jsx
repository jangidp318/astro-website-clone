import { useEffect } from 'react'

export const ServiceWorker = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
        console.log('serviceWorker registered')
      navigator.serviceWorker.register('service-worker.js').then(() => {}).catch(() => {})
    }
  }, [])

  return null
}