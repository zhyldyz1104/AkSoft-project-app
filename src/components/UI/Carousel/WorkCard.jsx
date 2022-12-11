import styled from "styled-components";
import work from "../../../assets/img/work.png";

const WorkCard = () => {
  return (
    <Work style={{ backgroundImage: `url(${work})` }}>
      <div>
        <span>Lorem Ipsum - это текст-"рыба"</span>
        <p>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и
          вэб-дизайне.{" "}
        </p>
      </div>
    </Work>
  );
};
export default WorkCard;
const Work = styled.div`
  width: 48%;
  height: 442.66px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 75.36%
  );
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 6.46218px;
  div {
    margin: 30px 60px;
  }
  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 31.0185px;
    line-height: 42px;
    color: #ffffff;
  }
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9244px;
    line-height: 180%;
    color: #d0d4ea;
  }
`;
