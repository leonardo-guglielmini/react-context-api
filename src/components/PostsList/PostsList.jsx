import axios from "axios"
import style from "./PostsList.module.css"
import PostCard from "../Card/PostCard"

import GlobalContext from "../../context/GlobalContext"

import { useState, useEffect, /*, useRef*/ useContext} from 'react'

export const API_BASE_URI = 'http://localhost:3000/'

export default function PostsList(){

    const {posts,setPosts, fetchPosts} = useContext(GlobalContext)
    

    let tags=[]
    const [postTitle, setPostTitle] = useState("")

    

    useEffect(() => {
        fetchPosts()
    })    

    function deletePost(id){
        console.log(id)
        axios.delete(`${API_BASE_URI}posts/${id}`)
            .then(()=>{
                fetchPosts()
            })
            .catch(err =>{
                console.error(err)
            })
    }

    /*TO-DO*/
    function changePostTitle(id){
        if(postTitle === "") return

        setPosts(posts.map(post => 
            post.id === id ? { ...post, title: postTitle } : post
        ));
        setPostTitle("")

        //console.log(posts)
        console.log("Titolo aggiornato correttamente");
    }

    return (
        <main className={style.mainContent}>
        <div className="container">


            <section className={style.row}>
                {posts.map((post)=>
                    post.published===true ?
                    <div className={style.col3} key={post.id}>
                        <PostCard deletePost={()=>deletePost(post.id)} changePostTitle={(event)=>changePostTitle(event, post.id)} setPostTitle={(value)=>setPostTitle(value)} title={post.title} image={post.image} content={post.content} tags={post.tags} postTitle={postTitle} id={post.id}/>
                        {post.tags.forEach(tag => !tags.find((el) => el === tag) ? tags.push(tag) : null)}
                    </div> : null
                )}
            </section>
            <section className={style.tagList}>
                <h3>Tag presenti</h3>
                <ul>
                    {tags.map((tag, index) => <li className={`tag ${tag}Tag`} key={index}>{tag}</li> )}
                </ul>
            </section>
        </div>
    </main>
    )
}