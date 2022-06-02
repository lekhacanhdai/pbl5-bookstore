package com.pbl5.bookstore.config;

import com.pbl5.bookstore.filter.CustomAuthenticationFilter;
import com.pbl5.bookstore.filter.CustomAuthorizationFilter;
import com.pbl5.bookstore.service.AccountService;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@AllArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final AccountService accountService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(accountService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter authenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean(), accountService);
        authenticationFilter.setFilterProcessesUrl("/api/v1/login");
        http.cors().and()
                .csrf().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/api/v1/registration/**",
                        "/api/v1/login/**",
                        "/api/v1/token/refresh/**",
                        "/api/v1/books",
                        "/api/v1/books/{id}",
                        "/api/v1/genres/**",
                        "/api/v1/authors",
                        "/api/v1/publishers",
                        "/image/**",
                        "/api/v1/accounts/reset-password")
                .permitAll()
                .and()
                .authorizeRequests()

                .antMatchers("/api/v1/registration/**",
                        "/api/v1/login/**",
                        "/api/v1/token/refresh/**",
                        "/api/v1/books/**",
                        "/api/v1/accounts/**",
                        "/admin/api/v1/accounts/**",
                        "/admin/api/v1/books/**",
                        "/admin/api/v1/publishers/**",
                        "/admin/api/v1/genres/**",
                        "/admin/api/v1/authors/**",
                        "/admin/api/v1/dashboard/**").permitAll()

                .antMatchers(HttpMethod.GET,"/api/v1/books/**",
                        "/api/v1/carts/{id}/**",
                        "/api/v1/books/add-to-cart/{id}/**",
                        "api/v1/cart-details/**",
                        "api/v1/users/**")
                .hasAuthority("ROLE_USER")
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.POST,"/api/v1/books/**").hasAuthority("ROLE_USER")
                .and().authorizeRequests()
                .anyRequest()
                .authenticated();
        http.addFilter(authenticationFilter);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }
    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
    @Bean
    CorsConfigurationSource corsConfigurationSource()
    {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
        configuration.setAllowedMethods(Arrays.asList("GET","POST"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}

