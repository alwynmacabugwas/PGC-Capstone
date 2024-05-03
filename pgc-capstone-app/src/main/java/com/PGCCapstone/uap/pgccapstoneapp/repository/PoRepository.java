package com.PGCCapstone.uap.pgccapstoneapp.repository;

import org.apache.ibatis.annotations.Insert;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;

public interface PoRepository {
	@Insert("INSERT INTO purchase_order(po_no, date, supplier, department, section) VALUES (#{po_num}, #{date}, #{supplier}, #{department}, #{section})")
	public int insertPurchaseOrder(Item item);
	
}
