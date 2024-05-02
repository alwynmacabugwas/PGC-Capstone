package com.PGCCapstone.uap.pgccapstoneapp.repository;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;

import com.PGCCapstone.uap.pgccapstoneapp.model.ItemId;


public interface ItemIdRepository {
	@Insert("INSERT INTO expendable_items(item_id, item, unit) VALUES (#{itemId}, #{item}, #{unit})")
	public int insertExpendableItem(ItemId itemId);
	
	@Insert("INSERT INTO expendable_items(item_id, item, unit) VALUES (#{itemId}, #{item}, #{unit})")
	public int insertPpeItem(ItemId itemId);
	
	@Select("SELECT * FROM expendable_items")
	public ArrayList<ItemId> getAllExpendableItem();
	
	@Select("SELECT * FROM ppe_items")
	public ArrayList<ItemId> getAllPpeItem();

}
