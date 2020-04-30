import React, { Component } from 'react';
import { getAPI } from "../../services/api";
import HeaderComponent from '../../components/header';
import { CardList, Cards } from './style';

export default class Home extends Component {

  state = {
    posts: []
  }

  componentWillMount(){
    getAPI('/posts').then(data => {
      this.setState({
        posts: data.items
      });
    });
    
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <Cards>
          {this.state.posts && this.state.posts.map(post => (
            <CardList>
              <p>
                {post.title}
              </p>
            </CardList>
          ))}
        </Cards>
      </>
    );
  }
}






// import React from 'react';
// import "isomorphic-fetch";

// const Home = ({
//   items
// }) => {
//   function teste(){
//     alert('meu teste');
//   }
//   return (
//     <div>
//       <h1 onClick={() => teste()}>Hello Petz</h1>
//       {
//         items.map(item => (
//           <div key={item.id}>
//             <h1>{item.title}</h1>
//             <p>
//               {item.body}
//             </p>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// Home.getInitialProps = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const items = await response.json();

//   return {
//     items
//   };
// }

// export default Home;