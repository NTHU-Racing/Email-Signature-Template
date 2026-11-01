/**
 * NTHU Racing - Email Signature Generator Engine
 * Handles real-time preview, clipboard copy (rich text & plain text),
 * and localStorage caching.
 */

// Global state
const defaultState = {
  chineseName: '陳冠宇',
  englishName: 'Alex Chen',
  selectedGroup: 'Aerodynamic Group',
  selectedTitle: 'Member',
  groupTitle: 'Aerodynamic Group | Member',
  phone: '+(886) 912-345-678',
  email: 'contact@nthuracing.tw',
  location: '新竹市光復路二段101號 科儀中心 S11',
  nameColor: '#0474cf',
  logoFileName: 'nthuracing_logo_2025_blue_0474cf_0f3b7d.png'
};

let state = { ...defaultState };

// 車隊指定組別（含車架組與底盤組）
const groups = [
  { en: 'Aerodynamic Group', zh: '流力組' },
  { en: 'Chassis Group', zh: '車架組' },
  { en: 'Suspension Group', zh: '底盤組' },
  { en: 'Electrical Group', zh: '電系組' },
  { en: 'Vehicle Dynamics Group', zh: '車輛動態組' },
  { en: 'Driverless Group', zh: '無人車組' },
  { en: 'Powertrain Group', zh: '動力組' },
  { en: 'Administration', zh: '行政組' }
];

// 職稱 (隊長 副隊長 組長 組員)
const titles = [
  { en: 'Team Captain', zh: '隊長' },
  { en: 'Vice Captain', zh: '副隊長' },
  { en: 'Leader', zh: '組長' },
  { en: 'Member', zh: '組員' }
];

/**
 * Determine the public base URL for images in copied email signatures.
 * Images MUST have absolute URLs so mail clients can display them publicly.
 */
function getPublicBaseUrl() {
  if (window.location.protocol.startsWith('http')) {
    const path = window.location.pathname.replace(/\/index\.html$/i, '').replace(/\/+$/, '');
    return window.location.origin + path;
  }
  return 'https://nthu-racing.github.io/Email-Signature-Template';
}

/**
 * Clean up English name formatting to ensure parentheses: e.g. "Alex Chen" -> "(Alex Chen)"
 */
function formatEnglishName(rawName) {
  if (!rawName) return '';
  const trimmed = rawName.trim();
  if (trimmed.startsWith('(') && trimmed.endsWith(')')) {
    return trimmed;
  }
  return `(${trimmed})`;
}

/**
 * 自動格式化台灣手機號碼為 +(886) 9XX-XXX-XXX（固定兩個槓）
 */
function formatTaiwanPhone(phone) {
  if (!phone) return '';
  let digits = phone.replace(/\D/g, '');
  if (digits.startsWith('886')) {
    digits = '0' + digits.slice(3);
  }
  if (digits.startsWith('9') && digits.length === 9) {
    digits = '0' + digits;
  }
  if (digits.startsWith('09') && digits.length >= 10) {
    return `+(886) ${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7, 10)}`;
  }
  return phone;
}

/**
 * Generate standard, battle-tested Email Signature HTML
 * Optimized column widths (max-width: 640px) with white-space: nowrap to prevent awkward address wrapping.
 *
 * @param {Object} options
 * @param {boolean} options.absoluteUrls - Whether to use absolute URLs for images
 */
function generateSignatureHtml(options = { absoluteUrls: false }) {
  const baseUrl = options.absoluteUrls ? getPublicBaseUrl() : '.';
  const engNameFormatted = formatEnglishName(state.englishName);
  
  const phoneIconUrl = `${baseUrl}/img/phone_icon.png`;
  const emailIconUrl = `${baseUrl}/img/email_icon.png`;
  const locationIconUrl = `${baseUrl}/img/location_icon.png`;
  const logoUrl = `${baseUrl}/img/nthuracing_logo_2025_blue_0474cf_0f3b7d.png`;

  return `<!-- NTHU Racing Email Signature Start -->
<table bgcolor="transparent" border="0" cellpadding="0" cellspacing="0" width="100%"
    style="background:transparent;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;font-family:'Bahnschrift','Arial',sans-serif;">
    <tr>
        <td align="left" style="padding: 0;">
            <div class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;">
                <div class="bg" lang="en" dir="auto">
                    <!--[if mso | IE]>
<table align="left" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook br-8-outlook -outlook" role="presentation" style="width:640px;" width="640"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
                    <div class="r pr-16 pl-16 br-8"
                        style="background:#fffffe;background-color:#fffffe;margin:0px;border-radius:8px 8px 8px 8px;max-width:640px;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation"
                            style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:8px 8px 8px 8px;">
                            <tbody>
                                <tr>
                                    <td
                                        style="border:none;direction:ltr;font-size:0;padding:16px 0px 16px 0px;text-align:center;">
                                        <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:640px;">
<![endif]-->
                                        <div class="pc100 ogf"
                                            style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                            <!--[if mso | IE]>
<table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="vertical-align:top;width:16px;">
<![endif]-->
                                            <div class="pc2-5 ogf"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:2.5%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:170px;">
<![endif]-->
                                            <div class="pc26-5 ogf m c"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:26.5%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="border:none;vertical-align:top;padding:2px 0px 2px 0px;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="x al-c m"
                                                                                style="font-size:0;padding-bottom:2px;word-break:break-word;">
                                                                                <div style="text-align:center;">
                                                                                    <p style="Margin:0;text-align:center;white-space:nowrap;mso-line-height-alt:30px;mso-ansi-font-size:24px;">
                                                                                        <span style="font-size:24px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:700;color:#0474cf;line-height:125%;white-space:nowrap;mso-line-height-alt:30px;mso-ansi-font-size:24px;">${escapeHtml(state.chineseName)}</span>
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="x m"
                                                                                style="font-size:0;padding-bottom:2px;word-break:break-word;">
                                                                                <div style="text-align:center;">
                                                                                    <p style="Margin:0;text-align:center;white-space:nowrap;mso-line-height-alt:12px;mso-ansi-font-size:12px;">
                                                                                        <span style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:100%;white-space:nowrap;mso-line-height-alt:12px;mso-ansi-font-size:12px;">${escapeHtml(engNameFormatted)}</span>
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="s m" style="font-size:0;padding:0;padding-bottom:2px;word-break:break-word;" aria-hidden="true">
                                                                                <div style="height:9px;line-height:9px;">&#8202;</div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                                                <div style="text-align:center;">
                                                                                    <p style="Margin:0;text-align:center;mso-line-height-alt:14px;mso-ansi-font-size:12px;">
                                                                                        <span style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:300;color:#777777;line-height:117%;mso-line-height-alt:14px;mso-ansi-font-size:12px;">${escapeHtml(state.groupTitle)}</span>
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:12px;">
<![endif]-->
                                            <div class="pc1-8 ogf g"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:1.8%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:290px;">
<![endif]-->
                                            <div class="pc46 ogf m c"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:46.5%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:top;" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left" class="a" style="background:transparent;font-size:0;padding:0;word-break:normal;">
                                                                <table cellpadding="0" cellspacing="0" width="100%" border="0"
                                                                    style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;width:100%;border:none;">
                                                                    <tr class="q">
                                                                        <td align="left" class="u" style="padding:0;height:48px;vertical-align:middle;width:24px;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="i tm fwm" align="left" width="100%" style="padding-bottom:8px;">
                                                                                        <img alt="Phone" width="20" height="20" style="display:block;width:20px;height:20px;border:0;" src="${phoneIconUrl}">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="i fwm" align="left" width="100%">
                                                                                        <img alt="Email" width="20" height="20" style="display:block;width:20px;height:20px;border:0;" src="${emailIconUrl}">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td style="vertical-align:middle;color:transparent;font-size:0;width:8px;">&#8203;</td>
                                                                        <td align="left" class="u" style="padding:0;height:46px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="x tm" align="left" width="100%" style="padding-bottom:8px;">
                                                                                        <p style="Margin:0;text-align:left;white-space:nowrap;mso-ansi-font-size:12px;">
                                                                                            <span style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:158%;white-space:nowrap;mso-line-height-alt:20px;mso-ansi-font-size:12px;">${escapeHtml(state.phone)}</span>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="x" align="left" width="100%">
                                                                                        <p style="Margin:0;text-align:left;white-space:nowrap;mso-ansi-font-size:12px;">
                                                                                            <a href="mailto:contact@nthuracing.tw" style="text-decoration:none;color:#777777;"><span style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:158%;white-space:nowrap;mso-line-height-alt:20px;mso-ansi-font-size:12px;">contact@nthuracing.tw</span></a>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="font-size:0;padding:0;">
                                                                <div style="height:4px;line-height:4px;">&#8202;</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="a" style="background:transparent;font-size:0;padding:0;word-break:normal;">
                                                                <table cellpadding="0" cellspacing="0" width="100%" border="0"
                                                                    style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;width:100%;border:none;">
                                                                    <tr class="q">
                                                                        <td align="left" class="u" style="padding:0;height:20px;vertical-align:middle;width:24px;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="i fwm" align="left" width="100%">
                                                                                        <img alt="Location" width="20" height="20" style="display:block;width:20px;height:20px;border:0;" src="${locationIconUrl}">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td style="vertical-align:middle;color:transparent;font-size:0;width:8px;">&#8203;</td>
                                                                        <td align="left" class="u" style="padding:0;height:19px;vertical-align:middle;">
                                                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="x" align="left" width="100%">
                                                                                        <p style="Margin:0;text-align:left;white-space:nowrap;mso-ansi-font-size:12px;">
                                                                                            <span style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:158%;white-space:nowrap;mso-line-height-alt:20px;mso-ansi-font-size:12px;">新竹市光復路二段101號 科儀中心 S11</span>
                                                                                        </p>
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:12px;">
<![endif]-->
                                            <div class="pc1-8 ogf g"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:1.8%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:132px;">
<![endif]-->
                                            <div class="pc21 ogf c pt-0"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:20.9%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="border:none;vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="i" style="font-size:0;padding:0;">
                                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                                                    style="border-collapse:collapse;border-spacing:0;">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="width:132px;">
                                                                                                <img alt="NTHU Racing Logo"
                                                                                                    src="${logoUrl}"
                                                                                                    style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:132px;font-size:13px;"
                                                                                                    width="132"
                                                                                                    height="auto">
                                                             </td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                                        </div>
                                        <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]>
</td></tr></table>
<![endif]-->
                </div>
            </div>
        </td>
    </tr>
</table>
<!-- NTHU Racing Email Signature End -->`;
}

/**
 * Generate clean Plain Text representation for fallbacks
 */
function generatePlainText() {
  const engName = formatEnglishName(state.englishName);
  return `${state.chineseName} ${engName}
${state.groupTitle} | NTHU Racing 清大賽車工廠
Tel: ${state.phone}
Email: contact@nthuracing.tw
Address: 新竹市光復路二段101號 科儀中心 S11`;
}

/**
 * Escape special HTML characters to prevent XSS and layout breakage
 */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Update the live on-page signature preview
 */
function updatePreview() {
  const container = document.getElementById('signature-render-container');
  if (container) {
    container.innerHTML = generateSignatureHtml({ absoluteUrls: false });
  }
  saveStateToLocalStorage();
}

/**
 * Copy formatted signature directly to clipboard for Gmail/Outlook/etc.
 */
async function copyRichSignature() {
  const copyBtn = document.getElementById('btn-copy-signature');
  const signatureHtml = generateSignatureHtml({ absoluteUrls: true });
  const plainText = generatePlainText();
  let success = false;

  // Method 1: Modern Clipboard API
  if (navigator.clipboard && window.ClipboardItem) {
    try {
      const htmlBlob = new Blob([signatureHtml], { type: 'text/html' });
      const textBlob = new Blob([plainText], { type: 'text/plain' });
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': htmlBlob,
          'text/plain': textBlob
        })
      ]);
      success = true;
    } catch (err) {
      console.warn('ClipboardItem API error, trying selection fallback...', err);
    }
  }

  // Method 2: Fallback using hidden DOM selection + execCommand('copy')
  if (!success) {
    const offscreen = document.createElement('div');
    offscreen.style.position = 'fixed';
    offscreen.style.left = '-9999px';
    offscreen.style.top = '0';
    offscreen.style.opacity = '0';
    offscreen.innerHTML = signatureHtml;
    document.body.appendChild(offscreen);

    const range = document.createRange();
    range.selectNodeContents(offscreen);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
      success = document.execCommand('copy');
    } catch (e) {
      console.error('execCommand copy failed:', e);
    }

    selection.removeAllRanges();
    document.body.removeChild(offscreen);
  }

  if (success) {
    showToast('簽名檔已複製到剪貼簿，請至 Gmail 貼上');
    if (copyBtn) {
      const originalHtml = copyBtn.innerHTML;
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>已複製至剪貼簿</span>
      `;
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalHtml;
      }, 3000);
    }
  } else {
    showToast('瀏覽器限制直接寫入，請使用「檢視 / 複製 HTML 原始碼」');
  }
}

/**
 * Toast Notification System
 */
function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3500);
}

/**
 * LocalStorage save and load
 */
function saveStateToLocalStorage() {
  try {
    localStorage.setItem('nthu_racing_signature_state', JSON.stringify(state));
  } catch (e) {
    // Ignore quota or disabled storage
  }
}

function loadStateFromLocalStorage() {
  try {
    const saved = localStorage.getItem('nthu_racing_signature_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...defaultState, ...parsed };
      // Ensure fixed team values
      state.email = 'contact@nthuracing.tw';
      state.location = '新竹市光復路二段101號 科儀中心 S11';
      state.logoFileName = 'nthuracing_logo_2025_blue_0474cf_0f3b7d.png';
      state.nameColor = '#0474cf';
      state.phone = formatTaiwanPhone(state.phone);
    }
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
  }
}

/**
 * Sync form input elements with state
 */
function syncFormWithState() {
  const fields = ['chineseName', 'englishName', 'groupTitle', 'phone'];
  fields.forEach(f => {
    const el = document.getElementById(`input-${f}`);
    if (el) el.value = state[f] || '';
  });

  updateGroupChips();
  updateTitleChips();
}

/**
 * Build interactive chips
 */
function renderChips() {
  const groupChipsContainer = document.getElementById('group-chips');
  if (groupChipsContainer) {
    groupChipsContainer.innerHTML = '';
    groups.forEach(g => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip';
      chip.textContent = `${g.zh} (${g.en})`;
      chip.dataset.en = g.en;
      chip.dataset.zh = g.zh;
      chip.addEventListener('click', () => {
        state.selectedGroup = g.en;
        composeGroupTitle();
        updateGroupChips();
        updatePreview();
      });
      groupChipsContainer.appendChild(chip);
    });
  }

  const titleChipsContainer = document.getElementById('title-chips');
  if (titleChipsContainer) {
    titleChipsContainer.innerHTML = '';
    titles.forEach(t => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'chip';
      chip.textContent = `${t.zh} (${t.en})`;
      chip.dataset.en = t.en;
      chip.addEventListener('click', () => {
        state.selectedTitle = t.en;
        composeGroupTitle();
        updateTitleChips();
        updatePreview();
      });
      titleChipsContainer.appendChild(chip);
    });
  }
}

function composeGroupTitle() {
  const grp = state.selectedGroup || '';
  const ttl = state.selectedTitle || '';
  
  if (ttl === 'Team Captain') {
    state.groupTitle = 'Team Captain';
  } else if (ttl === 'Vice Captain') {
    state.groupTitle = 'Vice Captain';
  } else if (ttl === 'Leader') {
    state.groupTitle = `Leader of ${grp}`;
  } else if (ttl === 'Member') {
    state.groupTitle = `${grp} | Member`;
  } else {
    state.groupTitle = `${grp} | ${ttl}`;
  }

  const el = document.getElementById('input-groupTitle');
  if (el) el.value = state.groupTitle;
}

function updateGroupChips() {
  const chips = document.querySelectorAll('#group-chips .chip');
  chips.forEach(c => {
    c.classList.toggle('active', c.dataset.en === state.selectedGroup);
  });
}

function updateTitleChips() {
  const chips = document.querySelectorAll('#title-chips .chip');
  chips.forEach(c => {
    c.classList.toggle('active', c.dataset.en === state.selectedTitle);
  });
}

/**
 * Bind DOM Event Listeners
 */
function bindEventListeners() {
  // Inputs real-time listener
  ['chineseName', 'englishName', 'groupTitle'].forEach(f => {
    const el = document.getElementById(`input-${f}`);
    if (el) {
      el.addEventListener('input', (e) => {
        state[f] = e.target.value;
        updatePreview();
      });
    }
  });

  // Phone input with automatic formatting
  const phoneEl = document.getElementById('input-phone');
  if (phoneEl) {
    phoneEl.addEventListener('input', (e) => {
      state.phone = e.target.value;
      updatePreview();
    });

    phoneEl.addEventListener('blur', (e) => {
      const formatted = formatTaiwanPhone(e.target.value);
      state.phone = formatted;
      e.target.value = formatted;
      updatePreview();
    });
  }

  // Copy Signature Button
  const btnCopySignature = document.getElementById('btn-copy-signature');
  if (btnCopySignature) {
    btnCopySignature.addEventListener('click', copyRichSignature);
  }

  // View HTML Source Modal
  const btnViewHtml = document.getElementById('btn-view-html');
  const modalHtml = document.getElementById('modal-html-source');
  const modalClose = document.getElementById('modal-close');
  const textareaHtml = document.getElementById('textarea-html-source');
  const btnCopyRawHtml = document.getElementById('btn-copy-raw-html');

  if (btnViewHtml && modalHtml && textareaHtml) {
    btnViewHtml.addEventListener('click', () => {
      textareaHtml.value = generateSignatureHtml({ absoluteUrls: true });
      modalHtml.classList.add('open');
    });
  }

  if (modalClose && modalHtml) {
    modalClose.addEventListener('click', () => modalHtml.classList.remove('open'));
    modalHtml.addEventListener('click', (e) => {
      if (e.target === modalHtml) modalHtml.classList.remove('open');
    });
  }

  if (btnCopyRawHtml && textareaHtml) {
    btnCopyRawHtml.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(textareaHtml.value);
        showToast('HTML 原始碼已複製');
      } catch (err) {
        textareaHtml.select();
        document.execCommand('copy');
        showToast('HTML 原始碼已複製');
      }
    });
  }

  // Open Gmail Signature Settings directly
  const btnOpenGmail = document.getElementById('btn-open-gmail');
  if (btnOpenGmail) {
    btnOpenGmail.addEventListener('click', () => {
      window.open('https://mail.google.com/mail/u/0/#settings/general', '_blank', 'noopener,noreferrer');
    });
  }

  // Reset Button
  const btnReset = document.getElementById('btn-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('確定要恢復預設範本內容嗎？')) {
        state = { ...defaultState };
        syncFormWithState();
        updatePreview();
        showToast('已重設為預設範本');
      }
    });
  }
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromLocalStorage();
  renderChips();
  syncFormWithState();
  bindEventListeners();
  updatePreview();
});
