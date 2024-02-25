package com.tcs.bms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tcs.bms.entity.User;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByEmail(String email);

	
	Optional<User> findByAccountAccountNumber(String accountNumber);




	//Optional<User> findByAccountAccountNumberAndAccountPin(String accountNumber, String pin);
	
	
}
