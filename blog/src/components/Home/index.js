import { useState, useEffect } from 'react'
import { db, auth } from '../../firebaseConnection';
import './index.css'

import { 
  doc, 
  setDoc, 
  collection, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'

import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

function Home() {
  const [idPost, setIdPost] = useState('')
  const [posts, setPosts] = useState([]);
  const [desc, setDesc] = useState('');

  useEffect(() => {
    async function loadPosts(){
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            desc: doc.data().desc,
            // usuario: doc.data().usuario,
          })
        })
  
        setPosts(listaPost);
      })
    }

    loadPosts();

  }, [])
  async function buscarPost(){
    // const postRef = doc(db, "posts", "vFvZAyFqebXFsFv0X89l")
    // await getDoc(postRef)
    // .then((snapshot) => {
    //   setUsuario(snapshot.data().usuario)
    //   setDesc(snapshot.data().desc)

    // })
    // .catch(()=>{
    //   console.log("ERRO AO BUSCAR")
    // })

    const postsRef = collection(db, "posts")
    await getDocs(postsRef)
    .then((snapshot) => {
      let lista = [];

      snapshot.forEach((doc) => {
        lista.push({
          id: doc.id,
          desc: doc.data().desc,
          // usuario: doc.data().usuario,
        })
      })

      setPosts(lista);

    })
    .catch((error) => {
      console.log("DEU ALGUM ERRO AO BUSCAR")
    })


  }
  async function editarPost(){
    const docRef = doc(db, "posts", idPost)
    
    await updateDoc(docRef, {
      desc: desc,
      // usuario: usuario
    })
    .then(() => {
      console.log("POST ATUALIZADO!")
      setIdPost('')
      setDesc('descrição item teste')
      // setUsuario('adm')
    })
    .catch((error) => {
      console.log(error)
    })


  }

  async function excluirPost(id){
    const docRef = doc(db, "posts", id)
    await deleteDoc(docRef)
    .then(() =>{
      alert("POST DELETADO COM SUCESSO!")
    })

  }

  async function criarPosts(){
    await addDoc(collection(db, "posts"), {
      desc: desc,
      // usuario: userDetail.uid,
    })
    .then(() => {
      console.log("CADASTRADO COM SUCESSO")
      // setUsuario('');
      setDesc('')
    })
    .catch((error) => {
      console.log("ERRO " + error)
    })
  }

  // { user && (
  //   <div>
  //     <strong>Seja bem-vindo(a) (Você está logado!)</strong> <br/>
  //     <span>ID: {userDetail.uid} - Email: {userDetail.email}</span> <br/>
  //     <button onClick={fazerLogout}>Sair da conta</button>
  //     <br/> <br/>
  //   </div>
  // )}

  return (
    <div>
      <div className="container">
        <h1>SITE</h1>
      </div>
      

    <br/><br/>
    <div className='container'>
      <label>ID do Post:</label>
      <input
        placeholder='Digite o ID do post'
        value={idPost}
        onChange={ (e) => setIdPost(e.target.value) }
      /> <br/>

      <label>descrição do item:</label>
      <textarea 
        type="text"
        placeholder='Digite a descrição'
        value={desc}
        onChange={ (e) => setDesc(e.target.value) }
      />

      {/* <label>Usuario:</label>
      <input 
        type="text" 
        placeholder="Usuario do post"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value) }
      /> */}

      <button onClick={criarPosts}>Cadastra</button>
      <button onClick={buscarPost}>Buscar post</button> 

      <button onClick={editarPost}>Atualizar post</button> <br/>
    </div>

    <div className="lista">
      <h2>lista</h2>      
      <ul>
        {posts.map( (post) => {
          return(
            <li key={post.id}>
              <strong>ID: {post.id}</strong> <br/>
              <span>Desc: {post.desc} </span> <br/>
              {/* <span>Usuario: {post.usuario}</span> <br/>  */}
              <button onClick={ () => excluirPost(post.id) }>Excluir</button> <br/> <br/>
            </li>
          )
        })}
      </ul>

    </div>

    </div>
  );
}

export default Home;