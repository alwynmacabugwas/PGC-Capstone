CREATE DATABASE CAPSTONE;
USE CAPSTONE;

CREATE TABLE GSO_OFFICER (
    OFFICER_NAME VARCHAR(100) PRIMARY KEY,
    USERNAME VARCHAR(50),
    OFFICER_PASSWORD VARCHAR(50),
    DEPARTMENT VARCHAR(100)
);

CREATE TABLE PO (
    Po_No INT PRIMARY KEY,
    Supplier VARCHAR(100),
    Suppliers_Address VARCHAR(255),
    PO_Date DATE,
    Mode_of_procurement VARCHAR(100),
    PR_No INT,
    Place_of_delivery VARCHAR(255),
    Date_of_delivery DATE,
    Delivery_term VARCHAR(100),
    Delivery_cost DECIMAL(10, 2),
    INDEX (Supplier) -- Index added to Supplier column
);

CREATE TABLE Item (
    Item_No INT PRIMARY KEY,
    Item_Description TEXT,
    Unit VARCHAR(50),
    Unit_cost DECIMAL(10, 2),
    Property_No INT,
    INDEX (Property_No) -- Index added to Property_No column
);

CREATE TABLE AIR (
    AIR_No INT PRIMARY KEY,
    Po_No INT,
    Supplier_name VARCHAR(100),
    AIR_Date_1 DATE,
    Invoice_No INT,
    AIR_Date_2 DATE,
    Requisitioning_department VARCHAR(50),
    Item_No INT,
    Unit_type VARCHAR(50),
    AIR_Description TEXT,
    AIR_Qty INT,
    Total_Price DECIMAL(10, 2),
    AIR_Date_received DATE,
    AIR_Date_Inspected DATE,
    FOREIGN KEY (Po_No) REFERENCES PO(Po_No),
    FOREIGN KEY (Item_No) REFERENCES Item(Item_No)
);

CREATE TABLE BC (
    BC_No INT PRIMARY KEY,
    Item_NO INT,
    Item_Info_Description TEXT,
    Stock_Location VARCHAR(100),
    BC_Date_1 DATE,
    BC_Reference VARCHAR(100),
    Supplier VARCHAR(100),
    BC_Qty_1 INT,
    BC_Date_2 DATE,
    Recipient VARCHAR(100),
    BC_Qty_2 INT,
    BC_Qty_3 INT,
    INDEX (Supplier), -- Index added to Supplier column
    FOREIGN KEY (Supplier) REFERENCES PO(Supplier),
    FOREIGN KEY (Item_No) REFERENCES Item(Item_No)
);

CREATE TABLE IIRUP (
    IIRUP_No INT PRIMARY KEY,
    Property_No INT,
    As_of_date DATE,
    IIRUP_Found VARCHAR(50),
    IIRUP_Date_Acquired DATE,
    Particulars VARCHAR(100),
    IIRUP_Qty INT,
    Unit_Cost DECIMAL(10, 2),
    Total_Cost DECIMAL(10, 2),
    Accumulated_depreciation DECIMAL(10, 2),
    Netbook_Value DECIMAL(10, 2),
    IIRUP_Remarks_1 TEXT,
    Appraised_Value DECIMAL(10, 2),
    Disposition VARCHAR(100),
    IIRUP_Remarks_2 TEXT,
    FOREIGN KEY (Property_No) REFERENCES Item(Property_No)
);

CREATE TABLE ICS (
    ICS_No INT PRIMARY KEY,
    PO_No INT,
    Entity_Name VARCHAR(100),
    Found_Cluster VARCHAR(100),
    ICS_Qty INT,
    Unit VARCHAR(50),
    Unit_Cost DECIMAL(10, 2),
    Total_Cost DECIMAL(10, 2),
    ICS_Description TEXT,
    Item_No INT,
    Estimated_Useful_Life INT,
    FOREIGN KEY (PO_No) REFERENCES PO(PO_No)
);

CREATE TABLE ITR (
    ITR_No INT PRIMARY KEY,
    PO_No INT,
    Entity_name VARCHAR(50),
    Found_Cluster VARCHAR(50),
    From_Location VARCHAR(100),
    To_Location VARCHAR(100),
    ITR_Date DATE,
    Transfer_type VARCHAR(50),
    ITR_Date_Acquired DATE,
    Item_No INT,
    ICS_No_or_Date VARCHAR(255),
    ITR_Description TEXT,
    Amount DECIMAL(10, 2),
    Condition_of_inventory VARCHAR(50),
    Reason_for_transfer TEXT,
    FOREIGN KEY (PO_No) REFERENCES PO(PO_No)
);

CREATE TABLE ASSET_TRACKER (
    Item_Code INT PRIMARY KEY,
    Item_No INT,
    User_Name VARCHAR(50),
    Issued_Date DATE,
    IT_Staff VARCHAR(50),
    FOREIGN KEY (Item_No) REFERENCES Item(Item_No)
);

CREATE TABLE MISSING (
    Item_No INT PRIMARY KEY,
    PPE_Account_Group VARCHAR(100),
    Sheet_No INT,
    Sheet VARCHAR(50),
    Missing_Item VARCHAR(50),
    Missing_Description TEXT,
    Old_Property_No_Assigned INT,
    Person_Accountable VARCHAR(50),
    Unit_Cost DECIMAL(10, 2),
    Total_Cost DECIMAL(10, 2),
    Missing_Remarks TEXT,
    FOREIGN KEY (Item_No) REFERENCES Item(Item_No)
);

CREATE TABLE PAR (
    PAR_No INT PRIMARY KEY,
    PAR_Qty INT,
    Unit VARCHAR(50),
    PAR_Description TEXT,
    Property_No INT,
    INDEX (Property_No) -- Index added to Property_No column
);

CREATE TABLE PRS (
    PRS_No INT PRIMARY KEY,
    Name_of_Local_Government_Unit VARCHAR(100),
    PRS_Qty INT,
    Unit VARCHAR(50),
    PRS_Description TEXT,
    Prop_No INT,
    PAR_No INT,
    Name_of_End_user VARCHAR(100),
    Unit_Value DECIMAL(10, 2),
    Total_Value DECIMAL(10, 2),
    FOREIGN KEY (Prop_No) REFERENCES Item(Property_No),
    FOREIGN KEY (PAR_No) REFERENCES PAR(PAR_No)
);

CREATE TABLE PTR (
    PTR_No INT PRIMARY KEY,
    Brgy_Name VARCHAR(100),
    From_Location VARCHAR(255),
    To_Location VARCHAR(255),
    PTR_Date DATE,
    Transfer_Type VARCHAR(100),
    PTR_Date_Acquired DATE,
    Property_No INT,
    PTR_Description TEXT,
    Amount DECIMAL(10, 2),
    Condition_of_PPE VARCHAR(100),
    Reason_for_Transfer TEXT,
    FOREIGN KEY (Property_No) REFERENCES Item(Property_No)
);

CREATE TABLE SAI (
    SAI_No INT PRIMARY KEY
);

CREATE TABLE RIS (
    RIS_No INT PRIMARY KEY,
    Division VARCHAR(100),
    Office VARCHAR(100),
    Responsibility_Center VARCHAR(100),
    SAI_No INT,
    RIS_date DATE,
    SAI_date DATE,
    RIS_Qty INT,
    Unit VARCHAR(50),
    RIS_Description TEXT,
    Unit_cost DECIMAL(10, 2),
    Estimated_cost DECIMAL(10, 2),
    Account_tile VARCHAR(50),
    Account_code INT,
    RIS_Purpose TEXT,
    FOREIGN KEY (SAI_No) REFERENCES SAI(SAI_No)
);

CREATE TABLE STOCK (
    Stock_No INT PRIMARY KEY,
    Unit_price DECIMAL(10, 2),
    Article VARCHAR(255),
    Stock_Description TEXT,
    Quantity_unit INT,
    Date_Received_or_Issued DATE,
    Requisition_or_issue_order_No INT,
    From_whom_received_or_to_whom_issued VARCHAR(100),
    Quantity_received INT,
    Quantity_issued INT,
    STOCK_Remarks TEXT
);

CREATE TABLE RSMI (
    RSMI_No INT PRIMARY KEY,
    Serial_No INT,
    Fund VARCHAR(50),
    General VARCHAR(50),
    RSMI_Date DATE,
    RIS_No INT,
    Stock_No INT,
    RSMI_Qty INT,
    Item VARCHAR(100),
    Unit VARCHAR(50),
    Quantity_Issued INT,
    Unit_Cost DECIMAL(10, 2),
    Amount DECIMAL(10, 2),
    FOREIGN KEY (RIS_No) REFERENCES RIS(RIS_No),
    FOREIGN KEY (Stock_No) REFERENCES STOCK(Stock_No)
);

CREATE TABLE RPCSP (
    RPCSP_No INT PRIMARY KEY,
    RPCSP_Article VARCHAR(100),
    RPCSP_Description TEXT,
    Semi_expendable_old_Property_No INT,
    Semi_expendable_new_Property_No INT,
    Unit_of_measure VARCHAR(50),
    Unit_Value DECIMAL(10, 2),
    Balance_Per_Card_Qty INT,
    On_hand_per_Count_Qty INT,
    RPCSP_Shortage_overage INT,
    RPCSP_Qty INT,
    RPCSP_Value DECIMAL(10, 2),
    RPCSP_Remarks TEXT
);

CREATE TABLE RPCPPE (
    RPCPPE_No INT PRIMARY KEY,
    RPCPPE_Article VARCHAR(100),
    RPCPPE_Description TEXT,
    Old_Property_No INT,
    New_Property_No INT,
    Unit_of_measure VARCHAR(50),
    Unit_Value DECIMAL(10, 2),
    Qty_per_Property_Card INT,
    Qty_per_Physical_Count INT,
    RPCPPE_Shortage_overage INT,
    RPCPPE_Qty INT,
    RPCPPE_Value DECIMAL(10, 2),
    RPCPPE_Remarks TEXT
);

CREATE TABLE WMR (
    WMR_No INT PRIMARY KEY,
    Place_of_storage VARCHAR(100),
    WMR_Date DATE,
    WMR_Qty INT,
    Unit VARCHAR(50),
    WMR_Description TEXT,
    OR_No INT,
    Amount DECIMAL(10, 2)
);
