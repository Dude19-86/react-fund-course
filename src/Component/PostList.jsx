import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 className="header1" style={{textAlign: "center"}}>{title}</h1>
            <TransitionGroup>
                {posts.map((item, i) => (
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="post"
                    >
                    <PostItem remove={remove} number={i + 1}  post={item}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
