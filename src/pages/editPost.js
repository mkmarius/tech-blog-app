import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

//Styles
import GlobalStyle from "../styles/globalStyles";
import { FormSection } from "../styles/formStyling";
import { FormContainer } from "../styles/formStyling";
import { FormStyled } from "../styles/formStyling";
import { TitleInput } from "../styles/formStyling";
import { BodyInput } from "../styles/formStyling";
import { SubmitButton } from "../styles/formStyling";

const EditPost = () => {
    let { id } = useParams();
    const [post, setPost] = useState({});
    const [postTitle, setPostTitle] = useState("");
    const [postDescription, setPostDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            title: postTitle,
            body: postDescription,
        };

        axios
            .patch(
                `https://jsonplaceholder.typicode.com/posts/${id}`,
                newDetails
            )
            .then((response) => {
                alert(
                    `Post has been edited. New title: ${response.data.title}, new description: ${response.data.body}`
                );
            });
    };

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
        <div>
            <FormSection>
                <FormContainer>
                    <GlobalStyle />
                    <h1>
                        Currently editing: {postTitle ? postTitle : post.title}
                    </h1>
                    <FormStyled onSubmit={handleSubmit}>
                        <TitleInput>
                            <label htmlFor="title">Post Title</label>
                            <input
                                type="text"
                                className="title"
                                id="title"
                                name="title"
                                placeholder={post.title}
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                                maxLength="80"
                            />
                        </TitleInput>
                        <BodyInput>
                            <label htmlFor="body-text">Body Text</label>
                            <textarea
                                name="body-text"
                                id="body-text"
                                placeholder={post.body}
                                spellCheck="false"
                                value={postDescription}
                                onChange={(e) =>
                                    setPostDescription(e.target.value)
                                }></textarea>
                        </BodyInput>
                        <SubmitButton type="submit" value="Send" />
                        <Link to={`/post/${post.id}`}>
                            Go back to post preview.
                        </Link>
                    </FormStyled>
                </FormContainer>
            </FormSection>
        </div>
    );
};

export default EditPost;
