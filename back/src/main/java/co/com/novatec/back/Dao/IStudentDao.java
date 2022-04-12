package co.com.novatec.back.Dao;

import co.com.novatec.back.model.Student;
import org.springframework.data.repository.CrudRepository;

public interface IStudentDao extends CrudRepository<Student, Integer> {
}
