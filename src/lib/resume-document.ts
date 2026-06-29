import { createDecipheriv, scryptSync } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function readResumeDocument(password: string) {
  const resumePath = path.join(process.cwd(), "private", "Ahsan-Baseer-Resume.enc");
  const encrypted = await readFile(resumePath);
  const salt = encrypted.subarray(0, 16);
  const iv = encrypted.subarray(16, 28);
  const authTag = encrypted.subarray(28, 44);
  const ciphertext = encrypted.subarray(44);
  const key = scryptSync(password, salt, 32);
  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(authTag);

  return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
}
