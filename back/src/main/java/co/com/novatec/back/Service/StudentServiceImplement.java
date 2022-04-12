package co.com.novatec.back.Service;

import co.com.novatec.back.Dao.IStudentDao;
import co.com.novatec.back.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImplement implements StudentService {

    @Autowired
    private IStudentDao studentDao;

    public List<Student> findAll() {
        return (List<Student>) studentDao.findAll();
    }

    public Student save(Student student) {
        return studentDao.save(student);
    }

    public Student findById(Integer id) {
        return studentDao.findById(id).orElse(null);
    }

    public void delete(Integer id) {
        studentDao.deleteById(id);
    }
}
