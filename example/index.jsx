import { render, Component } from '@externs/preact'

class App extends Component {
  render({ name }) {
    return <div>Hello, {name}</div>
  }
}


render(<App name="World"/>, body)
