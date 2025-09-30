import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Import routes
import authRoute from './routes/auth.route.ts';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Tạo __dirname cho ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes - PHẢI ĐẶT TRƯỚC static files
app.use('/api/auth', authRoute);

// Serve static files từ frontend (CSS, JS, images...)
const frontendPath = path.join(__dirname, '../../frontend/dist');
app.use(express.static(frontendPath));

// ✅ QUAN TRỌNG: Middleware fallback cho SPA (không dùng app.get)
// Đặt CUỐI CÙNG để catch tất cả routes không match
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});