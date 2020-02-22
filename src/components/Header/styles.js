import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(to left, var(--primary), var(--primary-dark));
  box-shadow: 0 5px 20px red;
  z-index: 2000;
`;

export const Logo = styled.h1`
  font-size: 2em;
  color: var(--color);
  letter-spacing: 8px;
`;
