import { styled } from 'styled-components'

export const RecomentDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
        font-size: 1.2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
    }

    span {
        font-weight: 600;
        color: ${({ theme }) => theme.colors.purple400};
        font-size: 1.2rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.secundary};
    }

     @media (max-width: 1050px) {
        display: none;
     }

`