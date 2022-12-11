import styled from "styled-components";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <Inputt
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
    />
  );
};
export default Input;
const Inputt = styled.input`
  width: 377px;
  height: 69.89px;
  background: #14161e;
  border-radius: 10px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;
  color: #9fa4bc;
  padding: 0px 20px;
  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    color: #9fa4bc;
  }
`;
