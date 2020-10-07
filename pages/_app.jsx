import { useAnalytics } from '@happykit/analytics'
import '@/styles/tailwind.css'

export default function App({ Component, pageProps }) {
  useAnalytics({ publicKey: process.env.NEXT_PUBLIC_ANALYTICS_ID })
  return <Component {...pageProps} />
}
