# ez-former
A react form component that makes your life easier

## TODOS
- [ ] ReadOnly status
- [ ] Field validation
- [ ] [Example Page](http://gunx.info/ez-former/)

## Usage

## Props

 `<Form>`  
 - `onChange`: optional.
 - `initialData`: optional.
 - `formReadOnly`: optional.  

 `<FormItem>`  
- `formKey`: 
- `defaultValue`: optional.
- `children`: `(p: FormItemRenderArgs) => React.ReactNode`

`FormItemRenderArgs`
``` typescript
interface FormItemRenderArgs {
  data: any;
  setFormData: (value: any) => void;
}
```
