import styled from '@emotion/styled';

export const Container = styled.div`
  width: 300px;
  heigth: 500px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  justify-content: center;
  background-color: #e6e6fa;
`;

export const ItemInfoName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #000000;
`;

export const ItemInfo = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #000000;
`;
export const DivContainer = styled.div``;
export const List = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.li`
  // display: flex;
  // flex-direction: column;
  margin-left: 12px;
  // align-items: center;
  &:first-of-type {
    margin: 0;
  }
`;
export const ItemSpan = styled.span`
  margin-bottom: 8px;
`;

export const UserName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
`;
