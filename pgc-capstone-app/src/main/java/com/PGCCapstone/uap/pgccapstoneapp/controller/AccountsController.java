// Account Controller of the inventory system
// see function comments for further details
package com.PGCCapstone.uap.pgccapstoneapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;
import com.PGCCapstone.uap.pgccapstoneapp.repository.RegistrationMybatisRepository;
import com.PGCCapstone.uap.pgccapstoneapp.service.AccountService;

@RestController
public class AccountsController {
	
	// this function connects to account functions
	// see AccountService.java file for further details
	@Autowired
	private AccountService accountService;

	// this function connects to registration repository
	// registration repository contains the database functions(SQL Queries)
	// see RegistrationMyBatisRepository for further details
	@Autowired
	RegistrationMybatisRepository registrationRepo;
	
	// registerAccount - this function registers(add) a new account to the database
	// UserAccount - object that contains necessary credentials(variables) for the created account
	@PostMapping("event/register/account")
	public UserAccount registerAccount(@RequestBody UserAccount user) {
		registrationRepo.registerAccount(user);
		return user;
	}
	
	//checkPassword - this function checks whether the entered(inputed) credentials(username and password) is correct
	// see accountService.java file to view the code block for this
	@PostMapping("/account/passwordCheck")
	public String checkPassword(@RequestBody UserAccount user) {
		return accountService.passwordCheck(user);
	}
	
	// deleteAccount - this function deletes an account through the use of the username credential(variable)
	@DeleteMapping("/account/delete")
	public String deleteAccount(@RequestBody UserAccount user) {
		registrationRepo.deleteUser(user);
		return "Account deleted";
	}
}
