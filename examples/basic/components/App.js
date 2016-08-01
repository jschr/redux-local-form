import React, { Component } from 'react'

import BasicForm from './BasicForm'

export default class App extends Component {
  handleSubmit = (formState) => {
    this.setState({ user: formState.user })
  }

  render() {
    const { user } = this.state || {}

    return (
      <div>
        <BasicForm onSubmit={this.handleSubmit} />
        { user &&
          <pre>
            { JSON.stringify(user, null, 2) }
          </pre>
        }
      </div>
    )
  }
}
