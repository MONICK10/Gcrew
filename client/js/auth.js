// ---------------- LOGIN ----------------
const loginForm = document.getElementById('login-form');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = loginForm.email.value.trim();
    const password = loginForm.password.value.trim();
    const msg = document.getElementById('login-msg');
    msg.textContent = "";

    if (!email || !password) {
      msg.textContent = "⚠️ Please fill all fields.";
      msg.style.color = "red";
      return;
    }

    // 🧠 Dummy login check (for offline testing)
    if (email === "user123@karunya.edu.in" && password === "pass123") {
      msg.textContent = "✅ Logged in with dummy account!";
      msg.style.color = "green";

      // store dummy user
      const dummyUser = { name: "Demo User", email: "user123", role: "tester" };
      localStorage.setItem("currentUser", JSON.stringify(dummyUser));

      // redirect
      window.location.href = "index.html";
      return;
    }

    // 🌐 Actual backend login
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      if (res.ok) {
        msg.textContent = "✅ Login successful!";
        msg.style.color = "green";

        localStorage.setItem("currentUser", JSON.stringify(data.user));
        window.location.href = "index.html";
      } else {
        msg.textContent = data.message || "Login failed.";
        msg.style.color = "red";
      }
    } catch (err) {
      msg.textContent = "🚨 Server error. Is backend running?";
      msg.style.color = "red";
    }
  });
}

