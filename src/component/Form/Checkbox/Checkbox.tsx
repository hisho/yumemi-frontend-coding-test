import { ComponentProps, forwardRef, ReactNode, useId } from 'react'

type CheckboxProps = {
  isChecked?: boolean
  onChange?: ({ isChecked }: { isChecked: boolean }) => void
  children: ReactNode
  className?: string
} & Pick<ComponentProps<'input'>, 'id' | 'value' | 'name'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, className, id, isChecked, name, onChange, value }, ref) => {
    const _id = useId()
    const currentId = id ?? _id
    return (
      <label htmlFor={currentId} className={className}>
        <input
          id={currentId}
          name={name}
          checked={isChecked}
          value={value}
          onChange={(e) => {
            onChange?.({
              isChecked: e.currentTarget.checked,
            })
          }}
          ref={ref}
          type={'checkbox'}
        />
        {children}
      </label>
    )
  }
)
