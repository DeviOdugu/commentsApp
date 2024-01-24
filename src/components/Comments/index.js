import {Component} from 'react'
import {v4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  changeName = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  changeComment = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const arraySize = initialContainerBackgroundClassNames.length
    const randomIndex = Math.ceil(Math.random() * arraySize) - 1
    // console.log(randomIndex)
    const randomColor = initialContainerBackgroundClassNames[randomIndex]
    const {nameInput, commentInput} = this.state
    const newComment = {
      id: v4(),
      name: nameInput,
      format: new Date(),
      comment: commentInput,
      isLiked: false,
      color: randomColor,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onDelete = id => {
    const {commentsList} = this.state
    const updateCommentsList = commentsList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({commentsList: updateCommentsList})
  }

  onLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {
            ...eachItem,
            isLiked: !eachItem.isLiked,
          }
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="bg">
        <div className="a">
          <div>
            <h1> Comments </h1>
            <form className="form" onSubmit={this.onAddComment}>
              <p> Say something about 4.0 technologies </p>
              <input
                value={nameInput}
                type="text"
                placeholder="Your Name"
                className="name-input"
                onChange={this.changeName}
              />
              <textarea
                value={commentInput}
                placeholder="Your Comment"
                rows="6"
                className="comment"
                onChange={this.changeComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr />
        <p className="comments">
          <span className="span">{commentsList.length}</span>
          Comments
        </p>
        <ul className="list">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              onLike={this.onLike}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
