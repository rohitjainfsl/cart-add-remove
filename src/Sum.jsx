/* eslint-disable react/prop-types */
function Sum(props) {
  //   console.log(props.n1 + props.n2);

  let sum = props.n1 + props.n2;



  return (
    <>
      <p>{sum}</p>
      <button></button>
    </>
  );
}
export default Sum;
