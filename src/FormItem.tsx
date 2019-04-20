import * as React from 'react';

export type SetFormData = (value: any) => void;
export type FormKey = string | [string];
export interface FormItemRenderArgs {
  data: any;
  setFormData: SetFormData;
}

export interface FormItemProps {
  formKey: FormKey;
  children: (p: FormItemRenderArgs) => React.ReactNode;
  defaultValue?: any;
}

export interface InjectedFormItemProps extends FormItemProps {
  setFormData: (value: any) => void;
  data: any;
}

class FormItem extends React.PureComponent<FormItemProps, {}> {
  get injectedProps() {
    return this.props as InjectedFormItemProps;
  }

  public render() {
    return this.props.children({
      data: this.injectedProps.data,
      setFormData: this.injectedProps.setFormData,
    });
  }
}

export default FormItem;
