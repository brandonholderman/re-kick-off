export async function onRequestGet(context) {
    const { request, env } = context;

    const APP_ID  = env.API_CONNECTION_ID;
    const APP_KEY = env.API_CONNECTION_KEY;

    // const APP_ID  = env.VITE_CONNECTION_ID;
    // const APP_KEY = env.VITE_CONNECTION_KEY;

    const url = new URL(request.url);
    const query = url.searchParams.get('q');

    if (!query) {
        return Response.json({ error: 'Missing query parameter' }, { status: 400 });
    }

    if (!APP_ID || !APP_KEY) {
        return Response.json({ error: 'Missing API credentials' }, { status: 500 });
    }

    const edamamUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    try {
        const response = await fetch(edamamUrl);

        if (!response.ok) {
            return Response.json({ error: 'Edamam API error' }, { status: response.status });
        }

        const data = await response.json();
        return Response.json(data);

    } catch (err) {
        console.error('Failed to fetch recipes:', err);
        return Response.json({ error: 'Failed to fetch recipes' }, { status: 500 });
    }
}