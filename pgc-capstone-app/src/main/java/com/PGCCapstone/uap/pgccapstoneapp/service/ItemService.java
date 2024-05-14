package com.PGCCapstone.uap.pgccapstoneapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemIdRepository;

@Service
public class ItemService {
	@Autowired
	ItemIdRepository itemIdRepo;
	
	public void createPpeTracker(Item item) {
		int itemId = item.getItem_id();
		int count = item.getQuantity();
		int itemNo = item.getItem_no();
		
		if (itemId > 1000) {	
			for(int i = 0; count >= i; i++) {
				String item_code = "ICTO -" + (itemId) + "-" + (i + 1);
				String status = "available";
				itemIdRepo.insertPpeDetails(item_code, itemId, itemNo, status);
			}
		}
	
	}
}
