// TODO : 추후 실제 데이터 사용

import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type { ProductDataProps } from '../App';

interface ProductContextType {
  productData: ProductDataProps;
  productPaymentData: ProductDataProps;
}

const ProductContext = createContext<ProductContextType>(
  null as unknown as ProductContextType
);

interface ProductProviderProps {
  children: ReactNode;
  productData: ProductDataProps;
  productPaymentData: ProductDataProps;
}

export const ProductProvider = ({
  children,
  productData,
  productPaymentData,
}: ProductProviderProps) => {
  return (
    <ProductContext.Provider value={{ productData, productPaymentData }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('ProductProvider 에러');
  }
  return context;
};
