import HeaderComponent from '../header';
import Head from 'next/head';
import { GlobalStyle } from '../../pages/styles';

const Layout = ({title = null, children}) => {
  const titlePage = title ? title : 'Petz - Seu pet center de estimação';
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta property="og:title" content={titlePage} key="title" />
      </Head>
      <GlobalStyle />
      <HeaderComponent />
      {children}
    </>
  )
};

export default Layout;