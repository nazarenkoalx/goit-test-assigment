import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 0 100px;
  height: 500px;
`;

export const Title = styled.h1`
  /* text-align: center; */
  color: #0b0b45;
`;

export const Accent = styled.span`
  color: #5cd3a8;
  padding: 10px;
  background-color: #0b0b45;
  border-radius: 20px;
`;

export const MainImage = styled.div`
  position: relative;
  width: 400px;
`;

export const Image1 = styled.img`
  position: absolute;
  top: -20px;
  left: -20px;
  transform: translate(50, 50);
  height: 450px;
`;
export const Image2 = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  transform: translate(50, 50);
`;
export const Image3 = styled.img`
  position: absolute;
  top: 80px;
  left: 80px;
  transform: translate(50, 50);
`;
