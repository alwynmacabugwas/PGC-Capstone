package com.PGCCapstone.uap.pgccapstoneapp.repository;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.PGCCapstone.uap.pgccapstoneapp.model.ItemId;

@Mapper
public interface ItemIdRepository {
	@Insert("INSERT INTO expendable_items(item_id, item, unit) VALUES (#{itemId}, #{item}, #{unit})")
	public int insertExpendableItem(ItemId itemId);
	
	@Insert("INSERT INTO ppe_items(item_id, item, unit) VALUES (#{itemId}, #{item}, #{unit})")
	public int insertPpeItem(ItemId itemId);
	
	@Select("SELECT * FROM expendable_items")
	public ArrayList<ItemId> getAllExpendableItem();
	
	@Select("SELECT * FROM ppe_items")
	public ArrayList<ItemId> getAllPpeItem();

	@Insert("INSERT INTO ppe_items_details(item_code, item_id, item_no, status) VALUES(#{item_code}, #{item_id}, #{item_no}, #{status})")
	public void insertPpeDetails(String item_code, int item_id, int item_no, String status);
}
