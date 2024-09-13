package com.PGCCapstone.uap.pgccapstoneapp.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.ItemId;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemIdRepository;

@RestController
public class ItemIdController {
	
	@Autowired
	ItemIdRepository itemIdRepo;
	
	@PostMapping("itemId/register/expendable")
	public ItemId registerExpandableItem(@RequestBody ItemId itemId) {
		String type = itemId.getType();
		if(type.equals("PPE")) {
			int id = itemId.getItemId();
			itemId.setItem_Id(id + 1000);
		}
		System.out.println(itemId.getItemId());
		itemIdRepo.insertExpendableItem(itemId);
		return itemId;
	}
	
	@GetMapping("itemId/list/expandable")
	public ArrayList<ItemId> displayExpendableItemId() {
		ArrayList<ItemId> expendableItemId = new ArrayList<ItemId>();
		expendableItemId.addAll(itemIdRepo.getAllExpendableItem());
		return expendableItemId;
	}
	
	@PostMapping("itemId/update")
	public ItemId updatingItemId(@RequestBody ItemId itemId) {
		itemIdRepo.updateItemConfiguration(itemId);
		return itemId;
	}
	
	@DeleteMapping("/itemId/delete")
	public void deleteItem(@RequestBody ItemId itemId) {
		itemIdRepo.deleteItemConfiguration(itemId);
	}
}
