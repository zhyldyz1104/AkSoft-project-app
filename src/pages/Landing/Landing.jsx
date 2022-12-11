import logo from "../../assets/logo/logo aksoft.svg";
import icon1 from "../../assets/logo/icon1.svg";
import icon2 from "../../assets/logo/icon2.svg";
import icon3 from "../../assets/logo/icon3.svg";
import facebook from "../../assets/logo/Facebook.svg";
import instagram from "../../assets/logo/Instagram.svg";
import dribbble from "../../assets/logo/Dribbble.png";
import linkedin from "../../assets/logo/LinkedIn.png";
import twitter from "../../assets/logo/Twitter.png";
import banner from "../../assets/img/banner.jpg";
import web from "../../assets/img/web.svg";
import mob from "../../assets/img/mob.svg";
import web2 from "../../assets/img/web2.svg";
import styled from "styled-components";
import Wrapper from "../../components/UI/Wrapper/Wrapper";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Card from "../../components/UI/Service-Card/Card";
import photo from "../../assets/img/gallery (1).svg";
import photo2 from "../../assets/img/gallery (2).svg";
import photo3 from "../../assets/img/gallery (3).svg";
import photo4 from "../../assets/img/gallery (4).svg";
import photo5 from "../../assets/img/gallery (5).svg";
import photo6 from "../../assets/img/gallery (6).svg";
import Carousel from "../../components/UI/Carousel/Carousel";
const CARD = [
  {
    img: web,
    icon: icon1,
    title: "Веб разработка",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged    but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    img: web2,
    icon: icon2,
    reverse: true,
    title: "Мобильная разработка",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged    but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    img: mob,
    icon: icon3,
    title: "Веб разработка",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged    but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];

export default function Landing() {
  return (
    <div>
      <Darkblue>
        <Wrapper>
          <Header>
            <img src={logo} alt={logo} />
            <ul>
              {navigations.map(({ text, onClick }) => (
                <li key={text} onClick={onClick}>
                  {text}
                </li>
              ))}
            </ul>
            <select>
              <option value="1">RU</option>
              <option value="2">ENG</option>
              <option value="3">KYR</option>
            </select>
          </Header>
        </Wrapper>
      </Darkblue>
      <Cover style={{ backgroundImage: `url(${banner}) ` }}>
        <Wrapper>
          <section>
            <div>
              <h1>Создание сайтов и Веб приложений под ключ в Бишкеке</h1>
              <p>
                Мы разработаем вам под ключ сайт и мобильное приложение любой
                сложности за адекватную стоимость и поможем запустить в сеть.
              </p>
            </div>

            <img
              src="https://media.giphy.com/media/jpbcQK66PWNAluFJIg/giphy.gif"
              alt="giphy"
            />
          </section>
        </Wrapper>
      </Cover>
      <Black>
        <Wrapper>
          <Application>
            <h2>
              Заполните заявку и мы перезвоним Вам и бесплатно проконсультируем
              по телефону или при личной встрече!
            </h2>
            <form>
              <Input placeholder="Введите номер телефона" />
              <Input placeholder="Введите адрес электронной почты" />
              <Button version="big">Отправить</Button>
            </form>
          </Application>
          <Title>Наши услуги</Title>
          {CARD.map(({ img, icon, title, text, reverse }) => (
            <Card
              icon={icon}
              title={title}
              img={img}
              text={text}
              reverse={reverse}
            />
          ))}
          <Title>Наши работы:</Title>
          <Carousel />
          <Title>Фото галерея</Title>
          <Gallery>
            <img className="div1" src={photo2} alt="phdoto" />
            <div>
              <img className="div2" src={photo3} alt="phdoto" />
              <img className="div3" src={photo4} alt="phdoto" />
            </div>
            <img className="div4" src={photo5} alt="phdoto" />
            <div>
              <img className="div5" src={photo6} alt="phdoto" />
              <img className="div6" src={photo} alt="phdoto" />
            </div>
          </Gallery>
          <Application>
            <h2>
              Хотите подробнее узнать об этом проекте или заказать подобный
              проект? Отправьте сообщение и мы свяжемся с вами
            </h2>
            <form>
              <Input placeholder="Введите ваше имя" />
              <Input placeholder="Введите номер телефона" />
              <Input placeholder="Введите адрес электронной почты" />
              <Button version="big">Отправить</Button>
            </form>
          </Application>
        </Wrapper>
      </Black>
      <BlueDark>
        <Wrapper>
          <Footer>
            <div>
              <img src={logo} alt={logo} />
              <p>
                Lorem Ipsum - это текст-"рыба", часто <br />
                используемый в печати и вэб-дизайне.
              </p>
            </div>
            <ul className="div2">
              <li>First Column</li>
              <li>First Link</li>
              <li>First Link</li>
              <li>First Link</li>
              <li>First Link</li>
              <li>First Link</li>
            </ul>
            <ul className="div3">
              <li>Second Column</li>
              <li>Second Link</li>
              <li>Second Link</li>
              <li>Second Link</li>
              <li>Second Link</li>
              <li>Second Link</li>
            </ul>
            <ul className="div4">
              <li>Third Column</li>
              <li>Third Link</li>
              <li>Third Link</li>
              <li>Third Link</li>
              <li>Third Link</li>
              <li>Third Link</li>
            </ul>
          </Footer>
        </Wrapper>
      </BlueDark>
      <Black>
        <Wrapper>
          <div className="contacts">
            <span>AKSOFT</span>
            <p> +996559993385 </p>
            <p>Manager@aksoftDev</p>
            <div className="icons">
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="facebook" />
              <img src={dribbble} alt="facebook" />
              <img src={linkedin} alt="facebook" />
              <img src={twitter} alt="facebook" />
            </div>
          </div>
        </Wrapper>
      </Black>
    </div>
  );
}
const BlueDark = styled.div`
  background-color: #161925;
`;
const navigations = [
  {
    text: "Главная",
    onClick: () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
  },
  {
    text: "Услуги",
    onClick: () =>
      window.scrollTo({
        top: 1000,
        behavior: "smooth",
      }),
  },
  {
    text: "Наши работы",
    onClick: () =>
      window.scrollTo({
        top: 2830,
        behavior: "smooth",
      }),
  },
  {
    text: "О нас",
    onClick: () =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
  },
  {
    text: "Контакты",
    onClick: () =>
      window.scrollTo({
        top: 500,
        behavior: "smooth",
      }),
  },
];
const Footer = styled.footer`
  color: #d0d4ea;
  padding: 50px 30px;
  display: flex;
  justify-content: space-around;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 180%;
    color: #d0d4ea;
    margin: 20px 0px;
  }
  ul {
    li {
      font-family: "Inter";
      list-style: none;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 180%;
      color: #d0d4ea;
      margin: 10px 0px;
    }
  }
`;
const Gallery = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 200px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 65px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 50px;
`;
const Application = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 100px 0px;
  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 140%;
    letter-spacing: 0.01em;
    color: #ffffff;
    width: 50%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    input {
      margin-bottom: 20px;
    }
  }
`;
const Cover = styled.div`
  background-repeat: no-repeat;
  background-size: auto;
  background-size: cover;
  height: 890px;
  display: flex;
  align-items: flex-start;
  margin-top: -60px;
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 100px 0px;
    filter: none;
    /* margin-top: -60px; */
    img {
      width: 100%;
      /* height: 765px; */
    }
    h1 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 72px;
      line-height: 84px;
      color: #0f0f0f;
    }
    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 180%;
      margin-top: 20px;
      color: #474950;
    }
  }
`;
const Darkblue = styled.div`
  height: 165px;
  width: 100%;
  -moz-transform: rotate(357deg) translate(0px, -80px) skew(0deg, 1deg);
  -webkit-transform: rotate(357deg) translate(0px, -80px) skew(0deg, 1deg);
  -o-transform: rotate(357deg) translate(0px, -80px) skew(0deg, 1deg);
  -ms-transform: rotate(357deg) translate(0px, -80px) skew(0deg, 1deg);
  transform: rotate(357deg) translate(0px, -80px) skew(0deg, 1deg);
  background: #161925;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: -150px;
`;
const Black = styled.div`
  background: #0f1118;
  padding: 30px 0px;
  .contacts {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 30px;
      line-height: 180%;
      text-transform: lowercase;
      color: #ffffff;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: 0.01em;
      color: #ffffff;
    }
  }
  .icons {
    width: 256px;
    display: flex;
    justify-content: space-between;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
  -moz-transform: rotate(361deg) translate(0px, 80px) skew(0deg, 1deg);
  -webkit-transform: rotate(361deg) translate(0px, 80px) skew(0deg, 1deg);
  -o-transform: rotate(361deg) translate(0px, 80px) skew(0deg, 1deg);
  -ms-transform: rotate(361deg) translate(0px, 80px) skew(0deg, 1deg);
  transform: rotate(361deg) translate(0px, 80px) skew(0deg, 1deg);
  select {
    width: 97px;
    color: white;
    height: 38px;
    background: none;
    border: 0.639964px solid #ffffff;
    border-radius: 3.19982px;
    option {
      border: none;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 11.7327px;
      line-height: 14px;
      text-align: left;
      color: black;
    }
  }
  ul {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  li {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;
    text-decoration: none;
    list-style: none;
    color: #ffffff;
    cursor: pointer;
  }
  select {
    width: 97px;
    height: 38px;
  }
  img {
    margin: 0px 20px;
  }
`;
