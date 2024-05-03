package com.PGCCapstone.uap.pgccapstoneapp.repository;

import org.apache.ibatis.annotations.Insert;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;

public interface ItemRepository {
	@Insert("INSERT INTO procured_items(po_no, item_id, quantity, price_per_unit, expiry_date, status) VALUES (#{po_num}, #{item_id}, #{quantity}, #{price_per_unit}, #{expiry_date}, #{status})")
	public int insertItem(Item item);
}
