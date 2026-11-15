(function () {
  var c = window.CONTENT;
  var $ = function (id) { return document.getElementById(id); };

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function link(item) {
    var a = el("a", null, item.label);
    a.href = item.url;
    if (/^https?:/.test(item.url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }

  document.title = c.name + " — " + c.role;
  $("brand").textContent = c.name;
  $("hero-name").textContent = c.name;
  $("hero-role").textContent = c.role;
  $("hero-tagline").textContent = c.tagline;
  $("year").textContent = "© " + new Date().getFullYear() + " " + c.name;

  c.about.forEach(function (p) { $("about-body").appendChild(el("p", null, p)); });

  function renderTimeline(target, items) {
    items.forEach(function (it) {
      var row = el("article", "entry");
      row.appendChild(el("div", "dates", it.dates));
      var body = el("div", "entry-body");
      body.appendChild(el("h4", null, it.title));
      body.appendChild(el("p", "org", it.org));
      if (it.bullets && it.bullets.length) {
        var ul = el("ul");
        it.bullets.forEach(function (b) { ul.appendChild(el("li", null, b)); });
        body.appendChild(ul);
      }
      row.appendChild(body);
      target.appendChild(row);
    });
  }
  renderTimeline($("experience"), c.experience);
  renderTimeline($("education"), c.education);

  Object.keys(c.skills).forEach(function (group) {
    var box = el("div", "skill-group");
    box.appendChild(el("h4", null, group));
    var tags = el("div", "tags");
    c.skills[group].forEach(function (s) { tags.appendChild(el("span", "tag", s)); });
    box.appendChild(tags);
    $("skills").appendChild(box);
  });

  c.projects.forEach(function (p) {
    var card = el("article", p.featured ? "card feature" : "card");
    if (p.earlier) card.classList.add("compact-card");
    var media = el("div", "media");
    if (p.logo || p.image) {
      var img = el("img");
      img.src = p.logo || p.image;
      img.alt = p.logo ? p.name + " logo" : p.name + " screenshot";
      if (p.logo) media.classList.add("logo");
      img.loading = "lazy";
      media.appendChild(img);
    } else {
      media.classList.add("placeholder");
      media.textContent = p.name.charAt(0);
      media.setAttribute("aria-hidden", "true");
    }
    card.appendChild(media);
    var body = el("div", "card-body");
    body.appendChild(el("h3", null, p.name));
    if (p.status) body.appendChild(el("span", "status", p.status));
    body.appendChild(el("p", null, p.description));
    var tags = el("div", "tags");
    p.tags.forEach(function (t) { tags.appendChild(el("span", "tag", t)); });
    body.appendChild(tags);
    if (p.links.length) {
      var links = el("div", "card-links");
      p.links.forEach(function (l) { links.appendChild(link(l)); });
      body.appendChild(links);
    }
    card.appendChild(body);
    $(p.earlier ? "earlier-grid" : p.featured ? "project-featured" : "project-grid").appendChild(card);
  });

  c.contact.forEach(function (l) {
    var li = el("li");
    li.appendChild(link(l));
    $("contact-links").appendChild(li);
  });
})();
