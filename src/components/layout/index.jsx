import HeaderComponent from '../header';
import Head from 'next/head';

const Layout = ({
  title = null,
  disableSearch = false,
  filterSearch,
  setFilterSearch,
  children
}) => {
  const titlePage = title ? title : 'Petz - Seu pet center de estimação';
  return (
    <>
      <Head>
        <title>{titlePage}</title>
        <meta property="og:title" content={titlePage} key="title" />
      </Head>
      <HeaderComponent disableSearch={disableSearch} filterInput={filterSearch} setFilterInput={setFilterSearch} />
      {children}
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family:'Roboto', sans-serif;
        }
      `}</style>
    </>
  )
};

export default Layout;