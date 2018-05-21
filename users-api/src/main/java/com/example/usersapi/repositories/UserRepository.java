package com.example.usersapi.repositories;

import com.example.usersapi.models.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.List;

public interface UserRepository extends CrudRepository<User, Long>{
    Iterable<User> findBylastName(String lastName);
    User getByuserName(String userName);



}