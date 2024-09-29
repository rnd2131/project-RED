export default function handler(req, res) {
  const hasVisited = req.cookies.hasVisited;

  if (!hasVisited) {
    // First visit
    res.setHeader('Set-Cookie', 'hasVisited=true; Path=/; HttpOnly');
    res.redirect(307, '/index.html');
  } else {
    // Subsequent visit
    res.redirect(307, '/tet/index.html');
  }
}
