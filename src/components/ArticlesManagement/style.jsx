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
        padding: 0rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
        background: none;
        border: none;
        color: ${({ theme }) => theme.colors.primary};
        font-weight: 500;
        padding: 0rem;

        &:focus {
            background-color: #1e1e1e;  
        }
        
        
        option {
            border: none;
            user-select: none;
            font-size: 1rem;
            font-weight: 500;
            background-color: #1e1e1e;
        }

    }
`