package com.tcs.bms.mapper;

import org.springframework.stereotype.Component;

import com.tcs.bms.dto.TransactionDTO;
import com.tcs.bms.entity.Transaction;

@Component
public class TransactionMapper {

    public TransactionDTO toDto(Transaction transaction) {
        TransactionDTO dto = new TransactionDTO();
        dto.setId(transaction.getId());
        dto.setAmount(transaction.getAmount());
        dto.setTransaction_type(transaction.getTransactionType());
        dto.setTransaction_date(transaction.getTransaction_date());
        dto.setSourceAccountNumber(transaction.getSourceAccount().getAccountNumber());
        if (transaction.getTargetAccount() != null) {
            dto.setTargetAccountNumber(transaction.getTargetAccount().getAccountNumber());
        } else {
            // Handle the case where target account is null (e.g., set a default value or do nothing)
            dto.setTargetAccountNumber("N/A"); // Replace "N/A" with an appropriate default value
        }
        return dto;
    }
}
