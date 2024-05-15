import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//Styling
import GlobalStyle from "../styles/globalStyles";
import { FormSection } from "../styles/formStyling";
import { FormContainer } from "../styles/formStyling";
import { FormStyled } from "../styles/formStyling";
import { TitleInput } from "../styles/formStyling";
import { BodyInput } from "../styles/formStyling";
import { SubmitButton } from "../styles/formStyling";

const CreatePost = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBlogInputs = {
            title: newTitle,
            body: newDescription,
        };

        axios
            .post(
                `https://jsonplaceholder.typicode.com/posts`,
                newBlogInputs
            )
            .then((response) => {;
                alert(
                    `A new post called "${response.data.title}" has been created!`
                );
            });
    };

    return (
        <div>
            <FormSection>
                <FormContainer>
                    <GlobalStyle />
                    <h1>Create A New Post</h1>
                    <FormStyled onSubmit={handleSubmit}>
                        <TitleInput>
                            <label htmlFor="title">Post Title:</label>
                            <input
                                type="text"
                                className="title"
                                id="title"
                                name="title"
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                maxLength="80"
                                required
                            />
                        </TitleInput>
                        <BodyInput>
                            <label htmlFor="body-text">Body Text</label>
                            <textarea
                                name="body-text"
                                id="body-text"
                                spellCheck="false"
                                value={newDescription}
                                onChange={(e) =>
                                    setNewDescription(e.target.value)
                                }
                                required></textarea>
                        </BodyInput>
                        <SubmitButton type="submit" value="Send" />
                        <Link to="/">Go back to homepage.</Link>
                    </FormStyled>
                </FormContainer>
            </FormSection>
        </div>
    );
};

export default CreatePost;
