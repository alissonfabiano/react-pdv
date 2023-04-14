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

export type IDashboard = {
  category: Category;
  setCategory: (category: Category) => void;
};

export const dashboardContextDefaultValues: IDashboard = ({
  category: Category.All,
} as unknown) as IDashboard;

export const DashboardContext = createContext<IDashboard>(
  dashboardContextDefaultValues,
);

export const useDashboardContext = (): IDashboard => useContext(DashboardContext);

function DashboardContextProvider(
  props: PropsWithChildren<ReactNode>,
): JSX.Element {
  const [category, setCategory] = useState<Category>(
    dashboardContextDefaultValues.category,
  );

  return (
    <DashboardContext.Provider value={{ category, setCategory }}>
      {props?.children}
    </DashboardContext.Provider>
  );
}

export default DashboardContextProvider;
