import styled from 'styled-components';

export const SearchResultsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  strong {
    font-weight: 600;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.secundary};
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
