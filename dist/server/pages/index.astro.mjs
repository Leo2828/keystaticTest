import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B46Vb6bj.mjs';
import 'kleur/colors';
import { a as getCollection, $ as $$Layout } from '../chunks/Layout_Dv-EYFiS.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Keystatic & Astro's Content Collections" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <h1>Keystatic ⚡️ + Astro 🚀</h1> <p>
This homepage shows how to load data from Astro's content collections.
</p> <p> <a href="/keystatic">Click here to visit the Admin UI</a>, or the link
      below to view a post in the collection.
</p> <h2>Posts</h2> <ul> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/posts/${post.slug}`, "href")}>${post.data.title}</a> </li>`)} </ul> </div> ` })}`;
}, "/home/leo/tina/keystaticTest/src/pages/index.astro", void 0);

const $$file = "/home/leo/tina/keystaticTest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
