package com.tcs.investment.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;


@Entity
public class Investors {
	
	@Id 
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String name;
	private String address;
	private double amount;
	
	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	private List<Transactions> transactions = new ArrayList<>();
	
	

	public List<Transactions> getTransactions() {
		return transactions;
	}
	public void setTransactions(List<Transactions> transactions) {
		this.transactions = transactions;
	}
	public Investors(int id, String name, String address, double amount, List<Transactions> transactions) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.amount = amount;
		this.transactions = transactions;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	
	public Investors() {
		super();
	}
	public Investors(int id, String name, String address, double amount) {
		super();
		this.id = id;
		this.name = name;
		this.address = address;
		this.amount = amount;
	}
	
	@Override
	public String toString() {
		return "Investors [id=" + id + ", name=" + name + ", address=" + address + ", amount=" + amount
				+ ", transactions=" + transactions + "]";
	}
	
	
}