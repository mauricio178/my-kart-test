import { AppProps } from 'next/app';
import { Header } from '../components/Header';

import '../styles/global.scss'
import {ShippingProvider} from "../hooks/shipping";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <ShippingProvider>
            <Component {...pageProps} />
        </ShippingProvider>
    </>
  )
}

export default MyApp