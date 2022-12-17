// Write your code here
import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  componentDidMount() {
    this.getMatchesList()
  }

  getMatchesList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    console.log(id)
  }

  render() {
    return <div>hhh</div>
  }
}
export default TeamMatches
