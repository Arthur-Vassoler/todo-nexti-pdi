package br.com.pdi.pditodo.services;

import br.com.pdi.pditodo.dtos.TaskDto;
import br.com.pdi.pditodo.models.Task;
import br.com.pdi.pditodo.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    @Autowired
    private TaskRepository taskRepository;

    public Task createTask(TaskDto task) {
        var newTask = new Task();
        newTask.setName(task.name());
        newTask.setDone(false);

        return taskRepository.save(newTask);
    }

    public List<Task> findAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<Task> findTaskById(long id) {
        return taskRepository.findById(id);
    }

    public void deleteTaskById(long id) {
        taskRepository.deleteById(id);
    }

    public Task markTaskAsComplete(long id, String done) {
        var doneBoolean = false;
        if (done.equals("true")) doneBoolean = true;

        Optional<Task> optionalTask = taskRepository.findById(id);
        if (optionalTask.isPresent()) {
            Task task = optionalTask.get();
            task.setDone(doneBoolean);
            return taskRepository.save(task);
        } else {
            throw new IllegalArgumentException("Tarefa não encontrada com o ID: " + id);
        }
    }

}
