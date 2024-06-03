package com.PGCCapstone.uap.pgccapstoneapp.repository;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.PGCCapstone.uap.pgccapstoneapp.model.Item;
import com.PGCCapstone.uap.pgccapstoneapp.model.TrackedItem;

@Mapper
public interface ItemRepository {
	@Insert("INSERT INTO procured_items(po_no, item_id, quantity, price_per_unit, total, expiry_date, status) VALUES (#{po_no}, #{item_id}, #{quantity}, #{price_per_unit}, #{total}, #{expiry_date}, #{status})")
	public int insertItem(Item item);
	
	@Select("SELECT procured_items.item_id, expendable_items.item, SUM(procured_items.quantity) as quantity FROM procured_items, expendable_items WHERE procured_items.item_id = expendable_items.item_id GROUP BY procured_items.item_id ORDER BY count(quantity) DESC")
	public ArrayList<Item> getItemByItemId();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id")
	public ArrayList<Item> getAdminAllItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id AND expendable_items.type = 'expendable'")
	public ArrayList<Item> getAdminExpendableItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id AND expendable_items.type = 'PPE'")
	public ArrayList<Item> getAdminPpeItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id"
			+ "AND purchase_order.section = 'supply'")
	public ArrayList<Item> getSupplyAllItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id"
			+ "AND expendable_items.type = 'expendable' AND purchase_order.section = 'supply'")
	public ArrayList<Item> getSupplyExpendableItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id"
			+ "AND expendable_items.type = 'PPE' AND purchase_order.section = 'supply'")
	public ArrayList<Item> getSupplyPpeItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id"
			+ "AND purchase_order.section = 'property'")
	public ArrayList<Item> getPropertyAllItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id"
			+ "AND expendable_items.type = 'expendable' AND purchase_order.section = 'property'")
	public ArrayList<Item> getPropertyExpendableItems();
	
	@Select("Select distinct procured_items.item_no, procured_items.po_no, procured_items.quantity, procured_items.price_per_unit, procured_items.total, procured_items.expiry_date, expendable_items.item_id, purchase_order.date, purchase_order.department, purchase_order.supplier\r\n"
			+ "From procured_items, purchase_order, expendable_items\r\n"
			+ "Where procured_items.po_no = purchase_order.po_no AND procured_items.item_id = expendable_items.item_id"
			+ "AND expendable_items.type = 'PPE' AND purchase_order.section = 'property'")
	public ArrayList<Item> getPropertyPpeItems();
	
	@Update("UPDATE procured_items SET quantity = #{quantity}, price_per_unit = #{price_per_unit}, total = #{total}, expiry_date = #{expiry_date} WHERE item_no = #{item_no}")
	public void updateItem(Item item);
	
	
	@Update("UPDATE ppe_items_details SET status = #{status}, issuer = #{issuer}, recipient = #{recipient}, date = #{date} WHERE item_code = #{item_code}")
	public void updateItemTracker(TrackedItem trackedItem);
	
	@Select("SELECT * FROM ppe_items_details")
	public ArrayList<TrackedItem> getAllTrackedItems();
	
	
}
