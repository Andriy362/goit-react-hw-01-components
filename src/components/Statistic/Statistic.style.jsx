import styled from '@emotion/styled';

export const Container = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6e6fa;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0;
  margin-bottom: 20px;
`;
export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const ListInfo = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
    margin-right: 10px;
    background-color: ${color => getRandomHexColor()};
    width: 60px;
    height: 46px;
    align-items: center;
    border-radius: 5px;
    &:last-child {
    margin: 0;

  }
}
`;

export const ItemInfo = styled.span`
  margin-bottom: 10px;
`;

export const Header = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  color: #000000;
`;
