// =============================================
// US Address Generator - app.js
// STATE_DATA is loaded from states-data.js + states-data-2.js
// =============================================


// ===== Name Data =====
const FIRST_NAMES_MALE = [
  'James', 'Robert', 'John', 'Michael', 'David', 'William', 'Richard', 'Joseph', 'Thomas', 'Christopher',
  'Charles', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Donald', 'Steven', 'Andrew', 'Paul', 'Joshua',
  'Kenneth', 'Kevin', 'Brian', 'George', 'Timothy', 'Ronald', 'Edward', 'Jason', 'Jeffrey', 'Ryan',
  'Jacob', 'Gary', 'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
];
const FIRST_NAMES_FEMALE = [
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Barbara', 'Elizabeth', 'Susan', 'Jessica', 'Sarah', 'Karen',
  'Lisa', 'Nancy', 'Betty', 'Margaret', 'Sandra', 'Ashley', 'Dorothy', 'Kimberly', 'Emily', 'Donna',
  'Michelle', 'Carol', 'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia',
  'Kathleen', 'Amy', 'Angela', 'Shirley', 'Anna', 'Brenda', 'Pamela', 'Emma', 'Nicole', 'Helen',
];
const LAST_NAMES = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
  'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin',
  'Lee', 'Perez', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson',
  'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell', 'Carter', 'Roberts',
];

// ===== Street Data =====
const STREET_NAMES = [
  'Main St', 'Oak Ave', 'Maple Dr', 'Cedar Ln', 'Pine St', 'Elm St', 'Washington Blvd',
  'Park Ave', 'Lake Dr', 'Hill Rd', 'Forest Ave', 'River Rd', 'Sunset Dr', 'Highland Ave',
  'Valley View Rd', 'Meadow Ln', 'Spring St', 'Cherry Ln', 'Walnut St', 'Birch Dr',
  'Lincoln Ave', 'Jefferson St', 'Madison Ave', 'Franklin St', 'Adams Rd', 'Monroe Dr',
  'Jackson Blvd', 'Harrison Ave', 'Tyler St', 'Polk Dr', 'Taylor Ln', 'Fillmore Rd',
  'Pierce St', 'Grant Ave', 'Hayes Dr', 'Garfield St', 'Cleveland Ave', 'Arthur Rd',
  'Willow Way', 'Aspen Ct', 'Spruce St', 'Poplar Ln', 'Cypress Dr', 'Magnolia Blvd',
  'Dogwood Ct', 'Sycamore Ave', 'Juniper Rd', 'Chestnut St', 'Laurel Dr', 'Hazel Ln',
];

const APT_TYPES = ['Apt', 'Suite', 'Unit', '#'];

// ===== Job Data =====
const JOB_TITLES = [
  'Software Engineer', 'Marketing Manager', 'Data Analyst', 'Product Designer', 'Project Manager',
  'Sales Representative', 'Financial Analyst', 'HR Specialist', 'Operations Manager', 'Content Writer',
  'Business Analyst', 'UX Designer', 'Account Executive', 'DevOps Engineer', 'Quality Assurance Tester',
  'Customer Success Manager', 'Graphic Designer', 'Research Scientist', 'Legal Counsel', 'Supply Chain Manager',
  'Database Administrator', 'Network Engineer', 'Mechanical Engineer', 'Civil Engineer', 'Pharmacist',
  'Registered Nurse', 'Physical Therapist', 'Dental Hygienist', 'Social Worker', 'School Teacher',
];
const COMPANIES = [
  'Acme Corp', 'TechVista Solutions', 'GlobalSync Inc', 'NovaPeak Industries', 'BlueStar Enterprises',
  'Vertex Analytics', 'Pinnacle Group', 'Catalyst Partners', 'Horizon Digital', 'Summit Health',
  'Meridian Software', 'Atlas Logistics', 'Frontier Energy', 'Pacific Coast Media', 'Sterling Financial',
  'Quantum Labs', 'Ember Creative', 'Oasis Technology', 'Vanguard Systems', 'Prism Research',
];
const EMAIL_DOMAINS = [
  'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com',
  'protonmail.com', 'aol.com', 'mail.com', 'zoho.com', 'fastmail.com',
];

// ===== Utility Functions =====
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function padZero(n, len = 2) {
  return String(n).padStart(len, '0');
}

// ===== Generators =====
function generateName() {
  const isMale = Math.random() > 0.5;
  const firstName = isMale ? pick(FIRST_NAMES_MALE) : pick(FIRST_NAMES_FEMALE);
  const lastName = pick(LAST_NAMES);
  return { firstName, lastName, fullName: `${firstName} ${lastName}`, gender: isMale ? 'Male' : 'Female' };
}

function generateAddress(stateCode) {
  const state = STATE_DATA[stateCode];
  const city = pick(state.cities);

  // Get real street name for this city/state
  const stateStreets = REAL_STREETS[stateCode];
  let streetName;
  if (stateStreets) {
    const cityStreets = stateStreets[city.name] || stateStreets._default || STREET_NAMES;
    streetName = pick(cityStreets);
  } else {
    streetName = pick(STREET_NAMES);
  }

  // Use realistic house numbers (smaller ranges are more common)
  const streetNum = Math.random() > 0.7 ? rand(1000, 9999) : rand(100, 999);
  const hasApt = Math.random() > 0.7;
  const apt = hasApt ? `${pick(APT_TYPES)} ${rand(1, 999)}` : '';
  const zip = pick(city.zips);
  const zip4 = `${zip}-${padZero(rand(1, 9999), 4)}`;

  // Google standard format: "123 Main St, City, ST 12345"
  const streetLine = `${streetNum} ${streetName}`;
  const aptLine = hasApt ? apt : '';

  return {
    street: streetLine,
    apt: aptLine,
    city: city.name,
    state: state.name,
    stateAbbr: state.abbr,
    stateCN: state.nameCN,
    zip,
    zip4,
    // Google Maps standard single-line format
    fullAddress: aptLine
      ? `${streetLine}, ${aptLine}, ${city.name}, ${state.abbr} ${zip}`
      : `${streetLine}, ${city.name}, ${state.abbr} ${zip}`,
  };
}


function generatePhone(stateCode) {
  const areaCode = pick(STATE_DATA[stateCode].areaCodes);
  const mid = padZero(rand(200, 999), 3);
  const end = padZero(rand(1000, 9999), 4);
  return {
    formatted: `+1 (${areaCode}) ${mid}-${end}`,
    raw: `1${areaCode}${mid}${end}`,
  };
}

function generateSSN() {
  // Format: XXX-XX-XXXX (fake, not a real valid SSN)
  const a = padZero(rand(100, 899), 3);
  const b = padZero(rand(10, 99), 2);
  const c = padZero(rand(1000, 9999), 4);
  return `${a}-${b}-${c}`;
}

function generateDOB() {
  const year = rand(1960, 2003);
  const month = rand(1, 12);
  const day = rand(1, 28);
  const age = new Date().getFullYear() - year;
  return {
    formatted: `${padZero(month)}/${padZero(day)}/${year}`,
    iso: `${year}-${padZero(month)}-${padZero(day)}`,
    age,
  };
}

function generateEmail(firstName, lastName) {
  const separators = ['.', '_', ''];
  const sep = pick(separators);
  const suffix = rand(1, 999);
  const domain = pick(EMAIL_DOMAINS);
  const user = `${firstName.toLowerCase()}${sep}${lastName.toLowerCase()}${Math.random() > 0.5 ? suffix : ''}`;
  return `${user}@${domain}`;
}

function generateUsername(firstName, lastName) {
  const styles = [
    () => `${firstName.toLowerCase()}${lastName.toLowerCase()}${rand(1, 99)}`,
    () => `${firstName.toLowerCase()}_${lastName.toLowerCase().slice(0, 3)}`,
    () => `${firstName.toLowerCase()[0]}${lastName.toLowerCase()}${rand(100, 999)}`,
    () => `${firstName.toLowerCase()}${rand(1000, 9999)}`,
  ];
  return pick(styles)();
}

function generateCreditCard() {
  // Generate a valid-looking card number using Luhn algorithm
  const types = [
    { name: 'Visa', prefix: '4', len: 16 },
    { name: 'MasterCard', prefix: pick(['51', '52', '53', '54', '55']), len: 16 },
  ];
  const type = pick(types);

  // Generate digits
  let digits = type.prefix.split('').map(Number);
  while (digits.length < type.len - 1) {
    digits.push(rand(0, 9));
  }

  // Luhn check digit
  let sum = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    let d = digits[i];
    if ((digits.length - i) % 2 === 0) {
      d *= 2;
      if (d > 9) d -= 9;
    }
    sum += d;
  }
  const checkDigit = (10 - (sum % 10)) % 10;
  digits.push(checkDigit);

  const number = digits.join('');
  const formatted = number.match(/.{1,4}/g).join(' ');

  const expMonth = padZero(rand(1, 12));
  const expYear = rand(2026, 2032);
  const cvv = padZero(rand(100, 999), 3);

  return {
    type: type.name,
    number,
    formatted,
    expiry: `${expMonth}/${expYear}`,
    cvv,
  };
}

function generateJob() {
  const title = pick(JOB_TITLES);
  const company = pick(COMPANIES);
  const salary = rand(35, 180) * 1000;
  const salaryFormatted = `$${salary.toLocaleString()}`;
  return { title, company, salary: salaryFormatted };
}

// ===== Full Profile Generator =====
function generateFullProfile(stateCode, includeIdentity, includeCreditCard) {
  const name = generateName();
  const address = generateAddress(stateCode);
  const phone = generatePhone(stateCode);

  const profile = {
    // Basic info
    fullName: name.fullName,
    firstName: name.firstName,
    lastName: name.lastName,
    gender: name.gender,

    // Address info
    street: address.street,
    apt: address.apt,
    city: address.city,
    state: address.state,
    stateAbbr: address.stateAbbr,
    stateCN: address.stateCN,
    zip: address.zip,
    zip4: address.zip4,
    fullAddress: address.fullAddress,

    // Contact
    phone: phone.formatted,
  };

  if (includeIdentity) {
    const dob = generateDOB();
    const email = generateEmail(name.firstName, name.lastName);
    const username = generateUsername(name.firstName, name.lastName);
    const job = generateJob();

    profile.ssn = generateSSN();
    profile.dob = dob.formatted;
    profile.age = dob.age;
    profile.email = email;
    profile.username = username;
    profile.jobTitle = job.title;
    profile.company = job.company;
    profile.salary = job.salary;
  }

  if (includeCreditCard) {
    const card = generateCreditCard();
    profile.cardType = card.type;
    profile.cardNumber = card.formatted;
    profile.cardExpiry = card.expiry;
    profile.cardCVV = card.cvv;
  }

  return profile;
}

// ===== SVG Icons =====
const ICONS = {
  copy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  creditCard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
};

// ===== DOM Elements =====
const $ = (sel) => document.querySelector(sel);
const stateSelect = $('#stateSelect');
const toggleIdentity = $('#toggleIdentity');
const toggleCreditCard = $('#toggleCreditCard');
const btnGenerate = $('#btnGenerate');
const btnShare = $('#btnShare');
const btnSave = $('#btnSave');
const btnClearAll = $('#btnClearAll');
const btnExport = $('#btnExport');
const resultCard = $('#resultCard');
const resultGrid = $('#resultGrid');
const resultEmpty = $('#resultEmpty');
const savedList = $('#savedList');
const savedEmpty = $('#savedEmpty');
const toastEl = $('#toast');

// ===== State =====
let currentProfile = null;

// ===== Render Result =====
function renderResult(profile) {
  resultEmpty.style.display = 'none';
  resultGrid.style.display = 'grid';
  resultGrid.innerHTML = '';

  // Sections
  const sections = [];

  // 1. Basic Info
  sections.push({
    title: '基本信息',
    icon: ICONS.user,
    items: [
      { label: '姓名', value: profile.fullName },
      { label: '名', value: profile.firstName },
      { label: '姓', value: profile.lastName },
      { label: '性别', value: profile.gender },
    ],
  });

  // 2. Address
  const addressItems = [
    { label: '街道地址', value: profile.street },
  ];
  if (profile.apt) addressItems.push({ label: '公寓/单元', value: profile.apt });
  addressItems.push(
    { label: '城市', value: profile.city },
    { label: '州', value: `${profile.stateCN} (${profile.stateAbbr})` },
    { label: '邮编', value: profile.zip },
    { label: '邮编+4', value: profile.zip4 },
    { label: '完整地址', value: profile.fullAddress },
  );
  sections.push({ title: '地址信息', icon: ICONS.map, items: addressItems });

  // 3. Contact
  sections.push({
    title: '联系方式',
    icon: ICONS.phone,
    items: [
      { label: '电话号码', value: profile.phone },
    ],
  });

  // 4. Identity (optional)
  if (profile.ssn) {
    sections.push({
      title: '身份信息',
      icon: ICONS.shield,
      items: [
        { label: 'SSN', value: profile.ssn },
        { label: '出生日期', value: profile.dob },
        { label: '年龄', value: `${profile.age}` },
        { label: '邮箱', value: profile.email },
        { label: '用户名', value: profile.username },
      ],
    });
  }

  // 5. Job (optional, part of identity)
  if (profile.jobTitle) {
    sections.push({
      title: '工作信息',
      icon: ICONS.briefcase,
      items: [
        { label: '职位', value: profile.jobTitle },
        { label: '公司', value: profile.company },
        { label: '年薪', value: profile.salary },
      ],
    });
  }

  // 6. Credit Card (optional)
  if (profile.cardType) {
    sections.push({
      title: '信用卡信息',
      icon: ICONS.creditCard,
      items: [
        { label: '卡类型', value: profile.cardType },
        { label: '卡号', value: profile.cardNumber },
        { label: '有效期', value: profile.cardExpiry },
        { label: 'CVV', value: profile.cardCVV },
      ],
    });
  }

  // Build HTML
  sections.forEach((section, sIdx) => {
    // Section header
    const header = document.createElement('div');
    header.className = 'result-section-title';
    header.innerHTML = `${section.icon} ${section.title}`;
    resultGrid.appendChild(header);

    // Items
    section.items.forEach((item, iIdx) => {
      const div = document.createElement('div');
      div.className = 'result-item';
      div.style.animationDelay = `${(sIdx * 3 + iIdx) * 0.03}s`;
      div.innerHTML = `
        <span class="result-label">${item.label}</span>
        <span class="result-value">${item.value}</span>
        <button class="btn-copy" title="复制" onclick="copyField(this, '${escapeAttr(item.value)}')">
          ${ICONS.copy}
        </button>
      `;
      resultGrid.appendChild(div);
    });
  });

  // Scroll to result
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function escapeAttr(s) {
  return s.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// ===== Copy =====
function copyField(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = ICONS.check;
    btn.classList.add('copied');
    setTimeout(() => {
      btn.innerHTML = ICONS.copy;
      btn.classList.remove('copied');
    }, 1500);
  });
}
// Make it global for onclick
window.copyField = copyField;

// ===== Toast =====
function showToast(msg, type = 'success') {
  toastEl.textContent = msg;
  toastEl.className = `toast ${type} show`;
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2500);
}

// ===== Saved Addresses =====
function getSavedAddresses() {
  try {
    return JSON.parse(localStorage.getItem('savedAddresses') || '[]');
  } catch {
    return [];
  }
}

function saveToDisk(list) {
  localStorage.setItem('savedAddresses', JSON.stringify(list));
}

function renderSavedList() {
  const list = getSavedAddresses();
  if (list.length === 0) {
    savedEmpty.style.display = 'block';
    savedList.innerHTML = '';
    return;
  }
  savedEmpty.style.display = 'none';
  savedList.innerHTML = list.map((item, idx) => `
    <div class="saved-item">
      <div class="saved-item-info">
        <span class="saved-item-name">${item.fullName}</span>
        <span class="saved-item-addr">${item.fullAddress}</span>
      </div>
      <div class="saved-item-actions">
        <button class="btn-sm" onclick="loadSaved(${idx})">查看</button>
        <button class="btn-sm delete-single" onclick="deleteSaved(${idx})">删除</button>
      </div>
    </div>
  `).join('');
}

function loadSaved(idx) {
  const list = getSavedAddresses();
  if (list[idx]) {
    currentProfile = list[idx];
    renderResult(currentProfile);
    showToast('已加载保存的地址', 'info');
  }
}
window.loadSaved = loadSaved;

function deleteSaved(idx) {
  const list = getSavedAddresses();
  list.splice(idx, 1);
  saveToDisk(list);
  renderSavedList();
  showToast('已删除', 'success');
}
window.deleteSaved = deleteSaved;

// ===== Event Listeners =====

// Generate
btnGenerate.addEventListener('click', () => {
  const stateCode = stateSelect.value;
  const includeIdentity = toggleIdentity.checked;
  const includeCreditCard = toggleCreditCard.checked;

  currentProfile = generateFullProfile(stateCode, includeIdentity, includeCreditCard);
  renderResult(currentProfile);
  showToast('✨ 地址已生成', 'success');
});

// Share (copy all to clipboard)
btnShare.addEventListener('click', () => {
  if (!currentProfile) {
    showToast('请先生成一个地址', 'info');
    return;
  }
  let text = `姓名: ${currentProfile.fullName}\n`;
  text += `地址: ${currentProfile.fullAddress}\n`;
  text += `电话: ${currentProfile.phone}\n`;
  text += `邮编: ${currentProfile.zip}\n`;
  if (currentProfile.email) text += `邮箱: ${currentProfile.email}\n`;
  if (currentProfile.ssn) text += `SSN: ${currentProfile.ssn}\n`;
  if (currentProfile.cardNumber) text += `信用卡: ${currentProfile.cardNumber}\n`;

  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 已复制到剪贴板', 'success');
  });
});

// Save
btnSave.addEventListener('click', () => {
  if (!currentProfile) {
    showToast('请先生成一个地址', 'info');
    return;
  }
  const list = getSavedAddresses();
  list.unshift({ ...currentProfile, savedAt: new Date().toISOString() });
  saveToDisk(list);
  renderSavedList();
  showToast('💾 地址已保存', 'success');
});

// Clear All
btnClearAll.addEventListener('click', () => {
  const list = getSavedAddresses();
  if (list.length === 0) {
    showToast('暂无保存的地址', 'info');
    return;
  }
  localStorage.removeItem('savedAddresses');
  renderSavedList();
  showToast('🗑️ 已清空所有保存的地址', 'success');
});

// Export
btnExport.addEventListener('click', () => {
  const list = getSavedAddresses();
  if (list.length === 0) {
    showToast('暂无可导出的地址', 'info');
    return;
  }
  const blob = new Blob([JSON.stringify(list, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `addresses_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('📁 导出成功', 'success');
});

// Footer state selector
function selectState(code) {
  stateSelect.value = code;
  document.getElementById('hero').scrollIntoView({ behavior: 'smooth' });
}
window.selectState = selectState;

// ===== Init =====
renderSavedList();
