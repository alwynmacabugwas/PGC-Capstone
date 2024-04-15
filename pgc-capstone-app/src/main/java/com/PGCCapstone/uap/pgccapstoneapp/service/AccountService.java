package com.PGCCapstone.uap.pgccapstoneapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;
import com.PGCCapstone.uap.pgccapstoneapp.repository.RegistrationMybatisRepository;

@Service
public class AccountService {
	
	@Autowired
	RegistrationMybatisRepository registrationRepo;
	
	public String passwordCheck(UserAccount account) {
		UserAccount databaseAccount = registrationRepo.selectUser(account.getUsername());

	    if (databaseAccount != null && databaseAccount.getPassword().equals(account.getPassword())) 
	    { 
	        return databaseAccount.getDepartment();
	    }
	    else 
	    {       
	        return "Invalid";
	    }
	}
}
