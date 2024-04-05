package com.PGCCapstone.uap.pgccapstoneapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;
import com.PGCCapstone.uap.pgccapstoneapp.repository.RegistrationMybatisRepository;

@RestController
public class PostController {
	
	@Autowired
	RegistrationMybatisRepository registrationRepo;
	
	@PostMapping("event/register/item")
	public Item registerItem(@RequestBody Item item) {
		registrationRepo.insertItem(item);
		return item;
	}
	
	@GetMapping("/item")
	public void displayItems() {
		registrationRepo.selectAllItems();
	}
	
	@PostMapping("event/register/account")
	public UserAccount registerAccount(@RequestBody UserAccount user) {
		registrationRepo.registerAccount(user);
		return user;
		
	}
}
