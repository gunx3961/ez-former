# ez-former
A react form component that makes your life easier

## TODOS
- [ ] ReadOnly status
- [ ] Field validation
- [ ] [Example Page](http://gunx.info/ez-former/)

## Usage

## Props

 `<Form>`  
 - `onChange`: Optional.
 - `initialData`: Optional.
 - `formReadOnly`: Optional.  

 `<FormItem>`  
- `formKey`: 
- `defaultValue`: Optional.
- `children`: `() => (p: FormItemRenderArgs) => React.ReactNode`

`FormItemRenderArgs`
``` typescript
interface FormItemRenderArgs {
  data: any;
  setFormData: (value: any) => void;
}
```
