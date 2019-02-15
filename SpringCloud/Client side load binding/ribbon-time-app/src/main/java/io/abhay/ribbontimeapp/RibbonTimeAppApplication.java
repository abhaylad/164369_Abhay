package io.abhay.ribbontimeapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@EnableDiscoveryClient
@SpringBootApplication
public class RibbonTimeAppApplication {

	@Inject
	private RestTemplate restTemplate;
	
	
	public static void main(String[] args) {
		SpringApplication.run(RibbonTimeAppApplication.class, args);
	}
	
	public String getTime() {
		return restTemplate.getForEntity("http://time-service", String.class).getBody();
	}

}

 