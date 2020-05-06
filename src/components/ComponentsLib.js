import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export const Container = styled.div`
  text-align: center;
  ${props => props.main && css`
    display: flex;
    flex: 1;
    flex-direction: column;
  `}
  ${props => props.row && css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 12px;
    background: papayawhip;
    margin-bottom: 10px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.2),0 3px 3px 0 rgba(0,0,0,0.19);
  `}
  ${props => props.modal && css`
    border: 2px solid palevioletred;
    color: white;
    border-radius: 3px;
    padding: 14px;
    margin: 12px;
  `}
`

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  padding-left: 12px;
`;

export const SubTitle = styled.h2`
  font-size: 1em;
  color: palevioletred;
`;
