package com.PGCCapstone.uap.pgccapstoneapp.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemRepository;
import com.PGCCapstone.uap.pgccapstoneapp.repository.PoRepository;
import com.PGCCapstone.uap.pgccapstoneapp.repository.RegistrationMybatisRepository;

@RestController
public class ItemController {
	
	@Autowired
	ItemRepository ItemRepo;
	@Autowired
	PoRepository PoRepo;
	
	@PostMapping("item/register")
	public Item registerItem(@RequestBody Item item) {
		item.setTotal(item.getPrice_per_unit(), item.getQuantity());		
		ItemRepo.insertItem(item);
		PoRepo.insertPurchaseOrder(item);
		return item;
	}

	@GetMapping("/item")
	public ArrayList<Item> displayItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getAllItem());
		return items;
	}
	
	@GetMapping("/item/byId")
	public ArrayList<Item> displayItemsByItemId() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getItemByItemId());
		return items;
	}
	
//	@GetMapping("/item/itemName")
//	public ArrayList<Item> displayItemByName(@RequestBody Item item) {
//		ArrayList<Item> items = new ArrayList<Item>();
//		items.addAll(registrationRepo.selectItemByName(item));
//		return items;
//	}
//	
//	@PostMapping("/item/bySection")
//	public ArrayList<Item> displayItemBySection(@RequestBody Item item) {
//		ArrayList<Item> items = new ArrayList<Item>();
//		items.addAll(registrationRepo.selectAllItemsBySection(item));
//		return items;
//	}
//	
//	@PostMapping("/item/delete/poNum")
//	public String deleteItem(@RequestBody Item item) {
//		registrationRepo.deleteItemByPoNum(item);
//		return "item should be deleted";
//	}
//	
//	@PostMapping("/item/update/poNum")
//	public String updateItem(@RequestBody Item item) {
//		registrationRepo.updateItemByPoNum(item);
//		return "item should be updated";
//	}
	
}
