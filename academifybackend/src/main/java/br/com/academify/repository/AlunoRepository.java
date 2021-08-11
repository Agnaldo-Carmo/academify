package br.com.academify.repository;

import br.com.academify.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Integer> {

    public Aluno findById(long id);

}
