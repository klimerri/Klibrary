import { useFormContext } from "react-hook-form";
import "./Input.scss";
import { IconEyeFilled, IconEyeOff} from "@tabler/icons-react"
import { useState } from "react";

export const Input = ({name, placeholder, type = '' }) => {
    const {register, formState} = useFormContext();
    const [dynamicType, setDynamicType] = useState(type);

    return (
        <div className='input__wrapper'>
            <input 
            className='input__input'{...register(name)} 
            placeholder={placeholder}
            type={dynamicType}/>

            <span className="input__errors">
                {formState?.errors[name]?.email?.message}
            </span>

            {type === 'password' && <button className="input__hidden-button" onClick={() => {
                setDynamicType(prev => {
                    if(prev === 'password') {
                        return ''
                    } else {
                        return 'password'
                    }
                })
            }}>
                {dynamicType === 'password' ? <IconEyeFilled/> : <IconEyeOff/>}
                </button>}
        </div>
    )
}