// import '@/styles/globals.css'
import '@/assets/css/bootstrap.css'
import '@/assets/css/fontawesome-min.css'
import '@/assets/css/style.css'
import '@/assets/css/responsive.css'
import Layout from '@/componet/Layout'


export default function App({ Component, pageProps }) {
  return <Layout>

   <Component {...pageProps} />
  </Layout>
}
