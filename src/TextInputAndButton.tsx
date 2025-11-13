import { IconButton } from "./IconButton";
import { TextInput, TextInputProps } from "./TextInput";
import "./TextInputAndButton.css";
export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    onClick?: () => void;
    iconName?: string;
}

export function TextInputAndButton({ iconName, buttonContent, onClick, ...textInputProps }: 
    TextInputAndButtonProps) {
    return (
        <div class="TextInputAndButton">
            <TextInput {...textInputProps} onEnter={onClick} />
            <IconButton icon={iconName} text={buttonContent} onClick={onClick} />
        </div>
    );
}