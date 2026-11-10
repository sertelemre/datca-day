// Only www is routed here. A redirect needs no origin TLS connection.
export default {
  fetch(request) {
    const url = new URL(request.url);
    if (url.hostname !== 'www.datca.day') return new Response('Not found', { status: 404 });
    url.protocol = 'https:';
    url.hostname = 'datca.day';
    url.port = '';
    url.pathname = url.pathname.replace(/\/+$/, '') || '/';
    return Response.redirect(url.href, 308);
  },
};
