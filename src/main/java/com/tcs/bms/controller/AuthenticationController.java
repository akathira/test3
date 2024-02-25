package com.tcs.bms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.tcs.bms.dto.PasswordReset;
import com.tcs.bms.dto.UserDetails;
import com.tcs.bms.service.UserService;


@RestController
@RequestMapping("/bms")
public class AuthenticationController {
	
	@Autowired
	private UserService service;

	@PreAuthorize("hasAuthority('admin')")
	@GetMapping("/admin")
	public String admin() {
		return "Welcome to Admin Module";
	}

	@PreAuthorize("hasAuthority('user')")
	@GetMapping("/user")
	public String user() {
		return "Welcome to User Module";
	}

	

	
}
