
async function getBlogPosts() {
    return [
        { url: 'https://arsyadfr.github.io/', updated_at: '2025-03-15T12:00:00Z' },
        { url: 'https://arsyadfr.github.io/projects', updated_at: '2025-03-15T12:00:00Z' },
    ];
}

export async function generateSitemap(): Promise<string> {
    const pages = await getBlogPosts();

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map((page) => {
      const lastMod = new Date(page.updated_at).toISOString().split('T')[0];

        return `<url>
    <loc>${page.url}</loc>
    <lastmod>${lastMod}</lastmod>
</url>`;
    })
    .join('')}
</urlset>`;
}
