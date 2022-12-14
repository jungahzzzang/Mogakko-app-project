package com.example.demo.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UserDTO {
    private String email;
    private String name;
    private String picture;

    @Builder
    public UserDTO(String email, String name, String picture) {
        this.email = email;
        this.name = name;
        this.picture = picture;
    }
}
