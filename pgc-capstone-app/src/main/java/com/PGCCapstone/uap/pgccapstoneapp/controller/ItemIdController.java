package com.PGCCapstone.uap.pgccapstoneapp.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.ItemId;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemIdRepository;

@RestController
public class ItemIdController {
	
	@Autowired
	ItemIdRepository itemIdRepo;
	
	@PostMapping("itemId/register/expendable")
	public ItemId registerExpandableItem(@RequestBody ItemId itemId) {		
		itemIdRepo.insertExpendableItem(itemId);
		return itemId;
	}
	
	@PostMapping("itemId/register/ppe")
	public ItemId registerPpeItem(@RequestBody ItemId itemId) {
		//itemId.setItemId(itemId.getItemId());
		itemIdRepo.insertPpeItem(itemId);
		return itemId;
	}
	
	@GetMapping("itemId/list/expandable")
	public ArrayList<ItemId> displayExpendableItemId() {
		ArrayList<ItemId> expendableItemId = new ArrayList<ItemId>();
		expendableItemId.addAll(itemIdRepo.getAllExpendableItem());
		return expendableItemId;
	}
	
	@GetMapping("itemId/list/ppe")
	public ArrayList<ItemId> displayPpeItemId() {
		ArrayList<ItemId> ppeItemId = new ArrayList<ItemId>();
		ppeItemId.addAll(itemIdRepo.getAllPpeItem());
		return ppeItemId;
	}
}
