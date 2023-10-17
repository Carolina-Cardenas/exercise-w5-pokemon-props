import { Category } from "./Category";
import { Height } from "./Height";
import { Weaknesses } from "./Weaknesses";
import { Name } from "./Name";
import { Type } from "./Type";
import { Weight } from "./weight";
// Destructure pokemon props here :)
export const Pokemon = ( {name, height, weight, types, weaknesses, category})  => {
 console.log(name)
 return <div>
      <Name name={name}/>
      <Height height={height}/> 
      <Weight weight={weight}/>
      <Type types={types}/>
      <Weaknesses weaknesses={weaknesses}/>
      <Category category={category}/>
     </div>;
};
