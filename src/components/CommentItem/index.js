// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, onDelete, onLike} = props
  const {id, name, format, comment, isLiked, color} = commentDetails
  const date = formatDistanceToNow(format)
  const like = isLiked ? 'liked' : 'like'
  const initialName = name.slice(0, 1).toUpperCase()
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickDelete = () => {
    onDelete(id)
  }

  const onClickLike = () => {
    onLike(id)
  }

  return (
    <li className="list">
      <div className="r">
        <p className={`initialName ${color}`}>{initialName}</p>
        <p className="name">{name}</p>
        <p className="date">{date}</p>
      </div>
      <p className="user-comment"> {comment} </p>
      <div className="s">
        <div className="t">
          <button type="button" onClick={onClickLike} className={like}>
            <img
              src={likeImage}
              height="25px"
              width="25px"
              alt="likeImage"
              className="like-image"
            />
          </button>
          <p className={like} onClick={onClickLike}>
            Like
          </p>
        </div>
        <button
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
          className="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            height="20px"
            width="20px"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
