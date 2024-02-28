import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


type InputWithLabelProps = {
    name: string;
    type: string;
    placeholder?: string;
}    

 
export function InputWithLabel({name,type,placeholder}: InputWithLabelProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{name}</Label>
      <Input type={type}  placeholder={placeholder || ''} />
    </div>
  )
}