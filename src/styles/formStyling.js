import styled from "styled-components";

export const FormSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5%;
    text-align: left;
    background: #031239;
    border: 3px solid #3f9dce;
    width: 80%;
    border-radius: 20px;

    h1 {
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 542px) {
        width: 90%;

        h1 {
            font-size: 1.2rem;
        }
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
        margin-bottom: 1rem;
        margin-top: 1rem;
        color: white;
    }
`;

export const TitleInput = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.2rem;

    label {
        width: 100%;
    }

    input {
        width: 100%;
        min-height: 2.5rem;
        font-size: 1rem;
        font-weight: 400;
        border: none;
        border-radius: 5px;
        padding: 1rem;
    }
`;
export const BodyInput = styled.div`
    display: flex;
    flex-direction: column;

    textarea {
        width: 100%;
        font-weight: 400;
        height: 200px;
        border: none;
        border-radius: 10px;
        padding: 1rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
`;
export const SubmitButton = styled.input`
    padding: 1rem 2rem;
    font-weight: 700;
    width: 120px;
    border-radius: 15px;
    background: none;
    border: 3px solid #3f9dce;
    color: #3f9dce;
    margin-bottom: 1rem;

    :hover {
        cursor: pointer;
        text-decoration: none;
        background: #3f9dce;
        color: #031239;
    }
    
    @media only screen and (max-width: 542px) {
        font-size: 1.1rem !important;
    }
`;
