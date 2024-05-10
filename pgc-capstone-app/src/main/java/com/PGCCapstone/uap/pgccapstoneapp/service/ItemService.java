package com.PGCCapstone.uap.pgccapstoneapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemIdRepository;

@Service
public class ItemService {
	@Autowired
	ItemIdRepository itemIdRepo;
	
	public String createPpeTracker(Item item) {
		int itemId = item.getItem_id();
		if (itemId > 1000) {
			String item_code = "ICTO-" + (item.getItem_id());
			String status = "available";
			itemIdRepo.insertPpeDetails(itemId, item_code, status);
			return "PPE details created";
		}
		else {
			return "Not PPE Item";
		}
	}
}
