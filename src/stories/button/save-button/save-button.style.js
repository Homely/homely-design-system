import styled from 'styled-components/macro';

export const IconSc = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  vertical-align: bottom;
  margin: ${({ isDesktop }) => (isDesktop ? '-3px 0 -3px -6px' : '0')};
  ${({ isDesktop }) => (isDesktop ? 'transform: scale(0.75);' : '')};
`;

export default IconSc;
