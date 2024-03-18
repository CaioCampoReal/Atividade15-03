import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutesApp from './routes';
// import { useState, useEffect } from 'react'
// import { db, auth } from './firebaseConnection';


function App() {
  
  // const [desc, setDesc] = useState('');
  // const [usuario, setUsuario] = useState('');

  // const [email, setEmail] = useState('');
  // const [senha, setSenha] = useState('');

  // const [user, setUser] = useState(false);
  // const [userDetail, setUserDetail] = useState({})


  // useEffect(() => {
  //   async function checkLogin(){
  //     onAuthStateChanged(auth, (user) => {
  //       if(user){
  //         // se tem usuario logado ele entra aqui...
  //         console.log(user);
  //         setUser(true);
  //         setUserDetail({
  //           uid: user.uid,
  //           email: user.email
  //         })

  //       }else{
  //         // nao possui nenhum user logado.
  //         setUser(false);
  //         setUserDetail({})
  //       }
  //     })
  //   }

  //   checkLogin();

  // }, [])

  // async function novoUsuario(){
  //   await createUserWithEmailAndPassword(auth, email, senha)
  //   .then(() => {
  //     console.log("CADASTRADO COM SUCESSO!")
    
  //     setEmail('')
  //     setSenha('')
  //   })
  //   .catch((error) => {
      
  //     if(error.code === 'auth/weak-password'){
  //       alert("Senha muito fraca.")
  //     }else if(error.code === 'auth/email-already-in-use'){
  //       alert("Email já existe!")
  //     }

  //   })
  // }

  // async function logarUsuario(){
  //   await signInWithEmailAndPassword(auth, email, senha)
  //   .then((value) => {
  //     console.log("USER LOGADO COM SUCESSO")
  //     console.log(value.user);

  //     setUserDetail({
  //       uid: value.user.uid,
  //       email: value.user.email,
  //     })
  //     setUser(true);

  //     setEmail('')
  //     setSenha('')
  //   })
  //   .catch(() => {
  //     console.log("ERRO AO FAZER O LOGIN")
  //   })
  // }


  // async function fazerLogout(){
  //   await signOut(auth)
  //   setUser(false);
  //   setUserDetail({})
  // }
  return (
    <RoutesApp />
  )
}
export default App;