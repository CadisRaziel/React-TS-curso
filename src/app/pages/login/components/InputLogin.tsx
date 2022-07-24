
//! Componentizando e passando parametros

import React from "react";


//!Jeito novo
type Props = {
    label: string;
    value: string;
    type?: string;
    onChange: (newValue: string) => void;

    //colocando '?' a gente faz com que ele não seja required
    onPressEnter?: () => void;

};
// React.forwardRef => para podermos utilizar junto com o 'useRef'
export const InputLogin = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
    return (
        <label>
        <span>{props.label}</span>
        <input
            ref={ref}
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
});

// =========================================================

//!Jeito antigo
// interface IInputLoginProps {
//     label: string;    
//     value: string;
//     type?: string;
//     onChange: (newValue: string) => void;
//     onPressEnter?: () => void;
// }
// export const InputLogin  =  React.forwardRef<HTMLInputElement, IInputLoginProps>((props) => {
//     return (
//         <label>
//         <span>{props.label}</span>
//         <input
//             value={props.value}
//             type={props.type}
//             onChange={e => props.onChange(e.target.value)}

//             // onKeyDown = ao apertar o enter vai focar no outro campo
//             onKeyDown={e => e.key === 'Enter'
//              ? props.onPressEnter && props.onPressEnter()
//              : undefined
//             }
//         />
//     </label>
//     );
// })