import styled from "styled-components";
import Popup from "reactjs-popup";

export const Button = styled.button`
  color: #ffffff;
  font-size: 12px;
  line-height: 12px;
  padding: 7px;
  border-radius: 8px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(
    to right,
    #946ffb 0%,
    #8053fa 50%,
    #703dfe 100%
  );
  box-shadow: #000000 5px 5px 15px 5px;
  border: 2px solid #5d23fb;
  display: inline-block;
  margin: 5px;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: block;
  width: 98%;
  margin: 50px auto;
  border-radius: 8px;
`;

export const Label = styled.label`
  background: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  width: 98%;
  display: block;
  padding: 0.5em;
  margin-bottom: 0.5em;
`;

export const Input = styled.input`
  padding: 0.5em;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  width: 98%;
  margin-bottom: 0.5em;
  display: block;
`;

export const Textarea = styled.textarea`
  padding: 0.5em;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  width: 98%;
  margin-bottom: 0.5em;
  display: block;
`;

export const PopUpContent = styled(Popup)`
  &-overlay {
  }
  &-content {
    width: 80%;
    box-shadow: #000000 5px 5px 15px 5px;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
    max-height: 100vh;
    overflow-y: auto;
  }
`;
