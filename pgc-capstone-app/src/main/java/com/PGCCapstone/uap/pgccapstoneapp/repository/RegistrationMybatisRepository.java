package com.PGCCapstone.uap.pgccapstoneapp.repository;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.UserAccount;

@Mapper
public interface RegistrationMybatisRepository {
	@Insert("INSERT INTO items(po_num, date, supplier, item, item_type, unit, quantity, price_per_unit, total_price, section, department, expiry_date) VALUES (#{po_num}, #{date}, #{supplier}, #{item}, #{item_type}, #{unit}, #{quantity}, #{price_per_unit}, #{total}, #{section}, #{department}, #{expiry_date})")
			public int insertItem(Item item);
	
	@Select("SELECT * FROM items")
		public ArrayList<Item> selectAllItems();
	
	@Select("SELECT * FROM items WHERE item = #{item}")
		public ArrayList<Item> selectItem(Item item);
	
	@Select("SELECT * FROM items WHERE section = #{setion}")
		public ArrayList<Item> selectAllItemsBySection(Item item);
	
	@Insert("INSERT INTO users(username, department, name, password) VALUES (#{username}, #{department}, #{name}, #{password})")
		public int registerAccount(UserAccount acount);
	
	@Select("SELECT * FROM users WHERE username = #{username}")
		public UserAccount selectUser(UserAccount account);
	
	@Delete("DELETE FROM items WHERE po_num = #{po_num}")
		public void deleteItemByPoNum(Item item);
	
	@Update("UPDATE items SET quantity = #{quantity} WHERE po_num = #{po_num}")
		public  void updateItemByPoNum(Item item);
}
