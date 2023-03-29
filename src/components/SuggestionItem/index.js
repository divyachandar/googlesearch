// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchInfo, updateSearchInput} = props
  const {suggestion} = searchInfo

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-items">
      <p className="suggestion-txt">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
