import { styled } from 'styled-components'

export const SectionGrid = styled.section`
    display: flex;
    flex-direction: column;

    display: grid;      
    grid-template-columns: ${({ oneGrid }) => oneGrid}  ${({ twoGrid }) => twoGrid};
    gap: 1.5rem;

    margin-top: .8rem;


    
`