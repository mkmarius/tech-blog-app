import styled from "styled-components";

export const PostSection = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

export const PostStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 5%;
    text-align: left;
    background: #031239;
    border: 3px solid #3f9dce;
    width: 80%;
    border-radius: 20px;

    a {
        padding: 1rem 2rem;
        border-radius: 15px;
        font-size: 1.2rem;
        background: none;
        border: 3px solid #3f9dce;
        color: #3f9dce;
        margin-bottom: 1.5rem;

        :hover {
            cursor: pointer;
            text-decoration: none;
            background: #3f9dce;
            color: #031239;
        }
    }

    p {
        width: 70%;
        font-size: 1.3rem;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-weight: 400;

        span {
            font-weight: 800;
            text-decoration: underline;
        }

        @media only screen and (max-width: 1000px) {
            width: 100%;
        }
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    @media only screen and (max-width: 650px) {
        h1 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1.1rem;
        }
    }

    @media only screen and (max-width: 480px) {
        h1 {
            font-size: 1.2rem;
        }

        p,
        a {
            font-size: 1rem;
        }
    }
`;
