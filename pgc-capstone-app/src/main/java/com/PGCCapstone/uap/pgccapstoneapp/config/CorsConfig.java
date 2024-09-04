// CORS CONFIG - This allows the frontend part of the system to send inputs to backend part of the system
//             - Disregard this file. Nothing needs to be changed here
//             - Only change this file if CORS error is encountered at the frontend part of the system
package com.PGCCapstone.uap.pgccapstoneapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("*");
    }
}