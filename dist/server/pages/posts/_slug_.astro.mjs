import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_B46Vb6bj.mjs';
import 'kleur/colors';
import { g as getEntry, $ as $$Layout, a as getCollection } from '../../chunks/Layout_Dv-EYFiS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({ params: { slug: post.slug } }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  if (!slug) throw new Error("Slug not found");
  const post = await getEntry("posts", slug);
  if (!post) throw new Error("No post found for this slug");
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${post.data.title}</h1> ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/home/leo/tina/keystaticTest/src/pages/posts/[slug].astro", void 0);

const $$file = "/home/leo/tina/keystaticTest/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
