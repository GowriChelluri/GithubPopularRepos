import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, avatarUrl, issuesCount, forksCount, starsCount} = repoDetails
  return (
    <li>
      <div className="box-container">
        <img src={avatarUrl} alt={name} className="avatar-url" />
        <h1 className="name">{name}</h1>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="logos"
          />
          <p className="count">{starsCount} stars</p>
        </div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="logos"
          />
          <p className="count">{forksCount} forks</p>
        </div>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="logos"
          />
          <p className="count">{issuesCount} open issues</p>
        </div>
      </div>
    </li>
  )
}
export default RepositoryItem
