import Button from '@mui/material/Button';

type ButtonProps = {
    label: string
    variant?: 'text' | 'contained' | 'outlined'
    color?: 'primary' | 'secondary'
}

export const TextButton = ({
  label, 
  variant, 
  color}: 
  ButtonProps) => {
  return (
    <>
        <Button variant={variant} color={color}>{label}</Button>
    </>
  )
}

export default TextButton