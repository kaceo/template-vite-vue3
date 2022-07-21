<template lang="pug">

section.bg-secondary.p-4.w-full
  div

    h1.my-2 Write to Firestore.
    div
      button.mt-2.t-btn.bg-primary(@click="writeToDatabase")
        span Write now

    h1.mt-6.mb-2 Read From Database
    div
      button.mt-2.t-btn.bg-primary(@click="readFromDatabase")
        span Read now

  p.mt-2.italic.text-sm.
    This is dummy,
    to perform actual read-write operations uncomment the code

</template>

<script setup>
// import { db } from "../firebase";
// import { doc, setDoc, getDoc } from "firebase/firestore";

const writeToDatabase = () => {
  // // Actual WRITE
  // const writeTofs = async () => {
  // const ref = doc(db, "testCollection", "testDoc");
  // const document = {
  //   text: "Firebase 9 rocks!",
  // };
  // try {
  //   await setDoc(ref, document);
  //   alert("Success!");
  // } catch (e) {
  //   alert("Error!");
  //   console.error(e);
  // }
  alert("Written to database");
};
const readFromDatabase = () => {
  // // Actual READ
  // const ref = doc(db, "testCollection", "testDoc");
  // try {
  //   const document = await getDoc(ref);
  //   alert(document.data().text);
  // } catch (e) {
  //   alert("Error!");
  //   console.error(e);
  // }
  alert("Read from database");
};

</script>
