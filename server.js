import express from "express";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mysql from "mysql2/promise";

const app = express();
const PORT = 5200;
const JWT_SECRET = "supersecret"; // change in production

// ✅ Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// ✅ Database connection wrapper
let db;
const initDB = async () => {
  try {
    db = await mysql.createConnection({
      host: "160.153.172.237",
      user: "clickorbits",
      password: "Clickorbits@123",
      database: "steptosale",
    });
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    // Don't crash the server, just log the error
  }
};

// ✅ Simple Hello API (works even if DB is down)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello World! API is working 🎉" });
});

// ✅ Login Endpoint
app.post("/api/loginigaming", async (req, res) => {
  if (!db) return res.status(500).json({ message: "Database not connected" });
  try {
    const { username, password } = req.body;
    const [users] = await db.query("SELECT * FROM admin_users WHERE username = ?", [username]);

    if (users.length === 0) return res.status(401).json({ message: "Invalid username" });

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Auth Middleware
const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.sendStatus(403);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// ✅ Get Campaign Status
app.get("/api/campaign-status", async (req, res) => {
  if (!db) return res.status(500).json({ message: "Database not connected" });
  try {
    const [rows] = await db.query("SELECT is_live FROM campaign_status WHERE id = 1");
    res.json({ live: rows[0]?.is_live });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

// ✅ Toggle Campaign Status
app.post("/api/toggle-campaign", auth, async (req, res) => {
  if (!db) return res.status(500).json({ message: "Database not connected" });
  try {
    const { is_live } = req.body;
    await db.query("UPDATE campaign_status SET is_live=? WHERE id=1", [is_live]);
    res.json({ message: "Campaign status updated", live: is_live });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Database error" });
  }
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  initDB(); // Connect to DB after server starts
});
