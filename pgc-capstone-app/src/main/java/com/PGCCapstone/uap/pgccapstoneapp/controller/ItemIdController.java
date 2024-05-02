package com.PGCCapstone.uap.pgccapstoneapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.ItemId;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemIdRepository;

@RestController
public class ItemIdController {
	
	@Autowired
	ItemIdRepository ItemIdRepo;
	
	@PostMapping("itemId/register/expendable")
	public ItemId registerExpandableItem(@RequestBody ItemId itemId) {		
		ItemIdRepo.insertExpendableItem(itemId);
		return itemId;
	}
	
	@PostMapping("itemId/register/expendable")
	public ItemId registerPpeItem(@RequestBody ItemId itemId) {		
		ItemIdRepo.insertPpeItem(itemId);
		return itemId;
	}
}
