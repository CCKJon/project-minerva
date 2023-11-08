export async function GET({ params }) {
    console.log(params)
    return new Response('API endpoint')
}

async function