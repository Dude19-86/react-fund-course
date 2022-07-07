import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import MySelect from "./Component/UI/select/MySelect";
import MyInput from "./Component/UI/input/MyInput";
import PostFilter from "./Component/PostFilter";
import MyModal from "./Component/MyModal/MyModal";
import MyButton from "./Component/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    // const [selectedSort, setSelectedSort] = useState('')
    // const [searchQuery, setSearchQuery] = useState('')
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)

    const sortedPost = useMemo(() => {
        console.log('Отработала функция сортед постс')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts]);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPost]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter((p, i) => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter}
                        setFilter={setFilter}
            />
                <PostList remove={removePost} posts={sortedAndSearchPosts} title="Посты про JS"/>
        </div>
    );
}

export default App;
