import './index.css'

const LanguageFilterItem = props => {
  const {filterDetails, onSelectLanguageFilter} = props
  const {language, id} = filterDetails
  const onClickLanguage = () => {
    onSelectLanguageFilter(id)
  }
  return (
    <li>
      <button type="button" className="btn" onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
