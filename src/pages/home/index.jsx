import React, {useState} from 'react';
import fetch from "isomorphic-fetch";

import Layout from '../../components/layout';
import Posts from '../../components/posts';
import Slider from '../../components/slider';
import PetzLoading from '../../components/loading';

const Home = ({
  posts
}) => {
  const [filterSearch, setFilterSearch] = useState('');
  const handleFilter = (value) => {
    setFilterSearch(value);
  }

  const results = !filterSearch ? posts : posts.filter(post => post.title.toLowerCase().includes(filterSearch.toLowerCase()));
  
  return (
    <Layout 
      filterSearch={filterSearch} 
      setFilterSearch={handleFilter}
    >
      {results ? (
        <>
          <Slider />
          <Posts posts={results}  />
        </>
      ):(
        <PetzLoading />
      )}
    </Layout>
  );
}
Home.defaultProps = {
  posts: []
}
Home.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  data.map((post,i) => post.image = `http://placeimg.com/200/100/animals?i=${i}`);
  
  return {
    posts: data
  };
}

export default Home;
