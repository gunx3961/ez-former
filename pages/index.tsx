import * as React from 'react';
import { Form, FormItem } from '../src';

export default class Example extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <>
        <h1>ez-former</h1>
        <Form
          onChange={(...args) => { console.log('formOnchange', args[0], '\n', args[1], '\n', JSON.stringify(args[2].toJS(), null, 2), '\n'); }}
        >
          <FormItem formKey="foo" defaultValue="">
            {({ data, setFormData }) => (
              <input
                type="text"
                value={data}
                onChange={(ev) => { setFormData(ev.target.value); }}
              />
            )}
          </FormItem>
        </Form>
      </>
    );
  }
}
