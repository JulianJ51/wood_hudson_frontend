<template>
  <div class="contact-page">
    <form class="contact-form" @submit.prevent="submitForm">
      <h2>Contact Us</h2>

      <input type="text" v-model="firstName" placeholder="First Name" required />
      <input type="text" v-model="lastName" placeholder="Last Name" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="text" v-model="subject" placeholder="Subject" required />
      <textarea v-model="message" placeholder="Your Message" required></textarea>

      <button type="submit">Contact Now</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    };
  },
  methods: {
    submitForm() {
      // Replace this with your form submission logic (API call or email)
      alert(`Thank you, ${this.firstName}! Your message has been sent.`);
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    }
  }
};
</script>

<style scoped>
.contact-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* fill viewport height */
  background-color: #f8f8f8;
}

.contact-form {
  background-color: #ffffff;
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 0.75rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 1rem;
}

.contact-form button:hover {
  background-color: #cc0000;
}
</style>
