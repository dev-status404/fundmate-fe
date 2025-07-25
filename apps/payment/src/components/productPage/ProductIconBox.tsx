import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  IconBox,
  IconButton,
  IconGroup,
} from '../styles/product-detail/productInfo.style';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainButton } from '@repo/ui/components';
import { useGetProductInfo } from '../../hooks/product/getProductInfo';

interface ProductInfoProps {
  projectId?: string;
}

const ProductIconBox: React.FC<ProductInfoProps> = ({ projectId }) => {
  const [click, setClick] = useState<boolean>(false);

  const { data: productData } = useGetProductInfo(Number(projectId));

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
    <IconBox className="px-3 sm:px-0">
      <IconGroup>
        <IconButton onClick={() => setClick(!click)}>
          {click ? (
            <>
              <FaHeart className="w-7 h-7 text-red-600" />
              <span>{(productData?.project.likes ?? 0) + 1}</span>
            </>
          ) : (
            <>
              <FaRegHeart className="w-7 h-7" />
              <span>{productData?.project?.likes || 0}</span>
            </>
          )}
        </IconButton>
        <IconButton onClick={copyClip}>
          <IoShareSocialOutline className="w-8 h-8" />
        </IconButton>
      </IconGroup>
      <Link to={`/payment/${projectId}`} className="w-full">
        <MainButton
          label={'후원하기'}
          textSize={'text-base'}
          textWeight={'font-bold'}
          className="w-72 px-6 py-3 ml-3.5  sm:w-full"
        />
      </Link>
    </IconBox>
  );
};

export default ProductIconBox;
