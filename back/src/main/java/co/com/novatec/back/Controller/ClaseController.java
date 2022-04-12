package co.com.novatec.back.Controller;

import co.com.novatec.back.Service.ClaseService;
import co.com.novatec.back.model.Clase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") //Conexion para pruebas
@RequestMapping("/api")
public class ClaseController {
    @Autowired
    private ClaseService claseService;

    @GetMapping("/clases")
    public List<Clase> getAllClases(){
        return claseService.findAll();
    }

    @PostMapping("/clases")
    public Clase saveClase(@RequestBody Clase clase){
        return claseService.save(clase);
    }

    @GetMapping("/clases/{id}")
    public Clase getClaseByID(@PathVariable Integer id){
        return claseService.findById(id);
    }

    @PutMapping("/clases/{id}")
    public Clase updateClase(@RequestBody Clase clase, @PathVariable Integer id){
        Clase claseSearch = claseService.findById(id);
        claseSearch.setStudent_id(clase.getStudent_id());
        claseSearch.setTeacher_id(clase.getTeacher_id());
        claseSearch.setNombre_clase(clase.getNombre_clase());
        claseSearch.setEstado(clase.getEstado());

        return claseService.save(claseSearch);
    }

    @DeleteMapping("/clases/{id}")
    public void deleteClase(@PathVariable Integer id){
        claseService.delete(id);
    }
}
