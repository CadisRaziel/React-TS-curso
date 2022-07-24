
//! Componentizando e passando parametros


//!Jeito novo
type Props = {
    label: string;
    value: string;
    type?: string;
    onChange: (newValue: string) => void;

    //colocando '?' a gente faz com que ele não seja required
    onPressEnter?: () => void;

};
export const InputLogin = (props: Props) => {
    return (
        <label>
        <span>{props.label}</span>
        <input
            value={props.value}
            type={props.type}
            onChange={e => props.onChange(e.target.value)}

            // onKeyDown = ao apertar o enter vai focar no outro campo
            onKeyDown={e => e.key === 'Enter'
             ? props.onPressEnter && props.onPressEnter()
             : undefined
            }
        />
    </label>
    );
};

// =========================================================

//!Jeito antigo
// interface IInputLoginProps {
//     label: string;    
//     value: string;
//     onChange: (newValue: string) => void;
//     onPressEnter?: () => void;
// }
// export const InputLogin: React.FC<IInputLoginProps> = (props) => {
//     return (
//         <label>
//         <span>{props.label}</span>
//         <input
//             value={props.value}
//             onChange={e => props.onChange(e.target.value)}

//             // onPressEnter = ao apertar o enter vai focar no outro campo
//             onPressEnter={e => e.key === 'Enter' ? props.onPressEnter : undefined}
//         />
//     </label>
//     );
// }