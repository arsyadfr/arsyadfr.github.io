import { generateSitemap } from '../gensitemap'; // Sesuaikan path sesuai struktur proyekmu

export async function GET() {
    const xml = await generateSitemap();

    return new Response(xml, {
        headers: {
            'Content-Type': 'text/xml',
        },
    });
}