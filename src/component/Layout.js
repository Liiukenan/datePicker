import Head from 'next/head';
const Layout = ({children}) => (
  <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
    </Head>
    {children}
    {/* <footer>13424</footer> */}
  </div>
)
export default Layout