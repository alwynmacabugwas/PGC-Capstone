package com.PGCCapstone.uap.pgccapstoneapp.repository;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;

@Mapper
public interface ItemRepository {
	@Insert("INSERT INTO procured_items(po_no, item_id, quantity, price_per_unit, total, expiry_date, status) VALUES (#{po_num}, #{item_id}, #{quantity}, #{price_per_unit}, #{total}, #{expiry_date}, #{status})")
	public int insertItem(Item item);
	
	@Select("SELECT * FROM procured_items")
	public ArrayList<Item> getAllItem();
	
	@Select("SELECT procured_items.item_id, expendable_items.item, SUM(procured_items.quantity) FROM procured_items, expendable_items WHERE procured_items.item_id = expendable_items.item_id GROUP BY procured_items.item_id ORDER BY count(quantity) DESC")
	public ArrayList<Item> getItemByItemId();
}
