Server for React-Skill-Sync

Quick start

1. Copy `.env.example` to `.env` and set `MONGODB_URI` and `PORT`.
2. Install dependencies:

   npm install

3. Start server:

   npm run dev

Endpoints
- POST /api/signup { name, email, password }
- POST /api/login { email, password }
- POST /api/contact { name, email, message }
- POST /api/apply (multipart) fields: jobId, jobTitle, name, email, qualification, experience, cover, file: resume

Uploaded resumes are stored in `server/uploads/` and served at `/uploads/<filename>`.
