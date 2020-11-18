import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        font-family:'Roboto', sans-serif;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #F2F2F2;
        height: 100%;
    }

    @keyframes fade-top {
        from {
            opacity: 0%;
            transform: scale(0.9);
        }
        to {
            opacity: 100%;
            transform: scale(1);
        }
    }
`;