(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-W8X8NJBB");
// Sample data for tabs with unique images

const tabs = [
  {
    title: "B. Des",

    image:
      "https://assets.onecompiler.app/433dbmmrf/43c6p8ddn/Group%201000001189.png",
  },

  {
    title: "B. Voc",

    image:
      "https://assets.onecompiler.app/433dbmmrf/43c6p8ddn/Group%201000001189%20(1).png",
  },

  {
    title: "M. Voc",

    image:
      "https://assets.onecompiler.app/433dbmmrf/43c6p8ddn/Group%201000001217.png",
  },
];

const tabsNav = document.getElementById("tabsNav");

const contentContainer = document.getElementById("contentContainer");

// Create a tab button

function createTabButton(tab, index) {
  const button = document.createElement("button");

  button.className = "tab-btn";

  button.textContent = tab.title;

  button.addEventListener("click", () => {
    setActiveTab(index);
  });

  return button;
}

// Create content card for the selected tab (image only)

function createContentCard(tab) {
  const card = document.createElement("div");

  card.className = "content-card";

  // Create an image container

  const cardImage = document.createElement("div");

  cardImage.className = "card-image";

  const img = document.createElement("img");

  // Use the image from the tab's data

  img.src = tab.image || "";

  img.alt = tab.title;

  cardImage.appendChild(img);

  card.appendChild(cardImage);

  return card;
}

// Set the active tab, update buttons and content

function setActiveTab(activeIndex) {
  // Update tab buttons

  tabsNav.innerHTML = "";

  tabs.forEach((tab, index) => {
    const button = createTabButton(tab, index);

    if (index === activeIndex) {
      button.classList.add("active");
    }

    tabsNav.appendChild(button);
  });

  // Update content

  contentContainer.innerHTML = "";

  const contentCard = createContentCard(tabs[activeIndex]);

  contentContainer.appendChild(contentCard);
}

// Initialize the dashboard with the first tab active

setActiveTab(0);
tatsuFrontendConfig = {
  apiBaseUrl: "https://script.google.com/macros/s/AKfycbwz6bdoXuza9F2rC6glMH5uFm2XdWjWwEY_5nuR32UsdetPJqxojYWc7AapcUj2UAXU/exec",
  domain: "https://app.swipepages.com",
  asyncScripts: {
    anime: "js_libs/anime.min.js",
    asyncloader: "js_libs/asyncloader.min.js",
    begrid: "js_libs/begrid.min.js",
    countdown: "js_libs/countdown.min.js",
    countTo: "js_libs/countTo.min.js",
    exitIntent: "js_libs/exitIntent.min.js",
    fitvids: "js_libs/fitvids.min.js",
    flickity: "js_libs/flickity.min.js",
    isotope: "js_libs/isotope.min.js",
    "jquery-ui": "js_libs/jquery-ui.min.js",
    magnificpopup:
      "js_libs/magnificpopup.min.js",
    swipe: "js_libs/swipe.min.js",
    tatsuCarousel:
      "js_libs/tatsuCarousel.min.js",
    tatsuColumnParallax:
      "js_libs/tatsuColumnParallax.min.js",
    tatsuParallax:
      "js_libs/tatsuParallax.min.js",
    webfont: "js_libs/webfont.min.js",
    "lifecycle.es5":
      "js_libs/lifecycle.es5.min.js",
  },
  gmapsAPIKey: "",
  goals: {
    formSubmission: true,
    externalFormSubmission: false,
    redirectUrl: "",
    links: ["https://courses.nifdeccanpune.com/thank-you"],
    scrollDistance: null,
    timeSpent: null,
    linkClicks: true,
  },

  countryZones: {
    "Europe/Andorra": { countries: ["AD"] },
    "Asia/Dubai": { countries: ["AE", "OM", "RE", "SC", "TF"] },
    "Asia/Kabul": { countries: ["AF"] },
    "Europe/Tirane": { countries: ["AL"] },
    "Asia/Yerevan": { countries: ["AM"] },
    "Antarctica/Casey": { countries: ["AQ"] },
    "Antarctica/Davis": { countries: ["AQ"] },
    "Antarctica/Mawson": { countries: ["AQ"] },
    "Antarctica/Palmer": { countries: ["AQ"] },
    "Antarctica/Rothera": { countries: ["AQ"] },
    "Antarctica/Troll": { countries: ["AQ"] },
    "America/Argentina/Buenos_Aires": { countries: ["AR"] },
    "America/Argentina/Cordoba": { countries: ["AR"] },
    "America/Argentina/Salta": { countries: ["AR"] },
    "America/Argentina/Jujuy": { countries: ["AR"] },
    "America/Argentina/Tucuman": { countries: ["AR"] },
    "America/Argentina/Catamarca": { countries: ["AR"] },
    "America/Argentina/La_Rioja": { countries: ["AR"] },
    "America/Argentina/San_Juan": { countries: ["AR"] },
    "America/Argentina/Mendoza": { countries: ["AR"] },
    "America/Argentina/San_Luis": { countries: ["AR"] },
    "America/Argentina/Rio_Gallegos": { countries: ["AR"] },
    "America/Argentina/Ushuaia": { countries: ["AR"] },
    "Pacific/Pago_Pago": { countries: ["AS", "UM"] },
    "Europe/Vienna": { countries: ["AT"] },
    "Australia/Lord_Howe": { countries: ["AU"] },
    "Antarctica/Macquarie": { countries: ["AU"] },
    "Australia/Hobart": { countries: ["AU"] },
    "Australia/Melbourne": { countries: ["AU"] },
    "Australia/Sydney": { countries: ["AU"] },
    "Australia/Broken_Hill": { countries: ["AU"] },
    "Australia/Brisbane": { countries: ["AU"] },
    "Australia/Lindeman": { countries: ["AU"] },
    "Australia/Adelaide": { countries: ["AU"] },
    "Australia/Darwin": { countries: ["AU"] },
    "Australia/Perth": { countries: ["AU"] },
    "Australia/Eucla": { countries: ["AU"] },
    "Asia/Baku": { countries: ["AZ"] },
    "America/Barbados": { countries: ["BB"] },
    "Asia/Dhaka": { countries: ["BD"] },
    "Europe/Brussels": { countries: ["BE", "LU", "NL"] },
    "Europe/Sofia": { countries: ["BG"] },
    "Atlantic/Bermuda": { countries: ["BM"] },
    "America/La_Paz": { countries: ["BO"] },
    "America/Noronha": { countries: ["BR"] },
    "America/Belem": { countries: ["BR"] },
    "America/Fortaleza": { countries: ["BR"] },
    "America/Recife": { countries: ["BR"] },
    "America/Araguaina": { countries: ["BR"] },
    "America/Maceio": { countries: ["BR"] },
    "America/Bahia": { countries: ["BR"] },
    "America/Sao_Paulo": { countries: ["BR"] },
    "America/Campo_Grande": { countries: ["BR"] },
    "America/Cuiaba": { countries: ["BR"] },
    "America/Santarem": { countries: ["BR"] },
    "America/Porto_Velho": { countries: ["BR"] },
    "America/Boa_Vista": { countries: ["BR"] },
    "America/Manaus": { countries: ["BR"] },
    "America/Eirunepe": { countries: ["BR"] },
    "America/Rio_Branco": { countries: ["BR"] },
    "Asia/Thimphu": { countries: ["BT"] },
    "Europe/Minsk": { countries: ["BY"] },
    "America/Belize": { countries: ["BZ"] },
    "America/St_Johns": { countries: ["CA"] },
    "America/Halifax": { countries: ["CA"] },
    "America/Glace_Bay": { countries: ["CA"] },
    "America/Moncton": { countries: ["CA"] },
    "America/Goose_Bay": { countries: ["CA"] },
    "America/Toronto": { countries: ["CA", "BS"] },
    "America/Iqaluit": { countries: ["CA"] },
    "America/Winnipeg": { countries: ["CA"] },
    "America/Resolute": { countries: ["CA"] },
    "America/Rankin_Inlet": { countries: ["CA"] },
    "America/Regina": { countries: ["CA"] },
    "America/Swift_Current": { countries: ["CA"] },
    "America/Edmonton": { countries: ["CA"] },
    "America/Cambridge_Bay": { countries: ["CA"] },
    "America/Yellowknife": { countries: ["CA"] },
    "America/Inuvik": { countries: ["CA"] },
    "America/Dawson_Creek": { countries: ["CA"] },
    "America/Fort_Nelson": { countries: ["CA"] },
    "America/Whitehorse": { countries: ["CA"] },
    "America/Dawson": { countries: ["CA"] },
    "America/Vancouver": { countries: ["CA"] },
    "Europe/Zurich": { countries: ["CH", "DE", "LI"] },
    "Africa/Abidjan": {
      countries: [
        "CI",
        "BF",
        "GH",
        "GM",
        "GN",
        "IS",
        "ML",
        "MR",
        "SH",
        "SL",
        "SN",
        "TG",
      ],
    },
    "Pacific/Rarotonga": { countries: ["CK"] },
    "America/Santiago": { countries: ["CL"] },
    "America/Punta_Arenas": { countries: ["CL"] },
    "Pacific/Easter": { countries: ["CL"] },
    "Asia/Shanghai": { countries: ["CN"] },
    "Asia/Urumqi": { countries: ["CN", "AQ"] },
    "America/Bogota": { countries: ["CO"] },
    "America/Costa_Rica": { countries: ["CR"] },
    "America/Havana": { countries: ["CU"] },
    "Atlantic/Cape_Verde": { countries: ["CV"] },
    "Asia/Nicosia": { countries: ["CY"] },
    "Asia/Famagusta": { countries: ["CY"] },
    "Europe/Prague": { countries: ["CZ", "SK"] },
    "Europe/Berlin": { countries: ["DE", "DK", "NO", "SE", "SJ"] },
    "America/Santo_Domingo": { countries: ["DO"] },
    "Africa/Algiers": { countries: ["DZ"] },
    "America/Guayaquil": { countries: ["EC"] },
    "Pacific/Galapagos": { countries: ["EC"] },
    "Europe/Tallinn": { countries: ["EE"] },
    "Africa/Cairo": { countries: ["EG"] },
    "Africa/El_Aaiun": { countries: ["EH"] },
    "Europe/Madrid": { countries: ["ES"] },
    "Africa/Ceuta": { countries: ["ES"] },
    "Atlantic/Canary": { countries: ["ES"] },
    "Europe/Helsinki": { countries: ["FI", "AX"] },
    "Pacific/Fiji": { countries: ["FJ"] },
    "Atlantic/Stanley": { countries: ["FK"] },
    "Pacific/Kosrae": { countries: ["FM"] },
    "Atlantic/Faroe": { countries: ["FO"] },
    "Europe/Paris": { countries: ["FR", "MC"] },
    "Europe/London": { countries: ["GB", "GG", "IM", "JE"] },
    "Asia/Tbilisi": { countries: ["GE"] },
    "America/Cayenne": { countries: ["GF"] },
    "Europe/Gibraltar": { countries: ["GI"] },
    "America/Nuuk": { countries: ["GL"] },
    "America/Danmarkshavn": { countries: ["GL"] },
    "America/Scoresbysund": { countries: ["GL"] },
    "America/Thule": { countries: ["GL"] },
    "Europe/Athens": { countries: ["GR"] },
    "Atlantic/South_Georgia": { countries: ["GS"] },
    "America/Guatemala": { countries: ["GT"] },
    "Pacific/Guam": { countries: ["GU", "MP"] },
    "Africa/Bissau": { countries: ["GW"] },
    "America/Guyana": { countries: ["GY"] },
    "Asia/Hong_Kong": { countries: ["HK"] },
    "America/Tegucigalpa": { countries: ["HN"] },
    "America/Port-au-Prince": { countries: ["HT"] },
    "Europe/Budapest": { countries: ["HU"] },
    "Asia/Jakarta": { countries: ["ID"] },
    "Asia/Pontianak": { countries: ["ID"] },
    "Asia/Makassar": { countries: ["ID"] },
    "Asia/Jayapura": { countries: ["ID"] },
    "Europe/Dublin": { countries: ["IE"] },
    "Asia/Jerusalem": { countries: ["IL"] },
    "Asia/Kolkata": { countries: ["IN"] },
    "Asia/Calcutta": { countries: ["IN"] },
    "Indian/Chagos": { countries: ["IO"] },
    "Asia/Baghdad": { countries: ["IQ"] },
    "Asia/Tehran": { countries: ["IR"] },
    "Europe/Rome": { countries: ["IT", "SM", "VA"] },
    "America/Jamaica": { countries: ["JM"] },
    "Asia/Amman": { countries: ["JO"] },
    "Asia/Tokyo": { countries: ["JP"] },
    "Africa/Nairobi": {
      countries: ["KE", "DJ", "ER", "ET", "KM", "MG", "SO", "TZ", "UG", "YT"],
    },
    "Asia/Bishkek": { countries: ["KG"] },
    "Pacific/Tarawa": { countries: ["KI", "MH", "TV", "UM", "WF"] },
    "Pacific/Kanton": { countries: ["KI"] },
    "Pacific/Kiritimati": { countries: ["KI"] },
    "Asia/Pyongyang": { countries: ["KP"] },
    "Asia/Seoul": { countries: ["KR"] },
    "Asia/Almaty": { countries: ["KZ"] },
    "Asia/Qyzylorda": { countries: ["KZ"] },
    "Asia/Qostanay": { countries: ["KZ"] },
    "Asia/Aqtobe": { countries: ["KZ"] },
    "Asia/Aqtau": { countries: ["KZ"] },
    "Asia/Atyrau": { countries: ["KZ"] },
    "Asia/Oral": { countries: ["KZ"] },
    "Asia/Beirut": { countries: ["LB"] },
    "Asia/Colombo": { countries: ["LK"] },
    "Africa/Monrovia": { countries: ["LR"] },
    "Europe/Vilnius": { countries: ["LT"] },
    "Europe/Riga": { countries: ["LV"] },
    "Africa/Tripoli": { countries: ["LY"] },
    "Africa/Casablanca": { countries: ["MA"] },
    "Europe/Chisinau": { countries: ["MD"] },
    "Pacific/Kwajalein": { countries: ["MH"] },
    "Asia/Yangon": { countries: ["MM", "CC"] },
    "Asia/Ulaanbaatar": { countries: ["MN"] },
    "Asia/Hovd": { countries: ["MN"] },
    "Asia/Choibalsan": { countries: ["MN"] },
    "Asia/Macau": { countries: ["MO"] },
    "America/Martinique": { countries: ["MQ"] },
    "Europe/Malta": { countries: ["MT"] },
    "Indian/Mauritius": { countries: ["MU"] },
    "Indian/Maldives": { countries: ["MV", "TF"] },
    "America/Mexico_City": { countries: ["MX"] },
    "America/Cancun": { countries: ["MX"] },
    "America/Merida": { countries: ["MX"] },
    "America/Monterrey": { countries: ["MX"] },
    "America/Matamoros": { countries: ["MX"] },
    "America/Chihuahua": { countries: ["MX"] },
    "America/Ciudad_Juarez": { countries: ["MX"] },
    "America/Ojinaga": { countries: ["MX"] },
    "America/Mazatlan": { countries: ["MX"] },
    "America/Bahia_Banderas": { countries: ["MX"] },
    "America/Hermosillo": { countries: ["MX"] },
    "America/Tijuana": { countries: ["MX"] },
    "Asia/Kuching": { countries: ["MY", "BN"] },
    "Africa/Maputo": {
      countries: ["MZ", "BI", "BW", "CD", "MW", "RW", "ZM", "ZW"],
    },
    "Africa/Windhoek": { countries: ["NA"] },
    "Pacific/Noumea": { countries: ["NC"] },
    "Pacific/Norfolk": { countries: ["NF"] },
    "Africa/Lagos": {
      countries: ["NG", "AO", "BJ", "CD", "CF", "CG", "CM", "GA", "GQ", "NE"],
    },
    "America/Managua": { countries: ["NI"] },
    "Asia/Kathmandu": { countries: ["NP"] },
    "Pacific/Nauru": { countries: ["NR"] },
    "Pacific/Niue": { countries: ["NU"] },
    "Pacific/Auckland": { countries: ["NZ", "AQ"] },
    "Pacific/Chatham": { countries: ["NZ"] },
    "America/Panama": { countries: ["PA", "CA", "KY"] },
    "America/Lima": { countries: ["PE"] },
    "Pacific/Tahiti": { countries: ["PF"] },
    "Pacific/Marquesas": { countries: ["PF"] },
    "Pacific/Gambier": { countries: ["PF"] },
    "Pacific/Port_Moresby": { countries: ["PG", "AQ", "FM"] },
    "Pacific/Bougainville": { countries: ["PG"] },
    "Asia/Manila": { countries: ["PH"] },
    "Asia/Karachi": { countries: ["PK"] },
    "Europe/Warsaw": { countries: ["PL"] },
    "America/Miquelon": { countries: ["PM"] },
    "Pacific/Pitcairn": { countries: ["PN"] },
    "America/Puerto_Rico": {
      countries: [
        "PR",
        "AG",
        "CA",
        "AI",
        "AW",
        "BL",
        "BQ",
        "CW",
        "DM",
        "GD",
        "GP",
        "KN",
        "LC",
        "MF",
        "MS",
        "SX",
        "TT",
        "VC",
        "VG",
        "VI",
      ],
    },
    "Asia/Gaza": { countries: ["PS"] },
    "Asia/Hebron": { countries: ["PS"] },
    "Europe/Lisbon": { countries: ["PT"] },
    "Atlantic/Madeira": { countries: ["PT"] },
    "Atlantic/Azores": { countries: ["PT"] },
    "Pacific/Palau": { countries: ["PW"] },
    "America/Asuncion": { countries: ["PY"] },
    "Asia/Qatar": { countries: ["QA", "BH"] },
    "Europe/Bucharest": { countries: ["RO"] },
    "Europe/Belgrade": { countries: ["RS", "BA", "HR", "ME", "MK", "SI"] },
    "Europe/Kaliningrad": { countries: ["RU"] },
    "Europe/Moscow": { countries: ["RU"] },
    "Europe/Simferopol": { countries: ["RU", "UA"] },
    "Europe/Kirov": { countries: ["RU"] },
    "Europe/Volgograd": { countries: ["RU"] },
    "Europe/Astrakhan": { countries: ["RU"] },
    "Europe/Saratov": { countries: ["RU"] },
    "Europe/Ulyanovsk": { countries: ["RU"] },
    "Europe/Samara": { countries: ["RU"] },
    "Asia/Yekaterinburg": { countries: ["RU"] },
    "Asia/Omsk": { countries: ["RU"] },
    "Asia/Novosibirsk": { countries: ["RU"] },
    "Asia/Barnaul": { countries: ["RU"] },
    "Asia/Tomsk": { countries: ["RU"] },
    "Asia/Novokuznetsk": { countries: ["RU"] },
    "Asia/Krasnoyarsk": { countries: ["RU"] },
    "Asia/Irkutsk": { countries: ["RU"] },
    "Asia/Chita": { countries: ["RU"] },
    "Asia/Yakutsk": { countries: ["RU"] },
    "Asia/Khandyga": { countries: ["RU"] },
    "Asia/Vladivostok": { countries: ["RU"] },
    "Asia/Ust-Nera": { countries: ["RU"] },
    "Asia/Magadan": { countries: ["RU"] },
    "Asia/Sakhalin": { countries: ["RU"] },
    "Asia/Srednekolymsk": { countries: ["RU"] },
    "Asia/Kamchatka": { countries: ["RU"] },
    "Asia/Anadyr": { countries: ["RU"] },
    "Asia/Riyadh": { countries: ["SA", "AQ", "KW", "YE"] },
    "Pacific/Guadalcanal": { countries: ["SB", "FM"] },
    "Africa/Khartoum": { countries: ["SD"] },
    "Asia/Singapore": { countries: ["SG", "MY"] },
    "America/Paramaribo": { countries: ["SR"] },
    "Africa/Juba": { countries: ["SS"] },
    "Africa/Sao_Tome": { countries: ["ST"] },
    "America/El_Salvador": { countries: ["SV"] },
    "Asia/Damascus": { countries: ["SY"] },
    "America/Grand_Turk": { countries: ["TC"] },
    "Africa/Ndjamena": { countries: ["TD"] },
    "Asia/Bangkok": { countries: ["TH", "CX", "KH", "LA", "VN"] },
    "Asia/Dushanbe": { countries: ["TJ"] },
    "Pacific/Fakaofo": { countries: ["TK"] },
    "Asia/Dili": { countries: ["TL"] },
    "Asia/Ashgabat": { countries: ["TM"] },
    "Africa/Tunis": { countries: ["TN"] },
    "Pacific/Tongatapu": { countries: ["TO"] },
    "Europe/Istanbul": { countries: ["TR"] },
    "Asia/Taipei": { countries: ["TW"] },
    "Europe/Kyiv": { countries: ["UA"] },
    "America/New_York": { countries: ["US"] },
    "America/Detroit": { countries: ["US"] },
    "America/Kentucky/Louisville": { countries: ["US"] },
    "America/Kentucky/Monticello": { countries: ["US"] },
    "America/Indiana/Indianapolis": { countries: ["US"] },
    "America/Indiana/Vincennes": { countries: ["US"] },
    "America/Indiana/Winamac": { countries: ["US"] },
    "America/Indiana/Marengo": { countries: ["US"] },
    "America/Indiana/Petersburg": { countries: ["US"] },
    "America/Indiana/Vevay": { countries: ["US"] },
    "America/Chicago": { countries: ["US"] },
    "America/Indiana/Tell_City": { countries: ["US"] },
    "America/Indiana/Knox": { countries: ["US"] },
    "America/Menominee": { countries: ["US"] },
    "America/North_Dakota/Center": { countries: ["US"] },
    "America/North_Dakota/New_Salem": { countries: ["US"] },
    "America/North_Dakota/Beulah": { countries: ["US"] },
    "America/Denver": { countries: ["US"] },
    "America/Boise": { countries: ["US"] },
    "America/Phoenix": { countries: ["US", "CA"] },
    "America/Los_Angeles": { countries: ["US"] },
    "America/Anchorage": { countries: ["US"] },
    "America/Juneau": { countries: ["US"] },
    "America/Sitka": { countries: ["US"] },
    "America/Metlakatla": { countries: ["US"] },
    "America/Yakutat": { countries: ["US"] },
    "America/Nome": { countries: ["US"] },
    "America/Adak": { countries: ["US"] },
    "Pacific/Honolulu": { countries: ["US", "UM"] },
    "America/Montevideo": { countries: ["UY"] },
    "Asia/Samarkand": { countries: ["UZ"] },
    "Asia/Tashkent": { countries: ["UZ"] },
    "America/Caracas": { countries: ["VE"] },
    "Asia/Ho_Chi_Minh": { countries: ["VN"] },
    "Pacific/Efate": { countries: ["VU"] },
    "Pacific/Apia": { countries: ["WS"] },
    "Africa/Johannesburg": { countries: ["ZA", "LS", "SZ"] },
    "America/Antigua": { countries: ["AG"] },
    "America/Anguilla": { countries: ["AI"] },
    "Africa/Luanda": { countries: ["AO"] },
    "Antarctica/McMurdo": { countries: ["AQ"] },
    "Antarctica/DumontDUrville": { countries: ["AQ"] },
    "Antarctica/Syowa": { countries: ["AQ"] },
    "Antarctica/Vostok": { countries: ["AQ"] },
    "America/Aruba": { countries: ["AW"] },
    "Europe/Mariehamn": { countries: ["AX"] },
    "Europe/Sarajevo": { countries: ["BA"] },
    "Africa/Ouagadougou": { countries: ["BF"] },
    "Asia/Bahrain": { countries: ["BH"] },
    "Africa/Bujumbura": { countries: ["BI"] },
    "Africa/Porto-Novo": { countries: ["BJ"] },
    "America/St_Barthelemy": { countries: ["BL"] },
    "Asia/Brunei": { countries: ["BN"] },
    "America/Kralendijk": { countries: ["BQ"] },
    "America/Nassau": { countries: ["BS"] },
    "Africa/Gaborone": { countries: ["BW"] },
    "America/Blanc-Sablon": { countries: ["CA"] },
    "America/Atikokan": { countries: ["CA"] },
    "America/Creston": { countries: ["CA"] },
    "Indian/Cocos": { countries: ["CC"] },
    "Africa/Kinshasa": { countries: ["CD"] },
    "Africa/Lubumbashi": { countries: ["CD"] },
    "Africa/Bangui": { countries: ["CF"] },
    "Africa/Brazzaville": { countries: ["CG"] },
    "Africa/Douala": { countries: ["CM"] },
    "America/Curacao": { countries: ["CW"] },
    "Indian/Christmas": { countries: ["CX"] },
    "Europe/Busingen": { countries: ["DE"] },
    "Africa/Djibouti": { countries: ["DJ"] },
    "Europe/Copenhagen": { countries: ["DK"] },
    "America/Dominica": { countries: ["DM"] },
    "Africa/Asmara": { countries: ["ER"] },
    "Africa/Addis_Ababa": { countries: ["ET"] },
    "Pacific/Chuuk": { countries: ["FM"] },
    "Pacific/Pohnpei": { countries: ["FM"] },
    "Africa/Libreville": { countries: ["GA"] },
    "America/Grenada": { countries: ["GD"] },
    "Europe/Guernsey": { countries: ["GG"] },
    "Africa/Accra": { countries: ["GH"] },
    "Africa/Banjul": { countries: ["GM"] },
    "Africa/Conakry": { countries: ["GN"] },
    "America/Guadeloupe": { countries: ["GP"] },
    "Africa/Malabo": { countries: ["GQ"] },
    "Europe/Zagreb": { countries: ["HR"] },
    "Europe/Isle_of_Man": { countries: ["IM"] },
    "Atlantic/Reykjavik": { countries: ["IS"] },
    "Europe/Jersey": { countries: ["JE"] },
    "Asia/Phnom_Penh": { countries: ["KH"] },
    "Indian/Comoro": { countries: ["KM"] },
    "America/St_Kitts": { countries: ["KN"] },
    "Asia/Kuwait": { countries: ["KW"] },
    "America/Cayman": { countries: ["KY"] },
    "Asia/Vientiane": { countries: ["LA"] },
    "America/St_Lucia": { countries: ["LC"] },
    "Europe/Vaduz": { countries: ["LI"] },
    "Africa/Maseru": { countries: ["LS"] },
    "Europe/Luxembourg": { countries: ["LU"] },
    "Europe/Monaco": { countries: ["MC"] },
    "Europe/Podgorica": { countries: ["ME"] },
    "America/Marigot": { countries: ["MF"] },
    "Indian/Antananarivo": { countries: ["MG"] },
    "Pacific/Majuro": { countries: ["MH"] },
    "Europe/Skopje": { countries: ["MK"] },
    "Africa/Bamako": { countries: ["ML"] },
    "Pacific/Saipan": { countries: ["MP"] },
    "Africa/Nouakchott": { countries: ["MR"] },
    "America/Montserrat": { countries: ["MS"] },
    "Africa/Blantyre": { countries: ["MW"] },
    "Asia/Kuala_Lumpur": { countries: ["MY"] },
    "Africa/Niamey": { countries: ["NE"] },
    "Europe/Amsterdam": { countries: ["NL"] },
    "Europe/Oslo": { countries: ["NO"] },
    "Asia/Muscat": { countries: ["OM"] },
    "Indian/Reunion": { countries: ["RE"] },
    "Africa/Kigali": { countries: ["RW"] },
    "Indian/Mahe": { countries: ["SC"] },
    "Europe/Stockholm": { countries: ["SE"] },
    "Atlantic/St_Helena": { countries: ["SH"] },
    "Europe/Ljubljana": { countries: ["SI"] },
    "Arctic/Longyearbyen": { countries: ["SJ"] },
    "Europe/Bratislava": { countries: ["SK"] },
    "Africa/Freetown": { countries: ["SL"] },
    "Europe/San_Marino": { countries: ["SM"] },
    "Africa/Dakar": { countries: ["SN"] },
    "Africa/Mogadishu": { countries: ["SO"] },
    "America/Lower_Princes": { countries: ["SX"] },
    "Africa/Mbabane": { countries: ["SZ"] },
    "Indian/Kerguelen": { countries: ["TF"] },
    "Africa/Lome": { countries: ["TG"] },
    "America/Port_of_Spain": { countries: ["TT"] },
    "Pacific/Funafuti": { countries: ["TV"] },
    "Africa/Dar_es_Salaam": { countries: ["TZ"] },
    "Africa/Kampala": { countries: ["UG"] },
    "Pacific/Midway": { countries: ["UM"] },
    "Pacific/Wake": { countries: ["UM"] },
    "Europe/Vatican": { countries: ["VA"] },
    "America/St_Vincent": { countries: ["VC"] },
    "America/Tortola": { countries: ["VG"] },
    "America/St_Thomas": { countries: ["VI"] },
    "Pacific/Wallis": { countries: ["WF"] },
    "Asia/Aden": { countries: ["YE"] },
    "Indian/Mayotte": { countries: ["YT"] },
    "Africa/Lusaka": { countries: ["ZM"] },
    "Africa/Harare": { countries: ["ZW"] },
  },
};
spAnalyticsConfig = {
  apiEndpoint: "https://script.google.com/macros/s/AKfycbwz6bdoXuza9F2rC6glMH5uFm2XdWjWwEY_5nuR32UsdetPJqxojYWc7AapcUj2UAXU/exec",
};
// List of modern Indian names for people aged 18-30 interested in fashion and interior design
const indianNames = [
  "Aryan",
  "Aarav",
  "Ishaan",
  "Vivaan",
  "Advait",
  "Reyansh",
  "Vihaan",
  "Arjun",
  "Kabir",
  "Dhruv",
  "Amaira",
  "Anaya",
  "Aadhya",
  "Avni",
  "Kyra",
  "Myra",
  "Shanaya",
  "Zara",
  "Aanya",
  "Navya",
  "Ahaan",
  "Shaurya",
  "Virat",
  "Arnav",
  "Ayaan",
  "Rohan",
  "Krish",
  "Neha",
  "Riya",
  "Ishita",
  "Tara",
  "Mira",
  "Dia",
  "Anvi",
  "Kiara",
  "Nyra",
  "Aditi",
  "Saisha",
  "Dev",
  "Tanvi",
  "Elakshi",
  "Mannat",
  "Riaan",
  "Prisha",
  "Anika",
];

const notification = document.getElementById("notification");
const nameElement = document.getElementById("name");
const timeElement = document.getElementById("time");
const avatarElement = document.getElementById("avatar");
const progressElement = document.getElementById("progress");

// Flag to track if notification is currently visible
let isNotificationVisible = false;

// Variable to store the interval ID
let notificationInterval;

function showNotification() {
  // Only proceed if notification is not already visible
  if (isNotificationVisible) return;

  isNotificationVisible = true;

  // Generate random name and time
  const randomName =
    indianNames[Math.floor(Math.random() * indianNames.length)];
  const randomMinutes = Math.floor(Math.random() * 15) + 1;

  // Set content
  nameElement.textContent = `${randomName} enquired about Fashion Design`;
  timeElement.textContent = `${randomMinutes} minute${randomMinutes > 1 ? "s" : ""} ago`;
  avatarElement.textContent = randomName.charAt(0);

  // Reset animation
  progressElement.style.animation = "none";
  void progressElement.offsetWidth; // Trigger reflow
  progressElement.style.animation = "progressShrink 3500ms linear forwards";

  // Show notification
  notification.classList.add("show");

  // Hide after 3-4 seconds (random between 3000-4000ms)
  const displayTime = Math.floor(Math.random() * 1000) + 3000;
  setTimeout(() => {
    notification.classList.remove("show");

    // Set flag to false after notification is hidden and a small delay
    setTimeout(() => {
      isNotificationVisible = false;
    }, 500);
  }, displayTime);
}

// Function to start the notifications
function startNotifications() {
  // Show first notification immediately
  showNotification();

  // Clear any existing interval
  if (notificationInterval) {
    clearInterval(notificationInterval);
  }

  // Set up the interval to trigger every 30 seconds
  notificationInterval = setInterval(() => {
    if (!isNotificationVisible) {
      showNotification();
    }
  }, 30000);
}

// Start the notifications when the page loads
document.addEventListener("DOMContentLoaded", startNotifications);

// If the page is already loaded, start notifications immediately
if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  startNotifications();
}



