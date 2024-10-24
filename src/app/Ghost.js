export default function Ghost({ ghost, evidences }) {
  let evidence = [];
  for (let i = 0; i < ghost.evidence.length; i++) {
    evidence.push(
      <li key={i + "e" + ghost.name} className="evidence">
        {ghost.evidence[i]}
      </li>
    );
  }
  let strengths = [];
  for (let i = 0; i < ghost.strengths.length; i++) {
    strengths.push(
      <li key={i + "s" + ghost.name} className="strength">
        {ghost.strengths[i]}
      </li>
    );
  }
  let weaknesses = [];
  for (let i = 0; i < ghost.weaknesses.length; i++) {
    weaknesses.push(
      <li key={i + "w" + ghost.name} className="weekness">
        {ghost.weaknesses[i]}
      </li>
    );
  }
  return (
    <li className="ghostCard">
      <div className="ghostName">{ghost.name}</div>
      <ul className="evidences">{evidence}</ul>
      <ul className="strengths">{strengths}</ul>
      <ul className="weaknesses">{weaknesses}</ul>
    </li>
  );
}
