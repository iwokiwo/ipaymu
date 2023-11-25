import Button from '@mui/material/Button';

type ButtonProps = {
    label: string
    variant?: 'text' | 'contained' | 'outlined'
    backgroundColor?: string
}

export const TextButton = ({
  label, 
  variant, 
  backgroundColor}: 
  ButtonProps) => {
  return (
    <>
        <Button variant={variant}>{label}</Button>
    </>
  )
}

export default TextButton