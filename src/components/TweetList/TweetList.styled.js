import styled from "@emotion/styled";

export const Container = styled.main`
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledTweetList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  justify-content: center;
  margin-bottom: 48px;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 28px 14px;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  border: none;
  font-family: inherit;
  cursor: pointer;
  :hover {
    background-color: #5cd3a8;
  }
`;
