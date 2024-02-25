package com.tcs.bms.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tcs.bms.dto.LoginRequest;
import com.tcs.bms.dto.PasswordReset;
import com.tcs.bms.entity.User;
import com.tcs.bms.service.JwtService;
import com.tcs.bms.service.UserService;
import com.tcs.bms.dto.UserDetails;

@RestController
@RequestMapping("/bms")
public class PublicController {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private UserService service;

	@GetMapping("/home")
	public String welcome() {
		return "Welcome Home Page";
	}

	@PostMapping("/passwordreset")
	public String passwordreset(@RequestBody PasswordReset reset) {
		System.out.println(reset.getPin() + "--"+reset.getAccountNumber());
		service.updatePassword(reset);
		return "Updated Successfully";
	}

	@PostMapping("/register")
	public ResponseEntity<UserDetails> createUser(@RequestBody User user) {
		UserDetails userDetails = service.createUser(user);
		return ResponseEntity.ok(userDetails);
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> authenticateAndGetToken(@RequestBody LoginRequest loginRequest) {
		String accountNumber = loginRequest.getAccountNumber();
		String password = loginRequest.getPassword();
		try {
			Authentication authentication = authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(accountNumber, password));

			SecurityContextHolder.getContext().setAuthentication(authentication);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>("Invalid Credentials", HttpStatus.UNAUTHORIZED);

		}
		Map<String, String> result = new HashMap<>();
		result.put("token", jwtService.generateToken(accountNumber));
		return new ResponseEntity<>(result, HttpStatus.OK);

	}

}
