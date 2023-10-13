import { styled } from 'styled-components'

export const SectionGrid = styled.div`
    display: flex;
    flex-direction: column;

    display: grid;      
    grid-template-columns: ${({ oneGrid }) => oneGrid}  ${({ twoGrid }) => twoGrid};
    gap: 4rem;

    margin-top: .8rem;

    @media (max-width: 1050px) {
        display: block;  
        grid-template-columns: none;
     }
    
`