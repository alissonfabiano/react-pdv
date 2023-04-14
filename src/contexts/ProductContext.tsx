import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from 'react';

export enum Category {
  All = 0,
  Bebidas = 1,
  Salgados = 2,
  Sanduiches = 3,
}

export type IProduct = {
  category: Category;
  setCategory: (category: Category) => void;
};

export const productContextDefaultValues: IProduct = ({
  category: Category.All,
} as unknown) as IProduct;

export const ProductContext = createContext<IProduct>(
  productContextDefaultValues,
);

export const useProductContext = (): IProduct => useContext(ProductContext);

function ProductContextProvider(props: PropsWithChildren<ReactNode>): JSX.Element {
  const [category, setCategory] = useState<Category>(
    productContextDefaultValues.category,
  );

  return (
    <ProductContext.Provider value={{ category, setCategory }}>
      {props?.children}
    </ProductContext.Provider>
  );
}

export default ProductContextProvider;
