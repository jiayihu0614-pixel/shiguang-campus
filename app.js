"use strict";

const events = [
  {
    id: 1,
    title: "AI 创意工作坊：让灵感变成作品",
    category: "科技",
    poster: "tech",
    code: "AI",
    date: "2026-06-24",
    time: "14:00 - 17:00",
    location: "成龙校区 第一实验楼西-102",
    host: "计算机协会",
    capacity: 60,
    joined: 43,
    popularity: 96,
    description: "从提示词设计到智能应用原型，三小时完成一件可展示的 AI 创意作品。现场提供案例、素材与助教指导，零基础同学也可参加。"
  },
  {
    id: 2,
    title: "夏日荧光夜跑：一起点亮校园",
    category: "运动",
    poster: "sport",
    code: "RUN",
    date: "2026-06-25",
    time: "19:30 - 21:00",
    location: "狮子山校区东操场",
    host: "校园跑团",
    capacity: 120,
    joined: 87,
    popularity: 92,
    description: "五公里轻松夜跑，不竞速、不掉队。领取荧光手环，与新朋友一起完成夏夜校园路线，终点设有音乐与补给区。"
  },
  {
    id: 3,
    title: "胶片漫游：校园光影摄影计划",
    category: "艺术",
    poster: "art",
    code: "FILM",
    date: "2026-06-27",
    time: "09:30 - 12:00",
    location: "狮子山校区第七教学楼前",
    host: "光影摄影社",
    capacity: 35,
    joined: 29,
    popularity: 89,
    description: "跟随摄影社成员寻找校园里的光、影与故事。可使用手机或相机，活动结束后将共同策划线上作品展。"
  },
  {
    id: 4,
    title: "旧物新生：毕业季公益交换市集",
    category: "公益",
    poster: "volunteer",
    code: "RE",
    date: "2026-06-28",
    time: "10:00 - 16:30",
    location: "成龙校区西苑食堂门口",
    host: "青年志愿者协会",
    capacity: 80,
    joined: 51,
    popularity: 84,
    description: "让闲置书籍、文具和生活用品找到新主人。报名可申请摊位，也可加入志愿者队伍参与物品整理与公益捐赠。"
  },
  {
    id: 5,
    title: "草坪音乐会：听见夏天的晚风",
    category: "音乐",
    poster: "music",
    code: "LIVE",
    date: "2026-06-30",
    time: "18:30 - 21:00",
    location: "狮子山校区生态广场",
    host: "大学生艺术团",
    capacity: 200,
    joined: 168,
    popularity: 99,
    description: "校园乐队、民谣弹唱与阿卡贝拉轮番登场。带上野餐垫，在晚风和音乐里完成六月的最后一场相聚。"
  },
  {
    id: 6,
    title: "交换一本书：青年阅读圆桌",
    category: "阅读",
    poster: "reading",
    code: "BOOK",
    date: "2026-07-02",
    time: "15:00 - 17:00",
    location: "成龙校区图书馆一楼",
    host: "悦读书友会",
    capacity: 30,
    joined: 18,
    popularity: 76,
    description: "带一本愿意分享的书，认识一位新的阅读伙伴。本期主题为“成长中的选择”，包含自由交换、圆桌交流与盲盒荐书。"
  },
  {
    id: 7,
    title: "前端奇妙夜：网页动效实战分享",
    category: "科技",
    poster: "tech",
    code: "WEB",
    date: "2026-07-04",
    time: "19:00 - 21:00",
    location: "成龙校区 A-201",
    host: "Web 开发兴趣组",
    capacity: 70,
    joined: 39,
    popularity: 86,
    description: "围绕 CSS 动画、交互反馈与响应式设计展开现场演示，分享从课堂作业到完整作品的设计思路和调试方法。"
  },
  {
    id: 8,
    title: "新手羽毛球友谊赛",
    category: "运动",
    poster: "sport",
    code: "BAD",
    date: "2026-07-05",
    time: "13:30 - 17:30",
    location: "狮子山校区体育馆",
    host: "羽毛球协会",
    capacity: 48,
    joined: 34,
    popularity: 81,
    description: "面向非专业选手的双打交流赛，现场随机组队。设置趣味挑战和基础教学，让第一次参赛也能轻松融入。"
  },
  {
    id: 9,
    title: "城市速写：用线条记录成都",
    category: "艺术",
    poster: "art",
    code: "DRAW",
    date: "2026-07-08",
    time: "09:00 - 15:00",
    location: "成都东门市井集合",
    host: "美术爱好者联盟",
    capacity: 25,
    joined: 21,
    popularity: 78,
    description: "从校园出发走进城市街巷，用速写记录建筑、人群和生活片段。活动提供基础画材，作品将制作成校园记忆地图。"
  }
];

const customEvents = JSON.parse(localStorage.getItem("campusCustomEvents") || "[]");
events.push(...customEvents);

const categories = [
  { name: "科技", icon: "⌘", text: "代码与创新" },
  { name: "运动", icon: "↗", text: "活力与挑战" },
  { name: "艺术", icon: "◒", text: "审美与表达" },
  { name: "公益", icon: "♡", text: "温暖与行动" },
  { name: "音乐", icon: "♪", text: "节奏与共鸣" },
  { name: "阅读", icon: "▤", text: "思想与交流" }
];

const footprints = [
  { date: "2026-05-30", title: "校园定向寻宝挑战", category: "运动", location: "狮子山校区", badge: "探索达人" },
  { date: "2026-05-18", title: "用代码点亮创意：Web 开放日", category: "科技", location: "成龙校区 第一实验楼", badge: "代码新星" },
  { date: "2026-04-26", title: "世界读书日换书计划", category: "阅读", location: "成龙校区图书馆", badge: "悦读伙伴" },
  { date: "2026-04-12", title: "春日校园公益植树行动", category: "公益", location: "成龙校区", badge: "绿色行动" },
  { date: "2026-03-29", title: "校园春声民谣分享会", category: "音乐", location: "生态广场", badge: "现场听众" },
  { date: "2026-03-15", title: "新学期手机摄影漫步", category: "艺术", location: "狮子山校区", badge: "光影记录" }
];

const state = {
  route: "home",
  favorites: new Set(JSON.parse(localStorage.getItem("campusFavorites") || "[2,3]")),
  registrations: new Set(JSON.parse(localStorage.getItem("campusRegistrations") || "[1,2]")),
  activeEventId: null,
  profile: JSON.parse(localStorage.getItem("campusProfile") || "null")
};

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function saveState() {
  localStorage.setItem("campusFavorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("campusRegistrations", JSON.stringify([...state.registrations]));
  localStorage.setItem("campusProfile", JSON.stringify(state.profile));
}

function saveCustomEvents() {
  localStorage.setItem("campusCustomEvents", JSON.stringify(customEvents));
}

function renderProfile() {
  if (state.profile && state.profile.name && state.profile.studentId) {
    const initial = state.profile.name.trim().charAt(0) || "?";
    $("#profileAvatar").textContent = initial;
    $(".avatar-button").textContent = initial;
    $("#profileName").textContent = state.profile.name;
    $("#profileSummary").textContent = `${state.profile.college} · ${state.profile.className} · ${state.profile.grade}`;
  } else {

    $("#profileAvatar").textContent = "?";
    $(".avatar-button").textContent = "?";
    $("#profileName").textContent = "请先登录";
    $("#profileSummary").textContent = "未绑定校园身份";
  }
}

function renderFootprints() {
  $("#footprintList").innerHTML = footprints.map(item => `
    <article class="footprint-item">
      <div class="footprint-date">
        <strong>${formatDate(item.date)}</strong>
        <span>${item.category}活动</span>
      </div>
      <div class="footprint-content">
        <h3>${item.title}</h3>
        <p>${item.location} · 已完成</p>
      </div>
      <span class="footprint-badge">${item.badge}</span>
    </article>
  `).join("");
}

function openProfileForm() {
  const form = $("#profileForm");
  const p = state.profile || {};
  
  form.elements.name.value = p.name || "";
  form.elements.studentId.value = p.studentId || "";
  form.elements.college.value = p.college || "";
  form.elements.className.value = p.className || "";
  form.elements.grade.value = p.grade || "2024级";
  form.elements.phone.value = p.phone || "";
  
  $("#profileModal").hidden = false;
  document.body.style.overflow = "hidden";
  form.elements.name.focus();
}

function formatDate(dateString, includeYear = false) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
    ...(includeYear ? { year: "numeric" } : {})
  }).format(date);
}

function eventCard(event, manage = false) {
  const isFavorite = state.favorites.has(event.id);
  return `
    <article class="event-card">
      <div class="event-poster poster-${event.poster}">
        <span class="poster-date">${formatDate(event.date)}</span>
        <button class="favorite-button ${isFavorite ? "active" : ""}" type="button"
          data-favorite="${event.id}" aria-label="${isFavorite ? "取消收藏" : "收藏"} ${event.title}">
          ${isFavorite ? "♥" : "♡"}
        </button>
        <span class="poster-code">${event.code}</span>
      </div>
      <div class="event-card-body">
        <div class="event-card-meta">
          <span class="category-pill">${event.category}</span>
          <span>${event.joined}/${event.capacity} 人已报名</span>
        </div>
        <h3>${event.title}</h3>
        <p class="event-info">${event.time} · ${event.location}</p>
        <div class="event-card-footer">
          <span>${event.host}</span>
          ${manage ? `
            <div class="published-actions">
              <button class="delete-event-button" type="button" data-delete-event="${event.id}">删除</button>
              <button class="detail-button" type="button" data-detail="${event.id}">查看 →</button>
            </div>
          ` : `<button class="detail-button" type="button" data-detail="${event.id}">查看详情 →</button>`}
        </div>
      </div>
    </article>
  `;
}

function renderFeatured() {
  $("#featuredGrid").innerHTML = events.slice(0, 3).map(eventCard).join("");
}

function renderCategories() {
  $("#homeCategories").innerHTML = categories.map(category => `
    <button class="category-button" type="button" data-category-link="${category.name}">
      <span class="category-icon">${category.icon}</span>
      <strong>${category.name}</strong>
      <small>${category.text}</small>
    </button>
  `).join("");

  $("#categoryFilter").innerHTML = `
    <option value="all">全部分类</option>
    ${categories.map(category => `<option value="${category.name}">${category.name}</option>`).join("")}
  `;
}

function getFilteredEvents() {
  const keyword = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;
  const time = $("#timeFilter").value;
  const sort = $("#sortFilter").value;
  const today = new Date("2026-06-23T12:00:00");
  const weekEnd = new Date("2026-06-30T23:59:59");
  const monthEnd = new Date("2026-06-30T23:59:59");

  const filtered = events.filter(event => {
    const text = `${event.title}${event.category}${event.location}${event.host}`.toLowerCase();
    const eventDate = new Date(`${event.date}T12:00:00`);
    const matchesKeyword = !keyword || text.includes(keyword);
    const matchesCategory = category === "all" || event.category === category;
    let matchesTime = true;
    if (time === "today") matchesTime = event.date === "2026-06-23";
    if (time === "week") matchesTime = eventDate >= today && eventDate <= weekEnd;
    if (time === "month") matchesTime = eventDate >= today && eventDate <= monthEnd;
    return matchesKeyword && matchesCategory && matchesTime;
  });

  filtered.sort((a, b) => {
    if (sort === "soon") return a.date.localeCompare(b.date);
    if (sort === "popular") return b.popularity - a.popularity;
    return (b.popularity + b.joined / b.capacity * 10) - (a.popularity + a.joined / a.capacity * 10);
  });
  return filtered;
}

function renderAllEvents() {
  const filtered = getFilteredEvents();
  $("#allEventsGrid").innerHTML = filtered.map(eventCard).join("");
  $("#eventCount").textContent = filtered.length;
  $("#emptyState").hidden = filtered.length > 0;

  const chips = [];
  if ($("#searchInput").value.trim()) chips.push(`关键词：${$("#searchInput").value.trim()}`);
  if ($("#categoryFilter").value !== "all") chips.push(`分类：${$("#categoryFilter").value}`);
  if ($("#timeFilter").value !== "all") chips.push(`时间：${$("#timeFilter").selectedOptions[0].text}`);
  $("#activeFilterRow").innerHTML = chips.map(chip => `<span class="filter-chip">${chip}</span>`).join("");
}

function renderCalendar() {
  const days = [25, 26, 27, 28, 29, 30, 31, ...Array.from({ length: 30 }, (_, i) => i + 1), 1, 2, 3, 4, 5];
  const registeredDays = new Set(
    events.filter(event => state.registrations.has(event.id) && event.date.startsWith("2026-06"))
      .map(event => Number(event.date.slice(-2)))
  );

  $("#calendarGrid").innerHTML = days.map((day, index) => {
    const outside = index < 7 || index > 36;
    const classes = [
      outside ? "muted-day" : "",
      !outside && day === 23 ? "today" : "",
      !outside && registeredDays.has(day) ? "has-event" : ""
    ].filter(Boolean).join(" ");
    return `<span class="${classes}">${day}</span>`;
  }).join("");
}

function renderAgenda() {
  const registeredEvents = events
    .filter(event => state.registrations.has(event.id))
    .sort((a, b) => a.date.localeCompare(b.date));

  $("#registrationCount").textContent = `共 ${registeredEvents.length} 项安排`;
  $("#joinedMetric").textContent = registeredEvents.length;
  $("#agendaList").innerHTML = registeredEvents.length ? registeredEvents.map(event => {
    const date = new Date(`${event.date}T12:00:00`);
    return `
      <article class="agenda-item">
        <div class="agenda-date"><strong>${date.getDate()}</strong><span>${date.getMonth() + 1}月</span></div>
        <div class="agenda-info">
          <h3>${event.title}</h3>
          <p>${event.time} · ${event.location}</p>
        </div>
        <button class="cancel-button" type="button" data-cancel="${event.id}">取消报名</button>
      </article>
    `;
  }).join("") : `
    <div class="empty-collection">
      <strong>日程还是空的</strong>
      <p>去活动广场选择一场感兴趣的活动吧。</p>
      <button class="primary-button" type="button" data-route="events">浏览活动</button>
    </div>
  `;
  renderCalendar();
}

function renderFavorites() {
  const favoriteEvents = events.filter(event => state.favorites.has(event.id));
  $("#favoriteMetric").textContent = favoriteEvents.length;
  $("#favoriteGrid").innerHTML = favoriteEvents.length ? favoriteEvents.map(eventCard).join("") : `
    <div class="empty-collection">
      <strong>还没有收藏活动</strong>
      <p>点击活动卡片上的爱心即可收藏。</p>
    </div>
  `;
}

function renderPublished() {
  $("#publishedGrid").innerHTML = customEvents.length ? customEvents.map(event => eventCard(event, true)).join("") : `
    <div class="empty-collection">
      <strong>还没有发布活动</strong>
      <p>前往活动广场，发布你的第一场校园活动。</p>
      <button class="primary-button" type="button" data-route="events">去发布活动</button>
    </div>
  `;
}

function renderDynamicViews() {
  renderFeatured();
  renderAllEvents();
  renderAgenda();
  renderFavorites();
  renderPublished();
}

function navigate(route) {
  state.route = route;
  $$(".page").forEach(page => page.classList.toggle("active", page.dataset.page === route));
  $$(".main-nav a").forEach(link => link.classList.toggle("active", link.dataset.route === route));
  $("#mainNav").classList.remove("open");
  $("#menuButton").setAttribute("aria-expanded", "false");
  history.replaceState(null, "", `#${route}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showEvent(id) {
  const event = events.find(item => item.id === Number(id));
  if (!event) return;
  state.activeEventId = event.id;
  $("#modalPoster").className = `modal-poster poster-${event.poster}`;
  $("#modalPoster").textContent = event.code;
  $("#modalCategory").textContent = event.category;
  $("#modalStatus").textContent = state.registrations.has(event.id) ? "已报名" : "报名中";
  $("#modalTitle").textContent = event.title;
  $("#modalDescription").textContent = event.description;
  $("#modalTime").textContent = `${formatDate(event.date, true)} ${event.time}`;
  $("#modalLocation").textContent = event.location;
  $("#modalHost").textContent = event.host;
  $("#modalCapacity").textContent = `剩余 ${event.capacity - event.joined} 个名额`;
  $("#modalFavorite").textContent = state.favorites.has(event.id) ? "取消收藏" : "收藏活动";
  $("#modalRegister").textContent = state.registrations.has(event.id) ? "已报名，查看日程" : "立即报名";
  $("#eventModal").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.hidden = true;
  if ($("#eventModal").hidden && $("#formModal").hidden) document.body.style.overflow = "";
}

function toggleFavorite(id) {
  const numericId = Number(id);
  if (state.favorites.has(numericId)) {
    state.favorites.delete(numericId);
    toast("已取消收藏");
  } else {
    state.favorites.add(numericId);
    toast("已加入收藏");
  }
  saveState();
  renderDynamicViews();
  if (!$("#eventModal").hidden && state.activeEventId === numericId) showEvent(numericId);
}

// 【关键修改】打开活动报名表单：若发现未保存个人资料，提示并阻止报名，引导用户先补全身份信息
function openRegistrationForm() {
  const event = events.find(item => item.id === state.activeEventId);
  if (!event) return;
  if (state.registrations.has(event.id)) {
    closeModal($("#eventModal"));
    navigate("schedule");
    return;
  }
  
  if (!state.profile || !state.profile.name || !state.profile.studentId) {
    toast("请先去个人中心编辑资料并绑定学号班级！");
    closeModal($("#eventModal"));
    navigate("profile");
    return;
  }

  $("#registrationForm").elements.name.value = state.profile.name;
  $("#registrationForm").elements.studentId.value = state.profile.studentId;
  $("#registrationForm").elements.phone.value = state.profile.phone;
  $("#formEventName").textContent = event.title;
  $("#formModal").hidden = false;
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2200);
}

function resetFilters() {
  $("#searchInput").value = "";
  $("#categoryFilter").value = "all";
  $("#timeFilter").value = "all";
  $("#sortFilter").value = "recommended";
  renderAllEvents();
}

function bindEvents() {
  document.addEventListener("click", event => {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget) {
      event.preventDefault();
      navigate(routeTarget.dataset.route);
      return;
    }

    const detailTarget = event.target.closest("[data-detail]");
    if (detailTarget) {
      showEvent(detailTarget.dataset.detail);
      return;
    }

    const favoriteTarget = event.target.closest("[data-favorite]");
    if (favoriteTarget) {
      toggleFavorite(favoriteTarget.dataset.favorite);
      return;
    }

    const categoryTarget = event.target.closest("[data-category-link]");
    if (categoryTarget) {
      navigate("events");
      $("#categoryFilter").value = categoryTarget.dataset.categoryLink;
      renderAllEvents();
      return;
    }

    const cancelTarget = event.target.closest("[data-cancel]");
    if (cancelTarget) {
      state.registrations.delete(Number(cancelTarget.dataset.cancel));
      saveState();
      renderDynamicViews();
      toast("报名已取消");
      return;
    }

    const deleteTarget = event.target.closest("[data-delete-event]");
    if (deleteTarget) {
      const id = Number(deleteTarget.dataset.deleteEvent);
      const customIndex = customEvents.findIndex(item => item.id === id);
      const eventIndex = events.findIndex(item => item.id === id);
      if (customIndex !== -1) customEvents.splice(customIndex, 1);
      if (eventIndex !== -1) events.splice(eventIndex, 1);
      state.favorites.delete(id);
      state.registrations.delete(id);
      saveCustomEvents();
      saveState();
      renderDynamicViews();
      toast("已删除发布的活动");
    }
  });

  $("#menuButton").addEventListener("click", () => {
    const isOpen = $("#mainNav").classList.toggle("open");
    $("#menuButton").setAttribute("aria-expanded", String(isOpen));
  });

  $("#themeButton").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("campusTheme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  ["searchInput", "categoryFilter", "timeFilter", "sortFilter"].forEach(id => {
    $(`#${id}`).addEventListener(id === "searchInput" ? "input" : "change", renderAllEvents);
  });

  $("#clearFiltersButton").addEventListener("click", resetFilters);
  $("#publishButton").addEventListener("click", () => {
    const form = $("#publishForm");
    form.reset();
    form.elements.date.value = "2026-06-24";
    form.elements.startTime.value = "14:00";
    form.elements.endTime.value = "16:00";
    form.elements.capacity.value = "50";
    form.elements.host.value = state.profile ? state.profile.college : "未知组织";
    $("#publishModal").hidden = false;
    document.body.style.overflow = "hidden";
    form.elements.title.focus();
  });
  $("#randomEventButton").addEventListener("click", () => {
    const random = events[Math.floor(Math.random() * events.length)];
    showEvent(random.id);
  });

  $("#modalClose").addEventListener("click", () => closeModal($("#eventModal")));
  $("#formClose").addEventListener("click", () => closeModal($("#formModal")));
  $("#eventModal").addEventListener("click", event => {
    if (event.target === $("#eventModal")) closeModal($("#eventModal"));
  });
  $("#formModal").addEventListener("click", event => {
    if (event.target === $("#formModal")) closeModal($("#formModal"));
  });

  $("#modalFavorite").addEventListener("click", () => toggleFavorite(state.activeEventId));
  $("#modalRegister").addEventListener("click", openRegistrationForm);

  $("#registrationForm").addEventListener("submit", event => {
    event.preventDefault();
    state.registrations.add(state.activeEventId);
    saveState();
    closeModal($("#formModal"));
    closeModal($("#eventModal"));
    renderDynamicViews();
    toast("报名成功，已加入我的日程");
  });

  $("#editProfileButton").addEventListener("click", openProfileForm);
  $("#footprintButton").addEventListener("click", () => {
    $("#footprintModal").hidden = false;
    document.body.style.overflow = "hidden";
  });
  $("#footprintClose").addEventListener("click", () => closeModal($("#footprintModal")));
  $("#footprintModal").addEventListener("click", event => {
    if (event.target === $("#footprintModal")) closeModal($("#footprintModal"));
  });
  $("#publishClose").addEventListener("click", () => closeModal($("#publishModal")));
  $("#publishModal").addEventListener("click", event => {
    if (event.target === $("#publishModal")) closeModal($("#publishModal"));
  });
  $("#publishForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const startTime = data.get("startTime");
    const endTime = data.get("endTime");
    if (endTime <= startTime) {
      toast("结束时间必须晚于开始时间");
      return;
    }
    const category = data.get("category");
    const posterMap = { 科技: "tech", 运动: "sport", 艺术: "art", 公益: "volunteer", 音乐: "music", 阅读: "reading" };
    const codeMap = { 科技: "NEW", 运动: "GO", 艺术: "ART", 公益: "LOVE", 音乐: "LIVE", 阅读: "READ" };
    const newEvent = {
      id: Date.now(),
      title: data.get("title").trim(),
      category,
      poster: posterMap[category],
      code: codeMap[category],
      date: data.get("date"),
      time: `${startTime} - ${endTime}`,
      location: data.get("location").trim(),
      host: data.get("host").trim(),
      capacity: Number(data.get("capacity")),
      joined: 0,
      popularity: 72,
      description: data.get("description").trim(),
      createdByUser: true
    };
    customEvents.unshift(newEvent);
    events.unshift(newEvent);
    saveCustomEvents();
    closeModal($("#publishModal"));
    resetFilters();
    renderDynamicViews();
    toast("活动发布成功");
  });
  $("#profileFormClose").addEventListener("click", () => closeModal($("#profileModal")));
  $("#profileModal").addEventListener("click", event => {
    if (event.target === $("#profileModal")) closeModal($("#profileModal"));
  });
  
  // 【关键修改】处理个人资料提交：完整捕获新增的 studentId (学号) 和 className (班级) 并更新系统状态
  $("#profileForm").addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    state.profile = {
      name: formData.get("name").trim(),
      studentId: formData.get("studentId").trim(),
      college: formData.get("college").trim(),
      className: formData.get("className").trim(),
      grade: formData.get("grade"),
      phone: formData.get("phone").trim()
    };
    saveState();
    renderProfile();
    closeModal($("#profileModal"));
    toast("个人资料已保存，身份绑定成功！");
  });
  $("#editInterestsButton").addEventListener("click", () => toast("兴趣标签编辑功能演示"));

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal($("#eventModal"));
      closeModal($("#formModal"));
      closeModal($("#profileModal"));
      closeModal($("#footprintModal"));
      closeModal($("#publishModal"));
    }
  });
}

function init() {
  if (localStorage.getItem("campusTheme") === "dark") document.body.classList.add("dark");
  renderCategories();
  renderProfile();
  renderFootprints();
  renderDynamicViews();
  bindEvents();
  const initialRoute = location.hash.replace("#", "");
  navigate(["home", "events", "schedule", "profile"].includes(initialRoute) ? initialRoute : "home");
}

init();
