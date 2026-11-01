/**
 * NTHU Racing - Email Signature Generator Engine
 * Handles real-time preview, clipboard copy (rich text & plain text),
 * preset management, and localStorage caching.
 */

// Global state
const defaultState = {
  chineseName: '陳冠宇',
  englishName: 'Kuan-Yu Chen',
  selectedGroup: 'Chassis Group',
  selectedTitle: 'Technical Director',
  groupTitle: 'Chassis Group | Technical Director',
  phone: '+(886) 912-345678',
  email: 'nthuracing@gmail.com',
  location: '新竹市光復路二段101號 科儀中心 S11',
  nameColor: '#0474cf',
  logoFileName: 'nthuracing_logo_2025_blue_0474cf_0f3b7d.png'
};

let state = { ...defaultState };

// Quick Presets
const groups = [
  { en: 'Aerodynamic Group', zh: '空力組' },
  { en: 'Chassis Group', zh: '車架組' },
  { en: 'Driverless Group', zh: '無人車組' },
  { en: 'Drivetrain Group', zh: '傳動組' },
  { en: 'Electrical Group', zh: '電裝組' },
  { en: 'Suspension Group', zh: '懸吊組' },
  { en: 'Vehicle Dynamics Group', zh: '動態組' },
  { en: 'Administration', zh: '行政公關組' }
];

const titles = [
  { en: 'Team Captain', zh: '隊長' },
  { en: 'Vice Captain', zh: '副隊長' },
  { en: 'Technical Director', zh: '技術總監' },
  { en: 'Leader', zh: '組長' },
  { en: 'Member', zh: '隊員' },
  { en: 'Public Relations', zh: '公關' },
  { en: 'Treasurer', zh: '財務' }
];

// Sample profiles for quick loading
const sampleProfiles = {
  captain: {
    chineseName: '陳冠宇',
    englishName: 'David Chen',
    selectedGroup: 'Chassis Group',
    selectedTitle: 'Team Captain',
    groupTitle: 'Chassis Group | Team Captain',
    phone: '+(886) 912-345678',
    email: 'captain.nthuracing@gmail.com',
    location: '新竹市光復路二段101號 科儀中心 S11',
    nameColor: '#0474cf',
    logoFileName: 'nthuracing_logo_2025_blue_0474cf_0f3b7d.png'
  },
  electrical_leader: {
    chineseName: '林志豪',
    englishName: 'Kevin Lin',
    selectedGroup: 'Electrical Group',
    selectedTitle: 'Leader',
    groupTitle: 'Leader of Electrical Group',
    phone: '+(886) 987-654321',
    email: 'electrical.nthuracing@gmail.com',
    location: '新竹市光復路二段101號 科儀中心 S11',
    nameColor: '#0f3b7d',
    logoFileName: 'nthuracing_logo_2025_blue_0474cf_0f3b7d.png'
  },
  member: {
    chineseName: '王小明',
    englishName: 'Xiao-Ming Wang',
    selectedGroup: 'Aerodynamic Group',
    selectedTitle: 'Member',
    groupTitle: 'Aerodynamic Group | Member',
    phone: '+(886) 900-112233',
    email: 'nthu.racing@gmail.com',
    location: '新竹市光復路二段101號 科儀中心 S11',
    nameColor: '#0474cf',
    logoFileName: 'nthuracing_logo_2025.png'
  }
};

/**
 * Determine the public base URL for images in copied email signatures.
 * Images MUST have absolute URLs so mail clients can display them publicly.
 */
function getPublicBaseUrl() {
  // If hosted on GitHub Pages or custom domain over HTTP/HTTPS:
  if (window.location.protocol.startsWith('http')) {
    // Strip trailing /index.html and trailing slashes
    const path = window.location.pathname.replace(/\/index\.html$/i, '').replace(/\/+$/, '');
    return window.location.origin + path;
  }
  // Fallback for local file:// testing - points to the official production GitHub Pages
  return 'https://nthu-racing.github.io/Email-Signature-Template';
}

/**
 * Clean up English name formatting to ensure parentheses: e.g. "Kuan-Yu Chen" -> "(Kuan-Yu Chen)"
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
 * Generate standard, battle-tested Email Signature HTML
 * Compatible with Outlook, Gmail, Apple Mail, and Thunderbird.
 *
 * @param {Object} options
 * @param {boolean} options.absoluteUrls - Whether to use absolute URLs for images
 */
function generateSignatureHtml(options = { absoluteUrls: false }) {
  const baseUrl = options.absoluteUrls ? getPublicBaseUrl() : '.';
  const engNameFormatted = formatEnglishName(state.englishName);
  
  // Choose correct image path with forward slashes
  const phoneIconUrl = `${baseUrl}/img/phone_icon.png`;
  const emailIconUrl = `${baseUrl}/img/email_icon.png`;
  const locationIconUrl = `${baseUrl}/img/location_icon.png`;
  const logoUrl = `${baseUrl}/img/${state.logoFileName}`;

  return `<!-- NTHU Racing Email Signature Start -->
<table bgcolor="transparent" border="0" cellpadding="0" cellspacing="0" width="100%"
    style="background:transparent;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;font-family:'Bahnschrift','Arial',sans-serif;">
    <tr>
        <td align="left" style="padding: 0;">
            <div class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;">
                <div class="bg" lang="en" dir="auto">
                    <!--[if mso | IE]>
<table align="left" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook br-8-outlook -outlook" role="presentation" style="width:586px;" width="586"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]-->
                    <div class="r pr-16 pl-16 br-8"
                        style="background:#fffffe;background-color:#fffffe;margin:0px;border-radius:8px 8px 8px 8px;max-width:586px;">
                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation"
                            style="background:#fffffe;background-color:#fffffe;width:100%;border-radius:8px 8px 8px 8px;">
                            <tbody>
                                <tr>
                                    <td
                                        style="border:none;direction:ltr;font-size:0;padding:16px 0px 16px 0px;text-align:center;">
                                        <!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="width:586px;">
<![endif]-->
                                        <div class="pc100 ogf"
                                            style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
                                            <!--[if mso | IE]>
<table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="vertical-align:top;width:20px;">
<![endif]-->
                                            <div class="pc3-413 ogf"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:3.4130%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tbody></tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:148px;">
<![endif]-->
                                            <div class="pc25-256 ogf m c pl-50"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:25.2560%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td
                                                                style="border:none;vertical-align:top;padding:2px 0px 2px 0px;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="x al-c m"
                                                                                style="font-size:0;padding-bottom:2px;word-break:break-word;">
                                                                                <div style="text-align:center;">
                                                                                    <p
                                                                                        style="Margin:0;text-align:center;mso-line-height-alt:30px;mso-ansi-font-size:24px;">
                                                                                        <span
                                                                                            style="font-size:24px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:700;color:${state.nameColor};line-height:125%;mso-line-height-alt:30px;mso-ansi-font-size:24px;">${escapeHtml(state.chineseName)}</span>
                                                                                    </p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="x m"
                                                                                style="font-size:0;padding-bottom:2px;word-break:break-word;">
                                                                                <div style="text-align:center;">
                                                                                    <p
                                                                                        style="Margin:0;text-align:center;mso-line-height-alt:12px;mso-ansi-font-size:12px;">
                                                                                        <span
                                                                                            style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:100%;mso-line-height-alt:12px;mso-ansi-font-size:12px;">${escapeHtml(engNameFormatted)}</span></p>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="s m"
                                                                                style="font-size:0;padding:0;padding-bottom:2px;word-break:break-word;"
                                                                                aria-hidden="true">
                                                                                <div
                                                                                    style="height:9px;line-height:9px;">
                                                                                    &#8202;</div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="center" class="x"
                                                                                style="font-size:0;padding-bottom:0;word-break:break-word;">
                                                                                <div style="text-align:center;">
                                                                                    <p
                                                                                        style="Margin:0;text-align:center;mso-line-height-alt:14px;mso-ansi-font-size:12px;">
                                                                                        <span
                                                                                            style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:300;color:#777777;line-height:117%;mso-line-height-alt:14px;mso-ansi-font-size:12px;">${escapeHtml(state.groupTitle)}</span>
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
                                            <div class="pc2-2184 ogf g"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:2.2184%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tbody></tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:239px;">
<![endif]-->
                                            <div class="pc40-785 ogf m c"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:40.7850%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    style="border:none;vertical-align:top;" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="left" class="a"
                                                                style="background:transparent;font-size:0;padding:0;word-break:break-word;">
                                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                                    border="0"
                                                                    style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;table-layout:fixed;width:100%;border:none;">
                                                                    <tr class="q">
                                                                        <td align="left" class="u"
                                                                            style="padding:0;height:48px;word-wrap:break-word;vertical-align:middle;"
                                                                            width="8.368200836820083%">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="i tm fwm" align="left"
                                                                                        width="100%"
                                                                                        style="padding-bottom:8px;">
                                                                                        <img alt="Phone" width="20"
                                                                                            height="20"
                                                                                            style="display:block;width:20px;height:20px;border:0;"
                                                                                            src="${phoneIconUrl}">
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="i fwm" align="left"
                                                                                        width="100%">
                                                                                        <img alt="Email" width="20"
                                                                                            height="20"
                                                                                            style="display:block;width:20px;height:20px;border:0;"
                                                                                            src="${emailIconUrl}">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td class="tgtr"
                                                                            style="vertical-align:middle;color:transparent;font-size:0;"
                                                                            width="3.3472803347280333%">&#8203;
                                                                        </td>
                                                                        <td align="left" class="u"
                                                                            style="padding:0;height:46px;word-wrap:break-word;vertical-align:middle;"
                                                                            width="88.28451882845188%">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="x tm" align="left"
                                                                                        width="100%"
                                                                                        style="padding-bottom:8px;">
                                                                                        <p
                                                                                            style="Margin:0;text-align:left;mso-ansi-font-size:12px;">
                                                                                            <span
                                                                                                style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:158%;mso-line-height-alt:20px;mso-ansi-font-size:12px;">${escapeHtml(state.phone)}</span></p>
                                                                                    </td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td class="x" align="left"
                                                                                        width="100%">
                                                                                        <p
                                                                                            style="Margin:0;text-align:left;mso-ansi-font-size:12px;">
                                                                                            <span
                                                                                                style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:158%;mso-line-height-alt:20px;mso-ansi-font-size:12px;">${escapeHtml(state.email)}</span>
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
                                                            <td class="4"
                                                                style="font-size:0;padding:0;word-break:break-word;">
                                                                <div style="height:4px;line-height:4px;">&#8202;</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td align="left" class="a"
                                                                style="background:transparent;font-size:0;padding:0;word-break:break-word;">
                                                                <table cellpadding="0" cellspacing="0" width="100%"
                                                                    border="0"
                                                                    style="color:#000000;font-family:Arial,sans-serif;font-size:13px;line-height:22px;table-layout:fixed;width:100%;border:none;">
                                                                    <tr class="q">
                                                                        <td align="left" class="u"
                                                                            style="padding:0;height:20px;word-wrap:break-word;vertical-align:middle;"
                                                                            width="8.368200836820083%">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="i fwm" align="left"
                                                                                        width="100%">
                                                                                        <img alt="Location" width="20"
                                                                                            height="20"
                                                                                            style="display:block;width:20px;height:20px;border:0;"
                                                                                            src="${locationIconUrl}">
                                                                                    </td>
                                                                                </tr>
                                                                            </table>
                                                                        </td>
                                                                        <td class="tgtr"
                                                                            style="vertical-align:middle;color:transparent;font-size:0;"
                                                                            width="3.3472803347280333%">&#8203;
                                                                        </td>
                                                                        <td align="left" class="u"
                                                                            style="padding:0;height:19px;word-wrap:break-word;vertical-align:middle;"
                                                                            width="88.28451882845188%">
                                                                            <table border="0" cellpadding="0"
                                                                                cellspacing="0" width="100%">
                                                                                <tr>
                                                                                    <td class="x" align="left"
                                                                                        width="100%">
                                                                                        <p
                                                                                            style="Margin:0;text-align:left;mso-ansi-font-size:12px;">
                                                                                            <span
                                                                                                style="font-size:12px;font-family:'Bahnschrift','Arial',sans-serif;font-weight:400;color:#777777;line-height:158%;mso-line-height-alt:20px;mso-ansi-font-size:12px;">${escapeHtml(state.location)}</span></p>
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
                                            <div class="pc2-2184 ogf g"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:2.2184%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tbody></tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <!--[if mso | IE]>
</td><td style="vertical-align:top;width:132px;">
<![endif]-->
                                            <div class="pc22-5256 ogf c pt-0"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:22.5256%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="border:none;vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="center" class="i"
                                                                                style="font-size:0;padding:0;word-break:break-word;">
                                                                                <table border="0" cellpadding="0"
                                                                                    cellspacing="0" role="presentation"
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
</td><td style="vertical-align:top;width:20px;">
<![endif]-->
                                            <div class="pc3-5836 ogf"
                                                style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:3.5836%;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                                    width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="vertical-align:top;padding:0;">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    role="presentation" width="100%">
                                                                    <tbody></tbody>
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
Email: ${state.email}
Address: ${state.location}`;
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
    // For live preview in DOM, use relative URLs so images display immediately
    container.innerHTML = generateSignatureHtml({ absoluteUrls: false });
  }
  saveStateToLocalStorage();
}

/**
 * Copy rich formatted signature directly to clipboard for Gmail/Outlook/etc.
 */
async function copyRichSignature() {
  const copyBtn = document.getElementById('btn-copy-signature');
  const signatureHtml = generateSignatureHtml({ absoluteUrls: true });
  const plainText = generatePlainText();
  let success = false;

  // Method 1: Modern Async Clipboard API with ClipboardItem (Supported in Chrome 76+, Edge 79+, Safari 13.1+, Firefox 127+)
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
    showToast('🎉 簽名檔已複製到剪貼簿！請至 Gmail 簽名設定直接貼上 (Ctrl+V / Cmd+V)');
    if (copyBtn) {
      const originalHtml = copyBtn.innerHTML;
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>已成功複製至剪貼簿！</span>
      `;
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = originalHtml;
      }, 3000);
    }
  } else {
    showToast('⚠️ 瀏覽器阻擋直接複製，請點選「檢視 HTML 原始碼」手動選取');
  }
}

/**
 * Toast Notification System
 */
let toastTimeout;
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
  }, 4000);
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
    }
  } catch (e) {
    console.warn('Failed to load state from localStorage:', e);
  }
}

/**
 * Sync form input elements with state
 */
function syncFormWithState() {
  const fields = ['chineseName', 'englishName', 'groupTitle', 'phone', 'email', 'location'];
  fields.forEach(f => {
    const el = document.getElementById(`input-${f}`);
    if (el) el.value = state[f] || '';
  });

  // Select matching chips if applicable
  updateGroupChips();
  updateTitleChips();
  updateLogoSelection();
  updateColorSwatches();
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
  
  if (ttl === 'Team Captain' || ttl === 'Vice Captain' || ttl === 'Technical Director') {
    state.groupTitle = `${grp ? grp + ' | ' : ''}${ttl}`;
  } else if (ttl === 'Leader') {
    state.groupTitle = `Leader of ${grp}`;
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

function updateLogoSelection() {
  const cards = document.querySelectorAll('.logo-option-card');
  cards.forEach(card => {
    card.classList.toggle('selected', card.dataset.logo === state.logoFileName);
  });
}

function updateColorSwatches() {
  const swatches = document.querySelectorAll('.color-swatch');
  swatches.forEach(s => {
    s.classList.toggle('active', s.dataset.color.toLowerCase() === state.nameColor.toLowerCase());
  });
}

/**
 * Bind DOM Event Listeners
 */
function bindEventListeners() {
  // Inputs real-time listener
  const fields = ['chineseName', 'englishName', 'groupTitle', 'phone', 'email', 'location'];
  fields.forEach(f => {
    const el = document.getElementById(`input-${f}`);
    if (el) {
      el.addEventListener('input', (e) => {
        state[f] = e.target.value;
        updatePreview();
      });
    }
  });

  // Logo Cards
  document.querySelectorAll('.logo-option-card').forEach(card => {
    card.addEventListener('click', () => {
      state.logoFileName = card.dataset.logo;
      updateLogoSelection();
      updatePreview();
    });
  });

  // Color Swatches
  document.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      state.nameColor = swatch.dataset.color;
      updateColorSwatches();
      updatePreview();
    });
  });

  // Custom Color Picker
  const customColorInput = document.getElementById('custom-color-input');
  if (customColorInput) {
    customColorInput.addEventListener('input', (e) => {
      state.nameColor = e.target.value;
      updateColorSwatches();
      updatePreview();
    });
  // Phone Format Helper
  const btnFormatPhone = document.getElementById('btn-format-phone');
  if (btnFormatPhone) {
    btnFormatPhone.addEventListener('click', () => {
      let raw = state.phone.trim();
      let cleaned = raw.replace(/[^0-9+]/g, '');
      let formatted = raw;
      if (cleaned.startsWith('09') && cleaned.length === 10) {
        formatted = `+(886) ${cleaned.slice(1, 4)}-${cleaned.slice(4)}`;
      } else if (cleaned.startsWith('+8869') && cleaned.length === 13) {
        formatted = `+(886) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
      } else if (cleaned.startsWith('8869') && cleaned.length === 12) {
        formatted = `+(886) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
      }
      state.phone = formatted;
      const el = document.getElementById('input-phone');
      if (el) el.value = formatted;
      updatePreview();
      showToast('已轉換格式：' + formatted);
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
        showToast('✅ HTML 原始碼已複製！');
      } catch (err) {
        textareaHtml.select();
        document.execCommand('copy');
        showToast('✅ HTML 原始碼已複製！');
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

  // Profile presets
  document.querySelectorAll('[data-load-profile]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const profileKey = e.currentTarget.dataset.loadProfile;
      if (sampleProfiles[profileKey]) {
        state = { ...sampleProfiles[profileKey] };
        syncFormWithState();
        updatePreview();
        showToast(`已載入「${e.currentTarget.textContent.trim()}」範例`);
      }
    });
  });

  // Canvas Dark Mode Test Toggle
  const toggleDark = document.getElementById('toggle-canvas-dark');
  const canvas = document.getElementById('email-body-canvas');
  if (toggleDark && canvas) {
    toggleDark.addEventListener('click', () => {
      canvas.classList.toggle('dark-mode-test');
      const isDark = canvas.classList.contains('dark-mode-test');
      toggleDark.innerHTML = isDark 
        ? `☀️ 切換白底` 
        : `🌙 測試黑底效果`;
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
