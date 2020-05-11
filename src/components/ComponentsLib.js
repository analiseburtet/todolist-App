import styled, { css } from 'styled-components'

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
  ${props => props.item && css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
    background: papayawhip;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.2),0 3px 3px 0 rgba(0,0,0,0.19);
    width: -webkit-fill-available;
  `}
  ${props => props.modal && css`
    color: white;
    padding: 14px;
    margin: 12px;
    display: flex;
    align-items: baseline;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  font-family: sans-serif;
  font-size: 1.2em;
  color: palevioletred;
  padding-left: 10px;
`;

export const SubTitle = styled.h2`
  font-family: sans-serif;
  font-size: 1em;
  color: palevioletred;
`;
