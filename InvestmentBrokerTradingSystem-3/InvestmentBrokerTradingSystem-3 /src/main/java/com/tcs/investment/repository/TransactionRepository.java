package com.tcs.investment.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.tcs.investment.model.Transactions;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, Integer> {

	@Query(value = "SELECT * FROM transactions u WHERE u.investor_id = :id", nativeQuery = true)
	List<Transactions> findByinvestorId(@Param("id") int id);
}
