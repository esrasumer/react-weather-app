import axios from 'axios'
import { useEffect } from 'react';

function App() {
  const key = "0d433861b4105ae7027f2be177921252";

    useEffect(() => {
      async function getApi() {
        try {
          const response = await axios.get('');
          console.log(response);
        } catch (error) {
          console.error(error)
        }
      }
    })
 return <div>Hello</div>
}

export default App;
