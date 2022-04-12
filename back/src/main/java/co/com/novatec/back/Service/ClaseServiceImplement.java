package co.com.novatec.back.Service;

import co.com.novatec.back.Dao.IClaseDao;
import co.com.novatec.back.model.Clase;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClaseServiceImplement implements ClaseService {
    @Autowired
    private IClaseDao claseDao;

    @Override
    public List<Clase> findAll() {
        return (List<Clase>) claseDao.findAll();
    }

    @Override
    public Clase save(Clase clase) {
        return claseDao.save(clase);
    }

    @Override
    public Clase findById(Integer id) {
        return claseDao.findById(id).orElse(null);
    }

    @Override
    public void delete(Integer id) {
        claseDao.deleteById(id);
    }
}
