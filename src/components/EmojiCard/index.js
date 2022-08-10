// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiDetails, emojiClick} = props
  const {emojiUrl, emojiName} = eachEmojiDetails
  const clickEmojiButton = () => {
    emojiClick(emojiName)
  }
  return (
    <li className="li">
      <button type="button" className="emojiButton" onClick={clickEmojiButton}>
        <img src={emojiUrl} alt={emojiName} className="emojiImg" />
      </button>
    </li>
  )
}
export default EmojiCard
