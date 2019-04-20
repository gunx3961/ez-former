import * as React from 'react';
import * as Immutable from 'immutable';

import FormItem, { InjectedFormItemProps, FormKey } from './FormItem';

type InternalFormData = Immutable.Map<string, any>;

export interface FormProps {
  onChange?: (data: any, k: FormKey, formData: any) => void;
  initialData?: { [key: string]: any } | Immutable.Map<string, any>;
  formReadOnly?: boolean;
  children?: React.ReactNode;
}

interface FormState {
  formData: InternalFormData;
}

class Form extends React.PureComponent<FormProps, FormState> {
  public static defaultProps: FormProps = {
    formReadOnly: false,
  };

  public readonly state: Readonly<FormState> = {
    formData: this.props.initialData ?
      Immutable.Map<string, any>().merge(this.props.initialData) :
      Immutable.Map<string, any>(),
  };

  public static getDerivedStateFromProps: React.GetDerivedStateFromProps<FormProps, FormState> = (props, state) => {
    // Maintain form fields according to `formKey` props of chilren
    const formData = Immutable.Map<string, any>().withMutations((map) => {
      React.Children.map(props.children, (child) => {
        if (Form.isFormItem(child)) {
          Form.setCalculatedValue(child as FormItem, state.formData, map);
        }
      });
    });

    if (state.formData.equals(formData)) return null; // or it may cause a loop rendering

    return { formData };
  }

  public static setCalculatedValue(
    child: FormItem,
    prevFormData: InternalFormData,
    nextFormData: InternalFormData,
  ): void {
    // Determine default value
    const keyPath = Form.getKeyPath(child.props.formKey);
    const prevValue = prevFormData.getIn(keyPath);
    let valueToSet = prevValue;
    if (child.props.defaultValue !== undefined && prevValue === undefined) {
      valueToSet = child.props.defaultValue;
    }
    nextFormData.setIn(keyPath, valueToSet);
  }

  public static getKeyPath(key: FormKey): [string] {
    if (Array.isArray(key)) return key;
    return [key];
  }

  public static isFormItem(node: React.ReactNode): boolean {
    if (!node || !React.isValidElement(node)) return false;
    return node.type === FormItem;
  }

  public gatherFormItemProps = (key: FormKey): Partial<InjectedFormItemProps> => {
    const keyPath = Form.getKeyPath(key);
    const setFormData = (value: any) => {
      const nextFormData = this.state.formData.setIn(keyPath, value);
      this.setState({ formData: nextFormData });
      if (typeof this.props.onChange === 'function') {
        this.props.onChange(value, key, nextFormData);
      }
    };

    return {
      data: this.state.formData.getIn(keyPath),
      setFormData,
    };
  }

  public getInjectedChildren = () => {
    const { children: childrenProp } = this.props;
    const children = React.Children.map(childrenProp, (child) => {
      if (Form.isFormItem(child)) {
        return React.cloneElement(
          child as React.ReactElement,
          this.gatherFormItemProps((child as FormItem).props.formKey),
        );
      }
      return child;
    });

    return children;
  }

  public render() {
    const children = this.getInjectedChildren();

    return (
      <form>
        {children}
      </form>
    );
  }
}

export default Form;
