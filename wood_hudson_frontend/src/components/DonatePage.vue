<template>
  <div class="donate-container">
    <h1>Make a Difference Today</h1>
    <p>
      Your donation helps fund life-saving research and provides support to children
      and families battling childhood cancer.
    </p>

    <h2>Donation Amount</h2>
    <input
      type="number"
      v-model.number="donationAmount"
      min="1"
      placeholder="Enter amount"
    />

    <div id="paypal-button-container" style="margin-top: 20px;"></div>

    <p class="thank-you">
      Thank you for helping make childhood cancer history!
    </p>
  </div>
</template>

<script>
export default {
  name: "DonatePage",
  data() {
    return {
      donationAmount: 10,
    };
  },
  mounted() {
    if (window.paypal) {
      this.renderPayPalButton();
    } else {
      if (!document.getElementById("paypal-sdk")) {
        const script = document.createElement("script");
        script.id = "paypal-sdk";
        script.src =
          "https://www.paypal.com/sdk/js?client-id=YOUR_REAL_CLIENT_ID&currency=USD";
        script.onload = () => {
          this.renderPayPalButton();
        };
        document.body.appendChild(script);
      } else {
        const waitForPaypal = setInterval(() => {
          if (window.paypal) {
            clearInterval(waitForPaypal);
            this.renderPayPalButton();
          }
        }, 50);
      }
    }
  },
  methods: {
    renderPayPalButton() {
      if (!window.paypal) return;

      // Clear previous buttons
      const container = document.getElementById("paypal-button-container");
      container.innerHTML = "";

      window.paypal
        .Buttons({
          style: {
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "paypal",
          },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: this.donationAmount.toFixed(2),
                  },
                },
              ],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert(
                `Thank you, ${details.payer.name.given_name}, for your donation of $${this.donationAmount.toFixed(
                  2
                )}!`
              );
            });
          },
        })
        .render("#paypal-button-container");
    },
  },
};
</script>

<style scoped>
.donate-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
  text-align: center;
}

input[type="number"] {
  padding: 0.5rem;
  font-size: 1rem;
  width: 150px;
  margin-bottom: 20px;
}

h1 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}
</style>


