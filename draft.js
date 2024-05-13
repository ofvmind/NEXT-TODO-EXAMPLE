//SSG( Static Site Generation )
//На сервере храниться кешированный готовый html, данные с API заранее подготовлены при сборке(build)
//Данный подход идёт по умолчанию(прописивать параметр в запросе не обязательно)
fetch("https://server.net/api/posts", { cashe: "force-cache" });

//SSR( Server Side Rendering )
//Перед отправкой клиенту html, сервер опрашивает API и наполняет html страницу контентом
//Соответственно страница рендериться дольше
fetch("https://server.net/api/posts", { cashe: "no-store" });

//IRC( Incremental Static Regeneration )
//На сервере храниться заранее готовая страница
//Но через свойство revalidate: "значение в секундах", через определённон время актулизирует данные(контент)
//Тоесть опрашивает API
fetch("https://server.net/api/posts", { next: { revalidate: 42 } });

//Функция generateStaticParams
//Используется при динамическом роутинге
//Для того чтобы сервер заранее знал количество и создал страницы
//В файле page.js динамического роута-папки [slug]
//Название файла, папки и функции должны быть строго такого-же названия
export async function generateStaticParams() {
  const posts = await fetch('https://server.net/api/posts').then(res => res.json());

  //id или любой уникальный идентификатор должен быть строковым(логично)
  return posts.map(post => ({slug: post.slug}));
  //потом в качестве пропса params, этот id доступе через params.id
}
