import { toast } from "react-toastify";

export const loadWishlist = () => {
  try {
    const data = localStorage.getItem("wishlist");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const updatedList = (product) => {
  const wishlist = loadWishlist();
  try {
    // সঠিকভাবে duplicate চেক করা
    const isDuplicate = wishlist.some((p) => p.id === product.id);

    if (isDuplicate) {
      toast("এই প্রোডাক্টটি আগেই wishlist এ আছে!");
      return wishlist; // আগের লিস্টই ফেরত দাও
    }

    const updatedList = [...wishlist, product];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
     toast.success("প্রোডাক্টটি প্রথমবার wishlist এ যোগ হলো ✅");
    return updatedList;
  } catch (err) {
    console.log(err);
    return [];
  }
};