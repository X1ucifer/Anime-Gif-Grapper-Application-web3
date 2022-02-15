import '../styles/globals.css'
import { DeployProvider } from '../context/DeployContext'


function MyApp({ Component, pageProps }) {
  return (

    <DeployProvider>
      <Component {...pageProps} />
    </DeployProvider>

  )

}

export default MyApp
