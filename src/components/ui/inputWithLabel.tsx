import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


type InputWithLabelProps = {
    name: string;
    type: string;
    placeholder?: string;
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    className?: string
}    

 
export function InputWithLabel({name,type,placeholder,value,onChange,className}: InputWithLabelProps) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="">{name}</Label>
      <Input type={type} name={name} value={value}  onChange={onChange} placeholder={placeholder || ''} />
    </div>
  )
}