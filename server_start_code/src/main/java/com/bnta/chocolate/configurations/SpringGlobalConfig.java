package com.bnta.chocolate.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//WebMvcConfigurer is an interface in the Spring Framework used to customize and configure various aspects of
//Spring MVC applications, such as request mapping, view resolution, interceptors, and more.
//This allows you to bypass Cors restrictions for development

@Configuration
public class SpringGlobalConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) { // this is where you can whitelist people to use your api
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowedHeaders("*")
                .allowedMethods("*");
    }
}