import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 className="header1" style={{textAlign: "center"}}>{title}</h1>
            {posts.map((item, i) => (
                <PostItem remove={remove} number={i + 1} key={item.id} post={item}/>
            ))}
        </div>
    );
};

export default PostList;
