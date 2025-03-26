import PsMessage from './PassMessage.jsx'

//Conditional Rendering allows us to identify what your app is provided,
// which happens based on some condition checking such as by showing ,Hiding and changing the components 

function App() {
    return (
       <>
       <PsMessage isRegister={true} UserId="(like)..React123" 
       PassWord="#123@"/>
       <PsMessage isRegister={false} UserId="(like)..React123" 
       PassWord="#123@"/>
       </>

    );
}

export default App;