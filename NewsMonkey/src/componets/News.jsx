import  { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {
  render() {
    return (
      <div>
        this is news Componest
        <Newsitem title="Today 100 Run by Yash kacha"  description ="in 29 ball"/>
     
      </div>
    )
  }
}
