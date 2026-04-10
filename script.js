const wordFrequencies = {
  "БЛЮДОЛИ́З": [20, 10, 6, 4, 8, 12, 16, 10, 6, 4, 3, 1, 0],
  "ВЕРТЕ́П БЛУДНИ́ЧЕН": [30, 15, 7, 4, 7, 11, 15, 7, 4, 0, 0, 0, 0],
  "ВЕРХОГЛЯ́Д": [4, 17, 50, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "ВЗДЕВА́ТЬ": [18, 9, 0, 0, 9, 18, 27, 18, 9, 0, 0, 0, 0],
  "ВОЗГРЕ́Й": [25, 0, 0, 0, 0, 25, 25, 0, 0, 0, 0, 0, 0],
  "ВРЕТИЩЕ": [18, 12, 6, 6, 12, 18, 24, 12, 6, 0, 0, 0, 0],
  "ДАБЫ́": [1, 5, 5, 1, 3, 7, 19, 31, 19, 6, 2, 1, 0],
  "ДОМОДЕРЖА́ВСТВО": [23, 13, 8, 5, 10, 15, 20, 13, 8, 3, 0, 0, 0],
  "ДОСТОХВА́ЛЬНЫЙ": [22, 12, 8, 6, 10, 14, 18, 12, 8, 4, 2, 0, 0],
  "ЗЕРЦА́ЛО": [7, 36, 21, 7, 7, 7, 7, 7, 0, 1, 0, 0, 0],
  "И́БО": [19, 10, 6, 4, 9, 13, 16, 11, 6, 3, 1, 1, 0],
  "ИЗБОЧЕНЯ́СЬ": [24, 14, 10, 5, 10, 14, 19, 14, 10, 5, 0, 0, 0],
  "ИСТУПИ́ТЬСЯ": [25, 12, 6, 6, 12, 19, 25, 12, 6, 0, 0, 0, 0],
  "ОБИНЯ́КАМИ": [25, 14, 7, 7, 11, 18, 25, 14, 7, 4, 0, 0, 0],
  "ПОБРАТЕ́НИК": [24, 14, 10, 5, 10, 14, 19, 14, 10, 5, 0, 0, 0],
  "ПОХУ́ЛКА": [25, 12, 6, 6, 12, 19, 25, 12, 6, 0, 0, 0, 0],
  "ПОДЛЕЩА́ТЬСЯ": [22, 11, 7, 4, 7, 15, 22, 15, 7, 4, 0, 0, 0],
  "ПРЕМЕНЕ́НИЕ": [21, 11, 8, 5, 11, 16, 21, 13, 8, 3, 0, 0, 0],
  "ПРО́ТАРИ": [19, 12, 6, 6, 12, 19, 25, 12, 6, 0, 0, 0, 0],
  "ПРОТОРЖЛИ́ВОСТЬ": [24, 14, 10, 5, 10, 14, 24, 14, 10, 5, 0, 0, 0],
  "РА́ВЕНСТНИКИ": [23, 12, 8, 4, 12, 19, 23, 15, 8, 4, 0, 0, 0],
  "ЧЕРВОТО́ЧИНА": [20, 10, 5, 5, 10, 15, 20, 15, 10, 5, 0, 0, 0],
  "ЧУЖЕЛО́ЖСТВО": [25, 14, 7, 7, 11, 18, 21, 14, 7, 4, 0, 0, 0],
  "ША́Х": [24, 12, 8, 4, 12, 16, 20, 12, 8, 4, 0, 0, 0],
  "ШЛЯ́ХТИЧ": [9, 20, 5, 3, 3, 12, 21, 18, 9, 0, 0, 0, 0],
  "ЭКЗЕРЦИ́ЦИЯ": [21, 12, 7, 5, 9, 14, 19, 12, 7, 2, 0, 0, 0],
  "ЗАОБЫЧА́ЕН": [20, 13, 7, 7, 13, 20, 27, 13, 7, 0, 0, 0, 0],
  "ЗАО́ЧНО": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "ЗАЗО́РНЫЙ": [22, 11, 6, 6, 11, 17, 22, 11, 6, 0, 0, 0, 0],
  "ЗЕЛО́": [4, 17, 17, 9, 13, 13, 13, 9, 4, 1, 0, 0, 0],
  "КАКО́В ИГУ́МЕН, ТАКОВА́ И БРА́ТИЯ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "КОЛОБРО́ДИТЬ": [22, 11, 7, 4, 11, 18, 22, 15, 7, 4, 0, 0, 0],
  "КТО ХО́ДИТ НЕ ЗВАН, ТОТ НЕ ОТХО́ДИТ НЕ ДРАН": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "ЛЕ́ПО": [24, 14, 7, 7, 10, 17, 24, 14, 7, 4, 0, 0, 0],
  "МЗДА́": [2, 6, 6, 2, 5, 9, 15, 26, 22, 7, 0, 0, 0],
  "МИЛОСЕ́РДОВАТЬ": [21, 13, 8, 4, 8, 17, 21, 13, 8, 4, 0, 0, 0],
  "НАИПА́ЧЕ": [22, 11, 7, 4, 11, 18, 22, 15, 7, 4, 0, 0, 0],
  "НЕ МОЛВЯ́ СЛО́ВА, КРЕПИ́СЬ, А ДАВ СЛО́ВО, ДЕРЖИ́СЬ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "ОБЕЩА́ТЬ — ТО ДВОРЯ́НСКИ, А СЛО́ВО ДЕРЖА́ТЬ — ТО КРЕСТЬЯ́НСКИ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "ПА́КИ": [22, 11, 6, 6, 11, 17, 22, 11, 6, 0, 0, 0, 0],
  "ПОЖИ́ТКИ": [22, 11, 6, 6, 11, 17, 22, 11, 6, 0, 0, 0, 0],
  "ПОЗЫВА́ТЬСЯ": [21, 14, 7, 7, 14, 21, 21, 14, 7, 0, 0, 0, 0],
  "СМИРЕ́НИЕ — МОЛОДЦУ́ ОЖЕРЕ́ЛЬЕ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "СО ЛЖИ́ ЛЮ́ДИ НЕ МРУТ, А ВПРЕДЬ ВЕ́РЫ НЕ И́МУТ": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  "УШНО́Е": [24, 14, 10, 5, 10, 14, 19, 10, 5, 0, 0, 0, 0],
  "ЧЕЛЯДИ́НЕЦ": [22, 11, 7, 4, 11, 15, 22, 11, 7, 4, 0, 0, 0]
};

const years = [1700, 1725, 1750, 1775, 1800, 1825, 1850, 1875, 1900, 1925, 1950, 1975, 2000];

function createFrequencyChart(word) {
  const data = wordFrequencies[word];
  if (!data || data.every(v => v === 0)) return null;
  
  const maxVal = Math.max(...data);
  if (maxVal === 0) return null;
  
  const width = 400;
  const height = 200;
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  
  const points = data.map((val, i) => {
    const x = padding + (i / (data.length - 1)) * chartWidth;
    const y = padding + chartHeight - (val / maxVal) * chartHeight;
    return `${x},${y}`;
  }).join(' ');
  
  const areaPoints = `${padding},${padding + chartHeight} ${points} ${padding + chartWidth},${padding + chartHeight}`;
  const safeId = word.replace(/[^a-zA-ZА-Яа-я]/g, '');
  
  return `<svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" class="frequency-chart">
    <defs><linearGradient id="cg${safeId}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#B8860B;stop-opacity:0.6"/><stop offset="100%" style="stop-color:#B8860B;stop-opacity:0.1"/></linearGradient></defs>
    <g stroke="rgba(184,134,11,0.2)" stroke-width="0.5">${[0,4,8,12].map(i => { const x = padding + (i/(years.length-1))*chartWidth; return `<line x1="${x}" y1="${padding}" x2="${x}" y2="${padding+chartHeight}"/>`; }).join('')}<line x1="${padding}" y1="${padding}" x2="${padding+chartWidth}" y2="${padding}"/><line x1="${padding}" y1="${padding+chartHeight/2}" x2="${padding+chartWidth}" y2="${padding+chartHeight/2}"/><line x1="${padding}" y1="${padding+chartHeight}" x2="${padding+chartWidth}" y2="${padding+chartHeight}"/></g>
    <polygon points="${areaPoints}" fill="url(#cg${safeId})"/>
    <polyline points="${points}" fill="none" stroke="#8B6914" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    ${data.map((val, i) => { const x = padding + (i/(years.length-1))*chartWidth; const y = padding+chartHeight-(val/maxVal)*chartHeight; return val > 0 ? `<circle cx="${x}" cy="${y}" r="4" fill="#B8860B" stroke="#8B6914" stroke-width="1.5"/><text x="${x}" y="${y-8}" text-anchor="middle" font-size="9" fill="#5C4033">${val}</text>` : ''; }).join('')}
    <line x1="${padding}" y1="${padding}" x2="${padding}" y2="${padding+chartHeight}" stroke="#5C4033" stroke-width="1.5"/>
    <line x1="${padding}" y1="${padding+chartHeight}" x2="${padding+chartWidth}" y2="${padding+chartHeight}" stroke="#5C4033" stroke-width="1.5"/>
    ${[0,4,8,12].map(i => { const x = padding + (i/(years.length-1))*chartWidth; return `<text x="${x}" y="${padding+chartHeight+18}" text-anchor="middle" font-size="10" fill="#5C4033">${years[i]}</text>`; }).join('')}
    <text x="${width/2}" y="${height-5}" text-anchor="middle" font-size="11" fill="#5C4033" font-style="italic">Годы</text>
    <text x="15" y="${height/2}" text-anchor="middle" font-size="11" fill="#5C4033" font-style="italic" transform="rotate(-90 15 ${height/2})">Частота</text>
  </svg>`;
}

const wordImageMap = {
  'БЛЮДОЛИЗ': 'bludoliz',
  'ВЕРТЕПБЛУДНИЧ': 'vertep',
  'ВЕРХОГЛЯД': 'verkhoglyad',
  'ВЗДЕВАТЬ': 'vzdevat',
  'ВОЗГРЕЙ': 'vozgrei',
  'ВРЕТИЩЕ': 'vretishche',
  'ДАБЫ': 'daby',
  'ДОМОДЕРЖАВСТВО': 'domoderzhavstvo',
  'ДОСТОХВАЛЬНЫЙ': 'dostokhvalny',
  'ЗАЗОРНЫЙ': 'zazorny',
  'ЗЕЛО': 'zelo',
  'ЗЕРЦАЛО': 'zerkalo',
  'ИБО': 'ibo',
  'ИЗБОЧЕНЯСЬ': 'izbochenias',
  'ИСТУПИТЬСЯ': 'istupitsia',
  'КОЛОБРОДИТЬ': 'kolobrodit',
  'ЛЕПО': 'lepo',
  'МЗДА': 'mzda',
  'МИЛОСЕРДОВАТЬ': 'miloserdovat',
  'ОБИНЯКАМИ': 'obinyakami',
  'ПОБРАТЕНИК': 'pobratenik',
  'ПОЖИТКИ': 'pozhitki',
  'ПОХУЛКА': 'pokhulka',
  'ПОДЛЕЩАТЬСЯ': 'podleschatysia',
  'ПРЕМЕНЕНИЕ': 'preminenie',
  'ПРОТАРИ': 'protari',
  'ПРОТОРЖЛИВОСТЬ': 'protorzhlivost',
  'РАВЕНСТНИКИ': 'ravenstniki',
  'СМИРЕНИЕМОЛОДЦУ': 'smirenije',
  'СОЛЖИЛЮДИ': 'so_lzhi',
  'УШНОЕ': 'ushnoe',
  'ЧЕЛЯДИНЕЦ': 'chelyadinec',
  'ЧЕРВОТОЧИНА': 'chervotochina',
  'ЧУЖЕЛОЖСТВО': 'chuzhelorzhstvo',
  'ШЛЯХТИЧ': 'shlyakhtich',
  'ЭКЗЕРЦИЦИЯ': 'ekzerzitsiya'
};

function getImageKey(word) {
  const key = word.toUpperCase().replace(/[́«»'",]/g, '').substring(0, 15);
  for (const [prefix, value] of Object.entries(wordImageMap)) {
    if (key.startsWith(prefix)) {
      return value;
    }
  }
  return null;
}

function getIllustration(word) {
  const imageKey = getImageKey(word);
  if (!imageKey) return null;
  return engravings[imageKey] || null;
}

const words = [
  { word: "БЛЮДОЛИ́З", modern_meaning: "Прихлебатель, приживальщик, подхалим (по МАС).", examples: ["И такие люди бывают только обманщики денежные и блюдолизы. [ЮЧЗ]"], history: "", category: "архаизм", timeline: [
    { year: "1717", period: "XVIII век", text: "В 'Юности честное зерцало' — о человеке, который подлизывается к богатым ради наживы.", quote: "И такие люди бывают только обманщики денежные и блюдолизы." },
    { year: "1857", period: "XIX век", text: "Гончаров в 'Фрегате Паллада' использует слово в значении французского pique-assiette — прихлебателя, приживальщика.", quote: "Я pique-assiette [блюдолиз, прихлебатель — фр.] от Лондона до Едо." },
    { year: "1882", period: "XIX век", text: "Лесков в 'Жидовской кувырколлегии' употребляет слово для ироничной характеристики притязаний на знатное происхождение.", quote: "Имел твердое намерение доказать свое прямое родство с какою-то княжескою линиею от Бурбонских блюдолизов." },
    { year: "1929", period: "XX век", text: "Булгаков в 'Кабале святош' использует слово в диалоге о Мольере, подчеркивая унизительное положение льстеца при дворе.", quote: "Ваше величество, где же вы найдете такого другого блюдолиза, как Мольер?" },
    { year: "2025", period: "Современность", text: "Современные синонимы: лизоблюд, подлипала, шаркун, низкопоклонник, подхалим. Используется редко, преимущественно как архаизм.", quote: "Современный вариант: 'Он постоянный подлиза у начальства'" }
  ]},
  { word: "ВЕРТЕ́П БЛУДНИ́ЧЕН", modern_meaning: "Место разврата, притон блуда (оскорбительное сравнение церкви с неподобающим местом).", examples: ["В церкви имеет оный очи свои и сердце весма к Богу обратить и устремить, а не на женской пол, ибо дом Божий, дом молитвы, а не вертеп блудничен. [ЮЧЗ]"], history: "", category: "архаизм" },
  { word: "ВЕРХОГЛЯ́Д", modern_meaning: "Тот, кто отличается верхоглядством; пустослов, фразёр, невежда (по МАС).", examples: ["...а не верхоглядом смотря, надев шляпу, как бы приковану на голове имея, прыгать, и гордитися... [ЮЧЗ, п. 31]"], history: "", category: "архаизм", timeline: [
    { year: "1717", period: "XVIII век", text: "В 'Юности честное зерцало' — человек, который смотрит только на внешность, не вникая в суть дела.", quote: "...а не верхоглядом смотря, надев шляпу... прыгать, и гордитися..." },
    { year: "1833", period: "XIX век", text: "Лажечников в 'Последнем новике' упоминает верхоглядов как пустых болтунов, имеющих свои приноровления.", quote: "Пузыри, болтуны, верхогляды, недолеты, перелеты имели также свои приноровления. — И.И. Лажечников, 'Последний новик'" },
    { year: "1856", period: "XIX век", text: "Островский в 'Доходном месте' использует слово для характеристики образованных, но поверхностных людей.", quote: "По службе нельзя… особенно верхоглядов не люблю, нынешних образованных-то. — А.Н. Островский, 'Доходное место'" },
    { year: "1859", period: "XIX век", text: "Добролюбов в 'Тёмном царстве' пишет о неприязни к верхоглядам-образованцам.", quote: "Юсов простодушно признает, что он гордости ни с кем не имеет, только вот верхоглядов не любит, нынешних образованных-то. — Н.А. Добролюбов, 'Тёмное царство'" },
    { year: "1880", period: "XIX век", text: "Писемский в 'Масонах' противопоставляет верхогляда человеку практическому и опытному.", quote: "Я буду благонамеренный и опытный губернатор, ибо я не верхогляд, а человек практический. — А.Ф. Писемский, 'Масоны'" },
    { year: "2025", period: "Современность", text: "Современные синонимы: пустослов, фразёр, невежда, обманщик, шарлатан. Используется редко, преимущественно как архаизм.", quote: "Современный вариант: 'Он такой поверхностный, только внешность оценивает'" }
  ]},
  { word: "ВЗДЕВА́ТЬ", modern_meaning: "Надевать (шапку, шляпу на голову).", examples: ["И когда от родителей что им приказано бывает, всегда шляпу в руках держать, а пред ними не вздевать. [ЮЧЗ]"], history: "", category: "архаизм" },
  { word: "ВОЗГРЕ́Й", modern_meaning: "Сопля, носовая слизь.", examples: ["Никто честновоспитанный возгрей (соплей) в нос не втягает, подобно как бы часы кто заводил, а потом гнусным образом оные вниз не глотает. [ЮЧЗ]"], history: "", category: "архаизм" },
  { word: "ВРЕ́ТИЩЕ", modern_meaning: "Грубая мешковина, одежда из неё как символ покаяния, скорби или смирения.", examples: ["...тогда в знак смирения своего облекались во вретище и посыпали пепелом главы свои… [ЮЧЗ, раздел «Девическое смирение»]"], history: "", category: "историзм" },
  { word: "ДАБЫ́", modern_meaning: "Чтобы (книжн., устар.).", examples: ["По сей добродетели следует милосердие, что человек милосердует о нищем, и со благонравием сожаление и терпение имеет, дабы и ему взаимно помощи рука следовать могла. [ЮЧЗ]"], history: "", category: "книжное", timeline: [
    { year: "1717", period: "XVIII век", text: "В 'Зерцале' — широко используется как союз цели, аналог 'чтобы'. Стандартное слово деловой речи.", quote: "...дабы и ему взаимно помощи рука следовать могла." },
    { year: "1820", period: "XIX век", text: "У Пушкина в стихах и прозе. У Толстого — в религиозных и философских текстах. Сохраняет книжный оттенок.", quote: "Пушкин: 'Дабы вечно сохранить...' (в стихах)" },
    { year: "1980", period: "XX век", text: "Сохраняется в официально-деловой речи, церковных текстах и высоком стиле. В разговорной речи редко.", quote: "Официальные документы: 'Дабы избежать недоразумений...'" },
    { year: "2025", period: "Современность", text: "Современный аналог: 'чтобы', 'для того чтобы'. Используется в юридических, церковных и торжественных текстах для придания весомости.", quote: "Юридические тексты: 'Дабы обеспечить соблюдение...'" }
  ]},
  { word: "ДОМОДЕРЖА́ВСТВО", modern_meaning: "Экономия, хозяйственность; иногда — прикрытие для скупости.", examples: ["Хотя в нынешнее время безмерная скупость у некоторых за обычай принята, и оные хотят ее за домодержавство почитать, только чтоб могли денег скопить, несмотря на свою честь и не храня славы. [ЮЧЗ]"], history: "" },
  { word: "ДОСТОХВА́ЛЬНЫЙ", modern_meaning: "Заслуживающий похвалы, достойный одобрения, похвальный.", examples: ["Имеет отрок наипаче всех человек прилежать, как бы себя мог учинить благочестна и добродетельна; ибо не славная его фамилия, и не высокой род приводит его в шляхетство, но благочестные и достохвальные его поступки. [ЮЧЗ]"], history: "" },
  { word: "ЗАОБЫЧА́ЕН", modern_meaning: "Привыкший к чему-либо (обычно с отрицательным оттенком), имеющий дурную привычку.", examples: ["Молодой отрок да не будет пересмешлив или дурацким шуткам заобычаен... [ЮЧЗ, п. 25]"], history: "" },
  { word: "ЗАО́ЧНО", modern_meaning: "В отсутствие того, о ком идёт речь (не «дистанционно»).", examples: ["Всегда недругов заочно, когда они не слышат, хвали, а в присутствии их почитай. [ЮЧЗ]"], history: "", category: "изменившее значение" },
  { word: "ЗАЗО́РНЫЙ", modern_meaning: "Стыдливая, скромная, боящаяся позора (о девице).", examples: ["Стыдливая (зазорная) девица не только в лице краснеет, но и стыдливые имеет уши. [ЮЧЗ, раздел «Девическое целомудрие»]"], history: "", category: "архаизм" },
  { word: "ЗЕЛО́", modern_meaning: "Очень, весьма (по МАС).", examples: ["Также излишняя роскошь и прихотливые протари зело не похваляются. [ЮЧЗ]"], history: "", category: "архаизм", timeline: [
    { year: "1717", period: "XVIII век", text: "В 'Юности честное зерцало' — усилительная частица, аналог 'очень'. Широко используется в деловой речи.", quote: "...прихотливые протари зело не похваляются." },
    { year: "1833", period: "XIX век", text: "Лажечников в 'Последнем новике' использует слово для характеристики рассудительной умеренности.", quote: "Учтивое приятельство, которое зело потребно к покорению сердец. — И.И. Лажечников, 'Последний новик'" },
    { year: "1855", period: "XIX век", text: "Аксаков в 'Рассказах охотника' употребляет слово в значении 'очень', 'весьма'.", quote: "Зело потешно, и угодно, и весело, да не одолеют вас кручины и печали всякие. — С.Т. Аксаков" },
    { year: "1857", period: "XIX век", text: "Салтыков-Щедрин в 'Губернских очерках' использует слово в стилизации под старину.", quote: "Отвалил он от пещер тех камень зело велик, отворил сокровищницу тайную. — М.Е. Салтыков-Щедрин" },
    { year: "1892", period: "XIX век", text: "Мамин-Сибиряк в 'Охониных бровях' употребляет слово в разговорной речи персонажей.", quote: "У игумна Моисея зело добрый травник. — Д.Н. Мамин-Сибиряк" },
    { year: "2025", period: "Современность", text: "Современные синонимы: чрезвычайно, чертовски, оченно, крайне, очень. Используется редко, преимущественно как архаизм или в ироничном контексте.", quote: "Современная речь: 'Зело интересно!' (иронично)" }
  ]},
  { word: "ЗЕРЦА́ЛО", modern_meaning: "Зеркало (устар.); также — образец, назидательное пособие.", examples: [], history: "", category: "изменившее значение", timeline: [
    { year: "1717", period: "XVIII век", text: "В названии книги 'Юности честное зерцало' — как отражение идеала поведения. Используется в значении 'зеркало' и 'образец'.", quote: "Юности честное зерцало — как зеркало, в котором юноша видит свой идеал." },
    { year: "1800", period: "XIX век", text: "У Карамзина в 'Истории государства Российского' — в значении источника, отражающего историческую правду.", quote: "Карамзин: 'История — зерцало прошлого'" },
    { year: "1950", period: "XX век", text: "Используется в поэтической и церковной речи. В быту полностью вытеснено словом 'зеркало'.", quote: "Церковные тексты: 'Пове́рз зерца́ло'" },
    { year: "2025", period: "Современность", text: "Современный аналог: 'зеркало'. В переносном смысле — 'отражение', 'образец', 'эталон'. В церковном контексте сохраняется.", quote: "Современная речь: 'История — зеркало прошлого'" }
  ]},
  { word: "И́БО", modern_meaning: "Потому что, так как.", examples: ["Ибо когда кто господину верно служит, то надобна ему верная и надеждная награда. [ЮЧЗ]"], history: "", category: "книжное" },
  { word: "ИЗБОЧЕНЯ́СЬ", modern_meaning: "Склонившись набок, сидя или стоя криво, не прямо.", examples: ["...но должны тихо и смирно, прямо, а не избоченясь сидеть. [ЮЧЗ]"], history: "" },
  { word: "ИСТУПИ́ТЬСЯ", modern_meaning: "Притупиться, затупиться (о разуме, уме).", examples: ["...а разум их затмится и иступится, потом из того добра никакого ожидать нельзя, кроме дряхлого тела и червоточины, которое с лености тучно бывает. [ЮЧЗ]"], history: "" },
  { word: "КАКО́В ИГУ́МЕН, ТАКОВА́ И БРА́ТИЯ", modern_meaning: "Каков начальник, таковы и подчинённые.", examples: ["Ибо не напрасно пословица говорится: «Каков игумен, такова и братия». [ЮЧЗ]"], history: "", category: "пословица" },
  { word: "КОЛОБРО́ДИТЬ", modern_meaning: "Вести себя беспокойно, ерзать, шалить.", examples: ["Не прилично им руками или ногами по столу везде колобродить, смирно есть. [ЮЧЗ]"], history: "" },
  { word: "КТО ХО́ДИТ НЕ ЗВАН, ТОТ НЕ ОТХО́ДИТ НЕ ДРАН", modern_meaning: "Незваный гость может получить отпор.", examples: ["...незванный захочет посесть званного и возбудит великое неспокойство, ибо говорится: «Кто ходит не зван, тот не отходит не дран». [ЮЧЗ]"], history: "", category: "пословица" },
  { word: "ЛЕ́ПО", modern_meaning: "Красиво, пристойно, подобающим образом, хорошо.", examples: ["Сия добродетель весма преизящна и украшает девиц безмерно лепо. [ЮЧЗ]"], history: "" },
  { word: "МЗДА́", modern_meaning: "Плата, вознаграждение, воздаяние (по МАС).", examples: ["А особенно, когда кто их известную мзду задержит, как некоторые в том мало совести имеют. [ЮЧЗ]"], history: "", category: "архаизм", timeline: [
    { year: "1717", period: "XVIII век", text: "В 'Юности честное зерцало' — плата, вознаграждение. Часто в негативном контексте взятки или нечестного вознаграждения.", quote: "...когда кто их известную мзду задержит..." },
    { year: "1790", period: "XVIII век", text: "Радищев в 'Путешествии из Петербурга в Москву' использует слово в философском контексте о достоинстве и заслуге.", quote: "Мзда не радящему о стяжании достоинству и заслуге. — А.Н. Радищев" },
    { year: "1858", period: "XIX век", text: "Добролюбов в 'Русской цивилизации' цитирует церковный текст о лихоимцах, берущих мзду.", quote: "Лихоимец ли кто, — не перестает брать мзду. — Н.А. Добролюбов" },
    { year: "1892", period: "XIX век", text: "Лесков в 'Юдоли' упоминает мзду в церковном контексте, связывая с блудом и нечестным заработком.", quote: "Да не принесеши в храм мзды блудничи и цены песии. — Н.С. Лесков, 'Юдоль'" },
    { year: "1895", period: "XIX век", text: "Мамин-Сибиряк в 'Хлебе' описывает коррупцию: исправник берет мзду за удостоверение беспаспортных.", quote: "Исправник... приняв мзду, вез тело в следующий пункт. — Д.Н. Мамин-Сибиряк" },
    { year: "1928", period: "XX век", text: "Гиляровский в 'Моих скитаниях' описывает тайную мзду квартальному за покрывательство беспаспортных.", quote: "Контора уплачивает тайную мзду квартальному за удостоверение беспаспортных. — В.А. Гиляровский" },
    { year: "2025", period: "Современность", text: "Современные синонимы: взятка, бакшиш, хабар, вознаграждение, жалование. Используется редко, преимущественно в историческом или ироничном контексте.", quote: "Современная речь: 'Не за малую мзду' (иронично)" }
  ]},
  { word: "МИЛОСЕ́РДОВАТЬ", modern_meaning: "Проявлять милосердие, жалеть, прощать.", examples: ["По сей добродетели следует милосердие, что человек милосердует о нищем… [ЮЧЗ]"], history: "", category: "архаизм" },
  { word: "НАИПА́ЧЕ", modern_meaning: "Более всего, особенно.", examples: ["Во-первых, наипаче всего должны дети отца и матерь в великой чести содержать. [ЮЧЗ]"], history: "" },
  { word: "НЕ МОЛВЯ́ СЛО́ВА, КРЕПИ́СЬ, А ДАВ СЛО́ВО, ДЕРЖИ́СЬ", modern_meaning: "Не обещай необдуманно, но если обещал — исполни.", examples: ["...пословица гласит: «Не молвя слова крепись, а дав слово держись». [ЮЧЗ]"], history: "", category: "пословица" },
  { word: "ОБЕЩА́ТЬ — ТО ДВОРЯ́НСКИ, А СЛО́ВО ДЕРЖА́ТЬ — ТО КРЕСТЬЯ́НСКИ", modern_meaning: "Ироничное оправдание пустых обещаний (осуждается в книге).", examples: ["...не имеет глупой оной пословице следовать, что говорится: «Обещать, то дворянски, а слово держать, то крестьянски». [ЮЧЗ]"], history: "", category: "пословица" },
  { word: "ОБИНЯ́КАМИ", modern_meaning: "Намёками, иносказательно, не прямо, окольными словами.", examples: ["...но обиняками говори, чтоб дознаться было невозможно, потому что такие люди много приложить и прибавить искусны. [ЮЧЗ]"], history: "" },
  { word: "ПА́КИ", modern_meaning: "Опять, снова.", examples: ["Не выходи из дому твоего без ведома и воли родителей твоих и начальников, и если ты послан будешь, то возвратись паки вскоре. [ЮЧЗ]"], history: "" },
  { word: "ПОБРАТЕ́НИК", modern_meaning: "Названый брат (часто по застолью).", examples: ["...дабы иногда новый побратеник не напал на него бесчестными и необыкновенными словами, что часто случается. [ЮЧЗ]"], history: "" },
  { word: "ПОЖИ́ТКИ", modern_meaning: "Имущество, скарб.", examples: ["...от того же рождается и погибель дому его и разорение пожиткам. [ЮЧЗ]"], history: "" },
  { word: "ПОЗЫВА́ТЬСЯ", modern_meaning: "Напрашиваться, самому вызываться на честь, домогаться почестей.", examples: ["...а не сам на великую честь позывается, но ожидает пока его танцевать или к столу идти с другими пригласят. [ЮЧЗ]"], history: "" },
  { word: "ПОХУ́ЛКА", modern_meaning: "Хула, порицание, нарекание; дурная молва.", examples: ["...других людей пороки и похулки не внушать и не предявлять… [ЮЧЗ]"], history: "" },
  { word: "ПОДЛЕЩА́ТЬСЯ", modern_meaning: "Подлизываться, заискивать, лестью добиваться расположения.", examples: ["...и не допускать, чтоб они всякими глупостями хозяину подлещались, как обычно такие люди делают… [ЮЧЗ]"], history: "" },
  { word: "ПРЕМЕНЕ́НИЕ", modern_meaning: "Изменение, перемена, отступление от правила.", examples: ["...то в таком случае уступки не бывает, но по нужде пременение закону дается. [ЮЧЗ, п. 23]"], history: "" },
  { word: "ПРО́ТАРИ", modern_meaning: "Издержки, расходы.", examples: ["...излишняя роскошь и прихотливые протари зело не похваляются. [ЮЧЗ]"], history: "" },
  { word: "ПРОТОРЖЛИ́ВОСТЬ", modern_meaning: "Расточительность, склонность к излишним тратам.", examples: ["...чтоб в том не было скупости или проторжливости имению. [ЮЧЗ, раздел «Девической чести и добродетелей венец», п. 18]"], history: "" },
  { word: "РА́ВЕНСТНИКИ", modern_meaning: "Сверстники, ровесники.", examples: ["Отрок во всех пирах, банкетах и прочих торжествах и беседах, которыми он равенстников своих потчует… [ЮЧЗ, п. 39]"], history: "" },
  { word: "СМИРЕ́НИЕ — МОЛОДЦУ́ ОЖЕРЕ́ЛЬЕ", modern_meaning: "Скромность украшает молодого человека.", examples: ["...ибо говорится: «Смирение – молодцу ожерелие». [ЮЧЗ]"], history: "", category: "пословица" },
  { word: "СО ЛЖИ́ ЛЮ́ДИ НЕ МРУТ, А ВПРЕДЬ ВЕ́РЫ НЕ И́МУТ", modern_meaning: "Ложь разрушает доверие.", examples: ["Но ведай себе, что и такая есть пословица. Со лжи люди не мрут, а впредь веры не имут. [ЮЧЗ]"], history: "", category: "пословица" },
  { word: "УШНО́Е", modern_meaning: "Похлёбка, суп.", examples: ["…не дуй в ушное, чтоб везде брызгало. [ЮЧЗ]"], history: "" },
  { word: "ЧЕЛЯДИ́НЕЦ", modern_meaning: "Слуга, домашний работник.", examples: ["…служители и челядинцы не двум господам и госпожам, но только одному господину охотно служат. [ЮЧЗ]"], history: "", category: "историзм" },
  { word: "ЧЕРВОТО́ЧИНА", modern_meaning: "Дряблость, тучность от лени.", examples: ["…кроме дряхлого тела и червоточины, которое с лености тучно бывает. [ЮЧЗ]"], history: "" },
  { word: "ЧУЖЕЛО́ЖСТВО", modern_meaning: "Прелюбодеяние, супружеская неверность.", examples: ["От клятвы чужеложства (блуда), играния и пьянства должен каждый отрок себя весьма удержать и от того бегать. [ЮЧЗ]"], history: "", category: "архаизм" },
  { word: "ШЛЯ́ХТИЧ", modern_meaning: "Польский мелкопоместный дворянин (по МАС).", examples: ["Молодой шляхтич или отрок всегда должен быть охоч к научению всякого добра… [ЮЧЗ]"], history: "", category: "историзм", timeline: [
    { year: "1717", period: "XVIII век", text: "В 'Юности честное зерцало' — польско-литовское дворянство. Идеал воспитанного молодого человека.", quote: "Молодой шляхтич... всегда должен быть охоч к научению..." },
    { year: "1868", period: "XIX век", text: "Лажечников в 'Внучке панцирного боярина' использует слово для характеристики польского дворянина.", quote: "Не велика птица! У нас в Витебске кухарка и кучер были из шляхты. — И.И. Лажечников" },
    { year: "1880", period: "XIX век", text: "Достоевский в 'Братьях Карамазовых' использует слово в речи польского персонажа.", quote: "Я рыцарь, я шляхтич, а не лайдак! — Ф.М. Достоевский, 'Братья Карамазовы'" },
    { year: "1886", period: "XIX век", text: "Чехов в 'То была она!' упоминает шляхтича в контексте дворянских разборок.", quote: "Если кто-нибудь вырывал жиду пейсы или бил по мордасам шляхтича, то так и знали, что это подпоручик Вывертов натворил. — А.П. Чехов" },
    { year: "2025", period: "Современность", text: "Современные синонимы: дворянин, магнат, конфедерат, жолнер, кунтуш. Используется только в историческом контексте.", quote: "Исторические тексты: 'Польский шляхтич XVII века'" }
  ]},
  { word: "ЭКЗЕРЦИ́ЦИЯ", modern_meaning: "Упражнение, выучка, обучение.", examples: ["Молодой шляхтич, или дворянин, если в экзерциции (в обучении) своей совершенен… [ЮЧЗ]"], history: "", category: "архаизм" }
];

const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalWord = document.getElementById('modalWord');
const modalMeaning = document.getElementById('modalMeaning');
const examplesList = document.getElementById('examplesList');
const historyContent = document.getElementById('historyContent');
const searchInput = document.querySelector('.search-input');
const alphabetBtns = document.querySelectorAll('.alphabet-btn');
const randomBtn = document.querySelector('.random-btn');
const modalPrev = document.getElementById('modalPrev');
const modalNext = document.getElementById('modalNext');

let currentFilter = 'all';
let currentSearch = '';
let currentCategoryFilter = 'all';
let currentModalIndex = -1;

function getFirstLetter(word) {
    const cleanWord = word.replace(/[«»"]/g, '').trim();
    return cleanWord.charAt(0).toUpperCase();
}

function getCardIcon(index) {
    const isMirror = index % 2 === 0;
    if (isMirror) {
        return `<svg class="card-icon icon-mirror" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="12" cy="12" rx="6" ry="8"/><ellipse cx="12" cy="12" rx="4" ry="6"/><path d="M12 4v2M12 18v2"/></svg>`;
    } else {
        return `<svg class="card-icon icon-feather" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.24 3.24c-3-3-8.54-.82-11.76 2.4-2.22 2.22-3.42 5.22-3.18 7.9.06.74.24 1.44.52 2.1L2 19.22l.88.88 4.58-4.58c.66.28 1.36.46 2.1.52 2.68.24 5.68-.96 7.9-3.18 3.22-3.22 5.4-8.76 2.4-11.76z"/></svg>`;
    }
}

function renderWords() {
    wordsGrid.innerHTML = '';
    
    const filteredWords = words.map((item, index) => ({ item, index })).filter(({ item }) => {
        const firstLetter = getFirstLetter(item.word);
        const matchesLetter = currentFilter === 'all' ||
            (currentFilter === '«' && item.category === 'пословица') ||
            firstLetter === currentFilter;

        const matchesCategory = currentCategoryFilter === 'all' ||
            item.category === currentCategoryFilter;

        const matchesSearch = currentSearch === '' ||
            item.word.toLowerCase().includes(currentSearch.toLowerCase()) ||
            item.modern_meaning.toLowerCase().includes(currentSearch.toLowerCase());

        return matchesLetter && matchesCategory && matchesSearch;
    });
    
    if (filteredWords.length === 0) {
        wordsGrid.innerHTML = '<p class="no-results">Ничего не найдено</p>';
        return;
    }
    
    filteredWords.forEach(({ item, index }, displayIndex) => {
        const card = document.createElement('div');
        card.className = 'word-card';
        card.style.animationDelay = `${displayIndex * 0.05}s`;
        card.dataset.index = index;

        const categoryBadge = item.category ? `<span class="category-badge">${item.category}</span>` : '';

        card.innerHTML = `
            <div class="card-header">
                <h2 class="word-title">${item.word}</h2>
                ${getCardIcon(index)}
            </div>
            ${categoryBadge}
            <p class="card-meaning">${item.modern_meaning}</p>
        `;

        card.addEventListener('click', () => openModal(index));
        wordsGrid.appendChild(card);
    });
}

function renderTimeline(timeline, word) {
    if (!timeline || timeline.length === 0) return '';

    const timelineHTML = timeline.map((point, index) => `
        <div class="timeline-point ${index % 2 === 0 ? 'left' : 'right'}">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-year">${point.year}</div>
                <div class="timeline-period">${point.period}</div>
                <div class="timeline-text">${point.text}</div>
                <div class="timeline-quote">«${point.quote}»</div>
            </div>
        </div>
    `).join('');

    const freqData = wordFrequencies[word] || [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const centuries = [
        { period: 'XVIII', indices: [0, 1, 2, 3], label: '1700-1775' },
        { period: 'XIX', indices: [4, 5, 6, 7], label: '1800-1875' },
        { period: 'XX', indices: [8, 9, 10, 11], label: '1900-1975' },
        { period: 'XXI', indices: [12], label: '2000' }
    ];
    
    const frequencyData = centuries.map(c => {
        const sum = c.indices.reduce((acc, i) => acc + (freqData[i] || 0), 0);
        return { period: c.period, value: sum, label: c.label };
    });

    const maxValue = Math.max(...frequencyData.map(d => d.value));
    const chartBars = frequencyData.map(d => {
        const height = (d.value / maxValue) * 100;
        return `
            <div class="freq-bar-wrapper">
                <div class="freq-bar" style="height: ${height}%;" data-value="${d.value}%"></div>
                <div class="freq-label">${d.period}</div>
                <div class="freq-year">${d.label}</div>
            </div>
        `;
    }).join('');

    return `
        <div class="timeline-section">
            <h4 class="timeline-title">📜 Жизнь слова: от XVIII века до наших дней</h4>
            <div class="timeline-line"></div>
            <div class="timeline-container">
                ${timelineHTML}
            </div>
            <div class="frequency-visual">
                <h5 class="freq-title">Частота употребления по векам</h5>
                <div class="freq-chart">
                    ${chartBars}
                </div>
                <p class="freq-legend">Высота столбца — условная частота использования</p>
            </div>
        </div>
    `;
}

function openModal(index) {
    currentModalIndex = index;
    const item = words[index];

    modalWord.textContent = item.word;
    modalMeaning.textContent = item.modern_meaning;

    examplesList.innerHTML = '';
    if (item.examples && item.examples.length > 0) {
        item.examples.forEach(example => {
            const exampleDiv = document.createElement('div');
            exampleDiv.className = 'example-item';
            exampleDiv.innerHTML = `${example.replace('[ЮЧЗ]', '<span class="example-source">[Юности честное зерцало]</span>')}`;
            examplesList.appendChild(exampleDiv);
        });
    } else {
        examplesList.innerHTML = '<p class="history-placeholder"><span class="scroll-icon">📜</span>Примеры из текста не найдены.</p>';
    }

    let historyHTML = '';

    const timelineHTML = renderTimeline(item.timeline, item.word);
    if (timelineHTML) {
        historyHTML += timelineHTML;
    }

    if (item.history && item.history.trim()) {
        historyHTML += `<div class="history-text"><p>${item.history}</p></div>`;
    }

    if (!timelineHTML && (!item.history || !item.history.trim())) {
        historyHTML += `
            <div class="history-placeholder">
                <span class="scroll-icon">📜</span>
                <p>История слова не найдена. Вы можете дополнить словарь.</p>
            </div>
        `;
    }

    historyContent.innerHTML = historyHTML;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateModal(direction) {
    let newIndex = currentModalIndex + direction;

    if (newIndex < 0) newIndex = words.length - 1;
    if (newIndex >= words.length) newIndex = 0;

    const firstLetter = getFirstLetter(words[newIndex].word);
    const matchesLetter = currentFilter === 'all' ||
        (currentFilter === '«' && words[newIndex].category === 'пословица') ||
        firstLetter === currentFilter;

    const matchesCategory = currentCategoryFilter === 'all' ||
        words[newIndex].category === currentCategoryFilter;

    const matchesSearch = currentSearch === '' ||
        words[newIndex].word.toLowerCase().includes(currentSearch.toLowerCase()) ||
        words[newIndex].modern_meaning.toLowerCase().includes(currentSearch.toLowerCase());

    if (matchesLetter && matchesCategory && matchesSearch) {
        openModal(newIndex);
    } else {
        let checkIndex = newIndex;
        let attempts = 0;
        while (attempts < words.length) {
            const checkLetter = getFirstLetter(words[checkIndex].word);
            const checkMatchesLetter = currentFilter === 'all' ||
                (currentFilter === '«' && words[checkIndex].category === 'пословица') ||
                checkLetter === currentFilter;
            const checkMatchesCategory = currentCategoryFilter === 'all' ||
                words[checkIndex].category === currentCategoryFilter;
            const checkMatchesSearch = currentSearch === '' ||
                words[checkIndex].word.toLowerCase().includes(currentSearch.toLowerCase()) ||
                words[checkIndex].modern_meaning.toLowerCase().includes(currentSearch.toLowerCase());

            if (checkMatchesLetter && checkMatchesCategory && checkMatchesSearch) {
                openModal(checkIndex);
                return;
            }
            checkIndex += direction;
            if (checkIndex < 0) checkIndex = words.length - 1;
            if (checkIndex >= words.length) checkIndex = 0;
            attempts++;
        }
    }
}

function showRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    openModal(randomIndex);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

modalPrev.addEventListener('click', () => navigateModal(-1));
modalNext.addEventListener('click', () => navigateModal(1));

randomBtn.addEventListener('click', showRandomWord);

document.addEventListener('keydown', (e) => {
    if (!modalOverlay.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') navigateModal(-1);
    if (e.key === 'ArrowRight') navigateModal(1);
});

alphabetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alphabetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.letter;
        renderWords();
    });
});

const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategoryFilter = btn.dataset.category;
        renderWords();
    });
});

searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderWords();
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    renderWords();
    
    setTimeout(() => {
        const cards = document.querySelectorAll('.word-card');
        cards.forEach(card => observer.observe(card));
    }, 100);
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        renderWords();
    }, 250);
});
