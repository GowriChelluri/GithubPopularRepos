import './index.css'
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {reposList: [], activeFilter: 'ALL', isLoading: true}

  onSelectLanguageFilter = newFilter => {
    this.setState({activeFilter: newFilter, isLoading: true})
    this.getRepoDetails(newFilter)
  }

  componentDidMount = () => {
    this.getRepoDetails(languageFiltersData[0].id)
  }

  getRepoDetails = async activeFilter => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${activeFilter}`,
    )
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.popular_repos.map(eachItem => ({
        name: eachItem.name,
        avatarUrl: eachItem.avatar_url,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
      }))
      this.setState({reposList: updatedData, isLoading: false})
    }
  }

  setIsLoading = loadingStatus => {
    this.setState({isLoading: loadingStatus})
  }

  renderLoadingStatus = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {reposList} = this.state

    return (
      <div className="bg-container">
        <h1>Popular</h1>
        <ul className="filters-container">
          {languageFiltersData.map(eachFilter => (
            <LanguageFilterItem
              filterDetails={eachFilter}
              key={eachFilter.id}
              onSelectLanguageFilter={this.onSelectLanguageFilter}
            />
          ))}
        </ul>
        <ul className="repos-container">
          {reposList.map(eachRepo => (
            <RepositoryItem repoDetails={eachRepo} key={eachRepo.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? this.renderLoadingStatus() : this.renderSuccessView()}
      </div>
    )
  }
}
export default GithubPopularRepos
