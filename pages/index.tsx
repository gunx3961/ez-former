import * as React from 'react';
import { Form, FormItem } from '../src';

interface ExampleState {
  formDataStr: string;
}

export default class Example extends React.PureComponent<{}, ExampleState> {

  public readonly state: Readonly<ExampleState> = {
    formDataStr: '',
  };

  public handleFormDataChange = (...args) => {
    this.setState({
      formDataStr: JSON.stringify(args[2].toJS(), null, 2),
    });
  }

  public render() {
    return (
      <>
        <h1>ez-former</h1>

        <h2>Form</h2>
        <Form
          onChange={this.handleFormDataChange}
        >
          <label>Basic inputs: </label>
          <br />

          <FormItem formKey="text" defaultValue="">
            {({ data, setFormData }) => (
              <input
                type="text"
                value={data}
                onChange={(ev) => { setFormData(ev.target.value); }}
              />
            )}
          </FormItem>
          <br />

          <FormItem formKey="checkbox" defaultValue={false}>
            {({ data, setFormData }) => (
              <input
                type="checkbox"
                checked={data}
                onChange={() => { setFormData(!data); }}
              />
            )}
          </FormItem>
          <br />

        </Form>

        <h2>Data preview</h2>
        <pre>
          {this.state.formDataStr}
        </pre>
      </>
    );
  }
}
