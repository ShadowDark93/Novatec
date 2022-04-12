package co.com.novatec.back.Controller;

import co.com.novatec.back.Service.TeacherService;
import co.com.novatec.back.model.Teacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") //Conexion para pruebas
@RequestMapping("/api")
public class TeacherController {
    @Autowired
    private TeacherService teacherService;

    @GetMapping("/teachers")
    public List<Teacher> getAllTeachers(){
        return teacherService.findAll();
    }

    @PostMapping("/teachers")
    public Teacher saveTeacher(@RequestBody Teacher teacher){
        return teacherService.save(teacher);
    }

    @GetMapping("/teachers/{id}")
    public Teacher searchTeacherByID(@PathVariable Integer id){
        return teacherService.findById(id);
    }

    @PutMapping("/teachers/{id}")
    public Teacher updateTeacher(@RequestBody Teacher teacher, @PathVariable Integer id){
        Teacher teacherSearch = teacherService.findById(id);
        teacherSearch.setDocumento(teacher.getDocumento());
        teacherSearch.setNombres(teacher.getNombres());
        teacherSearch.setApellidos(teacher.getApellidos());
        teacherSearch.setEstado(teacher.getEstado());

        return teacherService.save(teacherSearch);
    }

    @DeleteMapping("/teachers/{id}")
    public void deleteTeacher(@PathVariable Integer id){
        teacherService.delete(id);
    }
}
