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
      toast.success(`${data.data}`);
      setAfter(true);
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
    // setPerson("");
    setOrganization("");
    setComment("");
    setRating(null);
  }

  return (
    <div id="commentDiv" className={(styles.commentDiv, styles.boxyWH)}>
      {!after ? (
        <div className={styles.commentBefore}>
          <span className={styles.cmtTitle}>Feel Free to Make Comment</span>
          <br />
          <div className={styles.commentInputDiv}>
            <form>
              {/* -------- row 1  --------  */}
              <div className="form-floating">
                <div className="row">
                  <div className="col gy-2 gy-3">
                    <label htmlFor="person">Name</label>
                  </div>
                  <div className="col gy-2">
                    <input
                      className="form-control"
                      name="person"
                      id="personInput"
                      type="text"
                      onChange={(e) => setPerson(e.target.value)}
                      value={person}
                    ></input>
                  </div>
                </div>
                {/* -------- row 2  --------  */}

                <div className="row">
                  <div className="col gy-2">
                    <label htmlFor="organization responsive">
                      {" "}
                      Organization (optional)
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

                <div className="row">
                  <div className="col gy-2">
                    <label htmlFor="comment">Comment</label>
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

                <div className="row">
                  <div className="col gy-2">
                    <label htmlFor="rating">Rating(5 is highest)</label>
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
              className={styles.leaveCommentBtn}
              onClick={(e) => {
                leaveComment(e);
              }}
            >
              Leave a Comment
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.commentAfter}>
          <h2>Thanks you, {person}</h2>
          <h3> Leave another comment? Sure</h3>
          <button
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
