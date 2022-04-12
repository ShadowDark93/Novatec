package co.com.novatec.back.Dao;

import co.com.novatec.back.model.Teacher;
import org.springframework.data.repository.CrudRepository;

public interface ITeacherDao extends CrudRepository<Teacher, Integer> {

}
