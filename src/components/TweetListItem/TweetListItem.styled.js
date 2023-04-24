import styled from "@emotion/styled";

export const StyledTweetListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-left: 36px;
  padding-top: 28px;
  padding-right: 36px;
  padding-bottom: 36px;
`;

export const TopImage = styled.img`
  display: block;
  /* margin: 0 auto; */
`;
export const TopLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
  fill: rgba(255, 255, 255, 0.3);
`;

export const AvatarLine = styled.img`
  position: absolute;
  top: 214px;
  left: 0;
`;
export const AvatarCircle = styled.img`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  z-index: 3;
`;
export const AvatarImage = styled.img`
  position: absolute;
  background: #5736a3;
  top: 185px;
  left: 159px;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  z-index: 2;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 88px;
  margin-bottom: 26px;
`;

export const TextParagraph = styled.p`
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowBtn = styled.button`
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
  &.active {
    background-color: #5cd3a8;
  }
`;
