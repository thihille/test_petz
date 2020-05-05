import React, { useState, useEffect } from 'react';
import ListDetails from '../../components/list-details';

import Layout from '../../components/layout';

const PageDetalhes = ({ idpost }) => (
  <Layout title="Detalhes - Petz - Seu pet center de estimação">
    Página de detalhes
    <ListDetails query={idpost} />
  </Layout>
);
PageDetalhes.getInitialProps = async ({query}) => {
  const { idpost } = query;
  return { idpost }
}

export default PageDetalhes;
