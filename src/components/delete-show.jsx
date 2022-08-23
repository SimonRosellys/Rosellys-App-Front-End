import { deleteShow } from "../utils/api";

function DeleteShow(id) {
  deleteShow(id).then((show) => {
    console.log(show);
  });

  return (
    <section>
      <h4>Delete Show Test</h4>
    </section>
  );
}
export default DeleteShow;
