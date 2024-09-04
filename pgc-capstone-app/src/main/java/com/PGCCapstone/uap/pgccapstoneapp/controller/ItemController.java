// registered item controller of the system
// see function comments for further details
package com.PGCCapstone.uap.pgccapstoneapp.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.TrackedItem;
import com.PGCCapstone.uap.pgccapstoneapp.repository.ItemRepository;
import com.PGCCapstone.uap.pgccapstoneapp.repository.PoRepository;
import com.PGCCapstone.uap.pgccapstoneapp.service.ItemService;

@RestController
public class ItemController {
	
	// this function connects to registered items repository
	// registered items repository contains the database functions(SQL Queries) for registered items
	// registered items - items that has a PO and its own item number. A specific item procured by the procurement section
	// see ItemRepository.java for further details
	@Autowired
	ItemRepository ItemRepo;
	
	// this function connects to PO repository
	// PO repository contains the database functions(SQL Queries) for registered items' Purchase Order (PO)
	// Purchase Order - document that contains the necessary information of the registered item
	// see PoRepository.java for further details
	@Autowired
	PoRepository PoRepo;
	
	// this function connects to registered item functions. It was purposefully placed on another java file for readability purpose.
	// see ItemService.java file for further details
	@Autowired
	private ItemService itemService;
	
	//registerItem - this function adds the registered item to the database
	@PostMapping("item/register")
	public void registerItem(@RequestBody Item item) {
		item.setTotal(item.getPrice_per_unit(), item.getQuantity()); // this line of code 
		ItemRepo.insertItem(item);
		PoRepo.insertPurchaseOrder(item);
		itemService.createPpeTracker(item);
	}
	
	@GetMapping("/item/byId")
	public ArrayList<Item> displayItemsByItemId() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getItemByItemId());
		return items;
	}
	
	@GetMapping("/item/admin/all")
	public ArrayList<Item> displayAdminItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getAdminAllItems());
		return items;
	}
	
	@GetMapping("/item/admin/expendable")
	public ArrayList<Item> displayAdminExpendableItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getAdminExpendableItems());
		return items;
	}
	
	@GetMapping("/item/admin/ppe")
	public ArrayList<Item> displayAdminPpeItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getAdminPpeItems());
		return items;
	}
	
	@GetMapping("/item/property/all")
	public ArrayList<Item> displayPropertyItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getPropertyAllItems());
		return items;
	}
	
	@GetMapping("/item/property/expendable")
	public ArrayList<Item> displayPropertyExpendableItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getPropertyExpendableItems());
		return items;
	}
	
	@GetMapping("/item/property/ppe")
	public ArrayList<Item> displayPropertyPpeItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getPropertyPpeItems());
		return items;
	}
	
	@GetMapping("/item/supply/all")
	public ArrayList<Item> displaySupplyItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getSupplyAllItems());
		return items;
	}
	
	@GetMapping("/item/supply/expendable")
	public ArrayList<Item> displaySupplyExpendableItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getSupplyExpendableItems());
		return items;
	}
	
	@GetMapping("/item/supply/ppe")
	public ArrayList<Item> displaySupplyPpeItems() {
		ArrayList<Item> items = new ArrayList<Item>();
		items.addAll(ItemRepo.getSupplyPpeItems());
		return items;
	}
	
	@PostMapping("/itemtracker/edit")
	public TrackedItem editTrackedItem(@RequestBody TrackedItem trackedItem){
		ItemRepo.updateItemTracker(trackedItem);
		return trackedItem;
	}
	
	@GetMapping("/itemtracker")
	public ArrayList<TrackedItem> displayTrackedItems() {
		ArrayList<TrackedItem> trackedItems = new ArrayList<TrackedItem>();
		trackedItems.addAll(ItemRepo.getAllTrackedItems());
		return trackedItems;
	}
	
	@PostMapping("/item/edit")
	public void editItem(@RequestBody Item item) {
		ItemRepo.updateItemOverall(item);
		//edit here
	}
	
	@DeleteMapping("/item/delete")
	public void deleteItem(@RequestBody Item item) {
		ItemRepo.deleteItemOverall(item);
		ItemRepo.deleteAllTrackedItemInstance(item);
	}
	
	@DeleteMapping("/item/delete/trackedItem")
	public void deleteSingleItem(@RequestBody TrackedItem trackedItem) {
		ItemRepo.deleteTrackedItem(trackedItem);
		ItemRepo.updatePpeItemQuantity(trackedItem);
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
