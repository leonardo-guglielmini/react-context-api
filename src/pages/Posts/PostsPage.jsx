import style from './PostsPage.module.css'


import PostsList from '../../components/PostsList/PostsList'


export const API_BASE_URI = 'http://localhost:3000/'

export default function Posts(){



    return(
        <>
            <h1 className={style.title}>I miei posts</h1>
            <PostsList/>
        </>
    )
}