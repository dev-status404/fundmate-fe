import { useState } from 'react';
import {
  Header,
  Wrapper,
  Text,
  Topic,
  Title,
  Main,
  Box,
  Line,
  DescText,
  Blank,
} from '../styles/product-detail/prdouctstyle.style';
import PDBox from './PDBox';
import PDdetail from './PDdetail';
import PDReview from './PDReview';

const ProductDetail = () => {
  const [currentPage, setCurrentPage] = useState<boolean>(true);

  return (
    <Wrapper>
      <Header>
        <Text ishas={currentPage} onClick={() => setCurrentPage(true)}>
          프로젝트 계획
        </Text>
        <Text ishas={!currentPage} onClick={() => setCurrentPage(false)}>
          후기
        </Text>
      </Header>
      <Topic>
        <Line />
        <Title>{currentPage ? '프로젝트 소개' : '프로젝트 후기'}</Title>
      </Topic>
      <Main>
        <Box>
          <DescText>{currentPage ? <PDdetail /> : <PDReview />}</DescText>
        </Box>
        <PDBox />
      </Main>
      <Blank></Blank>
    </Wrapper>
  );
};

export default ProductDetail;
