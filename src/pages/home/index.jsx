import React from 'react';
import Layout from '../../components/layout';
import List from '../../components/list';
import Slider from '../../components/slider';

export default () => {

  return (
    <Layout>
      <Slider />
      <List />
    </Layout>
  );
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