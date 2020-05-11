import React from 'react';
import { List, ListItem } from './style';
import Card from '../card';

const Posts = ({
  posts
}) => {

  return (
    <List>
      {posts && posts.map(post => (
        <ListItem key={post.id}>
          <Card data={post} />
        </ListItem>
      ))}
    </List>
  )
}
export default Posts;