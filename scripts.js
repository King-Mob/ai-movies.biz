const obscure = (item) => {
  return item
    .split("")
    .filter((c, i) => i % 2 == 0)
    .reverse()
    .join("");
};

const q = "p0p4a9.4y9l8b6b3o8w0:4V2s3I5Z4o3W8V6r1N7s4c8w1w3u8N5U1z9y5!5";
const u =
  "f4g984N6R905_5w6E5M7R9l9q1h4u7k3Z2I8u8l7R1c8m2O0d2z2i9_563l8m6Y8u5M6X0Z8p3Z037b7t3l2W4Y0_9t3y7s5";

const button = document.getElementById("button");
const signUp = document.getElementById("emailsignup");

const press = () => {
  const email = signUp.value;
  const txnId = Math.round(Math.random() * 1000000);
  fetch(
    `https://matrix.wobbly.app/_matrix/client/v3/rooms/${obscure(
      q
    )}/send/m.room.message/${txnId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        body: email,
        "m.mentions": {},
        msgtype: "m.text",
      }),
      headers: {
        Authorization: `Bearer ${obscure(u)}`,
        "Content-Type": "application/json",
      },
    }
  );

  const signUpContainer = document.getElementById("signup-container");
  signUpContainer.style.display = "none";

  const thanks = document.getElementById("thanks");
  thanks.style.display = "block";
};

button.addEventListener("click", press);
