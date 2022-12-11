import styled from "styled-components";

const Button = ({ onClick, children, version }) => {
  return (
    <StyledButton
      style={{
        width: `${version === "big" ? "377px" : "190px"}`,
        height: `${version === "big" ? "69.89px" : "46px"}`,
      }}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
export default Button;
const StyledButton = styled.button`
  background: #377dff;
  border-radius: 10px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 180%;
  color: #ffffff;
`;
