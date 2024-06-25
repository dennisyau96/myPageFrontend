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
  /* <form>
            <label htmlFor="person">Name</label>
            <br />
            <input
              name="person"
              id="personInput"
              type="text"
              onChange={(e) => setPerson(e.target.value)}
              value={person}
            ></input>
            <br />
            <label htmlFor="organization"> Organization(optional)</label>
            <br />
            <input
              name="organization"
              id="organizationInput"
              type="text"
              onChange={(e) => setOrganization(e.target.value)}
              value={organization}
            ></input>
            <br />
            <label htmlFor="comment">Comment</label>
            <br />
            <textarea
              name="comment"
              id="commentTextarea"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            ></textarea>
            <br />
            <label htmlFor="rating">Rating(5 is highest)</label>
            <br />
            <select
              name="rating"
              id="ratingInput"
              onChange={(e) => {
                setRating(e.target.value);
              }}
            >
              <option>please select</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <br />
            <button onClick={() => leaveComment()}>Leave a comment</button>
          </form> */

  async function leaveComment(e) {
    e.preventDefault();
    const data = await axios.post("http://localhost:3000/api/leave-comment", {
      person: person,
      organization: organization,
      comment: comment,
      rating: rating,
    });

    if (person != "" && comment != "" && rating != null) {
      toast.success(`${data.data}`);
      setAfter(true);
    } else {
      toast.error(`${data.data}`);
    }

    //  else {
    //   if (!person) {
    //     window.alert(
    //       "May I have your name so I know who provide me a great comment."
    //     );
    //     e.preventDefault();
    //   } else if (!comment) {
    //     window.alert("Your comment is important for me to make a big leap.");
    //     e.preventDefault();
    //   } else if (!rating) {
    //     window.alert(
    //       "Your rating to my webpage help me understand how much more harder I need to work."
    //     );
    //     e.preventDefault();
    //   }
    // }
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
            {/* <form className={styles.commentInputForm}> */}
            {/* <table className={styles.commentInputTable}>
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="person">Name</label>
                  </td>
                  <td>
                    <input
                      name="person"
                      id="personInput"
                      type="text"
                      onChange={(e) => setPerson(e.target.value)}
                      value={person}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="organization">
                      {" "}
                      Organization(optional)
                    </label>
                  </td>
                  <td>
                    {" "}
                    <input
                      name="organization"
                      id="organizationInput"
                      type="text"
                      onChange={(e) => setOrganization(e.target.value)}
                      value={organization}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="comment">Comment</label>
                  </td>
                  <td>
                    <textarea
                      name="comment"
                      id="commentTextarea"
                      onChange={(e) => setComment(e.target.value)}
                      value={comment}
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="rating">Rating(5 is highest)</label>
                  </td>
                  <td>
                    <select
                      name="rating"
                      id="ratingInput"
                      onChange={(e) => {
                        setRating(e.target.value);
                      }}
                      className={styles.ratingSelect}
                    >
                      <option value={null}>please select</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table> */}
            <form>
              {/* <table className={(styles.commentInputTable, "table  ")}> */}
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
                {/* -------- row 1  --------  */}

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
                {/* -------- row 1  --------  */}

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
                {/* -------- row 1  --------  */}

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
                      <option value={null}>please select</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
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
