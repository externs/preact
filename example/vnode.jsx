import { render, Component } from 'preact'

class ComponentConstructor extends Component {
  get defaultProps() {
    return { fieldA: 'example' }
  }
  render({ fieldA, otherField }) {
    return (<div>
      Hello World. { fieldA } 
      { otherField }
    </div>)
  }
}

const FunctionalComponent = ({ prop }) => {
  return (<span>A message: { prop }</span>)
}

// h returns:
// - class component
const c = <ComponentConstructor otherField="test" />
console.log(c, 'Prototype:', c.nodeName.prototype)
// - stateless component
const f = <FunctionalComponent prop="test" />
console.log(f, 'Prototype:', f.nodeName.prototype)
// - string component
console.log(<string-element prop="test" />)