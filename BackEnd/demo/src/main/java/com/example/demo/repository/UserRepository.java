package com.example.demo.repository;

import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    // 소셜 로그인 반환 값 중 email를 통해 가입자 인지 신규 가입자 인지 판단하기 위한 메소드
    Optional<User> findByEmail(String email);
}
