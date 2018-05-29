package com.example.usersapi.controllers;


import com.example.usersapi.models.Car;
import com.example.usersapi.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import lombok.*;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RestController


public class CarsController {
    @Autowired
    private CarRepository carRepository;
    private Long carId;

    @GetMapping("/cars")
    public Iterable<Car> findAllCars() {
        return carRepository.findAll();
    }

    @GetMapping("/cars/{userId}")
    public Iterable<Car> getCarsByUserId(@PathVariable Long userId){
        return carRepository.findByUserId(userId);
    }

    @PostMapping("/cars")
    public Car createNewCar(@RequestBody Car newCar) {
        return carRepository.save(newCar);
    }

    @DeleteMapping("/cars/{carId}")
    public HttpStatus deleteByCarId(@PathVariable Long carId) {
        carRepository.delete(carId);
        return HttpStatus.OK;
    }

}
