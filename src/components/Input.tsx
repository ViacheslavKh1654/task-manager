import {useState} from "react";
import s from "./input.module.css"

export const Input = () => {
    const [inputName, setInputName] = useState<string>()
    const [inputPassword, setInputPassword] = useState<string>("")

    function handleSubmit() {

    }
    return (
        <>
            <form onSubmit={handleSubmit} className={s.input_box}>
                <input type="email"
                       value={inputName}
                       placeholder="mail"
                       onChange={(e) =>
                        setInputName(e.target.value)}/>
                <input  type="password"
                        placeholder="Password"
                        value={inputPassword}
                        onChange={(e) =>
                            setInputPassword(e.target.value)
                }/>
                <button type="submit">Submit</button>

            </form>
        </>

    )
}