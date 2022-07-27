interface Props {
    onClick: () => any;
    children: React.ReactNode;
    className?: string;
}

const Button = ({ className, ...rest }: Props) => {
    return (
        <button
            className={`flex flex-1 items-center justify-center bg-gradient-to-r from-[#7569FF] to-[#D869FF] hover:bg-[#fff] h-[46px] w-[200px] rounded-[6px] font-bold uppercase ${className}`}
            {...rest}
        />
    );
};

export default Button;
