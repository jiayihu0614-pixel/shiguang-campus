"use strict";

/* ==================== 模块一：基础数据与数据版本 ==================== */
/* 数据版本变化时清理旧格式的用户数据，避免新旧字段不兼容。 */
const DATA_VERSION = "student-login-20260624-owner-delete";
if (localStorage.getItem("campusDataVersion") !== DATA_VERSION) {
  localStorage.removeItem("campusProfile");
  localStorage.removeItem("campusFavorites");
  localStorage.removeItem("campusRegistrations");
  localStorage.setItem("campusDataVersion", DATA_VERSION);
}

/* 9 场内置活动：覆盖科技、运动、艺术、公益、音乐和阅读 6 大分类。 */
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

/* 读取用户发布的活动，并与内置活动合并后统一渲染。 */
const customEvents = JSON.parse(localStorage.getItem("campusCustomEvents") || "[]");
events.push(...customEvents);

/* 首页分类导航和发布表单共用的分类配置。 */
const categories = [
  { name: "科技", icon: "⌘", text: "代码与创新" },
  { name: "运动", icon: "↗", text: "活力与挑战" },
  { name: "艺术", icon: "◒", text: "审美与表达" },
  { name: "公益", icon: "♡", text: "温暖与行动" },
  { name: "音乐", icon: "♪", text: "节奏与共鸣" },
  { name: "阅读", icon: "▤", text: "思想与交流" }
];

/* ==================== 模块二：应用状态与本地持久化 ==================== */
/* state 集中管理当前页面、收藏、报名、活动详情和学生资料。 */
const state = {
  route: "home",
  favorites: new Set(JSON.parse(localStorage.getItem("campusFavorites") || "[]")),
  registrations: new Set(JSON.parse(localStorage.getItem("campusRegistrations") || "[]")),
  activeEventId: null,
  profile: JSON.parse(localStorage.getItem("campusProfile") || "null")
};

/* 原生 DOM 查询辅助函数，减少重复的 querySelector 代码。 */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/* 将收藏、报名和个人资料保存到当前浏览器。 */
function saveState() {
  localStorage.setItem("campusFavorites", JSON.stringify([...state.favorites]));
  localStorage.setItem("campusRegistrations", JSON.stringify([...state.registrations]));
  localStorage.setItem("campusProfile", JSON.stringify(state.profile));
}

/* 单独保存用户自主发布的活动。 */
function saveCustomEvents() {
  localStorage.setItem("campusCustomEvents", JSON.stringify(customEvents));
}

/* ==================== 模块三：校园身份与操作权限 ==================== */
/* 检查必填资料是否完整；联系电话不参与登录完整性判断。 */
function hasCompleteProfile() {
  return Boolean(
    state.profile &&
    state.profile.name &&
    state.profile.studentId &&
    state.profile.college &&
    state.profile.grade &&
    state.profile.className
  );
}

/* 收藏、报名和发布前统一调用；未登录时自动打开身份录入弹窗。 */
function requireLogin(message = "请先登录并完善个人资料") {
  if (hasCompleteProfile()) return true;
  toast(message);
  openProfileForm(true);
  return false;
}

/* 通过发布者学号判断活动归属，实现“只能删除自己发布的活动”。 */
function isOwnEvent(event) {
  return Boolean(
    event &&
    event.createdByUser &&
    state.profile &&
    event.ownerStudentId === state.profile.studentId
  );
}

/* ==================== 模块四：个人中心与参与足迹 ==================== */
/* 根据登录状态更新头像、姓名和校园身份摘要。 */
function renderProfile() {
  if (hasCompleteProfile()) {
    const initial = state.profile.name.trim().charAt(0) || "?";
    $("#profileAvatar").textContent = initial;
    $(".avatar-button").textContent = initial;
    $("#profileName").textContent = state.profile.name;
    $("#profileSummary").textContent = `${state.profile.studentId} · ${state.profile.college} · ${state.profile.grade} · ${state.profile.className}`;
  } else {

    $("#profileAvatar").textContent = "?";
    $(".avatar-button").textContent = "?";
    $("#profileName").textContent = "请先登录";
    $("#profileSummary").textContent = "未绑定校园身份";
  }
}

/* 根据报名集合生成参与足迹，并同步更新个人中心统计。 */
function renderFootprints() {
  const footprintEvents = events
    .filter(event => state.registrations.has(event.id))
    .sort((a, b) => new Date(`${a.date}T12:00:00`) - new Date(`${b.date}T12:00:00`));

  $("#footprintMetric").textContent = footprintEvents.length;
  $("#footprintTotal").textContent = footprintEvents.length;
  $("#footprintButton").setAttribute("aria-label", `查看${footprintEvents.length}条参与足迹`);

  $("#footprintList").innerHTML = footprintEvents.length ? footprintEvents.map(item => `
    <article class="footprint-item">
      <div class="footprint-date">
        <strong>${formatDate(item.date)}</strong>
        <span>${item.category}活动</span>
      </div>
      <div class="footprint-content">
        <h3>${item.title}</h3>
        <p>${item.location} · 已报名</p>
      </div>
      <span class="footprint-badge">已加入日程</span>
    </article>
  `).join("") : `
    <div class="empty-collection">
      <strong>还没有参与足迹</strong>
      <p>报名活动后，这里会自动记录你的校园参与经历。</p>
    </div>
  `;
}

/* 首次进入显示“学生登录”，后续打开时显示“编辑个人资料”。 */
function openProfileForm(isLogin = false) {
  const form = $("#profileForm");
  const p = state.profile || {};
  const loginMode = isLogin || !hasCompleteProfile();

  $("#profileFormTitle").textContent = loginMode ? "学生登录" : "编辑个人资料";
  $("#profileFormIntro").textContent = loginMode
    ? "请先填写校园身份信息，登录后才能报名和创建活动。"
    : "资料仅保存在当前浏览器中。";
  
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

/* ==================== 模块五：活动卡片与首页动态渲染 ==================== */
/* 将 YYYY-MM-DD 格式转换为适合页面展示的中文日期。 */
function formatDate(dateString, includeYear = false) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("zh-CN", {
    month: "long",
    day: "numeric",
    weekday: "short",
    ...(includeYear ? { year: "numeric" } : {})
  }).format(date);
}

/* 生成活动卡片；只有本人发布的活动才会生成删除按钮。 */
function eventCard(event, manage = false) {
  const isFavorite = state.favorites.has(event.id);
  const canDelete = manage && isOwnEvent(event);
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
          ${canDelete ? `
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

/* 首页展示活动数组中的前 3 场精选活动。 */
function renderFeatured() {
  $("#featuredGrid").innerHTML = events.slice(0, 3).map(eventCard).join("");
}

/* 根据 categories 配置生成首页分类和筛选下拉选项。 */
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

/* ==================== 模块六：活动搜索、筛选与排序 ==================== */
/* 综合关键词、分类、时间和排序条件，返回符合要求的活动数组。 */
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

/* 把筛选结果渲染到活动广场，并处理筛选标签和空状态。 */
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

/* ==================== 模块七：日程、收藏与已发布活动 ==================== */
/* 生成当月日历，并标记已经报名活动的日期。 */
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

/* 将报名集合转换为按日期排序的个人活动日程。 */
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

/* 在个人中心展示当前浏览器保存的收藏活动。 */
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

/* 根据 ownerStudentId 筛选并展示当前学生本人发布的活动。 */
function renderPublished() {
  const ownEvents = hasCompleteProfile() ? customEvents.filter(isOwnEvent) : [];
  $("#publishedGrid").innerHTML = ownEvents.length ? ownEvents.map(event => eventCard(event, true)).join("") : `
    <div class="empty-collection">
      <strong>还没有发布活动</strong>
      <p>前往活动广场，发布你的第一场校园活动。</p>
      <button class="primary-button" type="button" data-route="events">去发布活动</button>
    </div>
  `;
}

/* 数据变化后统一刷新所有动态区域，保证多个页面状态一致。 */
function renderDynamicViews() {
  renderFeatured();
  renderAllEvents();
  renderAgenda();
  renderFavorites();
  renderFootprints();
  renderPublished();
}

/* ==================== 模块八：单页路由与弹窗控制 ==================== */
/* 通过 data-page 和 URL 哈希切换页面，无需刷新整个网页。 */
function navigate(route) {
  state.route = route;
  $$(".page").forEach(page => page.classList.toggle("active", page.dataset.page === route));
  $$(".main-nav a").forEach(link => link.classList.toggle("active", link.dataset.route === route));
  $("#mainNav").classList.remove("open");
  $("#menuButton").setAttribute("aria-expanded", "false");
  history.replaceState(null, "", `#${route}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* 根据活动 id 填充并打开活动详情弹窗。 */
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

/* 关闭指定弹窗；全部弹窗关闭后恢复页面滚动。 */
function closeModal(modal) {
  modal.hidden = true;
  if (
    $("#eventModal").hidden &&
    $("#formModal").hidden &&
    $("#profileModal").hidden &&
    $("#footprintModal").hidden &&
    $("#publishModal").hidden
  ) {
    document.body.style.overflow = "";
  }
}

/* ==================== 模块九：收藏、报名与操作反馈 ==================== */
/* 使用 Set 添加或删除活动 id，避免同一活动被重复收藏。 */
function toggleFavorite(id) {
  if (!requireLogin("请先登录后再收藏活动")) return;
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

/* 登录后自动带入学生资料；已报名时直接跳转到“我的日程”。 */
function openRegistrationForm() {
  const event = events.find(item => item.id === state.activeEventId);
  if (!event) return;
  if (state.registrations.has(event.id)) {
    closeModal($("#eventModal"));
    navigate("schedule");
    return;
  }
  
  if (!hasCompleteProfile()) {
    closeModal($("#eventModal"));
    requireLogin("请先登录后再报名活动");
    return;
  }

  $("#registrationForm").elements.name.value = state.profile.name;
  $("#registrationForm").elements.studentId.value = state.profile.studentId;
  $("#registrationForm").elements.college.value = state.profile.college;
  $("#registrationForm").elements.grade.value = state.profile.grade;
  $("#registrationForm").elements.className.value = state.profile.className;
  $("#registrationForm").elements.phone.value = state.profile.phone || "";
  $("#formEventName").textContent = event.title;
  $("#formModal").hidden = false;
}

/* 显示短暂的操作结果提示，例如“报名成功”或“请先登录”。 */
function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => element.classList.remove("show"), 2200);
}

/* 一键恢复活动广场的默认筛选条件。 */
function resetFilters() {
  $("#searchInput").value = "";
  $("#categoryFilter").value = "all";
  $("#timeFilter").value = "all";
  $("#sortFilter").value = "recommended";
  renderAllEvents();
}

/* ==================== 模块十：用户交互、发布活动与删除权限 ==================== */
/* 统一绑定导航、筛选、收藏、报名、发布、删除和键盘操作。 */
function bindEvents() {
  /* 事件委托：处理动态生成的导航、详情、收藏、分类、取消报名和删除按钮。 */
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
      const targetEvent = customEvents.find(item => item.id === id);
      if (!isOwnEvent(targetEvent)) {
        toast("只能删除自己发布的活动");
        return;
      }
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

  /* 顶部菜单与深色模式切换。 */
  $("#menuButton").addEventListener("click", () => {
    const isOpen = $("#mainNav").classList.toggle("open");
    $("#menuButton").setAttribute("aria-expanded", String(isOpen));
  });

  $("#themeButton").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("campusTheme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  /* 输入或选择条件后实时重新筛选活动。 */
  ["searchInput", "categoryFilter", "timeFilter", "sortFilter"].forEach(id => {
    $(`#${id}`).addEventListener(id === "searchInput" ? "input" : "change", renderAllEvents);
  });

  $("#clearFiltersButton").addEventListener("click", resetFilters);
  /* 创建活动前检查登录状态，并为发布表单填写默认值。 */
  $("#publishButton").addEventListener("click", () => {
    if (!requireLogin("请先登录后再创建活动")) return;
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

  /* 提交报名：保存活动 id，刷新日程和个人中心。 */
  $("#registrationForm").addEventListener("submit", event => {
    event.preventDefault();
    state.profile.phone = event.currentTarget.elements.phone.value.trim();
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
  /* 提交发布：校验时间，创建活动对象并写入 localStorage。 */
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
      createdByUser: true,
      ownerStudentId: state.profile.studentId,
      ownerName: state.profile.name
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
  
  /* 保存姓名、学号、学院、年级、班级和选填联系电话。 */
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

  /* 可访问性：按 Escape 键可以关闭当前打开的弹窗。 */
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

/* ==================== 模块十一：应用初始化入口 ==================== */
/* 恢复主题和本地数据、渲染页面、绑定事件，并处理首次登录。 */
function init() {
  if (localStorage.getItem("campusTheme") === "dark") document.body.classList.add("dark");
  renderCategories();
  renderProfile();
  renderFootprints();
  renderDynamicViews();
  bindEvents();
  const initialRoute = location.hash.replace("#", "");
  navigate(["home", "events", "schedule", "profile"].includes(initialRoute) ? initialRoute : "home");
  if (!hasCompleteProfile()) openProfileForm(true);
}

init();
