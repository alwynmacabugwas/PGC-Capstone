package com.PGCCapstone.uap.pgccapstoneapp.repository;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;

@Mapper
public interface PoRepository {
	@Insert("INSERT INTO purchase_order(po_no, date, supplier, department, section) VALUES (#{po_no}, #{date}, #{supplier}, #{department}, #{section})")
	public void insertPurchaseOrder(Item item);
	
}
