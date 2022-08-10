/* eslint-disable no-unused-vars */
/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, list: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    const emojiLists = emojisList.sort(() => Math.random() - 0.5)
  }

  /* emojiClick = value => {
     this.setState(prv=>({
         
     }))
    
  } */
  nn = emojisLists => {
    this.setState(prv => ({
      list: [...prv.list, ...emojisLists],
    }))
  }

  render() {
    const {score, topScore, list} = this.state
    const emojisLists = this.shuffledEmojisList()
    const m = this.nn(emojisLists)
    // const {emojisList} = this.Props

    // const stateList = this.stateList(emojisLists)

    return (
      <>
        <NavBar score={score} />
        <div className="bg1">
          <ul className="emoji-container">
            {list.map(eachEmoji => (
              <EmojiCard
                eachEmojiDetails={eachEmoji}
                key={eachEmoji.id}
                emojiClick={this.emojiClick}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}
export default EmojiGame
