import React from 'react'

class Example1 extends React.Component {
  render() {
    //const stringProps = JSON.stringify(this.props.myProp);
    return (
      <div>
        <h2>{this.props.myProp}</h2>
      </div>

    )
  }
}

const Style = ({children}) => (
  <h1 style={{color:"green"}}>{children}</h1>
)
const Example2 = (props) => (
  //const stringProps = JSON.stringify(this.props.myProp);
    <Style>
      {props.myProp}
    </Style>
)

function Example3(props) {
  const stringProps = JSON.stringify(props.myProp);
  return <h2>{stringProps}</h2>;
}

function Example4(props) {
  return <h3>Hello, {props.name}</h3>;
}

const Layout = ({children}) => (
  <div className="container m-5">
    {children}
  </div>
)

const Playground = () => (
  <Layout>
    <h1>CHECK OUT MY PROPS OBJECT</h1>
    <Example1 myProp="horse"/>
    <Example2 myProp="shoe"/>
    <Example3 myProp="bullshit"/>
    <Example4 name="Whore"/>
  </Layout>
)

export default Playground
