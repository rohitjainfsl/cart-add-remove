import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  const [single, setSingle] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setSingle(result);
      });
  }, []);

  return (
    <>
      <div className="single">
        <h3>{single.title}</h3>
        <p>{single.body}</p>
      </div>
    </>
  );
}

export default SingleBlog;
