import styled from 'styled-components';

export const Skeleton = styled.div`
    background-color: ${ ({ theme }) => theme.colors.gray20 };
    position: relative;
    overflow: hidden;
    display: inline-block;
    &::after {
        background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0));
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
        animation: shimmer 1.5s infinite;
        content: '';
    }
    @keyframes shimmer {
        100% {
            transform: translateX(100%);
        }
    };
`;
