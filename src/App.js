import React, {useState} from "react";
import './styles/App.css'
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import MySelect from "./Component/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter((p, i) => p.id !== post.id))
    }

    const sortPosts = sort => {
        setSelectedSort(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="сортировка"
                    option={[
                        {value: 'tttle', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}/>
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="Посты про JS"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>}

        </div>
    );
}

export default App;
