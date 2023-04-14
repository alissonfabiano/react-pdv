import React, { PropsWithChildren, ReactNode } from 'react';

import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import * as s from './styled';

import GlobalStyles from '../../styles/global';

const Layout: React.FC = ({ children }: PropsWithChildren<ReactNode>) => (
  <s.LayoutWrapper>
    <GlobalStyles />
    <MenuBar />
    <s.LayoutMain>{children}</s.LayoutMain>
    <Sidebar />
  </s.LayoutWrapper>
);

export default Layout;
