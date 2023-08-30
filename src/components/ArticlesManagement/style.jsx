import { styled } from 'styled-components'

export const SectionAdminStyled = styled.section`
    display: flex;
    flex-direction: column;

    div {
        display: flex; 
    }

    h2 {
        color: ${({ theme }) => theme.colors.primary}
    }

    select {
        width: 12rem;
        font-size: .9rem;
        background: none;
        border: none;

        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;

        option {
            background: ${({ theme }) => theme.colors.black800};
        }
    }
`