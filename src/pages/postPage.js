import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import GlobalStyle from "../styles/globalStyles";
import { PostSection } from "../styles/postPageStyling";
import { PostStyled } from "../styles/postPageStyling";
const PostPage = () => {
    let { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setPost(res.data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, [id]);

    return (
        <>
            <GlobalStyle />
            <PostSection>
                <PostStyled>
                    <h1>{post.id + ". " + post.title}</h1>
                    <p>{post.body}</p>
                    <p>
                        {`Post written by`}{" "}
                        <span>{`User no. ${post.userId}`}</span>
                    </p>
                    <Link to={`/post/${post.id}/edit`}>Edit post</Link>
                    <Link to={`/`}>Go back to homepage.</Link>
                </PostStyled>
            </PostSection>
        </>
    );
};
export default PostPage;
