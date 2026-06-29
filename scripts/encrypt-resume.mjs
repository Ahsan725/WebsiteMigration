import { createCipheriv, randomBytes, scryptSync } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const password = process.env.RESUME_PASSWORD;
if (!password) {
  throw new Error("Set RESUME_PASSWORD before encrypting the resume.");
}

const source = path.join(process.cwd(), "private", "Ahsan-Baseer-Resume.pdf");
const destination = path.join(process.cwd(), "private", "Ahsan-Baseer-Resume.enc");
const resume = await readFile(source);
const salt = randomBytes(16);
const iv = randomBytes(12);
const key = scryptSync(password, salt, 32);
const cipher = createCipheriv("aes-256-gcm", key, iv);
const ciphertext = Buffer.concat([cipher.update(resume), cipher.final()]);
const authTag = cipher.getAuthTag();

await writeFile(destination, Buffer.concat([salt, iv, authTag, ciphertext]));
