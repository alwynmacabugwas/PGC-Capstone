package com.PGCCapstone.uap.pgccapstoneapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;
import com.PGCCapstone.uap.pgccapstoneapp.repository.RegistrationMybatisRepository;
import com.PGCCapstone.uap.pgccapstoneapp.service.AccountService;

@RestController
public class AccountsController {
	
	@Autowired
	private AccountService accountService;

	@Autowired
	RegistrationMybatisRepository registrationRepo;
	
	@PostMapping("event/register/account")
	public UserAccount registerAccount(@RequestBody UserAccount user) {
		registrationRepo.registerAccount(user);
		return user;
	}
	
	@PostMapping("/account/passwordCheck")
	public String checkPassword(@RequestBody UserAccount user) {
		return accountService.passwordCheck(user);
	}
	
	@DeleteMapping("/account/delete")
	public String deleteAccount(@RequestBody UserAccount user) {
		registrationRepo.deleteUser(user);
		return "Account deleted";
	}
}
