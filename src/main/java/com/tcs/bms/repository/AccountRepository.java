package com.tcs.bms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.tcs.bms.entity.Account;
import com.tcs.bms.entity.User;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {

	@Query(value = "Select * from Account where accountNumber = :accountNumber", nativeQuery = true)
	Account findByAccountNo(@Param("accountNumber") String accountNumber);

	Account findByAccountNumber(String accountNumber);
}
