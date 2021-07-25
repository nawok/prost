import type { AppProps } from 'next/app'
import { useAnalytics } from '@/hooks/useAnalytics'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()
  return <Component {...pageProps} />
}
