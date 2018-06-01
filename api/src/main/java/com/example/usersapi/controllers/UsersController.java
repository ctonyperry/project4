package com.example.usersapi.controllers;

import com.example.usersapi.models.LoginRequest;
import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import lombok.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController

public class UsersController {

    @Autowired
    private UserRepository userRepository;
    private Long userId;
    private User userRequest;

    @GetMapping("/")
    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/{userId}")
    public User findOne(@PathVariable Long userId) {
        return userRepository.findOne(userId);
    }

    @DeleteMapping("/{userId}")
    public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
        return HttpStatus.OK;
    }

//    @PostMapping("/")
//    public Iterable<User> getUsersWithPagination(@RequestBody Pageable pageable){
//
//        return userRepository.findAllPageable(pageable);
//    }

    @PostMapping("/login/")
    public User checkLogin(@RequestBody LoginRequest loginRequest){
        return userRepository.getByuserNameAndPassword(loginRequest.userName, loginRequest.password);
    }


    public long getUserCount(){
        return userRepository.count();
    }

    @GetMapping("/getByLastName/{lastName}")
    public Iterable<User> findByLastName(@PathVariable String lastName){
        return userRepository.findBylastName(lastName);
    }

    @GetMapping("/getByuserName/{userName}")
    public User getByuserName(@PathVariable String userName){
        return userRepository.getByuserName(userName);
    }

    @PostMapping("/")
    public User createNewUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @PatchMapping("/{userId}")
    public User updateUserById(@PathVariable long userId, @RequestBody User userRequest) {
        this.userId = userId;
        this.userRequest = userRequest;

        User userFromDb = userRepository.findOne(userId);
        userFromDb.setUserName(userRequest.getUserName());
        userFromDb.setFirstName(userRequest.getFirstName());
        userFromDb.setLastName(userRequest.getLastName());
        userFromDb.setEmail(userRequest.getEmail());
        return userRepository.save(userFromDb);

    }

}