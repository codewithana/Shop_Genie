import { createUserTable } from "../models/userTable.js";
import { createOrderItemTable } from "../models/orderItemsTable.js";
import { createOrdersTable } from "../models/ordersTable.js";
import { createProductsTable } from "../models/productsTable.js";
import { createPaymentsTable } from "../models/paymentsTable.js";
import { createShippingInfoTable } from "../models/shippingInfoTable.js";
import { createProductReviewsTable } from "../models/productReviewTable.js";

export const createTables=async()=>{
    try{
        await createUserTable();
        await createProductsTable();
        await createOrdersTable();
        await createOrderItemTable();
        await createShippingInfoTable();
        await createProductReviewsTable();
        await createPaymentsTable();

        console.log("All tables created successfully");
    }catch(error){
        console.error("Failed to create tables",error);
    }
}