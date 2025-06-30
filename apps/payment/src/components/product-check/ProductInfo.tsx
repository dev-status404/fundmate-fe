import { FaRegHeart } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  BaseButton,
  Bottom,
  BottomItems,
  Divide,
  IconBox,
  IconButton,
  IconGroup,
  KeyP,
  Top,
  ValueP,
  Wrapper,
} from '../styles/product-detail/productInfo.style';
import { useProductContext } from '../../context/ProductContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductInfo = () => {
  const { productData, productPaymentData } = useProductContext();
  const [click, setClick] = useState<boolean>(false);

  const copyClip = () => {
    const currentUrl = window.location.href;
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert('해당 페이지가 복사되었습니다.');
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <Wrapper>
      <Top>
        {Object.entries(productData).map(([key, value]) => (
          <Top key={key}>
            {key !== 'title' && <KeyP>{key}</KeyP>}
            <ValueP ishas={key === 'title'}>{value}</ValueP>
          </Top>
        ))}
      </Top>
      <Divide />
      <Bottom>
        {Object.entries(productPaymentData).map(([key, value]) => (
          <BottomItems key={key}>
            <div className="w-[120px]">
              <KeyP className="text-left">{key}</KeyP>
            </div>
            <ValueP>{value}</ValueP>
          </BottomItems>
        ))}

        <IconBox>
          <IconGroup>
            <IconButton onClick={() => setClick(!click)}>
              {click ? (
                <>
                  <FaRegHeart className="w-7 h-7 text-red-600" />
                  <span>1</span>
                </>
              ) : (
                <>
                  <FaRegHeart className="w-7 h-7" />
                  <span>0</span>
                </>
              )}
            </IconButton>
            <IconButton onClick={copyClip}>
              <IoShareSocialOutline className="w-8 h-8" />
            </IconButton>
          </IconGroup>
          <Link to="/payment" className="w-full">
            <BaseButton>후원하기</BaseButton>
          </Link>
        </IconBox>
      </Bottom>
    </Wrapper>
  );
};

export default ProductInfo;
