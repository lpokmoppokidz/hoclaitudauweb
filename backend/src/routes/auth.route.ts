import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Login GET route is working!');
});

router.post('/', (req, res) => {
  // Xử lý đăng nhập
  res.send('Login POST route');
});

export default router;