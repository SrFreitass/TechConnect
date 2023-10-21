import { styled, css } from "styled-components";

export const MobileMenuStyle = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: flex;
    padding: 3rem 0rem;

    ul {
      display: none;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }

    @keyframes downMenu {
      0% {
        opacity: 0;
        transform: translateY(-20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    ${({ menu }) =>
      menu &&
      css`
        ul {
          z-index: 99;
          width: 100%;
          height: 100%;
          animation: 0.2s downMenu forwards;
          padding: 1rem;
          right: 0;

          display: flex !important;
          flex-direction: column;
          align-items: start;
          gap: 1rem;

          margin-top: 4rem;
          position: absolute;
          padding: 0rem 2.2rem !important;

          background-color: #191919;
        }

        li:first-child {
          border: none;
        }

        li {
          cursor: pointer;
          padding: 0.4rem 0rem;
          width: 101%;

          display: flex;
          justify-content: space-between;
          flex-direction: column;
          gap: 1rem;

          border-bottom: 0.5px solid #353438;

          div:first-child {
            display: flex;
            align-items: center;
            justify-content: space-between;

            font-weight: 600;
            color: ${({ theme }) => theme.colors.primary};
          }

          a {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          li:last-child {
            justify-content: start;
            align-items: center;
            flex-direction: row;
            gap: 0.5rem;
          }

          div:nth-child(2) {
            display: flex;
            gap: 1rem;
            flex-direction: column;

            animation: 0.2s Animation forwards;
            overflow: auto;
          }

          strong {
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primary};
          }
        }
      `}
  }
`;
