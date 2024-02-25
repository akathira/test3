package com.tcs.bms.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
public class PasswordReset {
	
	private String accountNumber;
	private String updatedPassword;
	private String pin;

}
