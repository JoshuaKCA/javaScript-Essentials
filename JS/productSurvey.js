function submitFeedback() {
  const username = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const email = document.getElementById("email").value;
  const job = document.getElementById("job").value;
  const designation = document.getElementById("designation").value;
  const productType = document.getElementById("productType").value;
  const feedback = document.getElementById("feedbackText").value;

  if (!username || !feedback) {
    alert("Please fill out your Name and Feedback before submitting.");
    return;
  }

  alert("Thank you for your valuable feedback");

  document.getElementById("userName").innerText = username;
  document.getElementById("userAge").innerText = age;
  document.getElementById("userEmail").innerText = email;
  document.getElementById("userJob").innerText = job;
  document.getElementById("userDesignation").innerText = designation;
  document.getElementById("userProductChoice").innerText = productType;
  document.getElementById("userFeedback").innerText = feedback;
  document.getElementById("userInfo").style.display = "block";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitFeedback();
  }
});
