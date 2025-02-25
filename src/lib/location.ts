import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

const saveLocation = async (userId: string, lat: number, lng: number) => {
  try {
    console.log("Saving location with:", { userId, lat, lng });
    const docRef = await addDoc(collection(db, "locations"), {
      userId,
      latitude: lat,
      longitude: lng,
      updatedAt: new Date(), // ← 変更
    });
    console.log("位置情報保存成功: ", docRef.id);
  } catch (e) {
    console.error("保存失敗: ", e);
  }
};

export { saveLocation };
