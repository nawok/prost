import { useEffect } from 'react'
import splitbee from '@splitbee/web'

export function useAnalytics() {
  useEffect(() => {
    splitbee.init()
  }, [])
}
