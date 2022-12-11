import styled from "styled-components";

export default function Wrapper({ children }) {
  return <Content>{children}</Content>;
}
const Content = styled.div`
  max-width: 1820px;
  min-width: 884px;
  margin: 0px auto;
  padding: 0px 100px;
  background: none;
`;
