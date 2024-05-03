package com.PGCCapstone.uap.pgccapstoneapp.model;

public class Item {

	private int  po_num;
	private String date;
	private String supplier;
	private String department;
	private int item_id;
	private String item;
	private String item_type;
	private String unit;
	private int quantity;
	private int price_per_unit;
	private int total;
	private String expiry_date;
	private String section;
	private String status;
	
	public int getPo_num() {
		return po_num;
	}
	public void setPo_num(int po_num) {
		this.po_num = po_num;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getSupplier() {
		return supplier;
	}
	public void setSupplier(String supplier) {
		this.supplier = supplier;
	}
	public String getItem() {
		return item;
	}
	public void setItem(String item) {
		this.item = item;
	}
	public String getItem_type() {
		return item_type;
	}
	public void setItem_type(String item_type) {
		this.item_type = item_type;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getPrice_per_unit() {
		return price_per_unit;
	}
	public void setPrice_per_unit(int price_per_unit) {
		this.price_per_unit = price_per_unit;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int price_per_unit, int quantity) {
		this.total = price_per_unit * quantity;
	}
	public String getSection() {
		return section;
	}
	public void setSection(String section) {
		this.section = section;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getExpiry_date() {
		return expiry_date;
	}
	public void setExpiry_date(String expiry_date) {
		this.expiry_date = expiry_date;
	}
	public int getItem_id() {
		return item_id;
	}
	public void setItem_id(int item_id) {
		this.item_id = item_id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
	
}
