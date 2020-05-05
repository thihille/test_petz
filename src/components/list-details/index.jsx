import React, { useState, useEffect } from 'react';
import { getPostDetails } from '../../services/api';
import PetzLoading from '../../components/loading';
import { Container } from './style';

export default function listDetails({ query }) {
  const [post, setPost] = useState(null);
  const [viewContent, setViewContent] = useState(false);
  if(!false){
    getPostDetails(`/posts/${query}`).then(data => {
      const { post } = data;
      setViewContent(true);
      setPost(post);
    });
  }
  return (
    post ? (
      <Container>
        <img src="https://loremflickr.com/500/350/pet" />
        {post && (
          <div className="description">
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec finibus mi a libero faucibus aliquam. Aliquam in eros eget elit vulputate euismod. Etiam augue enim, iaculis id egestas sed, ornare non arcu. Nunc faucibus varius erat, sit amet bibendum diam gravida eget. Vivamus eu mollis ipsum. Maecenas porttitor porttitor mi vitae maximus. Morbi eu massa ornare, cursus magna eu, lobortis dui. Etiam mattis id erat in accumsan. Aliquam sed rhoncus dolor, pharetra lobortis mauris. Donec nec commodo nibh. Curabitur in velit id leo interdum egestas. Maecenas nec nisl nec lectus tincidunt porttitor nec vitae diam. Curabitur luctus quam nulla, quis condimentum nulla porttitor nec. Sed luctus bibendum porta.<br/>
              Morbi purus leo, rutrum eu massa nec, facilisis gravida libero. Vivamus finibus lacus sit amet ante varius, condimentum dapibus ipsum blandit. Nullam sit amet urna et mi rutrum suscipit. Maecenas sed iaculis orci. Aliquam ac eleifend est, nec porttitor est. Praesent sodales id justo vel sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt quam libero, in vulputate nunc fringilla ac. Sed commodo tortor eu sem scelerisque, ac bibendum tortor gravida. Nunc a sapien in dolor pretium finibus.
            </p>
          </div>
        )}
      </Container>
    ):(
      <PetzLoading />
    )
  );
}