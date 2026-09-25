import {useState} from "react";
import s from "./loginForm.module.css"
import {useAppDispatch} from "@/app/store/hooks";
import {loading, login} from "@/features/auth/model/authSlice";

export const LoginForm = () => {
    const [inputName, setInputName] = useState<string>("")
    const [inputPassword, setInputPassword] = useState<string>("")

    const dispatch = useAppDispatch();

    async function handleSubmit(e: SubmitEvent) {
        e.preventDefault()
        dispatch(loading())
        const res = await fetch("api", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                name: inputName,
                password: inputPassword,
            })
        })
        if (res.ok) {
            const data = await res.json()
            dispatch(login(data))
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={s.login_form_box}>
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