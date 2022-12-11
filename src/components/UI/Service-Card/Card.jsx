import styled from "styled-components";
import Button from "../Button/Button";

const Card = ({ img, title, icon, text, onClick, reverse }) => {
  return (
    <Wrap style={{ flexDirection: `${reverse ? "row-reverse" : ""}` }}>
      <img className="img" src={img} alt={img} />
      <div className="div">
        <div className="texts">
          <img className="icon" src={icon} alt={icon} />
          <p className="title">{title}</p>
          <p className="text">{text}</p>
        </div>

        <Button>Заказать</Button>
      </div>
    </Wrap>
  );
};
export default Card;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0px;
  width: 100%;
  height: 484px;
  background: #14161e;
  border-radius: 20px;
  .texts {
    text-align: center;
  }
  .div {
    width: 65%;
    margin: 20px 20px;
    text-align: right;
    button {
      margin: 30px 0px;
    }
  }

  .img {
    height: 484px;
    width: auto;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 144%;
    text-align: center;
    color: #ffffff;
  }
  .text {
    /* Paragraph */
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    text-align: center;
    color: #d0d4ea;
  }
`;
