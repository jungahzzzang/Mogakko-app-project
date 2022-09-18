package com.example.demo.config;


import com.example.demo.entity.role.Role;
import com.example.demo.service.CustomOAuth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.DefaultSecurityFilterChain;

@Configuration
@RequiredArgsConstructor
//spring security 설정 활성화
@EnableWebSecurity
public class SecurityConfig {

    private final CustomOAuth2UserService customOAuth2UserService;


    @Bean
    public WebSecurityCustomizer configure(){
        return (web) -> web.ignoring().antMatchers(
                "/v3/api-docs/**",
                "swagger-ui/**",
                "/api/v1/login"
        );
    }

    @Bean
    public DefaultSecurityFilterChain filterChain(HttpSecurity http) throws Exception{
       return http.csrf().disable().headers()
               .and()
               // authorizeRequests() : URL 별로 권한 관리를 설정하는 옵션
               // antMatchers('/url', ..) : 권한 관리 지정 옵션, URL과 HTTP 메소드별 관리, 해당 메소드 뒤의 체인은 열람 권한 설정
               .authorizeRequests().antMatchers("/", "/css/**","/images/**","/js/**")
               .permitAll()

                // '/api/아래 요청이 오면 인증이 필요하게 됨
                .antMatchers("/api/**").hasRole(Role.USER.name())
                .and()
                .formLogin()
                .loginPage("/login")
                .defaultSuccessUrl("/api/home", true)
                .permitAll()
                .and()
               //로그아웃 기능 에 대한 설정
                .logout()
               //로그아웃 성공 시 / 주소로 이동
               .logoutSuccessUrl("/")
               .and()
               //oauth 로그인 기능에 대한 설정의 진입점
               .oauth2Login()
               //oauth 로그인 성공 이후 사용자의 정보를 가져올 때 설저 담당
               .userInfoEndpoint()
               //소셜 로그인 성공 시 후속 조치
               //리소스 서버에서 사용자 정보를 가져온 상태로 추가기능 구현 시 사용
               .userService(customOAuth2UserService)
               .and()
               .and().build();
    }

}
