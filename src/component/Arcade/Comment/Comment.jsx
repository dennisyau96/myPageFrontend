import { useState } from "react";
import axios from "axios";
import styles from "../Arcade.module.css";
import toast from "react-hot-toast";

function Comment() {
  const [person, setPerson] = useState("");
  const [organization, setOrganization] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null);
  const [after, setAfter] = useState(false);
  const [loading, setLoading] = useState(false);

  async function leaveComment(e) {
    e.preventDefault();

    const data = await axios.post(
      "https://mypagebackend-n0m8.onrender.com/api/leave-comment",
      {
        person: person,
        organization: organization,
        comment: comment,
        rating: rating,
      }
    );

    if (person != "" && comment != "" && rating != null) {
      setLoading(true);
      if (data.data) {
        setLoading(false);
      }
      setAfter(true);
      toast.success(`${data.data}`);
    } else {
      toast.error(`${data.data}`);
    }
  }

  function leaveOtherComment() {
    setAfter(false);
    resetInputs();
    toast.success(`A new comment is always welcomed, ${person}.`);
  }

  function resetInputs() {
    setOrganization("");
    setComment("");
    setRating(null);
  }

  return (
    <div
      id="commentDiv"
      className="bg-black transition-all ease-in-out duration-500 border-x-2 border-b-2 rounded-b-lg p-4"
    >
      {!after ? (
        <div className={styles.commentBefore}>
          <span className="text-white text-lg">Leave a Comment</span>
          <br />
          <div className={styles.commentInputDiv}>
            <form>
              <div className="form-floating">
                {/* -------- row 1  --------  */}
                <div className="row mb-2">
                  <div className="col gy-2  text-right">
                    <label htmlFor="person " className="text-white">
                      Name:
                    </label>
                  </div>
                  <div className="col gy-2">
                    <input
                      className="form-control "
                      name="person"
                      id="personInput"
                      type="text"
                      onChange={(e) => setPerson(e.target.value)}
                      value={person}
                    ></input>
                  </div>
                </div>
                {/* -------- row 2  --------  */}

                <div className="row mb-2">
                  <div className="col gy-2 text-right">
                    <label
                      htmlFor="organization responsive"
                      className="text-white"
                    >
                      Organization (optional):
                    </label>
                  </div>
                  <div className="col gy-2">
                    {" "}
                    <input
                      className="form-control"
                      name="organization"
                      id="organizationInput"
                      type="text"
                      onChange={(e) => setOrganization(e.target.value)}
                      value={organization}
                    ></input>
                  </div>
                </div>
                {/* -------- row 3  --------  */}

                <div className="row mb-2">
                  <div className="col gy-2 text-right">
                    <label htmlFor="comment" className="text-white">
                      Comment:
                    </label>
                  </div>
                  <div className="col gy-2">
                    <textarea
                      className="form-control"
                      name="comment"
                      id="commentTextarea"
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    ></textarea>
                  </div>
                </div>
                {/* -------- row 4  --------  */}

                <div className="row mb-2">
                  <div className="col gy-2 text-right">
                    <label htmlFor="rating" className="text-white">
                      Rating(5 is highest):
                    </label>
                  </div>
                  <div className="col gy-2">
                    <select
                      name="rating"
                      id="ratingInput"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                      className={styles.ratingSelect}
                    >
                      <option value={null}>---please select---</option>
                      <option value={5}>5(highest)</option>
                      <option value={4}>4</option>
                      <option value={3}>3</option>
                      <option value={2}>2</option>
                      <option value={1}>1(lowest)</option>
                    </select>
                  </div>
                </div>
                {/* </table> */}
              </div>
            </form>
            <button
              className="mt-2 p-2 cursor-pointer text-white border-1 hover:text-black hover:shadow-lg hover:bg-gray-600  hover:transition-all hover:duration-200"
              onClick={(e) => {
                leaveComment(e);
              }}
            >
              Submit
            </button>
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-3 ..."
                viewBox="0 0 24 24"
              ></svg>
            ) : null}
          </div>
        </div>
      ) : (
        <div className={styles.commentAfter}>
          <h2>Thanks you, {person}</h2>
          <h3> Leave another comment? Sure</h3>
          <button
            className="cursor-pointer"
            onClick={() => {
              leaveOtherComment();
            }}
          >
            New Comment
          </button>
        </div>
      )}
    </div>
  );
}
export default Comment;
