import styled from "styled-components";

const Cube = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  animation: animate 4s linear infinite;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background: #222;
    transform: rotateX(90deg) translateZ(150px);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 300px;
      background: #8fa599;
      transform: translateZ(-380px);
      filter: blur(20px);
      box-shadow: 0 0 120px #8fa599, 0 0 150px #8fa599, 0 0 200px #6fa788,
        0 0 300px #3fa86f, 0 0 400px #0aac53;
    }
  }
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#000, #9fa8a3);
      transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
    }
  }
`;
const Cube1 = styled.div`
  margin-right: 800px;
  margin-top: 400px;
  position: absolute;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  animation: animate 4s linear infinite;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background: #222;
    transform: rotateX(90deg) translateZ(75px);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 150px;
      height: 150px;
      background: #b3d4c0;
      transform: translateZ(-380px);
      filter: blur(20px);
      box-shadow: 0 0 30px #05d852, 0 0 60px #2fd56c, 0 0 90px #5fd48a,
        0 0 120px #89d6a5, 0 0 150px #b3d4c0;
    }
  }
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#000, #b3d4c0);
      transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
    }
  }
`;
const Cube2 = styled.div`
  margin-left: 800px;
  margin-bottom: 400px;
  position: absolute;
  width: 150px;
  height: 150px;
  transform-style: preserve-3d;
  animation: animate 4s linear infinite;
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 150px;
    height: 150px;
    background: #222;
    transform: rotateX(90deg) translateZ(75px);
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 150px;
      height: 150px;
      background: #e1dab2;
      transform: translateZ(-380px);
      filter: blur(20px);
      box-shadow: 0 0 30px #e4c206, 0 0 60px #dfc327, 0 0 90px #e6d15b,
        0 0 120px #e2d589, 0 0 150px #e1dab2;
    }
  }
  @keyframes animate {
    0% {
      transform: rotateX(-30deg) rotateY(0deg);
    }
    100% {
      transform: rotateX(-30deg) rotateY(360deg);
    }
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(#000, #e3e0cf);
      transform: rotateY(calc(90deg * var(--i))) translateZ(75px);
    }
  }
`;
function Cubes() {
  var style0: any = { "--i": 0 };
  var style1: any = { "--i": 1 };
  var style2: any = { "--i": 2 };
  var style3: any = { "--i": 3 };
  return (
    <>
      <Cube>
        <div className="top"></div>
        <div>
          <span style={style0}></span>
          <span style={style1}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
      </Cube>
      <Cube1>
        <div className="top"></div>
        <div>
          <span style={style0}></span>
          <span style={style1}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
      </Cube1>
      <Cube2>
        <div className="top"></div>
        <div>
          <span style={style0}></span>
          <span style={style1}></span>
          <span style={style2}></span>
          <span style={style3}></span>
        </div>
      </Cube2>
    </>
  );
}
export default Cubes;
