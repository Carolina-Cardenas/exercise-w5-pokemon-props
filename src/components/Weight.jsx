export const Weight = ({weight}) => {
    console.log(weight)
  return (
    <p>
    <span>Weight {weight}</span>
    </p>
  )
}
Weight.defaultProps ={
    weight: "No weight",

}