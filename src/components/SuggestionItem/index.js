import './index.css'

const SuggestionItem = props => {
  const {searchInfo, updateSearchInput} = props
  const {suggestion} = searchInfo

  const onUpdateSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-items" onClick={onUpdateSuggestion}>
      <p className="suggestion-txt">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
