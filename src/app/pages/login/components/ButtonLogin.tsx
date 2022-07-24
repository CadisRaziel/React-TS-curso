
type Props = {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    children?: React.ReactNode
};
export const ButtonLogin = (props: Props) => {
    return (
       <button
       type={props.type}
       onClick={props.onClick}
       >
        {props.children}
       </button>
    );
};