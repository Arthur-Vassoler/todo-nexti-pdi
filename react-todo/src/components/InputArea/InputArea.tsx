import { KeyboardEvent, useState } from "react";
import * as C from "./InputArea.style";
import Button from "../UI/Button";

type Props = {
  onAddTask: (task: { name: string }) => void;
};

const InputArea = ({ onAddTask }: Props) => {
  const [inputContent, setInputContent] = useState("");

  const handleSubmit = () => {
    if (!(inputContent.trim().length > 0)) return;

    onAddTask({ name: inputContent });

    setInputContent("");
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.code === "Enter" && inputContent.trim().length > 0) {
      onAddTask({ name: inputContent });

      setInputContent("");
    }
  };

  return (
    <C.Container>
      <C.Input
        type="text"
        placeholder="Descrição da tarefa..."
        value={inputContent}
        onChange={(e) => setInputContent(e.target.value)}
        onKeyPress={handleKeyUp}
      />
      <Button onClick={handleSubmit} text="Adicionar" />
    </C.Container>
  );
};

export default InputArea;
