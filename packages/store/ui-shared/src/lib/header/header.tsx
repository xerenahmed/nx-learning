import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

const StyledHeader = styled.div`
  color: pink;
  border: 1px solid red;
  margin-bottom: 10px;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>{props.title || "Title"}</h1>
    </StyledHeader>
  );
}

export default Header;
