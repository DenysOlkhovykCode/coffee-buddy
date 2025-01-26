import "./Decorations.css";

const Decoration = ({ x = 0, y = 0, rotation = 0, size = 100, src }) => {
  const styles = {
    top: `${y}vh`,
    left: `${x}vw`,
    transform: `rotate(${rotation}deg)`,
    width: `clamp(40px, ${size}px, 10vw)`,
    height: `clamp(40px, ${size}px, 10vw)`,
  };

  return <img className="decoration" style={styles} src={src} alt="Decoration" />;
};

const Decorations = () => {
  return (
    <div className="decorations">
      <Decoration x={7} y={45} rotation={147} size={84} src="images/coffe bean.png" />
      <Decoration x={18} y={69} rotation={9} size={97} src="images/coffe cup rect.png" />
      <Decoration x={69} y={46} rotation={52} size={88} src="images/coffe cup trapeze.png" />
      <Decoration x={66} y={86} rotation={15} size={76} src="images/coffe cup with cap.png" />
      <Decoration x={87} y={68} rotation={-55} size={96} src="images/coffe maker.png" />
    </div>
  );
};

export default Decorations;
