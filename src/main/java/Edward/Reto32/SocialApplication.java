package Edward.Reto32;
import java.util.Collections;
import java.util.Map;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Edward
 */
@SpringBootApplication
@RestController
public class SocialApplication extends WebSecurityConfigurerAdapter {
    
        public static void main(String[] args) {
        SpringApplication.run(SocialApplication.class, args);
    }
          
      @GetMapping("/user")
    public Map<String, Object> user(@AuthenticationPrincipal OAuth2User principal) {
        return Collections.singletonMap("name", principal.getAttribute("name"));
    }
     
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	// @formatter:off
        http
                .authorizeRequests(a -> a
                .antMatchers("/","/h2-console/**","/ logout/**","/user/**","/oauth2/authorization/**","/api/Category/**","/api/Motorbike/**","/api/Client/**","/api/Message/**","/api/Reservation/**", "/error", "/webjars/**").permitAll()
                .anyRequest().authenticated()
                
            )
                    
                .exceptionHandling(e -> e
                .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
            )
            .logout(l -> l
            .logoutSuccessUrl("/").permitAll()
                )
            .oauth2Login();
        // @formatter:on
        http.cors().and().csrf().disable();
    }

}

