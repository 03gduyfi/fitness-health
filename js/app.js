const App = {
  current: 'login',
  foodFilter: '全部',
  bodyPart: 'chest',
  titles: {
    login: '登录 - FitLife 健身饮食',
    home: '首页 - FitLife',
    foods: '食物卡路里库',
    meals: '健康饮食方案',
    exercises: '部位训练排行',
    plans: '训练计划',
    calculator: '健康计算器',
    profile: '个人中心',
  },

  init() {
    const h = location.hash.slice(1);
    if (h && this.titles[h]) this.current = h;
    this.renderAll();
    this.bindEvents();
    this.go(this.current, false);
  },

  bindEvents() {
    document.getElementById('login-form')?.addEventListener('submit', e => {
      e.preventDefault();
      this.go('home');
    });
    document.addEventListener('click', e => {
      const nav = e.target.closest('[data-nav]');
      if (nav) { e.preventDefault(); this.go(nav.dataset.nav); return; }
      const part = e.target.closest('[data-part]');
      if (part) { e.preventDefault(); this.bodyPart = part.dataset.part; this.renderExercises(); }
      const cat = e.target.closest('[data-food-cat]');
      if (cat) {
        e.preventDefault();
        this.foodFilter = cat.dataset.foodCat;
        document.querySelectorAll('[data-food-cat]').forEach(c => c.classList.toggle('active', c === cat));
        this.renderFoods();
      }
    });
    window.addEventListener('hashchange', () => {
      const p = location.hash.slice(1);
      if (p && this.titles[p]) this.go(p, false);
    });
    document.getElementById('calc-form')?.addEventListener('submit', e => {
      e.preventDefault();
      this.calcHealth();
    });
  },

  go(page, push = true) {
    if (!this.titles[page]) return;
    this.current = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page)?.classList.add('active');
    document.title = this.titles[page];
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.nav === page);
    });
    if (push) location.hash = page;
    window.scrollTo(0, 0);
  },

  renderAll() {
    this.renderHome();
    this.renderFoods();
    this.renderMeals();
    this.renderExercises();
    this.renderPlans();
  },

  renderHome() {
    const el = document.getElementById('home-stats');
    if (!el) return;
    el.innerHTML = `
      <div class="stat-card"><span class="num">${FOODS.length}</span><span class="lbl">食物数据</span></div>
      <div class="stat-card"><span class="num">7</span><span class="lbl">训练部位</span></div>
      <div class="stat-card"><span class="num">${MEAL_PLANS.length}</span><span class="lbl">饮食方案</span></div>
      <div class="stat-card"><span class="num">${WORKOUT_PLANS.length}</span><span class="lbl">训练计划</span></div>`;
    const quick = document.getElementById('home-quick');
    if (quick) {
      quick.innerHTML = BODY_PARTS.slice(0, 4).map(p => `
        <div class="quick-card" data-nav="exercises" data-part-click="${p.id}">
          <img src="${p.img}" alt=""><span>${p.name}</span>
        </div>`).join('');
      quick.querySelectorAll('[data-part-click]').forEach(card => {
        card.addEventListener('click', () => {
          this.bodyPart = card.dataset.partClick;
          this.renderExercises();
          this.go('exercises');
        });
      });
    }
  },

  renderFoods() {
    const grid = document.getElementById('food-grid');
    if (!grid) return;
    const list = this.foodFilter === '全部' ? FOODS : FOODS.filter(f => f.cat === this.foodFilter);
    grid.innerHTML = list.map(f => `
      <article class="food-card">
        <img src="${f.img}" alt="${f.name}" loading="lazy">
        <div class="food-body">
          <h3>${f.name}</h3>
          <span class="cal-badge">${f.cal} 千卡 / ${f.unit}</span>
          <div class="macros">
            <span>蛋白 ${f.protein}g</span>
            <span>碳水 ${f.carb}g</span>
            <span>脂肪 ${f.fat}g</span>
          </div>
          <span class="cat-tag">${f.cat}</span>
        </div>
      </article>`).join('');
  },

  renderMeals() {
    const el = document.getElementById('meal-grid');
    if (!el) return;
    el.innerHTML = MEAL_PLANS.map(m => `
      <article class="meal-card">
        <img src="${m.img}" alt="">
        <div class="meal-body">
          <h3>${m.title}</h3>
          <p class="meal-cal">约 ${m.cal} 千卡</p>
          <ul>${m.items.map(i => `<li>${i}</li>`).join('')}</ul>
          <div class="tags">${m.tags.map(t => `<span>${t}</span>`).join('')}</div>
        </div>
      </article>`).join('');
  },

  renderExercises() {
    const tabs = document.getElementById('body-tabs');
    const list = document.getElementById('exercise-list');
    if (tabs) {
      tabs.innerHTML = BODY_PARTS.map(p => `
        <button type="button" class="body-tab ${p.id === this.bodyPart ? 'active' : ''}" data-part="${p.id}">
          ${p.icon} ${p.name}
        </button>`).join('');
    }
    if (list) {
      const ex = EXERCISES[this.bodyPart] || [];
      const part = BODY_PARTS.find(p => p.id === this.bodyPart);
      list.innerHTML = `
        <div class="part-hero"><img src="${part?.img}" alt=""><h2>${part?.name} · 高效动作排行榜</h2></div>
        ${ex.map(e => `
          <div class="exercise-row rank-${e.rank}">
            <div class="rank-num">#${e.rank}</div>
            <img src="${e.img}" alt="" class="ex-thumb">
            <div class="ex-info">
              <h4>${e.name}</h4>
              <p class="ex-sets">${e.sets}</p>
              <p class="ex-tip">${e.tip}</p>
            </div>
            <div class="effect-bar">
              <span>效果</span>
              <div class="bar"><div class="fill" style="width:${e.effect * 10}%"></div></div>
              <strong>${e.effect}/10</strong>
            </div>
          </div>`).join('')}`;
    }
  },

  renderPlans() {
    const el = document.getElementById('plan-grid');
    if (!el) return;
    el.innerHTML = WORKOUT_PLANS.map(p => `
      <article class="plan-card">
        <img src="${p.img}" alt="">
        <div class="plan-body">
          <span class="level">${p.level}</span>
          <h3>${p.name}</h3>
          <p>${p.days}</p>
          <p class="desc">${p.desc}</p>
        </div>
      </article>`).join('');
  },

  calcHealth() {
    const h = parseFloat(document.getElementById('calc-height')?.value) / 100;
    const w = parseFloat(document.getElementById('calc-weight')?.value);
    const age = parseFloat(document.getElementById('calc-age')?.value);
    const sex = document.getElementById('calc-sex')?.value;
    const act = parseFloat(document.getElementById('calc-activity')?.value);
    if (!h || !w) return;
    const bmi = (w / (h * h)).toFixed(1);
    let bmr = sex === 'm' ? 10 * w + 6.25 * (h * 100) - 5 * age + 5 : 10 * w + 6.25 * (h * 100) - 5 * age - 161;
    const tdee = Math.round(bmr * act);
    let status = '正常';
    if (bmi < 18.5) status = '偏瘦';
    else if (bmi >= 24 && bmi < 28) status = '超重';
    else if (bmi >= 28) status = '肥胖';
    const out = document.getElementById('calc-result');
    if (out) {
      out.innerHTML = `
        <h3>计算结果</h3>
        <p><strong>BMI：</strong>${bmi}（${status}）</p>
        <p><strong>基础代谢 BMR：</strong>${Math.round(bmr)} 千卡/天</p>
        <p><strong>每日总消耗 TDEE：</strong>${tdee} 千卡/天</p>
        <p class="hint">减脂建议摄入 ${tdee - 400} 千卡；增肌建议 ${tdee + 300} 千卡</p>`;
      out.classList.add('show');
    }
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
