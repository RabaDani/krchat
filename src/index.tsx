import { render } from 'preact';
import './index.css';
import { Login } from './Login';
import { Main } from './Main';
import { useEffect, useState } from 'preact/hooks';
import { chatService } from './ChatService';
import "./Pwa"

let theme = localStorage["theme"];
if (theme) document.documentElement.classList.add("theme-" + theme);

export function App() {
	let [renderCount, setRenderCount] = useState(1);
	useEffect(() => {
		const listener = () => setRenderCount(c => c + 1);
		chatService.addListener(listener);
		return () => chatService.removeListener(listener);
	}, []);
	return chatService.inbox ? <Main /> : <Login />
}

render(<App />, document.getElementById('app'));
