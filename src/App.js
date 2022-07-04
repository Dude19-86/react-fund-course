import React, {useState} from "react";
import './styles/App.css'
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter((p, i) => p.id !== post.id))
    }



    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList remove={removePost} posts={posts} title="Посты про JS"/>
        </div>
    );
}

export default App;
