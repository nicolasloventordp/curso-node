import { db } from "./firebase.js";
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection);
        const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        console.log(error);
    }
}

export const getProductById = async (id) => {
    try {
        const docRef = await doc(productsCollection, id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() }
        } else {
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (data) => {
    try {
        const docRef = await addDoc(productsCollection, data);
        return { id: docRef.id, ...data };
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id) => {
    try {
        const productRef = await doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if (!snapshot.exists()) {
            return false;
        }

        await deleteDoc(productRef);
        return true;
    } catch (error) {
        console.log(error);
    }
}