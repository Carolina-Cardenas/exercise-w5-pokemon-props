export const Weaknesses = ({weaknesses}) => {
  return (
    <div>
    <span>Weaknesses:</span>
    {weaknesses.map((wk, key)=>
    <ul key={key}>
      {" "}
      <li key={wk}>{wk}</li>
      </ul>)}
    </div>
  )
}
Weaknesses.defaultProps = {
  weaknesses: "No weaknesses"
}
