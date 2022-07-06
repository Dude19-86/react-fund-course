import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./Component/PostList";
import PostForm from "./Component/PostForm";
import MySelect from "./Component/UI/select/MySelect";
import MyInput from "./Component/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript 2', body: 'Description'},
        {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortedPost = useMemo(() => {
        console.log('Отработала функция сортед постс')
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    }, [selectedSort, posts]);

    const sortedAndSearchPosts = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPost]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter((p, i) => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
        console.log(sort)
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Сортировка"
                    option={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'}
                    ]}/>
            </div>
            {sortedAndSearchPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchPosts} title="Посты про JS"/>
                :
                <h1 style={{textAlign: 'center'}}>
                    Посты не найдены
                </h1>}

        </div>
    );
}

export default App;
