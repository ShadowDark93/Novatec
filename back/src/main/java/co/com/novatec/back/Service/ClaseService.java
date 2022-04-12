package co.com.novatec.back.Service;

import co.com.novatec.back.model.Clase;

import org.springframework.stereotype.Service;


import java.util.List;

@Service
public interface ClaseService {
    public List<Clase> findAll();
    public Clase save(Clase clase);
    public Clase findById(Integer id);
    public void delete(Integer id);
}
