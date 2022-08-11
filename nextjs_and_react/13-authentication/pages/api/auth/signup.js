import { hash } from "bcryptjs";
import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
  const data = req.body;

  const { email, passord } = data;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - passwword should be at least 7 characters long",
    });
    return;
  }

  const client = await connectToDatabase();

  const hashedPassword = hash(passord.trim());

  const db = client.db();

  const result = await db.collection("users").insertOne({
    email: email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "Created user!" });
}

export default handler;
