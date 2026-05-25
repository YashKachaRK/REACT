import  { Component } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News'


// method make here
// propse state use method diffrent
// 5da591db591a4c2488c42a12b2bef658
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize = {10} />
      </div>
    )
  }
}
