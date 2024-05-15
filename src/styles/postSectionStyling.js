import styled from "styled-components";

export const PostSectionHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    width: 100%;
`;

export const PostSection = styled.div`
    padding: 1rem 1rem;
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 0.5rem;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    place-items: center;

    @media only screen and (max-width: 1700px) {
        width: 95%;
        margin: auto;
        padding: 1rem;
    }

    @media only screen and (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 794px) {
        grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 495px) {
        width: 95%;
    }
`;

export const CreateButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    @media only screen and (max-width: 1170px) {
        width: 100%;
        justify-content: center;
    }

    .create-btn {
        padding: 1rem 2rem;
        font-weight: 700;
        margin-top: 1.5rem;
        border-radius: 15px;
        font-size: 1.2rem;
        background: none;
        border: 3px solid #3f9dce;

        :hover {
            cursor: pointer;
            text-decoration: none;
            background: #3f9dce;
            color: #031239;
        }
        
        @media only screen and (max-width: 1700px) {
            margin-top: 1rem;
        }
    }
`;
