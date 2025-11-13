import { useState } from 'preact/hooks';
import './Login.css';
import { TextInput } from './TextInput';
import { chatService } from './ChatService';
import { IconButton } from './IconButton';

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    function toggleTheme() {
        const isLightNow = document.documentElement.classList.toggle("theme-light");
        localStorage["theme"] = isLightNow ? "light" : "";
    }

    function loginRegister() {
        if (register)
            chatService.send({ type: "register", email, password, displayName, staySignedIn: true });
        else
            chatService.send({ type: "login", email, password, staySignedIn: true });
    }

    return <div class="Login">
        <span class="logo" onClick={toggleTheme}>🗪</span>
        <TextInput type="email" placeholder="Email (someone@example.com)" value={email} onChange={setEmail} autofocus={true} />
        <TextInput type="password" placeholder="Password" value={password} onChange={setPassword} onEnter={loginRegister} />
        {register && <TextInput type="text" placeholder="Display Name" value={displayName} onChange={setDisplayName} />}
        <IconButton icon={register ? "person_add" : "login"} text={register ? "Register" : "Login"} onClick={loginRegister} />
        <p>
            {register ? "Switch back to " : "Have no account yet? Go and "}
            <a href="" onClick={e => {
                e.preventDefault();
                setRegister(!register);
            }}> {register ? "Login" : "Register"} </a>
        </p>
    </div>
}