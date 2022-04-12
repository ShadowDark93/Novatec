package co.com.novatec.back.Service;

import co.com.novatec.back.Dao.ITeacherDao;
import co.com.novatec.back.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImplement implements TeacherService{
    @Autowired
    private ITeacherDao teacherDao;

    @Override
    public List<Teacher> findAll() {
        return (List<Teacher>) teacherDao.findAll();
    }

    @Override
    public Teacher save(Teacher teacher) {
        return teacherDao.save(teacher);
    }

    @Override
    public Teacher findById(Integer id) {
        return teacherDao.findById(id).orElse(null);
    }

    @Override
    public void delete(Integer id) {
        teacherDao.deleteById(id);
    }
}
