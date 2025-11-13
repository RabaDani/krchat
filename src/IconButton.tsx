import './IconButton.less';


export function IconButton(props: { icon?: string, text?: string, onClick?: () => void }) {
    return <button type="button" class="IconButton" onClick={props.onClick}>
        <span className="material-symbols-outlined"> {props.icon} </span> {props.text}
    </button>
}