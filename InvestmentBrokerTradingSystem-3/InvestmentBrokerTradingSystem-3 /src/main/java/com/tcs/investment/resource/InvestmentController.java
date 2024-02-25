package com.tcs.investment.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tcs.investment.model.Investors;
import com.tcs.investment.service.InvestmentService;
import com.tcs.investment.service.TransactionService;

@RestController
@RequestMapping("/investor")
public class InvestmentController {

	@Autowired
	InvestmentService service;

	@Autowired
	TransactionService Transservice;

	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping("/fetch")
	public List<Investors> fetchInvestor() {
		return service.getInvestors();
	}

	@CrossOrigin(origins ="http://localhost:4200")
	@GetMapping("/investorid/{id}")
	public Investors fetchInvestors(@PathVariable int id) {
		return service.getInvestorById(id);
	}

	@CrossOrigin(origins ="http://localhost:4200")
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, value = "/addinvestor")
	public ResponseEntity<Investors> createInvestors(@RequestBody Investors investors) {

		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(investors));

	}

	@CrossOrigin(origins ="http://localhost:4200")
	@PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE, value = "/updateinvestor")
	public Investors updateInvestors(@RequestBody Investors investors) {
		return service.update(investors);
	}

	@CrossOrigin(origins ="http://localhost:4200")
	@DeleteMapping("/investorsid/{id}")
	public boolean deleteInvestors(@PathVariable int id) {
		return service.delete(id);
	}

	

}
