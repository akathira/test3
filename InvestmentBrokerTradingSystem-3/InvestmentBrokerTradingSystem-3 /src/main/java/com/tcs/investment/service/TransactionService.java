package com.tcs.investment.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tcs.investment.model.Investors;
import com.tcs.investment.model.Transactions;
import com.tcs.investment.repository.TransactionRepository;

@Service
public class TransactionService {

	@Autowired
	TransactionRepository transrepo;
	

	@Autowired
	InvestmentService service;

	public Transactions save(Transactions transactions) throws Exception {

		Investors validate = service.getInvestorById(transactions.getInvestors().getId());

		if (validate == null) {
			throw new Exception("Transaction not created due to invalid InvestorId");
		}
		transactions.setTransactionDate(new Date().toString());
		transactions.setInvestors(validate);
		return transrepo.save(transactions);

	}

	public Transactions getTransactionById(int id) {
		Optional<Transactions> transactions = transrepo.findById(id);

		if (transactions.isEmpty()) {
			throw new NullPointerException("Transaction not found");
		}
		

		return transactions.get();
	}

	public Transactions update(Transactions transactions) throws Exception {
		Investors validate = service.getInvestorById(transactions.getInvestors().getId());

		if (validate == null) {
			throw new Exception("Transaction not created due to invalid InvestorId");
		}
		Optional<Transactions> trans = transrepo.findById(transactions.getTransactionId());
		Transactions getTransactions = trans.get();
		getTransactions.setTransactionAmount(transactions.getTransactionAmount());
		getTransactions.setTransactionDate(new Date().toString());
		getTransactions.setInvestors(validate);

		return transrepo.save(getTransactions);
	}

	public boolean deleteForTransaction(int id) {
		Optional<Transactions> trans = transrepo.findById(id);
		if (trans.isEmpty()) {
			throw new NullPointerException("Transaction not found");
		}
		transrepo.delete(trans.get());
		return true;
	}

	public List<Transactions> getTransactions() {
		List<Transactions> list = transrepo.findAll();
		return list;

	}

}
