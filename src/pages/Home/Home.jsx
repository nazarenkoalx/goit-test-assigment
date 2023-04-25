import { Container } from "../../components/TweetList/TweetList.styled";
import {
  HomeWrapper,
  Title,
  Accent,
  MainImage,
  Image3,
  Image2,
  Image1,
} from "./Home.styled";
import card from "../../images/card.png";

function Home() {
  return (
    <Container>
      <HomeWrapper>
        <Title>
          Welcome to <Accent>twitteland</Accent>
        </Title>
        <MainImage>
          <Image1 src={card} alt="tweet card" />
          <Image2 src={card} alt="tweet card" />
          <Image3 src={card} alt="tweet card" />
        </MainImage>
      </HomeWrapper>
    </Container>
  );
}

export default Home;
