import Logo from '@/components/Logo'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Logo>
    <Component {...pageProps} />
    </Logo>
}
