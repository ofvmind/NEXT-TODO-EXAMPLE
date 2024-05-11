const data = {
  id: 1,
  name: 'Dean',
  age: 31,
  info: 'Some info'
};

export async function GET(request) { 

  return new Response(JSON.stringify(data));
}

export async function POST(request) {

  return new Response(request.body);
}