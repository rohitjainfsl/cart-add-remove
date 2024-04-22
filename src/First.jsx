/* eslint-disable react/prop-types */
function First(props) {
    console.log(props)
  return (
    <>
      <p>{props.fname}</p>
      <p>{props.sname}</p>
      <p>{props.tname}</p>
      <p>{props.foname}</p>
    </>
  );
}
export default First;
