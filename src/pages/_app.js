import Navbar from '@/components/Navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { CartProvider } from 'react-use-cart'
import Footer1 from '@/components/Home/Footer/footer1'
import Footer2 from '@/components/Home/Footer/footer2'
import Footer3 from '@/components/Home/Footer/footer3'
import Footer4 from '@/components/Home/Footer/footer4'
import { useEffect } from 'react'
import { auth } from '@/utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
export default function App({ Component, pageProps }) {

  const checkAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("app auth",user.displayName,uid)

      } else {
        console.log("app not auth")
      }
    });
  }

  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <CartProvider>
      <Provider store={store}>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer1 />
          <Footer2 />
          <Footer3 />
          <Footer4 />
        </ChakraProvider>
      </Provider>
    </CartProvider>
  )
}
