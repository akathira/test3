package com.tcs.investment.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Transactions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int transactionId;
	private String transactionDate;
	private double transactionAmount;
	@ManyToOne
	@JoinColumn(name = "investor_id")
	@JsonProperty(access = Access.WRITE_ONLY)
	private Investors investors;

	public Investors getInvestors() {
		return investors;
	}

	public void setInvestors(Investors investors) {
		this.investors = investors;
	}

	public int getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(int transactionId) {
		this.transactionId = transactionId;
	}

	public String getTransactionDate() {
		return transactionDate;
	}

	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}

	public double getTransactionAmount() {
		return transactionAmount;
	}

	public void setTransactionAmount(double transactionAmount) {
		this.transactionAmount = transactionAmount;
	}

	public Transactions(int transactionId, String transactionDate, double transactionAmount, Investors investors) {
		super();
		this.transactionId = transactionId;
		this.transactionDate = transactionDate;
		this.transactionAmount = transactionAmount;
		this.investors = investors;
	}

	@Override
	public String toString() {
		return "Transactions [transactionId=" + transactionId + ", transactionDate=" + transactionDate
				+ ", transactionAmount=" + transactionAmount + ", investors=" + investors + "]";
	}

	public Transactions() {
		super();
	}

}