// Destructure pokemon types props here :)
export const Type = ({types}) => {

  return(
    <div>
    <span>Weaknesses:</span>
    {types.map((type, key)=>
    <ul key={key}>
      {" "}
      <li key={type}>{type}</li>
      </ul>)}
    </div>
  )
    
};
