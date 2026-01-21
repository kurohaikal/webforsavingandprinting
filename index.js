import { db, storage } from "./firebase.js";
import { collection, addDoc } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

window.saveData = async function () {
  try {
    const tajuk = document.getElementById("tajuk").value;
    const pemaju = document.getElementById("pemaju").value;
    const nofail = document.getElementById("nofail").value;
    const taman = document.getElementById("taman").value;
    const file = document.getElementById("certificate").files[0];

    let imageURL = "";

    if (file) {
      const storageRef = ref(storage, "certificates/" + Date.now() + "_" + file.name);
      await uploadBytes(storageRef, file);
      imageURL = await getDownloadURL(storageRef);
    }

    await addDoc(collection(db, "permohonan"), {
      tajuk,
      pemaju,
      nofail,
      taman,
      certificateURL: imageURL,
      createdAt: new Date()
    });

    alert("✅ Data saved successfully!");
  } catch (error) {
    console.error(error);
    alert("❌ Failed to save data");
  }
};
