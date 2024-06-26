package com.PGCCapstone.uap.pgccapstoneapp.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	public ArrayList<Item> displayItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(registrationRepo.selectAllItems());
		return items;
	}
	
	@GetMapping("/item/itemName")
	public ArrayList<Item> displayItem(@RequestBody Item item) {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(registrationRepo.selectItem(item));
		return items;
	}
	
	@GetMapping("/item/bySection")
	public ArrayList<Item> displayItemBySection(@RequestBody Item item) {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(registrationRepo.selectAllItemsBySection(item));
		return items;
	}
	
	@PostMapping("/item/delete/poNum")
	public String deleteItem(@RequestBody Item item) {
		registrationRepo.deleteItemByPoNum(item);
		return "item should be deleted";
	}
	
	@PostMapping("/item/update/poNum")
	public String updateItem(@RequestBody Item item) {
		registrationRepo.updateItemByPoNum(item);
		return "item should be updated";
	}
	
	@PostMapping("event/register/account")
	public UserAccount registerAccount(@RequestBody UserAccount user) {
		registrationRepo.registerAccount(user);
		return user;
	}
	
	@GetMapping("/account/passwordCheck")
	public UserAccount checkPassword(@RequestBody UserAccount user) {
		registrationRepo.selectUser(user);
		return user;
	}
	
	
}
