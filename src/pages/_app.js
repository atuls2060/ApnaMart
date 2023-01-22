import Navbar from '@/components/Navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { CartProvider } from 'react-use-cart'

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Provider store={store}>
      <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
    </Provider>
    </CartProvider>
  )
}
