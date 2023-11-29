/**
 * @author I Wayan Bayu Nugroho
 * @email iwokiwo@gmail.com
 * @create date 2023-05-09 23:12:33
 * @modify date 2023-05-09 23:12:33
 */


import {Button as MuiButton, ClassNameMap} from '@mui/material';


type Props = {
    text?: JSX.Element | string;
    variant? :  'text' | 'contained' | 'outlined'
    size?: 	'small' | 'medium' | 'large'
    onClick?: () => void
    other? : Pick<any, any>
    className? : any
};

const Button = (
    {
        text,
        variant,
        size,
        onClick,
        other,
        className
    }: Props) => {
    return (
        <MuiButton
            variant={variant!}
            size={size!}
            onClick={onClick!}
            className={className!}
            {...other}
        >
            {text}
        </MuiButton>
    );
};

export default Button;