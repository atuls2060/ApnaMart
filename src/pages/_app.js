import Navbar from '@/components/Navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}
