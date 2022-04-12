package co.com.novatec.back.Service;

import co.com.novatec.back.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface StudentService {
    public List<Student> findAll();
    public Student save(Student student);
    public Student findById(Integer id);
    public void delete(Integer id);
}
