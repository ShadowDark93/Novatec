package co.com.novatec.back.Controller;

import co.com.novatec.back.Service.StudentService;
import co.com.novatec.back.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") //Conexion para pruebas
@RequestMapping("/api")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/student")
    public List<Student> getAllStudents(){
        return studentService.findAll();
    }

    @PostMapping("/student")
    public Student saveStudent(@RequestBody Student student){
        return studentService.save(student);
    }

    @GetMapping("/student/{id}")
    public Student searchStudentByID(@PathVariable Integer id){
        return studentService.findById(id);
    }

    @PutMapping("/student/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable Integer id){
        Student studentSearch = studentService.findById(id);
        studentSearch.setDocumento(student.getDocumento());
        studentSearch.setNombres(student.getNombres());
        studentSearch.setApellidos(student.getApellidos());
        studentSearch.setGrado(student.getGrado());
        studentSearch.setEstado(student.getEstado());

        return studentService.save(studentSearch);
    }

    @DeleteMapping("/student/{id}")
    public void deleteStudent(@PathVariable Integer id){
        studentService.delete(id);
    }
}
