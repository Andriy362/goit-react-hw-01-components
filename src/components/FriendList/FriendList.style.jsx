import styled from '@emotion/styled';

export const Container = styled.ul`
  list-style: none;
  display: flex;

  padding: 0px;
  align-items: center;
  justify-content: center;
`;
export const ItemList = styled.li`
  background-color: #e6e6fa;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 130px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

export const IsActive = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${friend => (friend.isOnline ? 'green' : 'red')};
`;

export const ImgPosition = styled.img`
  margin-top: 10px;
`;
