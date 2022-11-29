import { Layout } from 'antd';
import React from 'react';
import styled from 'styled-components';
const { Header: AntHeader } = Layout;


const StyledHeader = styled(AntHeader)`
  background: #FFFFFF 0% 0% no-repeat padding-box !important;
  box-shadow: 0px 3px 6px #00000029;
  opacity: 1;
`;

const Header = () => (
  <StyledHeader className="header">
    <div className="logo" />
  </StyledHeader>
)

export default Header;