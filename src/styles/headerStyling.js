import styled from "styled-components";

export const HeaderStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #031239;
    height: 10vh;
    width: 100%;
    padding: 2rem;

    .logo {
        color: white;
        font-family: Righteous, cursive;
        font-weight: 300;
        font-size: 3rem;
        margin-left: 1rem;
    }

    @media only screen and (max-width: 617px) {
        .logo {
            font-size: 2.5rem;
            margin-left: 0;
        }
    }

    @media only screen and (max-width: 510px) {
        .logo {
            font-size: 2rem;
        }
    }
`;
