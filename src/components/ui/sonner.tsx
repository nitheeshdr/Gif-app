import { type ToasterProps } from "sonner"
import { Toaster as Sonner } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      {...props}
    />
  )
}

export { Toaster }
