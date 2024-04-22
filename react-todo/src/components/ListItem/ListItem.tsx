import * as C from "./ListItem.style";
import { ListItemType } from "../../types/ListItem.type";
import Button from "../UI/Button";

type Props = {
  item: ListItemType;
  onChange: (id: number, done: boolean) => void;
  onRemove: (id: number) => void;
};

const ListItem = ({ item, onChange, onRemove }: Props) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    const id = item.id;
    onChange(id, value);
  };

  const handleRemove = () => {
    onRemove(item.id);
  };

  return (
    <C.Container>
      <input
        type="checkbox"
        checked={item.done}
        name="isChecked"
        id={item.id.toString()}
        onChange={handleCheck}
      />
      <label className={item.done ? 'checked' : ''} htmlFor={item.id.toString()}>{item.name}</label>
      <Button text="Remover da lista" onClick={handleRemove} />
    </C.Container>
  );
};

export default ListItem;
