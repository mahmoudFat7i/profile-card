import Skill from "./Skill";
function SkillList() {
  const skillsList = [
    { name: "Redux", emoji: "🔄", color: "#764abc" }, // Redux (Purple)
    { name: "React Router", emoji: "🛣️", color: "#f7df1e" }, // React Router (Yellow)
    { name: "React.js", emoji: "⚛️", color: "#61dafb" }, // React (Blue)
    { name: "Context API", emoji: "🔒", color: "#61dafb" }, // Context API (Blue)
    {
      name: "React Hooks (useState, useEffect, useContext, etc.)",
      emoji: "🪝",
      color: "#61dafb",
    }, // React Hooks (Blue)
    { name: "JSX (JavaScript XML)", emoji: "📜", color: "#61dafb" }, // JSX (Blue)
    { name: "TypeScript", emoji: "🔤", color: "#3178c6" }, // TypeScript (Blue)
    { name: "JavaScript (ES6+)", emoji: "💻", color: "#f7df1e" }, // JavaScript (Yellow)
    { name: "CSS3", emoji: "🎨", color: "#1572b6" }, // CSS (Blue)
    { name: "HTML5", emoji: "🌐", color: "#e34f26" }, // HTML (Orange-Red)
  ];

  return (
    <div className="skill-list">
      {skillsList.map((skill) => (
        <Skill name={skill.name} emoji={skill.emoji} color={skill.color} />
      ))}
    </div>
  );
}
export default SkillList;
