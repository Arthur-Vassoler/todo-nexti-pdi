import * as C from "./InfoArea.style";
import { ListItemType } from "../../types/ListItem.type";

type Props = {
  taskList: ListItemType[];
};

const InfoArea = ({ taskList }: Props) => {

  const taskListFilter = (state:boolean) => taskList.filter((task) => task.done === state).length;
    
  return (
    <C.Container>
      <table>
        <thead>
          <tr>
            <th>Tarefas a fazer</th>
            <th>Tarefas feitas</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{taskListFilter(false)}</td>
            <td>{taskListFilter(true)}</td>
          </tr>
        </tbody>
      </table>
    </C.Container>
  );
};

export default InfoArea;
