import { styled } from "styled-components";

export const StyleArticleCreationForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.black800};
  background-color: #232428;
  width: 100%;
  border-radius: 5px;

  form {
    display: flex;
    width: 100%;
  }

  form > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
    padding: 1rem;
  }

  div.tox {
    width: 100%;
  }

  div.tox-menubar,
  div.tox-toolbar,
  div.tox-editor-header,
  div.tox-tinymce,
  div.tox-editor-header,
  div.tox-tbtn,
  div.tox .tox-mbtn--active,
  div.tox-menu,
  div.tox {
    background: #232428 !important;
    border: none;
    border-radius: 0px 0px 5px 0px;
    padding: 0;
  }

  .tox-menu tox-collection .tox-collection--list .tox-selected-menu {
    background-color: #232428 !important;
  }

  .tox .tox-toolbar-overlord,
  .tox-toolbar__primary,
  .tox-tbtn--bespoke {
    background-color: #232428 !important;
  }

  .tox-statusbar {
    background-color: #121212 !important;
  }

  div.tox-collection {
    background-color: #121212 !important;
  }

  select {
    width: 14.5rem;
    height: 2rem;
    border: none;

    font-size: 1rem;
    font-weight: 500;

    padding: 0;
    color: ${({ theme }) => theme.colors.primary};
    background: #232428;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 1050px) {
    form {
      border-radius: 10px;
      flex-direction: column-reverse;

      div.tox {
        border-radius: 10px;
        height: 90vh !important;
      }
    }
  }
`;
export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  gap: 1rem;
  width: 100%;

  svg {
    margin-bottom: 5rem;
    position: absolute;
    align-self: center;
    fill: ${({ theme }) => theme.colors.purple500};
  }

  span {
    align-self: center;
    position: absolute;
    text-align: center;
    color: ${({ theme }) => theme.colors.purple500};
    font-weight: bold;
  }

  span:after {
    display: block;
    text-align: center;
    font-weight: 500;
    content: "Ou arraste aqui";
  }

  input[type="file"]::-webkit-file-upload-button {
    width: 100%;
    height: 12rem;
    font-size: 0rem;
    background: none;
    border: 2px dashed ${({ theme }) => theme.colors.purple500};
    border-radius: 10px;
  }

  input[type="file"] {
    font-size: 0rem;
  }

  @media (max-width: 850px) {
    input[type="file"]::-webkit-file-upload-button {
      height: 15rem;
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: start;
  font-weight: 500;
  padding: 0.6rem 0rem;
  gap: 0.5rem;

  p {
    max-width: 20rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  label {
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: start;
  padding: 1rem;
`;

export const ButtonDefault = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.colors.purple700};
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-family: "Montserrat";
  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    min-width: 100%;
    min-height: 100%;
  }
`;
