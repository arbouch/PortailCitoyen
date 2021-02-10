package com.example.demo.UserRepository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.UserModel.User;

public interface RegistrationRepository extends JpaRepository<User, Integer>{
 public User findBynumtel(String numtel);
 public User findBynumtelAndCin(String numtel,int cin);
}
