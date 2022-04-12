package co.com.novatec.back.Service;

import co.com.novatec.back.model.Teacher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TeacherService {
    public List<Teacher> findAll();
    public Teacher save(Teacher teacher);
    public Teacher findById(Integer id);
    public void delete(Integer id);
}
