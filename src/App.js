import React from 'react'
import Head from './components/Head'
import backgroundImg from './img/todolist.jpg';


function App(){
    return(
        <div style={{ 
            backgroundImage: `url(${backgroundImg})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '75vh'
        }}>
            <Head />
</div>
    )
}
export default App
