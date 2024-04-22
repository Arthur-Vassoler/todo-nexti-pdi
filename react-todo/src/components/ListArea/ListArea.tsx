import * as C from './ListArea.style';
import ListItem from '../ListItem';
import { ListItemType } from '../../types/ListItem.type';

type Props = {
  taskList: ListItemType[];
  onTaskChange: (id: number, done: boolean) => Promise<void>;
  onTaskRemove: (id: number) => Promise<void>;
};

const ListArea = ({ taskList, onTaskChange, onTaskRemove }: Props) => {
  const onChange = (id: number, done: boolean) => {
    onTaskChange(id, done);
  };

  const onRemove = (id: number) => {
    onTaskRemove(id);
  };

  return (
    <C.Container>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <ListItem
            onRemove={onRemove}
            onChange={onChange}
            key={index}
            item={task}
          />
        ))
      ) : (
        <h2>Nenhuma tarefa cadastrada</h2>
      )}
    </C.Container>
  );
};

export default ListArea;
