"use server";
import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// ✅ Get All Products
export async function getProducts() {
  try {
    const db = await dbConnect();

    const products = await db
      .collection("products")
      .find({})
      .toArray();

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// ✅ Get Single Product
export async function getSingleProduct(id) {
  try {
    if (!ObjectId.isValid(id)) {
      return null;
    }

    const db = await dbConnect();

    const product = await db.collection("products").findOne({
      _id: new ObjectId(id),
    });

    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
