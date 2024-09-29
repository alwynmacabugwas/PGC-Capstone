package com.PGCCapstone.uap.pgccapstoneapp.repository;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.PGCCapstone.uap.pgccapstoneapp.model.ItemId;

@Mapper
public interface ItemIdRepository {
	@Insert("INSERT INTO expendable_items(item_id, item, unit, type) VALUES (#{item_id}, #{item}, #{unit}, #{type})")
	public int insertExpendableItem(ItemId itemId);
	
	@Select("SELECT * FROM expendable_items")
	public ArrayList<ItemId> getAllExpendableItem();

	@Update("UPDATE expendable_items SET item = #{item}, unit = #{unit}, type = #{type} WHERE item_id = #{item_id}")
	public void updateItemConfiguration(ItemId itemId);
	
	@Delete("DELETE FROM expendable_items WHERE item_id = #{item_id}")
	public void deleteItemConfiguration(ItemId itemId);
	
	@Insert("INSERT INTO ppe_items_details(item_code, item_id, item_no, status) VALUES(#{item_code}, #{item_id}, #{item_no}, #{status})")
	public void insertPpeDetails(String item_code, int item_id, int item_no, String status);
}
