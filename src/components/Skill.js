function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.color}}>
      <span>{props.name}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default Skill;
