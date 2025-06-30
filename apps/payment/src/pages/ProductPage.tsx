import ProductImg from '../components/product-check/ProductImg';
import ProductInfo from '../components/product-check/ProductInfo';
import ProductDetail from '../components/product-detail/ProductDetail';
import { FlexCol, FlexItem, FlexRow } from '../components/styles/flex.style';

function ProductPage() {
  return (
    <FlexCol>
      <FlexRow className="items-start">
        <FlexItem>
          <ProductImg />
        </FlexItem>
        <FlexItem>
          <ProductInfo />
        </FlexItem>
      </FlexRow>
      <ProductDetail />
    </FlexCol>
  );
}

export default ProductPage;
