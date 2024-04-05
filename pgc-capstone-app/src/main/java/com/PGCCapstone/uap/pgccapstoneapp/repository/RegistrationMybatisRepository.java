package com.PGCCapstone.uap.pgccapstoneapp.repository;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;

@Mapper
public interface RegistrationMybatisRepository {
	@Insert("INSERT INTO items(po_num, date, supplier, item, item_type, unit, quantity, price_per_unit, total_price, section, department, expiry_date) VALUES (#{po_num}, #{date}, #{supplier}, #{item}, #{item_type}, #{unit}, #{quantity}, #{price_per_unit}, #{total}, #{section}, #{department}, #{expiry_date})")
			public int insertItem(Item item);
	
	@Select("SELECT all FROM items")
		public Item selectAllItems();
	
	@Insert("INSERT INTO users(username, department, name, password) VALUES (#{username}, #{department}, #{name}, #{password})")
		public int registerAccount(UserAccount acount);
	

}
