const PROTECTED_PATHS = ['/stanford'];
const USERNAME = 'stanford';
const PASSWORD = 'harmoniqs2026';

function unauthorized() {
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Stanford Collaboration Deck"' }
  });
}

function checkAuth(request) {
  const auth = request.headers.get('Authorization');
  if (!auth || !auth.startsWith('Basic ')) return false;
  const decoded = atob(auth.slice(6));
  const [user, pass] = decoded.split(':');
  return user === USERNAME && pass === PASSWORD;
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Check if path needs protection
    const needsAuth = PROTECTED_PATHS.some(p => url.pathname.startsWith(p));
    if (needsAuth && !checkAuth(request)) {
      return unauthorized();
    }

    // Serve static assets
    return env.ASSETS.fetch(request);
  }
};
