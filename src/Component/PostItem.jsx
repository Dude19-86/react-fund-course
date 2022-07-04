import React from 'react';

const PostItem = ({post, number}) => {
    return (
            <div className="post">
                <div className="post__counter">
                    <strong>{number} {post.title}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button className={"btn btn-primary"}>Удалить</button>
                </div>
            </div>
    );
};

export default PostItem;

