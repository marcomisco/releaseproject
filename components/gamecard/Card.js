import styled from 'styled-components';
import { MainInfo } from './CardInfo';
import Link from 'next/link';
import Image from 'next/image';
export const Card = ({
 
  game: { name, background_image, rating, metacritic, slug, platforms, tags },

}) => {
  return (
    <Link href={`/games/${slug}`}>
      <Container>
        {background_image && (
          <StyledImage
            src={background_image}
            alt={name}
            width={500}
            height={250}
   
          />
        )}

        <StyledDiv>
          <MainInfo name={name} rating={rating} metacritic={metacritic} />

          <StyledP>{platforms?.map((item) => item?.platform?.name).join(', ')}</StyledP>

   
        </StyledDiv>
      </Container>
    </Link>
  );
};

const Container = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: rgb(0 0 0 / 14%) 5px 5px 5px;
  overflow: hidden;
  cursor: pointer;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const StyledDiv = styled.div`
  width: 100%;
  padding: 2%;
`;

const StyledP = styled.p`
  color: #d3d3d3;
  padding: 2%;
`;
