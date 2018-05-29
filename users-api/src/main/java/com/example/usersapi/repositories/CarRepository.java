package com.example.usersapi.repositories;

import com.example.usersapi.models.Car;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

public interface CarRepository extends CrudRepository<Car, Long>{
    Iterable<Car> findByUserId(Long userId);

}