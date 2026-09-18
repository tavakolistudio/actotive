export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const range = request.headers.get("Range");

    // The asset binding returns complete files. Video scrubbing needs HTTP range
    // responses, so expose byte ranges explicitly for the cinematic MP4 assets.
    if (!range || !response.ok || !response.headers.get("content-type")?.startsWith("video/")) {
      return response;
    }

    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match) return response;

    const data = await response.arrayBuffer();
    const size = data.byteLength;
    const start = match[1] ? Number(match[1]) : 0;
    const end = match[2] ? Math.min(Number(match[2]), size - 1) : size - 1;
    if (start >= size || end < start) {
      return new Response(null, { status: 416, headers: { "Content-Range": `bytes */${size}` } });
    }

    return new Response(data.slice(start, end + 1), {
      status: 206,
      headers: {
        "Content-Type": response.headers.get("content-type") || "video/mp4",
        "Content-Length": String(end - start + 1),
        "Content-Range": `bytes ${start}-${end}/${size}`,
        "Accept-Ranges": "bytes",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  },
};
