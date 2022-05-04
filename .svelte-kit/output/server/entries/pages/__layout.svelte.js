import { n as noop, a as safe_not_equal, b as assign, d as now, l as loop, i as identity, c as create_ssr_component, e as subscribe, v as validate_component, g as getContext, f as add_attribute, h as each, j as escape, k as set_store_value } from "../../chunks/index-05d56d6a.js";
/* empty css                           */var app = "";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const open = writable(false);
const color = writable([206.5, 206.5]);
const colorTwo = writable([(206.5 + 180) % 360, 206.5]);
var Title_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: 'main.svelte-14wvcgt.svelte-14wvcgt{position:relative;display:flex;background:var(--custom-background-light);position:fixed;z-index:1;width:100%;height:67px;top:0;box-sizing:border-box;border-bottom:1px solid var(--custom-secondary-color);transition:all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)}main.svelte-14wvcgt.svelte-14wvcgt::after{content:"";position:absolute;width:100%;height:4px;top:100%;left:0px}.title.svelte-14wvcgt.svelte-14wvcgt{user-select:none}.title.svelte-14wvcgt a.svelte-14wvcgt{text-decoration:none;display:inline-block;user-select:none;position:relative;text-align:left;color:var(--custom-text-color);font-weight:bold;z-index:1;margin:1.3em 30px;font-size:1em;font-size:0.8em;transition:all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965)}',
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_colorTwo;
  let $$unsubscribe_color;
  $$unsubscribe_colorTwo = subscribe(colorTwo, (value) => value);
  $$unsubscribe_color = subscribe(color, (value) => value);
  $$result.css.add(css$4);
  $$unsubscribe_colorTwo();
  $$unsubscribe_color();
  return `
<main class="${"svelte-14wvcgt"}"><div class="${"title svelte-14wvcgt"}"><a href="${"/"}" class="${"svelte-14wvcgt"}">Conner<br>Luker</a></div>
</main>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "main.svelte-7j5bro{position:relative}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<main class="${"svelte-7j5bro"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}
</main>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Hamburger_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".burger.svelte-9yay7x{position:fixed;margin:auto;cursor:pointer;padding:20px;right:0;top:0;z-index:1;width:30px;height:30px;width:20px}.burger-item.svelte-9yay7x{height:1px;width:100%;background:var(--text-color);margin:30% 0}.burger.open.svelte-9yay7x{transform:translate3d(5px, 3px, 0)}.open.a.svelte-9yay7x{transform:translate3d(-5px, 5px, 0) rotate(45deg)}.open.b.svelte-9yay7x{display:none}.open.c.svelte-9yay7x{transform:translate3d(-5px, -2px, 0) rotate(-45deg)}",
  map: null
};
let ariaLabel = "toggle menu";
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$result.css.add(css$2);
  $$unsubscribe_open();
  return `<div class="${["burger svelte-9yay7x", $open ? "open" : ""].join(" ").trim()}"${add_attribute("aria-expanded", $open, 0)}${add_attribute("aria-label", ariaLabel, 0)}><div class="${["burger-item a svelte-9yay7x", $open ? "open" : ""].join(" ").trim()}"></div>
	<div class="${["burger-item b svelte-9yay7x", $open ? "open" : ""].join(" ").trim()}"></div>
	<div class="${["burger-item c svelte-9yay7x", $open ? "open" : ""].join(" ").trim()}"></div>
</div>`;
});
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'nav.svelte-hsxc2o{position:relative;display:flex;flex-direction:column;align-items:left;width:400px;border-right:1px solid var(--custom-secondary-color);background:var(--background-color);user-select:none;flex-shrink:0;transition:0.4s all}.link.svelte-hsxc2o{position:relative;text-decoration:none;padding:1em 30px;color:var(--custom-text-color);text-align:right;font-weight:bold;white-space:nowrap;width:230px;transition:0.4s all}.link.svelte-hsxc2o::before{content:"";position:absolute;right:0%;bottom:50%;width:0px;height:1px;background:black;transition:0.2s all ease-in}.link.svelte-hsxc2o:visited{color:var(--custom-text-color)}.link.svelte-hsxc2o:hover{transform:translate3d(-20px, 0, 0);transition:0.2s all ease-in}.link.svelte-hsxc2o:hover::before{width:20px;transition:0.2s all ease-in}.links.svelte-hsxc2o{border-right:1px solid var(--custom-secondary-color);padding:1em 0;position:fixed;display:flex;align-content:left;flex-wrap:wrap;flex-direction:column-reverse;top:67px;bottom:0;left:0;transform:translate3d(var(--right-transform), 0, 0)}.link.svelte-hsxc2o:hover{box-sizing:content-box;color:var(--text-color)}.link.svelte-hsxc2o:hover:after{content:"";width:100%;height:100%;top:0;left:0;display:block;position:absolute}.active.svelte-hsxc2o{color:var(--text-color);background:transparent}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  let $page, $$unsubscribe_page;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let links = [["Contact", "/contact"], ["Past Work", "/past-work"], ["About", "/"]];
  $$result.css.add(css$1);
  $$unsubscribe_open();
  $$unsubscribe_page();
  return `<nav class="${["svelte-hsxc2o", $open ? "open" : ""].join(" ").trim()}">${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}
	<div class="${["links svelte-hsxc2o", $open ? "open" : ""].join(" ").trim()}">${each(links, (link) => {
    return `<a class="${["link svelte-hsxc2o", $page.url.pathname === link[1] ? "active" : ""].join(" ").trim()}"${add_attribute("href", link[1], 0)}><span>${escape(link[0])}</span></a>`;
  })}</div>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1mthaai{position:relative;overflow:hidden;top:65px;background:var(--custom-background-color);min-height:100vh}.main-page.svelte-1mthaai{position:relative;flex-grow:1;background:var(--background-color);background:var(--custom-background-color);color:var(--custom-text-color)}.content.svelte-1mthaai{position:relative;padding:30px;transform:translate3d(var(--right-transform), 0, 0)}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $open, $$unsubscribe_open;
  let $right, $$unsubscribe_right;
  let $color, $$unsubscribe_color;
  let $colorTwo, $$unsubscribe_colorTwo;
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  $$unsubscribe_color = subscribe(color, (value) => $color = value);
  $$unsubscribe_colorTwo = subscribe(colorTwo, (value) => $colorTwo = value);
  const right = tweened(1, { duration: 300, easing: cubicOut });
  $$unsubscribe_right = subscribe(right, (value) => $right = value);
  $$result.css.add(css);
  {
    {
      set_store_value(right, $right = $open ? 300 : 0, $right);
    }
  }
  $$unsubscribe_open();
  $$unsubscribe_right();
  $$unsubscribe_color();
  $$unsubscribe_colorTwo();
  return `

<main style="${"--right-transform: " + escape($right) + "px; --custom-background-color: hsl(" + escape($color[0]) + ", 70%, 95%); --custom-text-color: hsl(" + escape($color[1]) + ", 30%, 40%);--custom-background-light: hsl(" + escape($color[0]) + ", 70%, 99%);--custom-secondary-color: hsl(" + escape($colorTwo[0]) + ", 70%, 45%);"}" class="${"svelte-1mthaai"}"><div class="${"main-page svelte-1mthaai"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
		<div style="display: contents; --right-transform:${escape($right - 300) + "px"};">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
		<div class="${"content svelte-1mthaai"}">${slots.default ? slots.default({}) : ``}</div></div>
</main>`;
});
export { _layout as default };
