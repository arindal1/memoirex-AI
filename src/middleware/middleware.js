import { NextResponse } from 'next/server';

export function middleware(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/api/generate-notes')) {
        const clientIP = request.ip || request.headers.get('x-forwarded-for');
        console.log(`Request from IP: ${clientIP}`);

        if (request.method === 'POST') {
            return request.json().then((body) => {
                if (!body.topic || body.topic.trim() === '') {
                    return NextResponse.json(
                        { error: 'Topic is required' },
                        { status: 400 }
                    );
                }
                return NextResponse.next();
            });
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/api/generate-notes', 
};
