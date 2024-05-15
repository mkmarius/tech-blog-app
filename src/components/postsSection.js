import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./post";
import { Link } from "react-router-dom";

//Styling
import GlobalStyle from "../styles/globalStyles";
import { PostSectionHeading } from "../styles/postSectionStyling";
import { PostSection } from "../styles/postSectionStyling";
import { CreateButtonDiv } from "../styles/postSectionStyling";

const PostsSection = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                    _limit: 12,
                },
            })
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, []);
    return (
        <>
            <GlobalStyle />
            <CreateButtonDiv>
                <PostSectionHeading>
                    <h1>The most recent posts</h1>
                </PostSectionHeading>
                <Link to={`/create`} className="create-btn">
                    Create Post
                </Link>
            </CreateButtonDiv>
            <PostSection>
                {!posts && posts.length === 0 ? (
                    <h1>No posts found</h1>
                ) : (
                    posts.map((post) => {
                        return (
                            <Post
                                key={post.id}
                                postID={post.id}
                                title={post.title}
                                userId={post.userId}
                            />
                        );
                    })
                )}
            </PostSection>
        </>
    );
};

export default PostsSection;
