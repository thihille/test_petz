import React from 'react';

import Layout from '../../components/layout';
import Breadcrumb from '../../components/breadcrumb';

import iconFacebook from '../../assets/icon-facebook.png';
import iconYoutube from '../../assets/icon-youtube.png';
import iconTwitter from '../../assets/icon-twitter.png';
import iconInstagram from '../../assets/icon-instagram.png';

import { ShareRule, ContentWrapper, ImageDetails, Description, DescriptionGeneric } from '../../styles/detalhes.js';

const PageDetalhes = ({ post }) => {
  return (
    <Layout title="Detalhes - Petz - Seu pet center de estimação" disableSearch={true}>
      <Breadcrumb items={['Home','Details']} />
      <ContentWrapper>
        <h2>Detalhes do item {post.id}</h2>
        <ShareRule>
          <button><img src={iconFacebook} /></button>
          <button><img src={iconYoutube} /></button>
          <button><img src={iconTwitter} /></button>
          <button><img src={iconInstagram} /></button>
        </ShareRule>
        <ImageDetails>
          <img src={`http://placeimg.com/600/400/animals?i=${post.id}`} />
        </ImageDetails>
        <Description>
          <h3>
            {post.title}
          </h3>
          <p>
            {post.body}
          </p>
        </Description>
        <DescriptionGeneric>
          <h3>Outras características</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus mi a libero faucibus aliquam. Aliquam in eros eget elit vulputate euismod. Etiam augue enim, iaculis id egestas sed, ornare non arcu. Nunc faucibus varius erat, sit amet bibendum diam gravida eget. Vivamus eu mollis ipsum. Maecenas porttitor porttitor mi vitae maximus. Morbi eu massa ornare, cursus magna eu, lobortis dui. Etiam mattis id erat in accumsan. Aliquam sed rhoncus dolor, pharetra lobortis mauris. Donec nec commodo nibh. Curabitur in velit id leo interdum egestas. Maecenas nec nisl nec lectus tincidunt porttitor nec vitae diam. Curabitur luctus quam nulla, quis condimentum nulla porttitor nec. Sed luctus bibendum porta.<br/>
            Morbi purus leo, rutrum eu massa nec, facilisis gravida libero. Vivamus finibus lacus sit amet ante varius, condimentum dapibus ipsum blandit. Nullam sit amet urna et mi rutrum suscipit. Maecenas sed iaculis orci. Aliquam ac eleifend est, nec porttitor est. Praesent sodales id justo vel sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt quam libero, in vulputate nunc fringilla ac. Sed commodo tortor eu sem scelerisque, ac bibendum tortor gravida. Nunc a sapien in dolor pretium finibus.
          </p>
        </DescriptionGeneric>
      </ContentWrapper>
    </Layout>
  )
};
PageDetalhes.getInitialProps = async ({query}) => {
  const { id } = query;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();
  
  return {
    post
  };
}

export default PageDetalhes;
