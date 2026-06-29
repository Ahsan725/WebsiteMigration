Place the source resume PDF here as `Ahsan-Baseer-Resume.pdf`, then run:

```bash
RESUME_PASSWORD="your-password" node scripts/encrypt-resume.mjs
```

The raw PDF is ignored by Git. Only the encrypted `.enc` file is deployed and it
is decrypted in memory after the password gate succeeds.
