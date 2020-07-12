import React from "react";
import ReactDOM from "react-dom";
import ReactBootstrap from "react-bootstrap";

function App() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  function Home() {
    return (
      <>
        <ReactBootstrap.Carousel>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image wuzetian"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>武则天</h3>
              <p>
                长安城内至高无上的女帝陛下，永远不会忘记自己被诅咒的命运与理想国的梦想。
              </p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image damo"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>达摩</h3>
              <p>达摩是为降伏邪恶而生的。曾经有人这样预言。</p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image yangyuhuan"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>杨玉环</h3>
              <p>
                牡丹从宫城脚下开到曲江边，唯一能与这国色天香争艳的，乃杨玉环和她的琵琶。天人姿容，天籁琴音，都是长安的绝艺。
              </p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image laofuzi"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>老夫子</h3>
              <p>非我族类，其心必异！</p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image lvbu"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>吕布</h3>
              <p>
                男人倒在路边，奄奄一息。伤口引来苍蝇嗡嗡作响。肮脏又脆弱的小虫子，等待着吞噬身躯庞大的猎物的一刻。
              </p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image miyue"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>芈月</h3>
              <p>
                芈月永远不会忘记，自己卑微的少女时代结束于玄雍君主赞叹而惊艳的眼神。
              </p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
          <ReactBootstrap.Carousel.Item>
            <div className="carousel-image xiangyu"></div>
            <ReactBootstrap.Carousel.Caption>
              <h3>项羽</h3>
              <p>
                长久以来，大陆一直流传着关于灭世魔神王的传说。他象征着绝对的黑暗，要将人间界带入永夜和毁灭之中。
              </p>
            </ReactBootstrap.Carousel.Caption>
          </ReactBootstrap.Carousel.Item>
        </ReactBootstrap.Carousel>
      </>
    );
  }

  function About() {
    return (
      <div className="about">
        <div>
          <div className="name">王者荣耀</div>
          <div className="detail">
            《王者荣耀》是由腾讯游戏天美工作室群开发并运行的一款运营在Android、IOS、NS平台上的MOBA类手机游戏，于2015年11月26日在Android、IOS平台上正式公测，游戏前期使用名称有《英雄战迹》、《王者联盟》。《Arena
            Of Valor》，即《王者荣耀》的欧美版本于2018年在任天堂Switch平台发售。
          </div>
          <div className="divider"></div>
          <div className="other-info">
            <div>
              <span className="label">中文名</span>
              王者荣耀
            </div>
            <div>
              <span className="label">原版名称</span>
              Arena Of Valor: 5v5 Arena Game（海外版）；Penta Storm（韩国）
            </div>
            <div>
              <span className="label">游戏类型</span>
              MOBA；即时对战；英雄对战
            </div>
            <div>
              <span className="label">开发商</span>
              腾讯游戏；天美工作室群
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="app-content-wrap">
        <div className="app-content">
          <div className="app-nav">
            <div
              className={`app-nav-item ${activeIndex === 0 ? "active" : ""}`}
              onClick={setActiveIndex.bind(null, 0)}
            >
              Home
            </div>
            <div
              className={`app-nav-item ${activeIndex === 1 ? "active" : ""}`}
              onClick={setActiveIndex.bind(null, 1)}
            >
              About
            </div>
          </div>
          <div className="app-page">
            {activeIndex === 0 ? (
              <Home />
            ) : activeIndex === 1 ? (
              <About />
            ) : (
              void 0
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
