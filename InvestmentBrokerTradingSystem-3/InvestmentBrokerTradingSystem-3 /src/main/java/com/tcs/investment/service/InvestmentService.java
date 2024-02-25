package com.tcs.investment.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.tcs.investment.model.Investors;
import com.tcs.investment.model.Transactions;
import com.tcs.investment.repository.InvestorRepository;
import com.tcs.investment.repository.TransactionRepository;

@Service
public class InvestmentService {

	@Autowired
	InvestorRepository repo;

	@Autowired
	TransactionRepository transrepo;

	public List<Investors> getInvestors() {
		List<Investors> list = repo.findAll();
		for(int i=0;i<list.size();i++) {
			List<Transactions> lists = transrepo.findByinvestorId(list.get(i).getId());
			list.get(i).setTransactions(lists); 
		}
		
		return list;

	}

	public Investors getInvestorById(int id) {
		Optional<Investors> investors =repo.findById(id);

		if (investors.isEmpty()) {
			throw new NullPointerException("Investor not found");
		}
		List<Transactions> list = transrepo.findByinvestorId(id);
		investors.get().setTransactions(list);
		
		return investors.get();
	}

	public Investors save(Investors investor) {

		List<Transactions> tr = investor.getTransactions();
		for (Transactions trs : tr) {
			trs.setTransactionDate(new Date().toString());
		}

		return repo.save(investor);

	}

	public Investors update(Investors investors) {
		Optional<Investors> in = repo.findById(investors.getId());
		Investors getInvestors = in.get();
		getInvestors.setName(investors.getName());
		getInvestors.setAmount(investors.getAmount());
		getInvestors.setAddress(investors.getAddress());
		getInvestors.setTransactions(investors.getTransactions());

		return repo.save(getInvestors);
	}

	public boolean delete(int id) {
		Optional<Investors> in = repo.findById(id);
		if (in.isEmpty()) {
			throw new NullPointerException("Investor not found");
		}
		repo.delete(in.get());
		for(int i=0;i<in.get().getTransactions().size();i++) {
			List<Transactions> list = transrepo.findByinvestorId(id);
			transrepo.deleteById(list.get(i).getTransactionId()); 
		}
		
		
		return true;
	}

}
