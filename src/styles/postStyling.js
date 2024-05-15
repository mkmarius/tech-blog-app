import styled from "styled-components";

export const PostStyled = styled.div`
    width: 100%;
    max-width: 500px;
    height: 180px;
    padding: 1rem;
    margin: 1rem;
    background: #031239;
    border: 3px solid #3f9dce;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    h2 {
        flex-wrap: wrap;
        margin-bottom: 0.5rem;

        @media only screen and (max-width: 495px) {
            font-size: 1.3rem;
        }
    }
`;

export const PostDetails = styled.div`
    height: 110px;
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    height: 70px;
    margin: 0;
`;
