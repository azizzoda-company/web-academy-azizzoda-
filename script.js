/* =========================================================
   WEB ACADEMY — SCRIPT.JS (ВЕРСИЯИ ПРЕМИУМ)
   AZIZZODA COMPANY | 6 Курс, Studio, AI Mentor, Луғат, PWA
   ========================================================= */
(function () {
  "use strict";

  const LESSONS = [
    // ==================== HTML: Basics ====================
    {
      id: "html-doctype",
      name: "<!DOCTYPE html>",
      lang: "HTML",
      group: "Basics",
      description: "Эъломияи <!DOCTYPE html> ба браузер хабар медиҳад, ки саҳифа бо стандарти муосири HTML5 навишта шудааст.",
      purpose: "Муайян кардани намуди санад ва пешгирии режими кӯҳнаи (Quirks Mode) браузер.",
      usage: "Дар сатри аввалини ҳар як файли HTML, пеш аз теги <html> гузошта мешавад.",
      syntax: "<!DOCTYPE html>",
      shortExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n</html>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Саҳифаи аввал</title>\n</head>\n<body>\n  <h1>Хуш омадед ба Web Academy!</h1>\n</body>\n</html>",
      outputText: "Саҳифа дар режими стандартии HTML5 кушода шуда, сарлавҳаи «Хуш омадед ба Web Academy!»-ро дуруст нишон медиҳад.",
      previewHtml: "<h1 style='font-family:sans-serif;color:#1e293b;'>Хуш омадед ба Web Academy!</h1>",
      mistakes: "Фаромӯш кардани <!DOCTYPE html> ё гузоштани он баъд аз теги <html> боиси вайрон шудани андозаҳо дар баъзе браузерҳо мегардад.",
      tip: "Ин тег нест, балки дастур барои браузер аст, бинобар ин теги пӯшанда надорад."
    },
    {
      id: "html-html",
      name: "<html>",
      lang: "HTML",
      group: "Basics",
      description: "Теги решагии <html> тамоми мундариҷаи саҳифаи веб-ро дар бар мегирад.",
      purpose: "Пайваст кардани қисмҳои <head> ва <body> дар як санади ягонаи HTML.",
      usage: "Дар ҳамаи саҳифаҳои HTML фавран баъд аз <!DOCTYPE html> истифода мешавад. Атрибути lang забони саҳифаро нишон медиҳад.",
      syntax: "<html lang=\"tg\">\n  <!-- мундариҷа -->\n</html>",
      shortExample: "<html lang=\"tg\">\n  <head></head>\n  <body>Салом!</body>\n</html>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Сохтори HTML</title>\n</head>\n<body>\n  <p>Ҳамаи унсурҳо дар дохили html ҷойгиранд.</p>\n</body>\n</html>",
      outputText: "Дар экран матни «Ҳамаи унсурҳо дар дохили html ҷойгиранд.» намоиш дода мешавад.",
      previewHtml: "<p style='font-family:sans-serif;'>Ҳамаи унсурҳо дар дохили html ҷойгиранд.</p>",
      mistakes: "Нанавиштани атрибути lang=\"tg\" кори хонандагони экран (Screen Readers) ва системаҳои ҷустуҷӯиро душвор месозад.",
      tip: "Ҳамеша атрибути lang-ро мувофиқи забони матн (масалан tg, en, ru) илова кунед."
    },
    {
      id: "html-head",
      name: "<head>",
      lang: "HTML",
      group: "Basics",
      description: "Теги <head> маълумоти техникии саҳифа (метамаълумот, унвон, пайвасти CSS)-ро нигоҳ медорад, ки дар худи саҳифа намоиш дода намешаванд.",
      purpose: "Интиқоли танзимот ба браузер, системаҳои ҷустуҷӯӣ ва пайваст кардани файлҳои услуб.",
      usage: "Дар дохили <html> ва пеш аз <body> ҷойгир карда мешавад.",
      syntax: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Унвон</title>\n</head>",
      shortExample: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Дарси HTML</title>\n</head>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Саҳифаи ман</title>\n</head>\n<body>\n  <p>Мундариҷаи асосӣ дар body аст.</p>\n</body>\n</html>",
      outputText: "Дар таби браузер «Саҳифаи ман» навишта шуда, дар саҳифа танҳо матни дохили body дида мешавад.",
      previewHtml: "<p style='font-family:sans-serif;'>Мундариҷаи асосӣ дар body аст.</p>",
      mistakes: "Ҷойгир кардани матни саҳифа, расмҳо ё тугмаҳо дар дохили <head> хатои маъмул аст.",
      tip: "Дар <head> танҳо тегҳои иттилоотӣ мисли <meta>, <title>, <link> ва <style> гузоред."
    },
    {
      id: "html-body",
      name: "<body>",
      lang: "HTML",
      group: "Basics",
      description: "Теги <body> тамоми қисми намоёни саҳифаи веб — матн, расм, тугма, ҷадвал ва видеоҳоро дар бар мегирад.",
      purpose: "Намоиш додани мундариҷаи асосӣ ба истифодабаранда.",
      usage: "Дар дохили <html> ва баъд аз </head> танҳо як маротиба истифода мешавад.",
      syntax: "<body>\n  <!-- унсурҳои намоён -->\n</body>",
      shortExample: "<body>\n  <h1>Салом!</h1>\n  <p>Ин матн дар экран намоён аст.</p>\n</body>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли body</title>\n</head>\n<body>\n  <h2>Хуш омадед</h2>\n  <p>Тамоми сайт дар дохили body сохта мешавад.</p>\n</body>\n</html>",
      outputText: "Сарлавҳаи «Хуш омадед» ва матни «Тамоми сайт дар дохили body сохта мешавад.» дар саҳифа пайдо мешаванд.",
      previewHtml: "<div style='font-family:sans-serif;'><h2>Хуш омадед</h2><p>Тамоми сайт дар дохили body сохта мешавад.</p></div>",
      mistakes: "Сохтани зиёда аз як теги <body> дар як саҳифа.",
      tip: "Одатан скриптҳои JavaScript-ро дар поёни <body> мегузоранд, то саҳифа тезтар бор шавад."
    },
    {
      id: "html-meta",
      name: "<meta>",
      lang: "HTML",
      group: "Basics",
      description: "Теги <meta> метамаълумотҳоро дар бораи рамзгузорӣ (UTF-8), андозаи экран (viewport) ва тавсифи саҳифа муайян мекунад.",
      purpose: "Таъмини хондани дурусти ҳарфҳои тоҷикӣ ва мутобиқсозии саҳифа ба телефонҳо.",
      usage: "Дар дохили <head> барои charset, viewport, description ва SEO истифода мешавад.",
      syntax: "<meta name=\"ном\" content=\"қиммат\">",
      shortExample: "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"Омӯзиши HTML бо забони тоҷикӣ\">\n  <title>Метамаълумот</title>\n</head>\n<body>\n  <p>Ҳарфҳои ӯ, қ, ғ, ӣ, ҷ, ҳ дуруст намоиш дода мешаванд.</p>\n</body>\n</html>",
      outputText: "Ҳарфҳои тоҷикӣ бе рамзҳои хато хонда шуда, саҳифа дар телефони Android дуруст ҷойгир мешавад.",
      previewHtml: "<p style='font-family:sans-serif;'>Ҳарфҳои ӯ, қ, ғ, ӣ, ҷ, ҳ дуруст намоиш дода мешаванд.</p>",
      mistakes: "Фаромӯш кардани <meta name=\"viewport\"> боиси хеле хурд шудани матн дар телефон мегардад.",
      tip: "Ҳамеша charset=\"UTF-8\"-ро аввалин шуда дар <head> гузоред."
    },
    {
      id: "html-title",
      name: "<title>",
      lang: "HTML",
      group: "Basics",
      description: "Теги <title> номи саҳифаро дар таби браузер, хатчӯбҳо (Bookmarks) ва натиҷаи ҷустуҷӯи Google муайян мекунад.",
      purpose: "Додани унвони равшан ва фаҳмо ба санади веб.",
      usage: "Дар дохили <head> барои ҳар саҳифа навишта мешавад.",
      syntax: "<title>Номи саҳифа</title>",
      shortExample: "<title>Web Academy — Омӯзиши HTML</title>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Дарси title — Web Academy</title>\n</head>\n<body>\n  <p>Ба номи таби болои браузер нигоҳ кунед.</p>\n</body>\n</html>",
      outputText: "Дар сарлавҳаи равзанаи браузер матни «Дарси title — Web Academy» нишон дода мешавад.",
      previewHtml: "<p style='font-family:sans-serif;'>Унвони саҳифа: <strong>Дарси title — Web Academy</strong></p>",
      mistakes: "Гузоштани унвони якхела барои ҳамаи саҳифаҳои сайт ё нанавиштани <title>.",
      tip: "Кӯшиш кунед унвон кӯтоҳ (50–60 аломат) ва пурмазмун бошад."
    },

    // ==================== HTML: Text ====================
    {
      id: "html-h1",
      name: "<h1>",
      lang: "HTML",
      group: "Text",
      description: "Теги <h1> барои сохтани сарлавҳаи асосӣ ва калонтарини саҳифаи HTML истифода мешавад.",
      purpose: "Муайян кардани мавзӯи марказии саҳифа барои хонандагон ва системаҳои ҷустуҷӯӣ.",
      usage: "Дар қисми болоии саҳифа ё мақола, одатан як маротиба дар як саҳифа истифода мешавад.",
      syntax: "<h1>Сарлавҳаи ман</h1>",
      shortExample: "<h1>Салом, дунёи сайтсозӣ!</h1>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Мисоли h1</title>\n</head>\n<body>\n  <h1>Салом, дунёи сайтсозӣ!</h1>\n  <p>Ман HTML меомӯзам.</p>\n</body>\n</html>",
      outputText: "Салом, дунёи сайтсозӣ!\nМан HTML меомӯзам.",
      previewHtml: "<div style='font-family:sans-serif;'><h1>Салом, дунёи сайтсозӣ!</h1><p>Ман HTML меомӯзам.</p></div>",
      mistakes: "Истифода бурдани <h1> фақат барои калон кардани ҳарфҳо, на барои сарлавҳаи асосӣ.",
      tip: "Барои андозаи матн аз CSS (font-size) истифода баред, <h1>-ро бошад танҳо барои сарлавҳаи асосӣ нигоҳ доред."
    },
    {
      id: "html-headings",
      name: "<h2> — <h6>",
      lang: "HTML",
      group: "Text",
      description: "Тегҳои <h2> то <h6> зерсарлавҳаҳоро аз дараҷаи дуюм то шашум месозанд ва сохтори мантиқии матнро ташкил медиҳанд.",
      purpose: "Тақсим кардани мақола ё саҳифа ба бахшҳо ва зербахшҳои фаҳмо.",
      usage: "Баъд аз <h1> ба тартиб (<h2>, сипас <h3>...) дар мақолаҳо ва ҳуҷҷатҳо истифода мешаванд.",
      syntax: "<h2>Зерсарлавҳа</h2>\n<h3>Зербахши хурд</h3>",
      shortExample: "<h2>Фасли якум</h2>\n<h3>Мавзӯи 1.1</h3>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Сарлавҳаҳо</title>\n</head>\n<body>\n  <h1>Китоби веб-барномасозӣ</h1>\n  <h2>Боби 1: HTML</h2>\n  <h3>Дарси 1: Тегҳо</h3>\n  <p>Матни дарси аввал дар ин ҷо меояд.</p>\n</body>\n</html>",
      outputText: "Сарлавҳаҳо бо андозаҳои зина ба зина (аз калон ба хурд) нишон дода мешаванд.",
      previewHtml: "<div style='font-family:sans-serif;'><h1>Китоби веб-барномасозӣ</h1><h2>Боби 1: HTML</h2><h3>Дарси 1: Тегҳо</h3><p>Матни дарси аввал дар ин ҷо меояд.</p></div>",
      mistakes: "Ҷаҳидан аз <h1> рост ба <h4> бе истифодаи <h2> ва <h3> сохтори саҳифаро вайрон мекунад.",
      tip: "Тартиби мантиқии h1 -> h2 -> h3-ро ҳамеша риоя намоед."
    },
    {
      id: "html-p",
      name: "<p>",
      lang: "HTML",
      group: "Text",
      description: "Теги <p> (Paragraph) барои эҷоди сархат ё абзаци матн истифода мешавад.",
      purpose: "Ҷудо кардани матни оддӣ ба бандҳои хонданбоб бо фосилаи автоматӣ.",
      usage: "Дар ҳама гуна мақола, тавсифи маҳсулот ва матнҳои саҳифа истифода мешавад.",
      syntax: "<p>Матни абзац</p>",
      shortExample: "<p>HTML забони сохтории веб аст.</p>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли p</title>\n</head>\n<body>\n  <p>Ин сархати якум аст.</p>\n  <p>Ин сархати дуюм бо фосилаи автоматӣ аст.</p>\n</body>\n</html>",
      outputText: "Ду абзаци алоҳида бо фосилаи боло ва поён дар экран намоиш меёбанд.",
      previewHtml: "<div style='font-family:sans-serif;'><p>Ин сархати якум аст.</p><p>Ин сархати дуюм бо фосилаи автоматӣ аст.</p></div>",
      mistakes: "Гузоштани матни дароз бе <p> ё истифодаи чанд <br> ба ҷои сохтани абзаци нав.",
      tip: "Ҳар як фикри алоҳидаро дар дохили <p>...</p> нависед."
    },
    {
      id: "html-br",
      name: "<br>",
      lang: "HTML",
      group: "Text",
      description: "Теги <br> (Line Break) матнро ба сатри нав мегузаронад, бидуни сохтани абзаци нав.",
      purpose: "Гузариши сатрӣ дар дохили шеърҳо, суроғаҳо ё матни кӯтоҳ.",
      usage: "Дар ҷойҳое истифода мешавад, ки шикастани сатр маъно дорад (масалан, суроғаи почта ё мисраъҳои шеър).",
      syntax: "Сатри якум<br>Сатри дуюм",
      shortExample: "<p>ш. Душанбе,<br>хиёбони Рӯдакӣ 10</p>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли br</title>\n</head>\n<body>\n  <p>Бани одам аъзои якдигаранд,<br>Ки дар офариниш зи як гавҳаранд.</p>\n</body>\n</html>",
      outputText: "Ду мисраи шеър дар сатрҳои алоҳида, аммо дар як абзац чоп мешаванд.",
      previewHtml: "<p style='font-family:sans-serif;'>Бани одам аъзои якдигаранд,<br>Ки дар офариниш зи як гавҳаранд.</p>",
      mistakes: "Истифодаи пайдарпайи <br><br><br> барои додани фосила ба ҷои CSS margin.",
      tip: "<br> теги тоқ аст ва теги пӯшанда надорад."
    },
    {
      id: "html-strong-em",
      name: "<strong> ва <em>",
      lang: "HTML",
      group: "Text",
      description: "Теги <strong> матнро муҳим (ғафс) ва <em> онро таъкидшуда (моил) нишон медиҳад.",
      purpose: "Ҷудо кардани калимаҳои калидӣ бо маънои семантикӣ, на танҳо ороишӣ.",
      usage: "Дар дохили <p> ё рӯйхатҳо барои таъкиди қисмати муҳими ҷумла истифода мешаванд.",
      syntax: "<strong>Муҳим</strong> ва <em>Таъкид</em>",
      shortExample: "<p>Ин қоида <strong>хеле муҳим</strong> аст.</p>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>strong ва em</title>\n</head>\n<body>\n  <p>Барои сохтани сайт аввал <strong>HTML</strong> ва <em>CSS</em>-ро омӯзед.</p>\n</body>\n</html>",
      outputText: "Калимаи HTML бо ҳарфи ғафс (Bold) ва CSS бо ҳарфи моил (Italic) мебарояд.",
      previewHtml: "<p style='font-family:sans-serif;'>Барои сохтани сайт аввал <strong>HTML</strong> ва <em>CSS</em>-ро омӯзед.</p>",
      mistakes: "Истифодаи <b> ва <i> ба ҷои <strong> ва <em> дар матнҳои муҳими маънодор.",
      tip: "Хонандагони экран (Screen Readers) матни дохили <strong>-ро бо оҳанги ҷиддӣ мехонанд."
    },
    {
      id: "html-span-code",
      name: "<span> ва <code>",
      lang: "HTML",
      group: "Text",
      description: "Теги <span> қуттии хаттии (inline) бетараф барои ороиши қисми матн аст ва <code> барои нишон додани порчаи код истифода мешавад.",
      purpose: "Ранг додан ба як калима бо <span> ва намоиши дурусти фармонҳои барномасозӣ бо <code>.",
      usage: "Дар дохили ҷумлаҳо бе гузаштан ба сатри нав кор мекунанд.",
      syntax: "<span class=\"highlight\">матн</span> ё <code>let x = 5;</code>",
      shortExample: "<p>Фармони <code>console.log()</code> маълумотро чоп мекунад.</p>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>span ва code</title>\n</head>\n<body>\n  <p>Ранги <span style=\"color: blue; font-weight: bold;\">кабуд</span> ва коди <code>&lt;h1&gt;</code>.</p>\n</body>\n</html>",
      outputText: "Калимаи «кабуд» бо ранги кабуд ва «<h1>» бо шрифти моноширина нишон дода мешаванд.",
      previewHtml: "<p style='font-family:sans-serif;'>Ранги <span style='color:blue;font-weight:bold;'>кабуд</span> ва коди <code>&lt;h1&gt;</code>.</p>",
      mistakes: "Истифодаи <div> дар дохили <p> ба ҷои <span> (div унсури блокӣ аст).",
      tip: "Барои нишон додани чанд сатри код, <code>-ро дар дохили <pre> гузоред."
    },

    // ==================== HTML: Links and Media ====================
    {
      id: "html-a",
      name: "<a>",
      lang: "HTML",
      group: "Links and Media",
      description: "Теги <a> (Anchor) пайванд (линк) месозад, ки корбарро ба саҳифаи дигар, бахши ҳамон саҳифа ё суроғаи почта мебарад.",
      purpose: "Пайваст кардани саҳифаҳои веб бо якдигар.",
      usage: "Барои менюи сайт, тугмаҳои гузариш, пайванд ба файлҳо ва бахшҳои саҳифа (#id).",
      syntax: "<a href=\"суроға\">Матни пайванд</a>",
      shortExample: "<a href=\"#top\">Ба боло рафтан</a>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли a</title>\n</head>\n<body>\n  <a href=\"#section2\">Гузаштан ба бахши 2</a>\n  <h2 id=\"section2\" style=\"margin-top: 40px;\">Бахши 2</h2>\n</body>\n</html>",
      outputText: "Пайванди «Гузаштан ба бахши 2» пайдо шуда, ҳангоми пахш ба Бахши 2 мегузарад.",
      previewHtml: "<div style='font-family:sans-serif;'><a href='#s2'>Гузаштан ба бахши 2</a><h3 id='s2' style='margin-top:24px;'>Бахши 2</h3></div>",
      mistakes: "Фаромӯш кардани атрибути href ё гузоштани матни бемаъно мисли «Ин ҷоро пахш кунед».",
      tip: "Барои кушодани пайванди беруна дар таби нав target=\"_blank\" rel=\"noopener noreferrer\"-ро илова кунед."
    },
    {
      id: "html-img",
      name: "<img>",
      lang: "HTML",
      group: "Links and Media",
      description: "Теги <img> расмро ба саҳифаи HTML ворид мекунад.",
      purpose: "Намоиши аксҳо, логотипҳо ва тасвирҳо дар саҳифа.",
      usage: "Бо ду атрибути ҳатмӣ: src (роҳ ба расм) ва alt (тавсифи матнии расм) истифода мешавад.",
      syntax: "<img src=\"роҳ.jpg\" alt=\"Тавсифи расм\" width=\"300\">",
      shortExample: "<img src=\"logo.png\" alt=\"Логотипи сайт\">",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли img</title>\n</head>\n<body>\n  <img src=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='70'><rect width='160' height='70' rx='10' fill='%232563eb'/><text x='50%' y='55%' fill='white' font-size='16' font-family='sans-serif' text-anchor='middle'>Web Academy</text></svg>\" alt=\"Логотипи Web Academy\">\n</body>\n</html>",
      outputText: "Тасвири логотипи Web Academy дар саҳифа нишон дода мешавад.",
      previewHtml: "<img src=\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='70'><rect width='180' height='70' rx='10' fill='%232563eb'/><text x='50%' y='55%' fill='white' font-size='16' font-family='sans-serif' text-anchor='middle'>Web Academy</text></svg>\" alt='Логотип'>",
      mistakes: "Нанавиштани атрибути alt ё нодуруст навиштани роҳи файл (src).",
      tip: "Теги <img> тоқ аст ва пӯшанда надорад. Барои суръат loading=\"lazy\"-ро истифода баред."
    },
    {
      id: "html-audio",
      name: "<audio>",
      lang: "HTML",
      group: "Links and Media",
      description: "Теги <audio> плеери садоиро мустақиман дар браузер бе плагинҳои иловагӣ месозад.",
      purpose: "Пахши мусиқӣ, подкаст ё дарсҳои аудиоӣ дар саҳифа.",
      usage: "Бо атрибути controls истифода мешавад, то тугмаҳои пахш ва таваққуф намоён шаванд.",
      syntax: "<audio controls>\n  <source src=\"sado.mp3\" type=\"audio/mpeg\">\n</audio>",
      shortExample: "<audio src=\"lesson.mp3\" controls></audio>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли audio</title>\n</head>\n<body>\n  <p>Плеери аудиоӣ:</p>\n  <audio controls>\n    <source src=\"audio.mp3\" type=\"audio/mpeg\">\n    Браузери шумо аудиоро дастгирӣ намекунад.\n  </audio>\n</body>\n</html>",
      outputText: "Дар саҳифа панели идоракунии аудио (Play, вақт, овоз) пайдо мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><p style='margin:0 0 8px;'>Плеери аудиоӣ:</p><audio controls></audio></div>",
      mistakes: "Фаромӯш кардани атрибути controls — дар ин ҳолат плеер умуман ноаён мемонад.",
      tip: "Ҳамеша дар дохили <audio> матни эҳтиётиро барои браузерҳои хеле кӯҳна нависед."
    },
    {
      id: "html-video",
      name: "<video>",
      lang: "HTML",
      group: "Links and Media",
      description: "Теги <video> имкон медиҳад видеоҳоро бевосита дар саҳифаи веб намоиш диҳед.",
      purpose: "Ҷойгир кардани дарсҳои видеоӣ, наворҳо ва аниматсияҳо.",
      usage: "Бо атрибутҳои controls, width, poster ва <source> (MP4/WebM) кор мекунад.",
      syntax: "<video width=\"320\" controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n</video>",
      shortExample: "<video src=\"demo.mp4\" width=\"300\" controls></video>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли video</title>\n</head>\n<body>\n  <video width=\"280\" height=\"110\" controls style=\"background:#0f172a;border-radius:8px;\">\n    <source src=\"movie.mp4\" type=\"video/mp4\">\n    Браузер видеоро дастгирӣ намекунад.\n  </video>\n</body>\n</html>",
      outputText: "Равзанаи видеоплеер бо тугмаҳои идоракунӣ дар саҳифа пайдо мешавад.",
      previewHtml: "<video width='280' height='110' controls style='background:#0f172a;border-radius:8px;'></video>",
      mistakes: "Истифодаи autoplay бе muted — браузерҳои муосир пахши худкорро бо овоз манъ мекунанд.",
      tip: "Бо атрибути poster=\"rasm.jpg\" пешнамоиши зебо барои видео гузоред."
    },
    {
      id: "html-iframe",
      name: "<iframe>",
      lang: "HTML",
      group: "Links and Media",
      description: "Теги <iframe> саҳифаи дигари HTML-ро дар дохили равзанаи хурди саҳифаи ҷорӣ намоиш медиҳад.",
      purpose: "Ҷойгир кардани харитаҳо, пешнамоиши код ё саҳифаҳои дигар.",
      usage: "Бо атрибути src (ё srcdoc барои HTML-и дохилӣ) ва title истифода мешавад.",
      syntax: "<iframe srcdoc=\"<p>Салом!</p>\" title=\"Равзана\"></iframe>",
      shortExample: "<iframe srcdoc=\"<h3>Дохили iframe</h3>\" width=\"250\" height=\"80\"></iframe>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли iframe</title>\n</head>\n<body>\n  <iframe srcdoc=\"<body style='font-family:sans-serif;background:#eff6ff;'><b>Намоиши дохилӣ</b></body>\" title=\"Намуна\" width=\"260\" height=\"70\"></iframe>\n</body>\n</html>",
      outputText: "Дар дохили саҳифа равзанаи алоҳида бо матни «Намоиши дохилӣ» кушода мешавад.",
      previewHtml: "<iframe srcdoc=\"<body style='font-family:sans-serif;background:#eff6ff;margin:8px;'><b>Намоиши дохилӣ</b></body>\" width='260' height='60' style='border:1px solid #cbd5e1;border-radius:6px;'></iframe>",
      mistakes: "Нанавиштани атрибути title ё надоштани sandbox ҳангоми намоиши коди бегона.",
      tip: "Барои амният атрибути sandbox-ро дар <iframe> истифода баред."
    },

    // ==================== HTML: Lists ====================
    {
      id: "html-ul",
      name: "<ul>",
      lang: "HTML",
      group: "Lists",
      description: "Теги <ul> (Unordered List) рӯйхати бетартиб (бо нуқтаҳо) месозад.",
      purpose: "Номбар кардани унсурҳое, ки тартиби рақамӣ надоранд (масалан, меню, рӯйхати харид).",
      usage: "Дар дохили он танҳо тегҳои <li> ҷойгир мешаванд.",
      syntax: "<ul>\n  <li>Банди 1</li>\n  <li>Банди 2</li>\n</ul>",
      shortExample: "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли ul</title>\n</head>\n<body>\n  <h3>Забонҳои веб:</h3>\n  <ul>\n    <li>HTML</li>\n    <li>CSS</li>\n    <li>JavaScript</li>\n  </ul>\n</body>\n</html>",
      outputText: "Рӯйхати нуқтадор бо бандҳои HTML, CSS ва JavaScript нишон дода мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><h3 style='margin:0 0 6px;'>Забонҳои веб:</h3><ul style='margin:0;'><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></div>",
      mistakes: "Навиштани матн ё <p> мустақиман дар дохили <ul> бе теги <li>.",
      tip: "Қариб ҳамаи менюҳои навигатсионии сайтҳо бо <ul> ва <li> сохта мешаванд."
    },
    {
      id: "html-ol",
      name: "<ol>",
      lang: "HTML",
      group: "Lists",
      description: "Теги <ol> (Ordered List) рӯйхати рақамгузоришуда (1, 2, 3...) месозад.",
      purpose: "Нишон додани қадамҳои пайдарпай, дастурҳо ё рейтингҳо.",
      usage: "Дар дохили он бандҳои <li> гузошта мешаванд; рақамгузорӣ ба таври худкор меояд.",
      syntax: "<ol>\n  <li>Қадами 1</li>\n  <li>Қадами 2</li>\n</ol>",
      shortExample: "<ol>\n  <li>Файл созед</li>\n  <li>Код нависед</li>\n</ol>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли ol</title>\n</head>\n<body>\n  <h3>Тартиби омӯзиш:</h3>\n  <ol>\n    <li>Омӯзиши HTML</li>\n    <li>Омӯзиши CSS</li>\n    <li>Омӯзиши JavaScript</li>\n  </ol>\n</body>\n</html>",
      outputText: "Рӯйхати рақамдор: 1. Омӯзиши HTML, 2. Омӯзиши CSS, 3. Омӯзиши JavaScript.",
      previewHtml: "<div style='font-family:sans-serif;'><h3 style='margin:0 0 6px;'>Тартиби омӯзиш:</h3><ol style='margin:0;'><li>Омӯзиши HTML</li><li>Омӯзиши CSS</li><li>Омӯзиши JavaScript</li></ol></div>",
      mistakes: "Дастӣ навиштани рақамҳои 1., 2. дар дохили <ul> ба ҷои истифодаи <ol>.",
      tip: "Бо атрибути start=\"5\" метавонед рақамгузориро аз рақами дилхоҳ оғоз кунед."
    },
    {
      id: "html-li",
      name: "<li>",
      lang: "HTML",
      group: "Lists",
      description: "Теги <li> (List Item) як банди алоҳидаро дар дохили рӯйхатҳои <ul> ё <ol> муайян мекунад.",
      purpose: "Нигоҳ доштани ҳар як унсури рӯйхат.",
      usage: "Ҳамеша дар дохили <ul> ё <ol> меояд.",
      syntax: "<li>Номи банд</li>",
      shortExample: "<ul>\n  <li>Аввал</li>\n</ul>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли li</title>\n</head>\n<body>\n  <ul>\n    <li>Китоб</li>\n    <li>Қалам</li>\n  </ul>\n</body>\n</html>",
      outputText: "Ду банди нуқтадори «Китоб» ва «Қалам» намоиш дода мешаванд.",
      previewHtml: "<ul style='font-family:sans-serif;margin:0;'><li>Китоб</li><li>Қалам</li></ul>",
      mistakes: "Истифодаи <li> дар беруни <ul> ё <ol>.",
      tip: "Дар дохили як <li> шумо метавонед рӯйхати дигари <ul> ё <ol>-ро низ ҷойгир кунед."
    },

    // ==================== HTML: Tables ====================
    {
      id: "html-table",
      name: "<table>",
      lang: "HTML",
      group: "Tables",
      description: "Теги <table> барои сохтани ҷадвали маълумот бо сатрҳо ва сутунҳо истифода мешавад.",
      purpose: "Ташкили маълумоти ҷадвалӣ (нархнома, ҷадвали дарсҳо, омор).",
      usage: "Дар дохили он <thead>, <tbody>, <tr>, <th> ва <td> истифода мешаванд.",
      syntax: "<table>\n  <tr><th>Ном</th></tr>\n  <tr><td>Алӣ</td></tr>\n</table>",
      shortExample: "<table border=\"1\">\n  <tr><td>Салом</td></tr>\n</table>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли table</title>\n</head>\n<body>\n  <table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse;\">\n    <tr><th>Фан</th><th>Соат</th></tr>\n    <tr><td>HTML</td><td>10</td></tr>\n    <tr><td>CSS</td><td>15</td></tr>\n  </table>\n</body>\n</html>",
      outputText: "Ҷадвали дусутуна бо сарлавҳаҳои «Фан» ва «Соат» сохта мешавад.",
      previewHtml: "<table border='1' cellpadding='6' style='border-collapse:collapse;font-family:sans-serif;'><tr><th>Фан</th><th>Соат</th></tr><tr><td>HTML</td><td>10</td></tr><tr><td>CSS</td><td>15</td></tr></table>",
      mistakes: "Истифодаи <table> барои сохтани тарҳи умумии саҳифа (ин корро бояд бо Flexbox/Grid кард).",
      tip: "Бо CSS-и border-collapse: collapse; хатҳои дугонаи ҷадвалро якҷоя кунед."
    },
    {
      id: "html-tr",
      name: "<tr>",
      lang: "HTML",
      group: "Tables",
      description: "Теги <tr> (Table Row) як сатри уфуқиро дар дохили ҷадвал месозад.",
      purpose: "Ҷамъоварии ячейкаҳои <th> ё <td> дар як сатр.",
      usage: "Дар дохили <table>, <thead> ё <tbody> навишта мешавад.",
      syntax: "<tr>\n  <td>Ячейка 1</td>\n  <td>Ячейка 2</td>\n</tr>",
      shortExample: "<tr><td>1</td><td>2</td></tr>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли tr</title>\n</head>\n<body>\n  <table border=\"1\" cellpadding=\"5\" style=\"border-collapse:collapse;\">\n    <tr><td>Сатр 1, Сутун 1</td><td>Сатр 1, Сутун 2</td></tr>\n    <tr><td>Сатр 2, Сутун 1</td><td>Сатр 2, Сутун 2</td></tr>\n  </table>\n</body>\n</html>",
      outputText: "Ду сатри ҷадвал бо ду сутунӣ намоиш дода мешаванд.",
      previewHtml: "<table border='1' cellpadding='5' style='border-collapse:collapse;font-family:sans-serif;'><tr><td>Сатр 1, Сутун 1</td><td>Сатр 1, Сутун 2</td></tr><tr><td>Сатр 2, Сутун 1</td><td>Сатр 2, Сутун 2</td></tr></table>",
      mistakes: "Навиштани матн мустақиман дар дохили <tr> бе <td> ё <th>.",
      tip: "Шумораи ячейкаҳо дар ҳар <tr> бояд баробар бошад (ё бо colspan/rowspan танзим шавад)."
    },
    {
      id: "html-th-td",
      name: "<th> ва <td>",
      lang: "HTML",
      group: "Tables",
      description: "Теги <th> ячейкаи сарлавҳаи ҷадвал (ғафс ва марказишуда) ва <td> ячейкаи маълумоти оддиро месозад.",
      purpose: "Ҷудо кардани номи сутунҳо аз қимматҳои воқеӣ.",
      usage: "Дар дохили <tr> истифода мешаванд.",
      syntax: "<th>Сарлавҳа</th>\n<td>Маълумот</td>",
      shortExample: "<tr><th>Ном</th><td>Сино</td></tr>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>th ва td</title>\n</head>\n<body>\n  <table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse;\">\n    <tr><th>Ном</th><th>Балл</th></tr>\n    <tr><td>Мадина</td><td>98</td></tr>\n  </table>\n</body>\n</html>",
      outputText: "«Ном» ва «Балл» ҳамчун сарлавҳаи ғафс ва «Мадина» / «98» ҳамчун маълумот мебароянд.",
      previewHtml: "<table border='1' cellpadding='6' style='border-collapse:collapse;font-family:sans-serif;'><tr><th>Ном</th><th>Балл</th></tr><tr><td>Мадина</td><td>98</td></tr></table>",
      mistakes: "Истифодаи <td> барои сарлавҳаҳои ҷадвал.",
      tip: "Барои дастрасии беҳтар ба <th> атрибути scope=\"col\" илова кунед."
    },
    {
      id: "html-thead-tbody",
      name: "<thead> ва <tbody>",
      lang: "HTML",
      group: "Tables",
      description: "Теги <thead> қисми сарлавҳаи ҷадвал ва <tbody> қисми асосии сатрҳои маълумотро гурӯҳбандӣ мекунад.",
      purpose: "Сохторбандии тозаи ҷадвалҳои калон ва осон кардани ороиш бо CSS.",
      usage: "Дар дохили <table> барои ҷудо кардани сарлавҳа аз маълумот истифода мешавад.",
      syntax: "<table>\n  <thead><tr><th>...</th></tr></thead>\n  <tbody><tr><td>...</td></tr></tbody>\n</table>",
      shortExample: "<thead><tr><th>Маҳсулот</th></tr></thead>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>thead ва tbody</title>\n</head>\n<body>\n  <table border=\"1\" cellpadding=\"6\" style=\"border-collapse:collapse;\">\n    <thead style=\"background:#e2e8f0;\"><tr><th>Китоб</th><th>Нарх</th></tr></thead>\n    <tbody><tr><td>HTML5</td><td>50 сомонӣ</td></tr></tbody>\n  </table>\n</body>\n</html>",
      outputText: "Қисми сарлавҳаи ҷадвал бо ранги хокистарӣ ва қисми маълумот бо сафед намоиш меёбад.",
      previewHtml: "<table border='1' cellpadding='6' style='border-collapse:collapse;font-family:sans-serif;'><thead style='background:#e2e8f0;'><tr><th>Китоб</th><th>Нарх</th></tr></thead><tbody><tr><td>HTML5</td><td>50 сомонӣ</td></tr></tbody></table>",
      mistakes: "Фаромӯш кардани <tr> дар дохили <thead> ё <tbody>.",
      tip: "Ҳангоми чопи ҷадвалҳои дароз, браузер <thead>-ро дар ҳар саҳифа такрор мекунад."
    },

    // ==================== HTML: Forms ====================
    {
      id: "html-form",
      name: "<form>",
      lang: "HTML",
      group: "Forms",
      description: "Теги <form> формаи интерактивиро барои гирифтани маълумот аз корбар (воридшавӣ, бақайдгирӣ, ҷустуҷӯ) месозад.",
      purpose: "Ҷамъоварӣ ва ирсоли маълумоти майдонҳои воридотӣ.",
      usage: "Тамоми унсурҳои <input>, <select>, <textarea> ва <button type=\"submit\">-ро дар бар мегирад.",
      syntax: "<form action=\"/submit\" method=\"post\">\n  <!-- майдонҳо -->\n</form>",
      shortExample: "<form>\n  <input type=\"text\" placeholder=\"Ном\">\n  <button type=\"submit\">Ирсол</button>\n</form>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли form</title>\n</head>\n<body>\n  <form onsubmit=\"event.preventDefault(); document.getElementById('msg').textContent='Ирсол шуд!';\">\n    <input type=\"text\" placeholder=\"Номи шумо\" required>\n    <button type=\"submit\">Фиристодан</button>\n  </form>\n  <p id=\"msg\"></p>\n</body>\n</html>",
      outputText: "Майдони ном ва тугмаи «Фиристодан» пайдо шуда, пас аз пахш паёми «Ирсол шуд!» мебарояд.",
      previewHtml: "<div style='font-family:sans-serif;'><form onsubmit=\"event.preventDefault(); document.getElementById('m').textContent='Ирсол шуд!';\"><input type='text' placeholder='Номи шумо' required> <button type='submit'>Фиристодан</button></form><p id='m'></p></div>",
      mistakes: "Ҷойгир кардани як <form> дар дохили <form>-и дигар (манъ аст).",
      tip: "Дар JavaScript барои пешгирии боркунии дубораи саҳифа event.preventDefault()-ро истифода баред."
    },
    {
      id: "html-input",
      name: "<input>",
      lang: "HTML",
      group: "Forms",
      description: "Теги <input> майдони воридотии бисёрфунксионалӣ мебошад, ки вобаста ба атрибути type намудҳои гуногун (матн, рамз, email, рақам, checkbox, radio, date) мегирад.",
      purpose: "Гирифтани маълумоти гуногуншакл аз истифодабаранда.",
      usage: "Дар дохили формаҳо бо атрибутҳои type, name, placeholder ва required истифода мешавад.",
      syntax: "<input type=\"text\" placeholder=\"Ворид кунед\">",
      shortExample: "<input type=\"email\" placeholder=\"email@example.com\" required>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Намудҳои input</title>\n</head>\n<body>\n  <input type=\"text\" placeholder=\"Ном\"><br><br>\n  <input type=\"password\" placeholder=\"Рамз\"><br><br>\n  <label><input type=\"checkbox\" checked> Розиям</label>\n</body>\n</html>",
      outputText: "Майдони матн, майдони рамз (бо нуқтаҳо) ва қуттии интихоб (checkbox) намоиш дода мешаванд.",
      previewHtml: "<div style='font-family:sans-serif;'><input type='text' placeholder='Ном' style='margin-bottom:6px;display:block;'><input type='password' placeholder='Рамз' style='margin-bottom:6px;display:block;'><label><input type='checkbox' checked> Розиям</label></div>",
      mistakes: "Истифодаи type=\"text\" барои рамз ё почта ба ҷои type=\"password\" ва type=\"email\".",
      tip: "Дар телефонҳо type=\"tel\" ё type=\"number\" клавиатураи рақамиро ба таври худкор мекушояд."
    },
    {
      id: "html-button",
      name: "<button>",
      lang: "HTML",
      group: "Forms",
      description: "Теги <button> тугмаи пахшшавандаро барои иҷрои амал ё ирсоли форма месозад.",
      purpose: "Фаъолсозии амалҳои корбар (фиристодан, кушодан, ҳисоб кардан).",
      usage: "Бо атрибути type=\"button\" (амали оддӣ), type=\"submit\" (ирсоли форма) ё type=\"reset\" истифода мешавад.",
      syntax: "<button type=\"button\">Пахш кун</button>",
      shortExample: "<button type=\"button\" onclick=\"this.textContent='Салом!'\">Салом</button>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли button</title>\n</head>\n<body>\n  <button type=\"button\" onclick=\"this.textContent='Пахш шуд!'\">Маро пахш кун</button>\n</body>\n</html>",
      outputText: "Тугмаи «Маро пахш кун» пайдо шуда, пас аз пахш матнаш ба «Пахш шуд!» иваз мешавад.",
      previewHtml: "<button type='button' style='padding:8px 14px;cursor:pointer;' onclick=\"this.textContent='Пахш шуд!'\">Маро пахш кун</button>",
      mistakes: "Нанавиштани type=\"button\" дар дохили <form> — он гоҳ тугма формаро нохост ирсол мекунад.",
      tip: "Барои амалҳо ҳамеша <button>-ро истифода баред, на <div>-ро, то дастрасӣ (accessibility) нигоҳ дошта шавад."
    },
    {
      id: "html-textarea",
      name: "<textarea>",
      lang: "HTML",
      group: "Forms",
      description: "Теги <textarea> майдони бисёрсатраи матниро барои навиштани паёмҳо, шарҳҳо ё тавсифҳои дароз месозад.",
      purpose: "Қабули матни дароз ва бисёрсатра аз корбар.",
      usage: "Дар формаҳои тамос, шарҳнависӣ ва паёмрасонӣ бо rows ва cols истифода мешавад.",
      syntax: "<textarea rows=\"4\" cols=\"30\" placeholder=\"Паём...\"></textarea>",
      shortExample: "<textarea rows=\"3\" placeholder=\"Фикри худро нависед\"></textarea>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли textarea</title>\n</head>\n<body>\n  <label for=\"bio\">Дар бораи худ:</label><br>\n  <textarea id=\"bio\" rows=\"3\" cols=\"32\" placeholder=\"Ин ҷо нависед...\"></textarea>\n</body>\n</html>",
      outputText: "Майдони калони матнӣ бо имкони навиштани чанд сатр намоиш дода мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><label for='b'>Дар бораи худ:</label><br><textarea id='b' rows='3' cols='30' placeholder='Ин ҷо нависед...'></textarea></div>",
      mistakes: "Омехта кардани <textarea> бо <input type=\"text\"> ва гузоштани фосилаи нолозим дар байни тегҳо.",
      tip: "Андозаи онро бо CSS resize: vertical; маҳдуд кунед, то тарҳи саҳифа вайрон нашавад."
    },
    {
      id: "html-select-option",
      name: "<select> ва <option>",
      lang: "HTML",
      group: "Forms",
      description: "Теги <select> рӯйхати кушодашаванда (Dropdown) месозад ва ҳар як интихоб бо <option> муайян мешавад.",
      purpose: "Пешниҳоди интихоби мушаххас (шаҳр, кишвар, забон) ба корбар.",
      usage: "Дар дохили <form> барои интихоби як ё чанд вариант истифода мешавад.",
      syntax: "<select>\n  <option value=\"tj\">Тоҷикистон</option>\n</select>",
      shortExample: "<select>\n  <option>HTML</option>\n  <option>CSS</option>\n</select>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>select ва option</title>\n</head>\n<body>\n  <label for=\"city\">Шаҳр:</label>\n  <select id=\"city\">\n    <option value=\"dushanbe\">Душанбе</option>\n    <option value=\"khujand\">Хуҷанд</option>\n    <option value=\"bokhtar\">Бохтар</option>\n  </select>\n</body>\n</html>",
      outputText: "Менюи интихоби шаҳрҳо (Душанбе, Хуҷанд, Бохтар) дар саҳифа пайдо мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><label>Шаҳр: <select><option>Душанбе</option><option>Хуҷанд</option><option>Бохтар</option></select></label></div>",
      mistakes: "Фаромӯш кардани атрибути value дар <option>, ки барои коркарди серверӣ ва JS лозим аст.",
      tip: "Барои интихоби пешфарз атрибути selected-ро ба <option>-и зарурӣ илова кунед."
    },
    {
      id: "html-label",
      name: "<label>",
      lang: "HTML",
      group: "Forms",
      description: "Теги <label> номи фаҳморо барои майдони форма (<input>, <select>, <textarea>) пайваст мекунад.",
      purpose: "Беҳтар кардани қулайӣ (UX) ва дастрасӣ (Accessibility): пахши ном майдонро фаъол месозад.",
      usage: "Бо атрибути for=\"id_майдон\" ба id-и <input> пайваст карда мешавад.",
      syntax: "<label for=\"name\">Ном:</label>\n<input id=\"name\" type=\"text\">",
      shortExample: "<label for=\"email\">Почта:</label>\n<input id=\"email\" type=\"email\">",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли label</title>\n</head>\n<body>\n  <label for=\"user\">Номи корбар:</label>\n  <input id=\"user\" type=\"text\" placeholder=\"ali_tj\">\n</body>\n</html>",
      outputText: "Ҳангоми пахш кардани матни «Номи корбар:», курсор ба таври худкор ба дохили майдон мегузарад.",
      previewHtml: "<div style='font-family:sans-serif;'><label for='u'>Номи корбар: </label><input id='u' type='text' placeholder='ali_tj'></div>",
      mistakes: "Надоштани <label> ва истифодаи танҳо placeholder ба ҷои он.",
      tip: "Барои checkbox ва radio-тугмаҳо <label> хеле муҳим аст, зеро майдони пахшро дар телефон калон мекунад."
    },

    // ==================== HTML: Semantic HTML ====================
    {
      id: "html-header",
      name: "<header>",
      lang: "HTML",
      group: "Semantic HTML",
      description: "Теги <header> қисми болоии саҳифа ё бахшро (логотип, сарлавҳа, ҷустуҷӯ) муайян мекунад.",
      purpose: "Нишон додани сарлавҳа ва унсурҳои муқаддимавии саҳифа бо маънои семантикӣ.",
      usage: "Дар болои <body> ё дар дохили <article> истифода мешавад.",
      syntax: "<header>\n  <h1>Номи сайт</h1>\n</header>",
      shortExample: "<header>\n  <h2>Web Academy</h2>\n</header>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли header</title>\n</head>\n<body>\n  <header style=\"background:#2563eb;color:white;padding:12px;\">\n    <strong>Web Academy</strong> — Сарлавҳаи сомона\n  </header>\n</body>\n</html>",
      outputText: "Қисми болоии кабуд бо номи «Web Academy — Сарлавҳаи сомона» намоиш меёбад.",
      previewHtml: "<header style='background:#2563eb;color:white;padding:12px;font-family:sans-serif;border-radius:6px;'><strong>Web Academy</strong> — Сарлавҳаи сомона</header>",
      mistakes: "Омехта кардани <header> (қисми намоён) бо <head> (метамаълумоти пинҳон).",
      tip: "Дар як саҳифа метавонед якчанд <header> дошта бошед (масалан, барои саҳифа ва барои мақола)."
    },
    {
      id: "html-nav",
      name: "<nav>",
      lang: "HTML",
      group: "Semantic HTML",
      description: "Теги <nav> (Navigation) қисми пайвандҳои асосии навигатсионии сайтро муайян мекунад.",
      purpose: "Осон кардани дарки менюи асосӣ барои браузерҳо ва хонандагони экран.",
      usage: "Барои менюи асосӣ, пагинатсия ё пайвандҳои дохилии саҳифа истифода мешавад.",
      syntax: "<nav>\n  <a href=\"#home\">Асосӣ</a>\n  <a href=\"#about\">Дар бораи мо</a>\n</nav>",
      shortExample: "<nav><a href=\"#html\">HTML</a> | <a href=\"#css\">CSS</a></nav>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли nav</title>\n</head>\n<body>\n  <nav style=\"display:flex;gap:12px;font-family:sans-serif;\">\n    <a href=\"#home\">Асосӣ</a>\n    <a href=\"#lessons\">Дарсҳо</a>\n    <a href=\"#contact\">Тамос</a>\n  </nav>\n</body>\n</html>",
      outputText: "Пайвандҳои навигатсионӣ (Асосӣ, Дарсҳо, Тамос) дар як сатр нишон дода мешаванд.",
      previewHtml: "<nav style='display:flex;gap:14px;font-family:sans-serif;'><a href='#h'>Асосӣ</a><a href='#l'>Дарсҳо</a><a href='#c'>Тамос</a></nav>",
      mistakes: "Гузоштани ҳар як пайванди хурди поёни саҳифа (footer) дар дохили <nav>.",
      tip: "<nav>-ро асосан барои блокҳои муҳими гузариш истифода баред."
    },
    {
      id: "html-main",
      name: "<main>",
      lang: "HTML",
      group: "Semantic HTML",
      description: "Теги <main> мундариҷаи асосӣ ва беназири саҳифаро (бе менюи такрорӣ ва поёни саҳифа) дар бар мегирад.",
      purpose: "Кӯмак ба корбарон ва системаҳои ҷустуҷӯӣ барои ёфтани қисми марказии саҳифа.",
      usage: "Дар як саҳифа танҳо як теги <main> истифода мешавад.",
      syntax: "<main>\n  <h1>Мавзӯи асосӣ</h1>\n</main>",
      shortExample: "<main>\n  <p>Мундариҷаи асосии ин саҳифа.</p>\n</main>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли main</title>\n</head>\n<body>\n  <main style=\"font-family:sans-serif;\">\n    <h2>Дарси имрӯз</h2>\n    <p>Ин қисми асосии саҳифа аст.</p>\n  </main>\n</body>\n</html>",
      outputText: "Сарлавҳа ва матни асосии саҳифа дар дохили қисми <main> намоиш меёбанд.",
      previewHtml: "<main style='font-family:sans-serif;'><h2 style='margin:0 0 6px;'>Дарси имрӯз</h2><p style='margin:0;'>Ин қисми асосии саҳифа аст.</p></main>",
      mistakes: "Гузоштани зиёда аз як <main> ё ҷойгир кардани он дар дохили <article> ё <aside>.",
      tip: "Қисмҳои такроршаванда мисли логотип ва copyright-ро берун аз <main> нигоҳ доред."
    },
    {
      id: "html-section-article",
      name: "<section> ва <article>",
      lang: "HTML",
      group: "Semantic HTML",
      description: "Теги <section> бахши мавзӯии саҳифаро ҷудо мекунад, <article> бошад мундариҷаи мустақилро (мақола, хабар, корти маҳсулот) месозад.",
      purpose: "Тақсимоти мантиқӣ ва фаҳмои мундариҷаи саҳифа.",
      usage: "<section> барои бобҳои саҳифа ва <article> барои хабарҳо, постҳои блог ва дарсҳо истифода мешавад.",
      syntax: "<section>\n  <article><h2>Мақола</h2></article>\n</section>",
      shortExample: "<article><h3>Хабари нав</h3><p>Матн...</p></article>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>section ва article</title>\n</head>\n<body>\n  <section style=\"font-family:sans-serif;\">\n    <h2>Хабарҳои технологӣ</h2>\n    <article style=\"border:1px solid #cbd5e1;padding:10px;border-radius:6px;\">\n      <h3>HTML5 омӯзед</h3>\n      <p>Ин мақолаи мустақил аст.</p>\n    </article>\n  </section>\n</body>\n</html>",
      outputText: "Бахши «Хабарҳои технологӣ» бо як корти мақола дар дохилаш намоиш меёбад.",
      previewHtml: "<section style='font-family:sans-serif;'><h3 style='margin:0 0 8px;'>Хабарҳои технологӣ</h3><article style='border:1px solid #cbd5e1;padding:10px;border-radius:6px;'><strong>HTML5 омӯзед</strong><p style='margin:4px 0 0;'>Ин мақолаи мустақил аст.</p></article></section>",
      mistakes: "Истифодаи <section> танҳо барои ороиши CSS ба ҷои <div>.",
      tip: "Агар матнро ба сайти дигар гузаронед ва он мустақилона маъно дошта бошад — <article>-ро истифода баред."
    },
    {
      id: "html-aside",
      name: "<aside>",
      lang: "HTML",
      group: "Semantic HTML",
      description: "Теги <aside> қисми паҳлӯӣ ё маълумоти иловагиро (Sidebar, маслиҳат, рӯйхати мақолаҳои марбут) муайян мекунад.",
      purpose: "Ҷудо кардани маълумоти ёрирасон аз матни асосӣ.",
      usage: "Дар панели паҳлӯии сайтҳо ё ҳамчун қуттии маълумоти иловагӣ дар мақолаҳо истифода мешавад.",
      syntax: "<aside>\n  <h3>Маълумоти иловагӣ</h3>\n</aside>",
      shortExample: "<aside><p>Эзоҳ: Ин дарс офлайн аст.</p></aside>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли aside</title>\n</head>\n<body>\n  <aside style=\"background:#f1f5f9;padding:10px;border-left:4px solid #2563eb;font-family:sans-serif;\">\n    <strong>Маслиҳат:</strong> Ҳар рӯз 20 дақиқа машқ кунед.\n  </aside>\n</body>\n</html>",
      outputText: "Қуттии иловагии кабудранг бо маслиҳат намоиш дода мешавад.",
      previewHtml: "<aside style='background:#f1f5f9;padding:10px;border-left:4px solid #2563eb;font-family:sans-serif;'><strong>Маслиҳат:</strong> Ҳар рӯз 20 дақиқа машқ кунед.</aside>",
      mistakes: "Ҷойгир кардани мундариҷаи асосии саҳифа дар дохили <aside>.",
      tip: "Панели дарахти папкаҳо дар Web Academy низ намунаи <aside> мебошад."
    },
    {
      id: "html-footer",
      name: "<footer>",
      lang: "HTML",
      group: "Semantic HTML",
      description: "Теги <footer> қисми поёнии саҳифа ё бахшро (ҳуқуқи муаллиф, суроға, пайвандҳои иловагӣ) муайян мекунад.",
      purpose: "Ҷамъбасти саҳифа ва пешниҳоди маълумоти тамос ё ҳуқуқӣ.",
      usage: "Дар охири <body> ё поёни <article> гузошта мешавад.",
      syntax: "<footer>\n  <p>&copy; 2026 Web Academy</p>\n</footer>",
      shortExample: "<footer>© 2026 Ҳамаи ҳуқуқҳо маҳфузанд.</footer>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Мисоли footer</title>\n</head>\n<body>\n  <footer style=\"background:#0f172a;color:#e2e8f0;padding:12px;text-align:center;font-family:sans-serif;\">\n    &copy; 2026 Web Academy — Бо забони тоҷикӣ\n  </footer>\n</body>\n</html>",
      outputText: "Қисми поёнии торик бо навиштаҷоти «© 2026 Web Academy — Бо забони тоҷикӣ» пайдо мешавад.",
      previewHtml: "<footer style='background:#0f172a;color:#e2e8f0;padding:12px;text-align:center;font-family:sans-serif;border-radius:6px;'>&copy; 2026 Web Academy — Бо забони тоҷикӣ</footer>",
      mistakes: "Ҷойгир кардани <footer> дар болои саҳифа ё дохили <head>.",
      tip: "Дар <footer> маълумоти муаллиф, санаи навсозӣ ва пайвандҳои тамосро ҷой диҳед."
    },

    // ==================== HTML: Advanced & APIs ====================
    {
      id: "html-entities",
      name: "HTML Entities",
      lang: "HTML",
      group: "Advanced & APIs",
      description: "HTML Entities рамзҳои махсусе мебошанд, ки бо & оғоз ва бо ; ба охир мерасанд (масалан &lt;, &gt;, &copy;, &nbsp;).",
      purpose: "Намоиши аломатҳое, ки дар HTML маънои техникӣ доранд ё дар клавиатура нестанд.",
      usage: "Ҳангоми навиштани < ва > дар матн, аломати © ё фосилаи ношикананда (&nbsp;) истифода мешаванд.",
      syntax: "&lt;div&gt;  &copy;  &amp;  &nbsp;",
      shortExample: "<p>Теги &lt;p&gt; барои абзац аст. &copy; 2026</p>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML Entities</title>\n</head>\n<body>\n  <p>Намоиши тег дар матн: &lt;h1&gt;Салом&lt;/h1&gt;</p>\n  <p>Ҳуқуқи муаллиф: &copy; 2026 &mdash; Нарх: 100 &euro;</p>\n</body>\n</html>",
      outputText: "Дар саҳифа «<h1>Салом</h1>» ҳамчун матни оддӣ ва аломатҳои ©, —, € чоп мешаванд.",
      previewHtml: "<div style='font-family:sans-serif;'><p>Намоиши тег дар матн: &lt;h1&gt;Салом&lt;/h1&gt;</p><p>Ҳуқуқи муаллиф: &copy; 2026 &mdash; Нарх: 100 &euro;</p></div>",
      mistakes: "Навиштани <h1 > мустақиман дар матн бе &lt; — браузер онро ҳамчун теги воқеӣ иҷро мекунад.",
      tip: "Рамзҳои муҳимтарин: &lt; (<), &gt; (>), &amp; (&), &quot; (\") ва &copy; (©)."
    },
    {
      id: "html-global-attrs",
      name: "Global Attributes (id, class)",
      lang: "HTML",
      group: "Advanced & APIs",
      description: "Атрибутҳои умумӣ (id, class, title, hidden, tabindex) дар ҳамаи тегҳои HTML кор мекунанд.",
      purpose: "Шинохти унсурҳо барои CSS ва JavaScript, инчунин илова кардани маслиҳат ва пинҳонсозӣ.",
      usage: "id барои унсури ягона, class барои гурӯҳи унсурҳо истифода мешавад.",
      syntax: "<div id=\"header\" class=\"box active\" title=\"Тавсиф\"></div>",
      shortExample: "<p id=\"intro\" class=\"text-blue\">Салом!</p>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Global Attributes</title>\n  <style>.badge { background:#2563eb; color:#fff; padding:4px 10px; border-radius:6px; }</style>\n</head>\n<body>\n  <span id=\"mainBadge\" class=\"badge\" title=\"Ин эзоҳ аст\">Нишона</span>\n</body>\n</html>",
      outputText: "Нишонаи кабуд бо номи «Нишона» пайдо мешавад ва ҳангоми бурдани муш эзоҳи он мебарояд.",
      previewHtml: "<span style='background:#2563eb;color:#fff;padding:5px 10px;border-radius:6px;font-family:sans-serif;' title='Ин эзоҳ аст'>Нишона</span>",
      mistakes: "Додани як id ба ду унсури гуногун дар як саҳифа (id бояд нотакрор бошад!).",
      tip: "Ба як унсур метавонед якчанд class-ро бо фосила диҳед: class=\"btn btn-primary\"."
    },
    {
      id: "html-data-attrs",
      name: "Data Attributes (data-*)",
      lang: "HTML",
      group: "Advanced & APIs",
      description: "Атрибутҳои data-* имкон медиҳанд маълумоти иловагии худро дар дохили тегҳои HTML бехатар нигоҳ доред.",
      purpose: "Интиқоли маълумот аз HTML ба JavaScript (масалан, ID-и маҳсулот ё забони дарс).",
      usage: "Бо пешванди data- номгузорӣ шуда, дар JS тавассути element.dataset хонда мешаванд.",
      syntax: "<button data-id=\"42\" data-lang=\"HTML\">Кушодан</button>",
      shortExample: "<div id=\"card\" data-price=\"120\">Китоб</div>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Data Attributes</title>\n</head>\n<body>\n  <button data-course=\"JavaScript\" onclick=\"this.textContent='Курс: ' + this.dataset.course\">Дидан</button>\n</body>\n</html>",
      outputText: "Ҳангоми пахш кардани тугма, қиммати data-course («JavaScript») хонда мешавад.",
      previewHtml: "<button data-course='JavaScript' style='padding:6px 12px;cursor:pointer;' onclick=\"document.getElementById('dRes').textContent='Курс: ' + this.dataset.course\">Дидан</button> <span id='dRes' style='font-family:sans-serif;margin-left:8px;'></span>",
      mistakes: "Истифодаи ҳарфҳои калон ё фосила дар номи data-*.",
      tip: "data-user-id дар JavaScript ҳамчун dataset.userId (camelCase) дастрас мешавад."
    },
    {
      id: "html-accessibility",
      name: "Accessibility (ARIA & Alt)",
      lang: "HTML",
      group: "Advanced & APIs",
      description: "Дастрасӣ (Accessibility / a11y) сохтани саҳифаҳоест, ки барои ҳама, аз ҷумла одамони дорои маълулияти биноӣ ё ҳаракат қулай бошанд.",
      purpose: "Таъмини кор бо клавиатура (Tab) ва хонандагони экран (Screen Readers).",
      usage: "Бо тегҳои семантикӣ, alt барои расм, <label> барои форма ва атрибутҳои aria-label / role таъмин мешавад.",
      syntax: "<button aria-label=\"Пӯшидани равзана\">&times;</button>",
      shortExample: "<img src=\"chart.png\" alt=\"Афзоиши донишҷӯён дар соли 2026\">",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Accessibility</title>\n</head>\n<body>\n  <button type=\"button\" aria-label=\"Ҷустуҷӯи маълумот\">&#128269;</button>\n  <div role=\"status\" aria-live=\"polite\">Маълумот нав шуд.</div>\n</body>\n</html>",
      outputText: "Тугмаи ҷустуҷӯ бо номи фаҳмо барои хонандаи экран ва қисми status-и зинда эҷод мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><button type='button' aria-label='Ҷустуҷӯ'>&#128269;</button> <span role='status'>Маълумот нав шуд.</span></div>",
      mistakes: "Сохтани тугмаҳо бо <div onclick=\"...\"> бе keyboard focus ва aria-label.",
      tip: "Қоидаи тиллоӣ: Аввал HTML-и семантикиро (<button>, <nav>, <main>) истифода баред, сипас ARIA-ро."
    },
    {
      id: "html-seo",
      name: "SEO Basics",
      lang: "HTML",
      group: "Advanced & APIs",
      description: "SEO (Search Engine Optimization) тарзи дуруст сохтани HTML барои он ки Google ва дигар системаҳои ҷустуҷӯӣ сайтро дар ҷойҳои аввал нишон диҳанд.",
      purpose: "Баланд бардоштани дидашавии сайт дар ҷустуҷӯи интернетӣ.",
      usage: "Бо <title>, <meta name=\"description\">, сохтори дурусти <h1>-<h3>, alt дар расмҳо ва тегҳои семантикӣ амалӣ мегардад.",
      syntax: "<meta name=\"description\" content=\"Тавсифи дақиқи саҳифа\">",
      shortExample: "<title>Курси ройгони HTML</title>\n<meta name=\"description\" content=\"Омӯзиши HTML бо забони тоҷикӣ\">",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Омӯзиши HTML — Web Academy</title>\n  <meta name=\"description\" content=\"Дастури пурраи HTML бо мисолҳо.\">\n</head>\n<body>\n  <main><h1>Омӯзиши HTML</h1><p>Матни пурмазмун барои хонанда.</p></main>\n</body>\n</html>",
      outputText: "Саҳифа бо унвон, тавсифи мета ва <h1>-и ягона барои системаҳои ҷустуҷӯӣ омода мешавад.",
      previewHtml: "<div style='font-family:sans-serif;border:1px solid #cbd5e1;padding:10px;border-radius:6px;'><div style='color:#1d4ed8;font-weight:bold;'>Омӯзиши HTML — Web Academy</div><div style='font-size:13px;color:#475569;'>Дастури пурраи HTML бо мисолҳо.</div></div>",
      mistakes: "Истифодаи якчанд <h1> ё пур кардани саҳифа бо калимаҳои калидии такрорӣ.",
      tip: "Суръати боршавӣ ва мутобиқат ба телефон (viewport) низ барои SEO аҳамияти калон доранд."
    },
    {
      id: "html-apis",
      name: "HTML APIs (<dialog>, <details>)",
      lang: "HTML",
      group: "Advanced & APIs",
      description: "HTML5 унсурҳои интерактивии дарунсохтро мисли <details>/<summary> (аккордеон) ва <dialog> (равзанаи модалӣ) бе ниёз ба китобхонаи беруна пешниҳод мекунад.",
      purpose: "Сохтани унсурҳои интерактивии зуд, сабук ва дастрас.",
      usage: "<details> барои саволу ҷавоб (FAQ) ва <dialog> барои равзанаҳои огоҳкунӣ истифода мешаванд.",
      syntax: "<details>\n  <summary>Сарлавҳа</summary>\n  <p>Мундариҷаи пинҳон</p>\n</details>",
      shortExample: "<details><summary>Бештар хонед</summary><p>Матни иловагӣ</p></details>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>HTML APIs</title>\n</head>\n<body style=\"font-family:sans-serif;\">\n  <details>\n    <summary style=\"cursor:pointer;font-weight:bold;\">Оё ин бе JS кор мекунад?</summary>\n    <p>Бале! Теги details худаш кушода ва пӯшида мешавад.</p>\n  </details>\n</body>\n</html>",
      outputText: "Сатри «Оё ин бе JS кор мекунад?» пайдо шуда, ҳангоми пахш матни дохилаш кушода мешавад.",
      previewHtml: "<details style='font-family:sans-serif;'><summary style='cursor:pointer;font-weight:bold;'>Оё ин бе JS кор мекунад?</summary><p>Бале! Теги details худаш кушода ва пӯшида мешавад.</p></details>",
      mistakes: "Сохтани аккордеонҳои мураккаб бо JS дар ҳоле ки <details> онро дар 3 сатр иҷро мекунад.",
      tip: "Тегҳои <details> ва <dialog> пурра офлайн ва дар ҳамаи браузерҳои муосири Android кор мекунанд."
    },

    // ==================== CSS: Basics & Units ====================
    {
      id: "css-syntax",
      name: "CSS Syntax",
      lang: "CSS",
      group: "Basics & Units",
      description: "Синтаксиси CSS аз селектор (Selector) ва блоки эълон (Declaration block), ки дар дохилаш хосият ва қиммат (property: value;) дорад, иборат аст.",
      purpose: "Пайваст кардани қоидаҳои ороишӣ ба унсурҳои муайяни HTML.",
      usage: "Дар файли style.css навишта шуда, бо <link rel=\"stylesheet\" href=\"style.css\"> ба HTML пайваст мешавад.",
      syntax: "selector {\n  property: value;\n}",
      shortExample: "p {\n  color: navy;\n  font-size: 18px;\n}",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    h1 {\n      color: #2563eb;\n      text-align: center;\n    }\n  </style>\n</head>\n<body>\n  <h1>Омӯзиши CSS</h1>\n</body>\n</html>",
      outputText: "Сарлавҳаи «Омӯзиши CSS» бо ранги кабуд ва дар марказ нишон дода мешавад.",
      previewHtml: "<h2 style='color:#2563eb;text-align:center;font-family:sans-serif;'>Омӯзиши CSS</h2>",
      mistakes: "Фаромӯш кардани нуқтавергул (;) дар охири сатр ё қавси пӯшанда (}).",
      tip: "Барои шарҳнависӣ дар CSS /* шарҳ */-ро истифода баред."
    },
    {
      id: "css-selectors",
      name: "Selectors (Tag, Class, ID)",
      lang: "CSS",
      group: "Basics & Units",
      description: "Селекторҳо унсурҳои HTML-ро интихоб мекунанд: номи тег (p), класс (.card) ва идентификатор (#hero).",
      purpose: "Ҳадафгирии дақиқи унсурҳо барои тағйири намуди онҳо.",
      usage: "Class (.btn) барои такроршавӣ дар чанд унсур ва ID (#menu) барои унсури ягона истифода мешавад.",
      syntax: "p { }       /* Тег */\n.card { }  /* Класс */\n#top { }   /* ID */",
      shortExample: ".btn {\n  background: #2563eb;\n  color: white;\n}",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .box { padding: 10px; border: 2px solid #2563eb; border-radius: 8px; }\n    #special { color: #e34f26; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Қуттӣ бо класс <span id=\"special\">ва ID</span></div>\n</body>\n</html>",
      outputText: "Қуттии дорои чорчӯбаи кабуд бо матни норинҷии «ва ID» намоиш дода мешавад.",
      previewHtml: "<div style='padding:10px;border:2px solid #2563eb;border-radius:8px;font-family:sans-serif;'>Қуттӣ бо класс <span style='color:#e34f26;font-weight:bold;'>ва ID</span></div>",
      mistakes: "Фаромӯш кардани нуқта (.) пеш аз номи класс ё панҷара (#) пеш аз ID.",
      tip: "Дар лоиҳаҳои калон асосан аз селекторҳои класс (.class) истифода баред."
    },
    {
      id: "css-specificity",
      name: "Specificity & Inheritance",
      lang: "CSS",
      group: "Basics & Units",
      description: "Specificity (аввалият) муайян мекунад, ки ҳангоми бархӯрди ду қоидаи CSS кадомаш ғолиб меояд (ID > Class > Tag). Inheritance (меросгирӣ) интиқоли хосиятҳо (мисли color, font) аз волид ба фарзанд аст.",
      purpose: "Пешгӯӣ ва идоракунии дурусти ороиш дар файлҳои калон.",
      usage: "Барои фаҳмидани чаро баъзе услубҳо ба кор намераванд ё иваз мешаванд.",
      syntax: "p { color: black; }      /* 1 */\n.txt { color: blue; }    /* 10 */\n#main { color: green; }  /* 100 */",
      shortExample: "body { font-family: sans-serif; color: #1e293b; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    p { color: gray; }\n    .highlight { color: #2563eb; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <p class=\"highlight\">Класс нисбат ба тег бартарӣ дорад!</p>\n</body>\n</html>",
      outputText: "Матн бо ранги кабуд мебарояд, зеро аввалияти .highlight (10) аз p (1) баландтар аст.",
      previewHtml: "<p style='color:#2563eb;font-weight:bold;font-family:sans-serif;'>Класс нисбат ба тег бартарӣ дорад!</p>",
      mistakes: "Истифодаи бемавриди !important барои ҳалли мушкилоти аввалият.",
      tip: "Агар услуб кор накунад, аввал селектори дигаре бо аввалияти баландтарро тафтиш кунед."
    },
    {
      id: "css-units",
      name: "Units (px, rem, %, vh)",
      lang: "CSS",
      group: "Basics & Units",
      description: "Воҳидҳои андозагирӣ ба ду гурӯҳ ҷудо мешаванд: мутлақ (px) ва нисбӣ (rem, em, %, vw, vh).",
      purpose: "Муайян кардани андозаи шрифт, паҳнӣ, баландӣ ва фосилаҳо барои экранҳои гуногун.",
      usage: "rem барои андозаи шрифт (вобаста ба html), % барои паҳнии нисбӣ ва vh барои баландии экран.",
      syntax: "width: 100%;\nfont-size: 1.2rem;\nmin-height: 50vh;",
      shortExample: ".card { width: 90%; padding: 1rem; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .box { width: 80%; padding: 1rem; background: #dbeafe; border-radius: 8px; font-size: 1.1rem; }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Паҳнӣ 80% ва шрифт 1.1rem</div>\n</body>\n</html>",
      outputText: "Қуттӣ 80%-и паҳнии саҳифаро гирифта, бо андозаи мувофиқи шрифт нишон дода мешавад.",
      previewHtml: "<div style='width:80%;padding:1rem;background:#dbeafe;border-radius:8px;font-size:1.1rem;font-family:sans-serif;'>Паҳнӣ 80% ва шрифт 1.1rem</div>",
      mistakes: "Гузоштани width: 800px; барои қуттӣ, ки дар телефони 360px берун мебарояд.",
      tip: "Барои тарҳи мутобиқшаванда (Responsive) % ва rem-ро аз px бештар истифода баред."
    },

    // ==================== CSS: Colors & Backgrounds ====================
    {
      id: "css-color",
      name: "color",
      lang: "CSS",
      group: "Colors & Backgrounds",
      description: "Хосияти color ранги матни унсурро муайян мекунад (бо ном, HEX, RGB ё HSL).",
      purpose: "Рангдиҳӣ ба сарлавҳаҳо, абзацҳо ва пайвандҳо.",
      usage: "Дар ҳамаи унсурҳои матнӣ барои хонданбобӣ ва ороиш истифода мешавад.",
      syntax: "color: #2563eb;\ncolor: rgb(37, 99, 235);",
      shortExample: "h1 { color: #e34f26; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .ok { color: #16a34a; font-weight: bold; }\n    .err { color: #dc2626; }\n  </style>\n</head>\n<body>\n  <p class=\"ok\">Муваффақ шуд!</p>\n  <p class=\"err\">Хатогӣ рӯй дод.</p>\n</body>\n</html>",
      outputText: "Сатри якум бо ранги сабз ва дуюм бо ранги сурх чоп мешаванд.",
      previewHtml: "<div style='font-family:sans-serif;'><p style='color:#16a34a;font-weight:bold;margin:0 0 4px;'>Муваффақ шуд!</p><p style='color:#dc2626;margin:0;'>Хатогӣ рӯй дод.</p></div>",
      mistakes: "Интихоби ранги равшан дар заминаи равшан (камбуди контраст).",
      tip: "Ҳамеша тазодди (Contrast) матнро дар телефон низ санҷед."
    },
    {
      id: "css-background",
      name: "background",
      lang: "CSS",
      group: "Colors & Backgrounds",
      description: "Хосияти background ранги пасзамина (background-color), расми пасзамина ва ҷойгиршавии онро танзим мекунад.",
      purpose: "Ороиши заминаи саҳифа, кортҳо ва тугмаҳо.",
      usage: "Бо рангҳои HEX/RGBA ё тасвирҳо истифода мешавад.",
      syntax: "background-color: #f8fafc;\nbackground-size: cover;",
      shortExample: ".banner { background-color: #0f172a; color: white; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .card { background: #1e293b; color: #f8fafc; padding: 16px; border-radius: 10px; }\n  </style>\n</head>\n<body>\n  <div class=\"card\">Корти дорои заминаи торик</div>\n</body>\n</html>",
      outputText: "Қуттии торики кабудтоб бо матни сафед намоиш меёбад.",
      previewHtml: "<div style='background:#1e293b;color:#f8fafc;padding:14px;border-radius:10px;font-family:sans-serif;'>Корти дорои заминаи торик</div>",
      mistakes: "Гузоштани расми пасзамина бе background-size: cover;, ки боиси бурида шудани он мегардад.",
      tip: "Барои шаффофияти замина rgba(37, 99, 235, 0.12)-ро истифода баред."
    },
    {
      id: "css-gradients",
      name: "Gradients (linear-gradient)",
      lang: "CSS",
      group: "Colors & Backgrounds",
      description: "Функсияи linear-gradient гузариши ҳамвори ду ё зиёда рангҳоро дар пасзамина месозад.",
      purpose: "Сохтани пасзаминаҳои муосир бе боргирии расмҳо (беҳтар барои кори офлайн).",
      usage: "Дар хосияти background ё background-image барои тугмаҳо ва баннерҳо истифода мешавад.",
      syntax: "background: linear-gradient(135deg, #2563eb, #7c3aed);",
      shortExample: ".hero { background: linear-gradient(90deg, #0ea5e9, #6366f1); }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .grad { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 18px; border-radius: 12px; font-weight: bold; }\n  </style>\n</head>\n<body>\n  <div class=\"grad\">Градиенти зебо бе ягон расм!</div>\n</body>\n</html>",
      outputText: "Қуттӣ бо гузариши ҳамвори ранги кабуд ба бунафш нишон дода мешавад.",
      previewHtml: "<div style='background:linear-gradient(135deg,#2563eb,#7c3aed);color:white;padding:16px;border-radius:12px;font-family:sans-serif;font-weight:bold;'>Градиенти зебо бе ягон расм!</div>",
      mistakes: "Интихоби рангҳои ба ҳам номувофиқ, ки хондани матнро душвор мекунанд.",
      tip: "Градиентҳо дар CSS зуд кор мекунанд ва ба хотираи телефон бор намеоранд."
    },

    // ==================== CSS: Typography & Text ====================
    {
      id: "css-font",
      name: "font-family & font-size",
      lang: "CSS",
      group: "Typography & Text",
      description: "font-family навъи хат (шрифт) ва font-size андозаи ҳарфҳоро муайян мекунад.",
      purpose: "Хонданбоб ва зебо кардани матни саҳифа.",
      usage: "Одатан дар body барои тамоми саҳифа шрифти асосӣ таъин карда мешавад.",
      syntax: "font-family: system-ui, sans-serif;\nfont-size: 16px;",
      shortExample: "body { font-family: sans-serif; font-size: 1rem; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .big { font-family: Georgia, serif; font-size: 22px; font-weight: 700; }\n  </style>\n</head>\n<body>\n  <p class=\"big\">Шрифти калон ва ғафс</p>\n</body>\n</html>",
      outputText: "Матн бо шрифти Georgia ва андозаи 22px ғафс чоп мешавад.",
      previewHtml: "<p style='font-family:Georgia,serif;font-size:22px;font-weight:700;margin:0;'>Шрифти калон ва ғафс</p>",
      mistakes: "Гузоштани шрифти хориҷӣ бе шрифти эҳтиётӣ (масалан sans-serif).",
      tip: "Барои кори офлайн дар Android аз system-ui, sans-serif истифода баред — он шрифти тозаи системаро мегирад."
    },
    {
      id: "css-text",
      name: "text-align & line-height",
      lang: "CSS",
      group: "Typography & Text",
      description: "text-align мавқеи уфуқии матн (left, center, right) ва line-height фосилаи байни сатрҳоро танзим мекунад.",
      purpose: "Баробарсозии матн ва осон кардани хониш.",
      usage: "line-height: 1.6 барои абзацҳо ва text-align: center барои сарлавҳаҳо ё тугмаҳо.",
      syntax: "text-align: center;\nline-height: 1.6;",
      shortExample: "p { line-height: 1.6; text-align: left; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .article { line-height: 1.7; text-align: center; background: #f8fafc; padding: 12px; }\n  </style>\n</head>\n<body>\n  <p class=\"article\">Матни марказшуда<br>бо фосилаи бароҳати байни сатрҳо.</p>\n</body>\n</html>",
      outputText: "Ду сатри матн дар марказ бо фосилаи кушода байни сатрҳо намоиш меёбанд.",
      previewHtml: "<p style='line-height:1.7;text-align:center;background:#f8fafc;padding:12px;font-family:sans-serif;margin:0;'>Матни марказшуда<br>бо фосилаи бароҳати байни сатрҳо.</p>",
      mistakes: "Гузоштани line-height: 1, ки сатрҳоро ба ҳам мечаспонад.",
      tip: "Барои матни асосӣ line-height байни 1.5 ва 1.7 беҳтарин аст."
    },

    // ==================== CSS: Box Model ====================
    {
      id: "css-width-height",
      name: "width & height",
      lang: "CSS",
      group: "Box Model",
      description: "Хосиятҳои width (паҳнӣ) ва height (баландӣ) андозаи қисми мундариҷаи унсурро муайян мекунанд.",
      purpose: "Назорати андозаи қуттиҳо, расмҳо ва кортҳо.",
      usage: "Ҳамроҳ бо max-width: 100% барои он ки унсур аз экрани телефон набарояд.",
      syntax: "width: 300px;\nmax-width: 100%;\nheight: auto;",
      shortExample: ".box { width: 100%; max-width: 400px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .panel { width: 240px; max-width: 100%; height: 60px; background: #38bdf8; color: #0f172a; display: grid; place-items: center; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <div class=\"panel\">240px &times; 60px</div>\n</body>\n</html>",
      outputText: "Қуттии кабуди равшан бо паҳнии 240px ва баландии 60px сохта мешавад.",
      previewHtml: "<div style='width:240px;max-width:100%;height:60px;background:#38bdf8;color:#0f172a;display:grid;place-items:center;border-radius:8px;font-family:sans-serif;font-weight:bold;'>240px &times; 60px</div>",
      mistakes: "Гузоштани height-и сахт барои матни дароз, ки боиси берун рехтани матн мегардад.",
      tip: "Ба ҷои height бештар min-height-ро истифода баред."
    },
    {
      id: "css-margin",
      name: "margin",
      lang: "CSS",
      group: "Box Model",
      description: "Хосияти margin фосилаи берунии атрофи унсурро (байни он ва унсурҳои ҳамсоя) муайян мекунад.",
      purpose: "Дур нигоҳ доштани блокҳо аз якдигар ва марказкунии уфуқӣ (margin: 0 auto).",
      usage: "Дар кортҳо, сарлавҳаҳо ва контейнерҳо истифода мешавад.",
      syntax: "margin: 16px;\nmargin: 0 auto;",
      shortExample: ".card { margin-bottom: 20px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .a { background: #fde047; padding: 8px; margin-bottom: 16px; }\n    .b { background: #86efac; padding: 8px; }\n  </style>\n</head>\n<body>\n  <div class=\"a\">Қуттии 1 (margin-bottom: 16px)</div>\n  <div class=\"b\">Қуттии 2</div>\n</body>\n</html>",
      outputText: "Дар байни ду қуттӣ фосилаи холии 16px пайдо мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><div style='background:#fde047;padding:8px;margin-bottom:14px;'>Қуттии 1 (margin-bottom: 14px)</div><div style='background:#86efac;padding:8px;'>Қуттии 2</div></div>",
      mistakes: "Интизор шудани ранги пасзамина дар қисми margin (margin ҳамеша шаффоф аст).",
      tip: "Барои марказ кардани блоки паҳниаш муайян margin: 0 auto;-ро истифода баред."
    },
    {
      id: "css-padding",
      name: "padding",
      lang: "CSS",
      group: "Box Model",
      description: "Хосияти padding фосилаи дохилии байни мундариҷаи унсур ва чорчӯбаи (border) онро месозад.",
      purpose: "Додани фазои озод дар дохили тугмаҳо, кортҳо ва майдонҳои матн.",
      usage: "Ранги пасзаминаи унсур қисми padding-ро низ фаро мегирад.",
      syntax: "padding: 12px 20px;",
      shortExample: ".btn { padding: 10px 18px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .btn { background: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <button class=\"btn\">Тугмаи бароҳат</button>\n</body>\n</html>",
      outputText: "Тугмаи кабуд бо фазои кушоду зебо дар гирди матн намоиш меёбад.",
      previewHtml: "<button style='background:#2563eb;color:white;padding:12px 24px;border:none;border-radius:8px;font-family:sans-serif;'>Тугмаи бароҳат</button>",
      mistakes: "Надодани padding ба кортҳо, ки боиси ба девор часпидани матн мегардад.",
      tip: "Қиммати дугона мисли padding: 10px 20px; (боло/поён 10px, чап/рост 20px) хеле қулай аст."
    },
    {
      id: "css-border",
      name: "border",
      lang: "CSS",
      group: "Box Model",
      description: "Хосияти border чорчӯба (хати гирд) ва border-radius кунҷҳои мудаввари унсурро месозад.",
      purpose: "Ҷудо кардани кортҳо, майдонҳои воридотӣ ва ҷадвалҳо.",
      usage: "Бо ғафсӣ, намуд (solid, dashed) ва ранг навишта мешавад.",
      syntax: "border: 2px solid #2563eb;\nborder-radius: 10px;",
      shortExample: ".box { border: 1px solid #cbd5e1; border-radius: 8px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .frame { border: 2px dashed #7c3aed; border-radius: 12px; padding: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"frame\">Қуттӣ бо хати нуқтачин ва кунҷи мудаввар</div>\n</body>\n</html>",
      outputText: "Қуттӣ бо чорчӯбаи бунафши нуқтачин ва кунҷҳои мудаввар нишон дода мешавад.",
      previewHtml: "<div style='border:2px dashed #7c3aed;border-radius:12px;padding:12px;font-family:sans-serif;'>Қуттӣ бо хати нуқтачин ва кунҷи мудаввар</div>",
      mistakes: "Фаромӯш кардани намуди хат (масалан solid) — бе он чорчӯба намоён намешавад.",
      tip: "Барои сохтани доираи комил ба унсури квадрат border-radius: 50%; диҳед."
    },
    {
      id: "css-box-model",
      name: "Box Model & box-sizing",
      lang: "CSS",
      group: "Box Model",
      description: "Дар CSS ҳар як унсур ҳамчун қуттиест, ки аз Content, Padding, Border ва Margin иборат аст. Хосияти box-sizing: border-box padding ва border-ро ба дохили width ҳисоб мекунад.",
      purpose: "Пешгирии калон шудани ғайричашмдошти қуттиҳо ҳангоми додани padding.",
      usage: "Дар аввали ҳар файли CSS бо селектори * { box-sizing: border-box; } гузошта мешавад.",
      syntax: "* {\n  box-sizing: border-box;\n}",
      shortExample: ".box { box-sizing: border-box; width: 200px; padding: 20px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .b1 { box-sizing: border-box; width: 220px; padding: 16px; border: 4px solid #2563eb; background: #eff6ff; }\n  </style>\n</head>\n<body>\n  <div class=\"b1\">Паҳнии умумии дақиқ: 220px</div>\n</body>\n</html>",
      outputText: "Қуттӣ сарфи назар аз padding ва border паҳнии дақиқи 220px-ро нигоҳ медорад.",
      previewHtml: "<div style='box-sizing:border-box;width:220px;padding:14px;border:4px solid #2563eb;background:#eff6ff;font-family:sans-serif;'>Паҳнии умумии дақиқ: 220px</div>",
      mistakes: "Нанавиштани box-sizing: border-box дар лоиҳа, ки боиси шикастани сеткаи сутунҳо мегардад.",
      tip: "Ҳамеша файли style.css-ро бо *, *::before, *::after { box-sizing: border-box; } оғоз кунед."
    },

    // ==================== CSS: Layout ====================
    {
      id: "css-display",
      name: "display",
      lang: "CSS",
      group: "Layout",
      description: "Хосияти display тарзи намоиши унсурро муайян мекунад: block, inline, inline-block, flex, grid ё none.",
      purpose: "Идоракунии ҷойгиршавии унсурҳо ва пинҳон кардани онҳо (display: none).",
      usage: "Барои сохтани тарҳҳои муосир (flex/grid) ва пинҳон/намоён кардани равзанаҳо.",
      syntax: "display: block | inline | flex | grid | none;",
      shortExample: ".hidden { display: none; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .tag { display: inline-block; background: #e2e8f0; padding: 6px 12px; border-radius: 6px; margin-right: 6px; }\n  </style>\n</head>\n<body>\n  <span class=\"tag\">HTML</span>\n  <span class=\"tag\">CSS</span>\n</body>\n</html>",
      outputText: "Ду нишонаи HTML ва CSS дар як сатр бо padding-и дуруст ҷойгир мешаванд.",
      previewHtml: "<div style='font-family:sans-serif;'><span style='display:inline-block;background:#e2e8f0;padding:6px 12px;border-radius:6px;margin-right:6px;'>HTML</span><span style='display:inline-block;background:#e2e8f0;padding:6px 12px;border-radius:6px;'>CSS</span></div>",
      mistakes: "Кӯшиши додани width ва height ба унсури display: inline (онҳо кор намекунанд).",
      tip: "Барои он ки унсур дар як сатр монад ва padding/width қабул кунад, inline-block-ро гиред."
    },
    {
      id: "css-position",
      name: "position",
      lang: "CSS",
      group: "Layout",
      description: "Хосияти position тарзи ҷойгиршавии дақиқи унсурро (static, relative, absolute, fixed, sticky) танзим мекунад.",
      purpose: "Сохтани менюҳои часпанда (sticky/fixed), нишонаҳо дар гӯшаи корт (absolute) ва равзанаҳои модалӣ.",
      usage: "Бо хосиятҳои top, right, bottom, left якҷоя кор мекунад.",
      syntax: "position: relative;\nposition: absolute; top: 8px; right: 8px;",
      shortExample: ".navbar { position: sticky; top: 0; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .wrap { position: relative; background: #f1f5f9; padding: 20px; border-radius: 8px; }\n    .badge { position: absolute; top: 6px; right: 8px; background: #ef4444; color: white; padding: 2px 8px; border-radius: 99px; font-size: 12px; }\n  </style>\n</head>\n<body>\n  <div class=\"wrap\">Корти маҳсулот <span class=\"badge\">Нав</span></div>\n</body>\n</html>",
      outputText: "Нишонаи сурхи «Нав» дар кунҷи рости болоии корт ҷойгир мешавад.",
      previewHtml: "<div style='position:relative;background:#f1f5f9;padding:20px;border-radius:8px;font-family:sans-serif;'>Корти маҳсулот <span style='position:absolute;top:6px;right:8px;background:#ef4444;color:white;padding:2px 8px;border-radius:99px;font-size:12px;'>Нав</span></div>",
      mistakes: "Истифодаи position: absolute бе гузоштани position: relative дар унсури волид.",
      tip: "position: sticky; барои сарлавҳаи болоие, ки ҳангоми скролл дар ҷояш мемонад, беҳтарин аст."
    },
    {
      id: "css-z-index",
      name: "z-index",
      lang: "CSS",
      group: "Layout",
      description: "Хосияти z-index тартиби қабатҳои унсурҳоро (кадом унсур дар болои дигараш меистад) муайян мекунад.",
      purpose: "Нигоҳ доштани меню, модал ё tooltip дар болои дигар қисмҳои саҳифа.",
      usage: "Танҳо ба унсурҳое таъсир мерасонад, ки position-и онҳо relative, absolute, fixed ё sticky бошад (ё фарзанди flex/grid).",
      syntax: "z-index: 50;",
      shortExample: ".modal { position: fixed; z-index: 100; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .box1 { position: relative; z-index: 1; background: #93c5fd; width: 120px; padding: 12px; }\n    .box2 { position: relative; z-index: 2; background: #fca5a5; width: 120px; padding: 12px; margin-top: -18px; margin-left: 30px; }\n  </style>\n</head>\n<body>\n  <div class=\"box1\">Қабати 1</div>\n  <div class=\"box2\">Қабати 2 (дар боло)</div>\n</body>\n</html>",
      outputText: "Қуттии сурх (z-index: 2) дар болои қуттии кабуд (z-index: 1) ҷойгир мешавад.",
      previewHtml: "<div style='font-family:sans-serif;'><div style='position:relative;z-index:1;background:#93c5fd;width:120px;padding:10px;'>Қабати 1</div><div style='position:relative;z-index:2;background:#fca5a5;width:140px;padding:10px;margin-top:-14px;margin-left:28px;'>Қабати 2 (боло)</div></div>",
      mistakes: "Додани z-index ба унсуре, ки position: static дорад (кор намекунад).",
      tip: "Қимматҳои оддӣ ва мураттаб мисли 10, 20, 50-ро истифода баред, на 999999."
    },
    {
      id: "css-flexbox",
      name: "Flexbox",
      lang: "CSS",
      group: "Layout",
      description: "Flexbox низоми якченакаи ҷойгиркунӣ (сатр ё сутун) мебошад, ки баробарсозӣ ва тақсими фазоро хеле осон мекунад.",
      purpose: "Сохтани менюҳо, марказкунии унсурҳо ва сатри тугмаҳо.",
      usage: "Ба волид display: flex; дода, бо justify-content, align-items ва gap идора мешавад.",
      syntax: "display: flex;\njustify-content: space-between;\nalign-items: center;\ngap: 12px;",
      shortExample: ".row { display: flex; gap: 10px; align-items: center; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .flex { display: flex; justify-content: space-around; gap: 10px; background: #f1f5f9; padding: 12px; }\n    .item { background: #2563eb; color: white; padding: 10px 16px; border-radius: 6px; }\n  </style>\n</head>\n<body>\n  <div class=\"flex\">\n    <div class=\"item\">1</div><div class=\"item\">2</div><div class=\"item\">3</div>\n  </div>\n</body>\n</html>",
      outputText: "Се қуттии кабуд дар як сатри уфуқӣ бо фосилаи баробар ҷойгир мешаванд.",
      previewHtml: "<div style='display:flex;justify-content:space-around;gap:10px;background:#f1f5f9;padding:12px;font-family:sans-serif;border-radius:8px;'><div style='background:#2563eb;color:white;padding:10px 18px;border-radius:6px;'>1</div><div style='background:#2563eb;color:white;padding:10px 18px;border-radius:6px;'>2</div><div style='background:#2563eb;color:white;padding:10px 18px;border-radius:6px;'>3</div></div>",
      mistakes: "Фаромӯш кардани flex-wrap: wrap;, ки дар телефони хурд унсурҳоро аз экран берун мебарорад.",
      tip: "Барои фосилаи байни унсурҳои flex ҳамеша gap-ро истифода баред, на margin-ро."
    },
    {
      id: "css-grid",
      name: "CSS Grid",
      lang: "CSS",
      group: "Layout",
      description: "CSS Grid низоми дученакаи (сатрҳо ва сутунҳо) ҷойгиркунӣ барои сохтани сеткаи мураккаби саҳифа ва кортҳо мебошад.",
      purpose: "Сохтани галереяҳо, dashboard-ҳо ва саҳифаҳои бисёрсутуна.",
      usage: "Бо display: grid; grid-template-columns ва gap кор мекунад.",
      syntax: "display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 12px;",
      shortExample: ".grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 10px; }\n    .cell { background: #7c3aed; color: white; padding: 14px; text-align: center; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <div class=\"grid\">\n    <div class=\"cell\">A</div><div class=\"cell\">B</div><div class=\"cell\">C</div>\n  </div>\n</body>\n</html>",
      outputText: "Се корти бунафш дар шакли сеткаи мутобиқшаванда ҷойгир мешаванд.",
      previewHtml: "<div style='display:grid;grid-template-columns:repeat(3,1fr);gap:10px;font-family:sans-serif;'><div style='background:#7c3aed;color:white;padding:14px;text-align:center;border-radius:8px;'>A</div><div style='background:#7c3aed;color:white;padding:14px;text-align:center;border-radius:8px;'>B</div><div style='background:#7c3aed;color:white;padding:14px;text-align:center;border-radius:8px;'>C</div></div>",
      mistakes: "Истифодаи px-и сахт ба ҷои воҳиди чандири fr (fraction).",
      tip: "repeat(auto-fit, minmax(220px, 1fr)) сеткаро бе Media Query низ ба телефон мутобиқ месозад!"
    },
    {
      id: "css-overflow",
      name: "overflow",
      lang: "CSS",
      group: "Layout",
      description: "Хосияти overflow муайян мекунад, ки агар мундариҷа аз андозаи қуттӣ зиёд шавад, чӣ рух диҳад (visible, hidden, auto, scroll).",
      purpose: "Пешгирии вайроншавии тарҳ дар блокҳои код ва қуттиҳои маҳдуд.",
      usage: "overflow-x: auto; барои сатрҳои дарози код дар телефон хеле зарур аст.",
      syntax: "overflow: auto;\noverflow-x: auto;",
      shortExample: "pre { overflow-x: auto; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .scroll-box { width: 220px; height: 65px; overflow: auto; border: 1px solid #cbd5e1; padding: 8px; }\n  </style>\n</head>\n<body>\n  <div class=\"scroll-box\">Ин матни дароз аст, ки дар дохили қуттии хурд бо скролл ҷойгир карда шудааст.</div>\n</body>\n</html>",
      outputText: "Дар дохили қуттии 220x65px скролли дохилӣ пайдо мешавад.",
      previewHtml: "<div style='width:240px;height:60px;overflow:auto;border:1px solid #cbd5e1;padding:8px;font-family:sans-serif;'>Ин матни дароз аст, ки дар дохили қуттии хурд бо скролл ҷойгир карда шудааст ва берун намеравад.</div>",
      mistakes: "Гузоштани overflow: hidden ба тамоми саҳифа, ки корбарро аз дидани қисмҳои поён маҳрум мекунад.",
      tip: "overflow: auto; танҳо вақте скроллро нишон медиҳад, ки воқеан лозим бошад."
    },

    // ==================== CSS: Effects & Pseudo ====================
    {
      id: "css-pseudo-classes",
      name: "Pseudo-classes (:hover, :focus)",
      lang: "CSS",
      group: "Effects & Pseudo",
      description: "Псевдо-классҳо (бо як дунуқта :) ҳолати махсуси унсурро мегиранд: бурдани муш (:hover), фаъолсозӣ (:focus), ё аввалин фарзанд (:first-child).",
      purpose: "Интерактивӣ кардани тугмаҳо, пайвандҳо ва майдонҳои форма.",
      usage: "Дар тугмаҳо (:hover), input-ҳо (:focus) ва рӯйхатҳо (:nth-child) истифода мешаванд.",
      syntax: "button:hover { background: #1d4ed8; }\ninput:focus { border-color: #2563eb; }",
      shortExample: "a:hover { text-decoration: underline; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .btn { background: #2563eb; color: white; padding: 10px 16px; border: none; border-radius: 8px; cursor: pointer; }\n    .btn:hover { background: #1e40af; }\n  </style>\n</head>\n<body>\n  <button class=\"btn\">Мушро биёред</button>\n</body>\n</html>",
      outputText: "Ҳангоми бурдани муш ба рӯи тугма ранги он тиратар мешавад.",
      previewHtml: "<style>.pbtn{background:#2563eb;color:white;padding:10px 16px;border:none;border-radius:8px;cursor:pointer;}.pbtn:hover{background:#1e40af;}</style><button class='pbtn'>Мушро биёред</button>",
      mistakes: "Фаромӯш кардани :focus барои корбарони клавиатура.",
      tip: "Дар телефонҳои сенсорӣ :active ба ҷои :hover аксуламал нишон медиҳад."
    },
    {
      id: "css-pseudo-elements",
      name: "Pseudo-elements (::before, ::after)",
      lang: "CSS",
      group: "Effects & Pseudo",
      description: "Псевдо-унсурҳо (бо ду дунуқта ::) имкон медиҳанд, ки бе илова кардани теги HTML унсури ороишии пеш ё пас созед.",
      purpose: "Илова кардани иконка, хатча ё нишона тавассути CSS.",
      usage: "Ҳамеша хосияти content: \"\";-ро талаб мекунанд.",
      syntax: ".title::before {\n  content: \"★ \";\n  color: gold;\n}",
      shortExample: ".req::after { content: \" *\"; color: red; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .note::before { content: \"💡 \"; }\n  </style>\n</head>\n<body>\n  <p class=\"note\">Ин аломат бо ::before илова шуд.</p>\n</body>\n</html>",
      outputText: "Дар аввали ҷумла нишонаи 💡 ба таври худкор пайдо мешавад.",
      previewHtml: "<style>.n::before{content:'💡 ';}</style><p class='n' style='font-family:sans-serif;margin:0;'>Ин аломат бо ::before илова шуд.</p>",
      mistakes: "Фаромӯш кардани content: \"\"; — бе он ::before ва ::after умуман пайдо намешаванд.",
      tip: "Матни муҳимро дар ::before нагузоред, зеро баъзе хонандагони экран онро намехонанд."
    },
    {
      id: "css-shadow",
      name: "box-shadow",
      lang: "CSS",
      group: "Effects & Pseudo",
      description: "Хосияти box-shadow дар атрофи қуттӣ сояи нарм месозад, ки ба кортҳо умқ ва зебоӣ мебахшад.",
      purpose: "Ҷудо кардани кортҳо ва равзанаҳо аз пасзамина.",
      usage: "Қимматҳо: x-offset y-offset blur spread color.",
      syntax: "box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);",
      shortExample: ".card { box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .card { background: white; padding: 16px; border-radius: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.12); }\n  </style>\n</head>\n<body>\n  <div class=\"card\">Корти дорои сояи мулоим</div>\n</body>\n</html>",
      outputText: "Корти сафед бо сояи нарми поёнӣ намоиш дода мешавад.",
      previewHtml: "<div style='background:white;padding:16px;border-radius:10px;box-shadow:0 8px 20px rgba(0,0,0,0.12);font-family:sans-serif;margin:8px;'>Корти дорои сояи мулоим</div>",
      mistakes: "Истифодаи сояи хеле сиёҳ ва ғафс, ки саҳифаро кӯҳна нишон медиҳад.",
      tip: "Барои сояҳои муосир шаффофияти кам (0.06 то 0.14) ва blur-и калон гиред."
    },
    {
      id: "css-filter",
      name: "filter",
      lang: "CSS",
      group: "Effects & Pseudo",
      description: "Хосияти filter таъсирҳои графикиро ба мисли хирасозӣ (blur), сиёҳу сафед (grayscale) ва равшанӣ (brightness) ба унсурҳо мебахшад.",
      purpose: "Таҳрири визуалии расмҳо ва пасзамина бе барномаи графикӣ.",
      usage: "Дар расмҳо, иконкаҳо ва барои эффекти шишагӣ (backdrop-filter: blur) истифода мешавад.",
      syntax: "filter: grayscale(100%);\nfilter: blur(2px);",
      shortExample: "img:hover { filter: brightness(1.1); }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .box { background: linear-gradient(45deg, #2563eb, #10b981); color: white; padding: 14px; border-radius: 8px; filter: saturate(1.4); }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Рангҳои сер бо filter: saturate(1.4)</div>\n</body>\n</html>",
      outputText: "Қуттӣ бо рангҳои равшан ва сери кабуду сабз нишон дода мешавад.",
      previewHtml: "<div style='background:linear-gradient(45deg,#2563eb,#10b981);color:white;padding:14px;border-radius:8px;filter:saturate(1.4);font-family:sans-serif;'>Рангҳои сер бо filter: saturate(1.4)</div>",
      mistakes: "Гузоштани blur-и калон ба унсурҳои матнӣ (матн нохоно мешавад).",
      tip: "Дар саҳифаҳои муосир backdrop-filter: blur(8px) барои менюҳои шаффоф хеле маъмул аст."
    },

    // ==================== CSS: Motion ====================
    {
      id: "css-transition",
      name: "transition",
      lang: "CSS",
      group: "Motion",
      description: "Хосияти transition тағйироти CSS-ро (масалан, ҳангоми :hover) ба ҷои ҷаҳиши якбора, ҳамвор ва зебо месозад.",
      purpose: "Эҷоди аниматсияҳои сабуки гузариш байни ду ҳолат.",
      usage: "Дар тугмаҳо, кортҳо ва менюҳои кушодашаванда истифода мешавад.",
      syntax: "transition: all 0.25s ease;",
      shortExample: ".btn { transition: background-color 0.2s ease; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .tbtn { background: #2563eb; color: white; padding: 10px 18px; border: none; border-radius: 8px; transition: transform 0.2s, background 0.2s; cursor: pointer; }\n    .tbtn:hover { background: #7c3aed; transform: scale(1.05); }\n  </style>\n</head>\n<body>\n  <button class=\"tbtn\">Гузариши ҳамвор</button>\n</body>\n</html>",
      outputText: "Ҳангоми бурдани муш, тугма ҳамвор ба бунафш мегузарад ва каме калон мешавад.",
      previewHtml: "<style>.tb{background:#2563eb;color:white;padding:10px 18px;border:none;border-radius:8px;transition:transform 0.2s,background 0.2s;cursor:pointer;}.tb:hover{background:#7c3aed;transform:scale(1.05);}</style><button class='tb'>Гузариши ҳамвор</button>",
      mistakes: "Гузоштани transition дар :hover ба ҷои худи унсур — он гоҳ ҳангоми берун бурдани муш аниматсия кор намекунад.",
      tip: "Давомнокии 0.15s то 0.3s барои интерфейс аз ҳама қулай аст."
    },
    {
      id: "css-transform",
      name: "transform",
      lang: "CSS",
      group: "Motion",
      description: "Хосияти transform унсурро бидуни тағйир додани ҷои унсурҳои дигар гардиш (rotate), калон/хурд (scale) ё ҷойиваз (translate) мекунад.",
      purpose: "Сохтани ҳаракатҳои сабук ва баландсуръат дар GPU.",
      usage: "Барои кортҳо, иконкаҳои кушодашаванда ва менюҳои паҳлӯӣ (translateX).",
      syntax: "transform: translateY(-4px) scale(1.02);",
      shortExample: ".icon:hover { transform: rotate(90deg); }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .pill { display: inline-block; background: #0ea5e9; color: white; padding: 10px 16px; border-radius: 8px; transform: rotate(-2deg); }\n  </style>\n</head>\n<body>\n  <div class=\"pill\">Каме гардонидашуда (-2deg)</div>\n</body>\n</html>",
      outputText: "Қуттии кабуд бо гардиши сабуки -2 дараҷа намоиш дода мешавад.",
      previewHtml: "<div style='display:inline-block;background:#0ea5e9;color:white;padding:10px 16px;border-radius:8px;transform:rotate(-2deg);font-family:sans-serif;margin:8px;'>Каме гардонидашуда (-2deg)</div>",
      mistakes: "Истифодаи top/left барои аниматсия ба ҷои transform: translate().",
      tip: "transform суръати саҳифаро дар телефон паст намекунад."
    },
    {
      id: "css-animations",
      name: "@keyframes & animation",
      lang: "CSS",
      group: "Motion",
      description: "Қоидаи @keyframes марҳилаҳои аниматсияро месозад ва хосияти animation онро бо давомнокӣ ва такроршавӣ ба кор меандозад.",
      purpose: "Сохтани аниматсияҳои мустақил мисли нишонаҳои боркунӣ (Spinner) ё пайдошавии оҳиста.",
      usage: "Аввал @keyframes ном { from {} to {} } навишта шуда, сипас ба унсур пайваст мешавад.",
      syntax: "@keyframes fade {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}\n.box { animation: fade 0.5s ease; }",
      shortExample: "@keyframes pulse { 50% { opacity: 0.5; } }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }\n    .dot { width: 22px; height: 22px; border-radius: 50%; background: #22c55e; animation: bounce 1.2s infinite; }\n  </style>\n</head>\n<body>\n  <div class=\"dot\"></div>\n</body>\n</html>",
      outputText: "Доираи сабз пайваста ба боло ва поён ҳаракати нарм мекунад.",
      previewHtml: "<style>@keyframes bnc{0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}</style><div style='width:24px;height:24px;border-radius:50%;background:#22c55e;animation:bnc 1.2s infinite;margin:12px;'></div>",
      mistakes: "Гузоштани аниматсияҳои зиёд ва вазнин, ки чашми хонандаро хаста мекунанд.",
      tip: "Аниматсияҳоро кӯтоҳ ва бомақсад нигоҳ доред."
    },

    // ==================== CSS: Responsive & Modern ====================
    {
      id: "css-media-queries",
      name: "Media Queries (@media)",
      lang: "CSS",
      group: "Responsive & Modern",
      description: "Қоидаи @media имкон медиҳад, ки вобаста ба паҳнии экран (телефон, планшет, компютер) услубҳои гуногуни CSS татбиқ шаванд.",
      purpose: "Мутобиқсозии тарҳи сайт ба ҳама гуна экранҳо.",
      usage: "Дар тарҳи Mobile-First аввал услубҳои телефон навишта шуда, баъд бо @media (min-width: 768px) барои экранҳои калон тағйир дода мешаванд.",
      syntax: "@media (min-width: 768px) {\n  .grid { grid-template-columns: repeat(3, 1fr); }\n}",
      shortExample: "@media (max-width: 600px) { body { font-size: 15px; } }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .box { background: #3b82f6; color: white; padding: 12px; border-radius: 8px; }\n    @media (min-width: 600px) { .box { background: #16a34a; } }\n  </style>\n</head>\n<body>\n  <div class=\"box\">Вобаста ба паҳнии равзана ранг иваз мешавад</div>\n</body>\n</html>",
      outputText: "Дар экрани хурд қуттӣ кабуд ва дар экрани васеътар аз 600px сабз мешавад.",
      previewHtml: "<style>.mq{background:#3b82f6;color:white;padding:12px;border-radius:8px;font-family:sans-serif;}@media(min-width:500px){.mq{background:#16a34a;}}</style><div class='mq'>Вобаста ба паҳнии равзана ранг иваз мешавад</div>",
      mistakes: "Нанавиштани <meta name=\"viewport\"> дар HTML — бе он Media Queries дар телефон дуруст кор намекунанд.",
      tip: "Аз равиши Mobile-First (min-width) истифода баред, кодаш тозатар мешавад."
    },
    {
      id: "css-responsive",
      name: "Responsive Design",
      lang: "CSS",
      group: "Responsive & Modern",
      description: "Responsive Design (тарҳи мутобиқшаванда) маҷмӯи усулҳоест, ки саҳифаро дар телефон, планшет ва монитор бе скролли уфуқӣ зебо нишон медиҳад.",
      purpose: "Таъмини таҷрибаи олӣ барои корбарони мобилӣ.",
      usage: "Бо омезиши viewport, Flexbox/Grid, воҳидҳои нисбӣ (%, rem) ва Media Queries сохта мешавад.",
      syntax: "img { max-width: 100%; height: auto; }",
      shortExample: ".container { width: 100%; max-width: 1100px; margin: 0 auto; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <style>\n    .wrap { display: flex; flex-wrap: wrap; gap: 8px; }\n    .col { flex: 1 1 140px; background: #e0f2fe; padding: 10px; border-radius: 6px; }\n  </style>\n</head>\n<body>\n  <div class=\"wrap\"><div class=\"col\">Сутун 1</div><div class=\"col\">Сутун 2</div></div>\n</body>\n</html>",
      outputText: "Ду сутун дар экрани васеъ паҳлу ба паҳлу ва дар экрани танг зери ҳам меоянд.",
      previewHtml: "<div style='display:flex;flex-wrap:wrap;gap:8px;font-family:sans-serif;'><div style='flex:1 1 140px;background:#e0f2fe;padding:10px;border-radius:6px;'>Сутун 1</div><div style='flex:1 1 140px;background:#e0f2fe;padding:10px;border-radius:6px;'>Сутун 2</div></div>",
      mistakes: "Истифодаи паҳниҳои сахти пикселӣ (масалан width: 1200px) бе max-width.",
      tip: "Тугмаҳо дар телефон бояд на камтар аз 40–44px баландӣ дошта бошанд, то бо ангушт осон пахш шаванд."
    },
    {
      id: "css-variables",
      name: "CSS Variables (--var)",
      lang: "CSS",
      group: "Responsive & Modern",
      description: "Тағйирёбандаҳои CSS (--номи-ранг) имкон медиҳанд рангҳо ва андозаҳоро дар як ҷо (:root) захира карда, дар тамоми лоиҳа истифода баред.",
      purpose: "Осон кардани сохтани Light Mode ва Dark Mode ва тағйири зуди дизайн.",
      usage: "Дар :root эълон шуда, бо функсияи var(--ном) хонда мешаванд.",
      syntax: ":root { --primary: #2563eb; }\n.btn { background: var(--primary); }",
      shortExample: ":root { --gap: 16px; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    :root { --accent: #7c3aed; }\n    .tag { background: var(--accent); color: white; padding: 8px 14px; border-radius: 8px; display: inline-block; }\n  </style>\n</head>\n<body>\n  <div class=\"tag\">Ранг аз CSS Variable</div>\n</body>\n</html>",
      outputText: "Нишона бо ранги бунафши дар --accent муайяншуда намоиш дода мешавад.",
      previewHtml: "<div style='--a:#7c3aed;background:var(--a);color:white;padding:8px 14px;border-radius:8px;display:inline-block;font-family:sans-serif;'>Ранг аз CSS Variable</div>",
      mistakes: "Фаромӯш кардани ду тире (--) дар аввали номи тағйирёбанда.",
      tip: "Дар ҳамин Web Academy низ Light Mode ва Dark Mode маҳз бо CSS Variables сохта шудаанд!"
    },
    {
      id: "css-functions",
      name: "CSS Functions (calc, clamp)",
      lang: "CSS",
      group: "Responsive & Modern",
      description: "Функсияҳои CSS ба мисли calc() (ҳисоб кардани андозаҳо) ва clamp(min, preferred, max) андозагирии динамикиро таъмин мекунанд.",
      purpose: "Масалан, шрифти унвонро дар телефон хурдтар ва дар компютер калонтар кардан дар як сатр.",
      usage: "calc(100% - 32px) барои тарҳрезии дақиқ ва clamp(1rem, 2.5vw, 2rem) барои шрифт.",
      syntax: "font-size: clamp(1rem, 3vw, 1.8rem);\nwidth: calc(100% - 20px);",
      shortExample: "h1 { font-size: clamp(1.2rem, 4vw, 2.2rem); }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .fluid { font-size: clamp(16px, 3vw, 24px); background: #f1f5f9; padding: 12px; border-radius: 8px; }\n  </style>\n</head>\n<body>\n  <div class=\"fluid\">Андозаи ин матн вобаста ба экран тағйир меёбад</div>\n</body>\n</html>",
      outputText: "Матн бо андозаи байни 16px ва 24px мувофиқи паҳнии экран намоиш меёбад.",
      previewHtml: "<div style='font-size:clamp(16px,3vw,22px);background:#f1f5f9;padding:12px;border-radius:8px;font-family:sans-serif;'>Андозаи ин матн вобаста ба экран тағйир меёбад</div>",
      mistakes: "Нагузоштани фосила дар атрофи + ва - дар дохили calc(100% - 20px) (бояд фосила бошад!).",
      tip: "clamp() эҳтиёҷ ба чанд Media Query-ро барои андозаи шрифт кам мекунад."
    },
    {
      id: "css-modern",
      name: "Modern CSS (:has, Nesting)",
      lang: "CSS",
      group: "Responsive & Modern",
      description: "Имкониятҳои муосири CSS ба мисли селектори :has() (интихоби волид аз рӯи фарзанд) ва CSS Nesting (навиштани қоидаҳо дар дохили ҳам).",
      purpose: "Навиштани CSS-и кӯтоҳтар ва пуриқтидор бе JavaScript.",
      usage: "Дар браузерҳои муосири Chrome, Edge, Firefox ва Android WebView кор мекунанд.",
      syntax: ".card:has(input:checked) {\n  border-color: #2563eb;\n}",
      shortExample: "label:has(input:checked) { font-weight: bold; }",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <style>\n    .opt { display: inline-block; padding: 8px 12px; border: 2px solid #cbd5e1; border-radius: 8px; }\n    .opt:has(input:checked) { border-color: #16a34a; background: #dcfce7; }\n  </style>\n</head>\n<body>\n  <label class=\"opt\"><input type=\"checkbox\"> Интихоб кунед</label>\n</body>\n</html>",
      outputText: "Ҳангоми гузоштани аломати интихоб, ранги чорчӯбаи волид бе JS сабз мешавад.",
      previewHtml: "<style>.mopt{display:inline-block;padding:8px 12px;border:2px solid #cbd5e1;border-radius:8px;font-family:sans-serif;cursor:pointer;}.mopt:has(input:checked){border-color:#16a34a;background:#dcfce7;}</style><label class='mopt'><input type='checkbox'> Интихоб кунед</label>",
      mistakes: "Истифодаи хусусиятҳои хеле нав бе санҷидани дастгирӣ дар браузерҳои кӯҳна.",
      tip: ":has() яке аз бузургтарин навгониҳои CSS дар солҳои охир мебошад."
    },

    // ==================== JAVASCRIPT: Variables & Types ====================
    {
      id: "js-variables",
      name: "Variables (let, const, var)",
      lang: "JavaScript",
      group: "Variables & Types",
      description: "Тағйирёбандаҳо (Variables) зарфҳое барои нигоҳдории маълумот дар хотираанд: const барои қиммати доимӣ, let барои қиммати тағйирёбанда ва var (усули кӯҳна).",
      purpose: "Захира ва истифодаи номҳо, рақамҳо, рӯйхатҳо ва ҳолатҳо дар барнома.",
      usage: "Дар JS-и муосир аввал const-ро гиред; агар тағйир ёбад, let-ро истифода баред. Аз var парҳез кунед.",
      syntax: "const name = \"Web Academy\";\nlet score = 0;",
      shortExample: "const pi = 3.14;\nlet count = 1;\ncount = 2;",
      fullExample: "<script>\n  const language = \"JavaScript\";\n  let level = 1;\n  level = level + 1;\n  console.log(language, \"сатҳ:\", level);\n<\/script>",
      outputText: "Дар консоль натиҷа: JavaScript сатҳ: 2",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const language='JavaScript';let level=1;level++;document.getElementById('o').textContent=language+' сатҳ: '+level;<\/script>",
      mistakes: "Кӯшиши тағйир додани қиммати const (хатои TypeError медиҳад).",
      tip: "Номи тағйирёбандаро бо camelCase (масалан userName) фаҳмо нависед."
    },
    {
      id: "js-datatypes",
      name: "Data Types",
      lang: "JavaScript",
      group: "Variables & Types",
      description: "Дар JavaScript намудҳои асосии маълумот инҳоянд: String (матн), Number (рақам), Boolean (true/false), Undefined, Null, Object ва Array.",
      purpose: "Коркарди дурусти маълумоти гуногун ва санҷиши онҳо бо оператори typeof.",
      usage: "Ҳар як қиммат дар барнома ба яке аз ин намудҳо тааллуқ дорад.",
      syntax: "typeof \"Салом\" // \"string\"\ntypeof 42      // \"number\"\ntypeof true    // \"boolean\"",
      shortExample: "let text = \"Тоҷикистон\";\nlet year = 2026;\nlet isOffline = true;",
      fullExample: "<script>\n  const a = \"HTML\";\n  const b = 100;\n  const c = true;\n  console.log(typeof a, typeof b, typeof c);\n<\/script>",
      outputText: "Дар консоль: string number boolean",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const a='HTML',b=100,c=true;document.getElementById('o').textContent=typeof a+' | '+typeof b+' | '+typeof c;<\/script>",
      mistakes: "Ҷамъ кардани рақам бо матн (масалан 5 + \"5\" натиҷааш \"55\" мешавад, на 10!).",
      tip: "Барои табдил додани матни рақамӣ ба рақам Number(\"5\")-ро истифода баред."
    },
    {
      id: "js-operators",
      name: "Operators",
      lang: "JavaScript",
      group: "Variables & Types",
      description: "Операторҳо амалҳои риёзӣ (+, -, *, /), муқоисавӣ (===, !==, >, <) ва мантиқиро (&&, ||, !) иҷро мекунанд.",
      purpose: "Ҳисоббарорӣ ва санҷиши шартҳо дар код.",
      usage: "Барои муқоисаи дақиқ ҳамеша === (баробарии қатъӣ)-ро ба ҷои == истифода баред.",
      syntax: "const sum = 10 + 5;\nconst ok = (sum === 15) && true;",
      shortExample: "console.log(5 === \"5\"); // false",
      fullExample: "<script>\n  const x = 10, y = 3;\n  console.log(\"Ҷамъ:\", x + y, \"Боқимонда:\", x % y);\n<\/script>",
      outputText: "Ҷамъ: 13 | Боқимонда: 1",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const x=10,y=3;document.getElementById('o').textContent='Ҷамъ: '+(x+y)+' | Боқимонда: '+(x%y);<\/script>",
      mistakes: "Истифодаи = (бахшидан) ба ҷои === (муқоиса) дар дохили if.",
      tip: "Оператори % боқимондаи тақсимро медиҳад (барои ёфтани адади ҷуфт/тоқ хеле қулай аст)."
    },

    // ==================== JAVASCRIPT: Strings & Numbers ====================
    {
      id: "js-strings",
      name: "Strings & Methods",
      lang: "JavaScript",
      group: "Strings & Numbers",
      description: "Сатрҳо (Strings) барои матн буда, бо методҳои .length, .toLowerCase(), .trim(), .includes() ва Template Literals (`Салом, ${name}`) коркард мешаванд.",
      purpose: "Ҷустуҷӯ, тозакунӣ ва форматбандии матнҳо.",
      usage: "Дар системаи ҷустуҷӯи ҳамин барнома низ .toLowerCase().includes() истифода шудааст.",
      syntax: "const msg = `Салом, ${name}!`;\nmsg.toUpperCase();",
      shortExample: "\"  HTML  \".trim().toLowerCase(); // \"html\"",
      fullExample: "<script>\n  const course = \"Web Academy\";\n  console.log(course.toUpperCase(), \"| Дарозӣ:\", course.length);\n<\/script>",
      outputText: "WEB ACADEMY | Дарозӣ: 11",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const c='Web Academy';document.getElementById('o').textContent=c.toUpperCase()+' | Дарозӣ: '+c.length;<\/script>",
      mistakes: "Тағйир додани сатр бе захира кардани натиҷа (методҳои сатр сатри нав бармегардонанд).",
      tip: "Аз қавсҳои моили `` (Template Literals) истифода баред, то тағйирёбандаҳоро ба осонӣ ба матн гузоред."
    },
    {
      id: "js-numbers-math",
      name: "Numbers & Math",
      lang: "JavaScript",
      group: "Strings & Numbers",
      description: "Объекти Math ва методҳои Number барои яхлиткунӣ (Math.round, Math.floor), ёфтани бузургтарин (Math.max) ва рақами тасодуфӣ (Math.random) истифода мешаванд.",
      purpose: "Иҷрои ҳисобҳои дақиқ, фоизҳо ва бозиҳо.",
      usage: "Дар ҳисобкунии фоизи пешрафти дарсҳо ва нархҳо кор меояд.",
      syntax: "Math.round(4.6); // 5\nMath.floor(Math.random() * 10);",
      shortExample: "const percent = Math.round((3 / 10) * 100); // 30",
      fullExample: "<script>\n  const learned = 7, total = 15;\n  const pct = Math.round((learned / total) * 100);\n  console.log(\"Пешрафт:\", pct + \"%\");\n<\/script>",
      outputText: "Пешрафт: 47%",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const p=Math.round((7/15)*100);document.getElementById('o').textContent='Пешрафт: '+p+'%';<\/script>",
      mistakes: "Тақсим ба сифр (0), ки дар JS натиҷаи Infinity медиҳад.",
      tip: "Барои нишон додани 2 рақам баъд аз вергул (12.345).toFixed(2)-ро истифода баред."
    },

    // ==================== JAVASCRIPT: Control Flow ====================
    {
      id: "js-if-else",
      name: "Booleans & Conditions (if / else)",
      lang: "JavaScript",
      group: "Control Flow",
      description: "Сохтори if / else вобаста ба дуруст (true) ё нодуруст (false) будани шарт роҳи иҷрои барномаро интихоб мекунад.",
      purpose: "Қабули қарорҳо дар мантиқи барнома.",
      usage: "Барои санҷиши воридшавӣ, холҳо, пур будани майдонҳо ва ғайра.",
      syntax: "if (score >= 50) {\n  // гузашт\n} else {\n  // боз машқ кунед\n}",
      shortExample: "const status = age >= 18 ? \"Калонсол\" : \"Наврас\";",
      fullExample: "<script>\n  const ball = 85;\n  let result = \"\";\n  if (ball >= 80) {\n    result = \"Аъло!\";\n  } else {\n    result = \"Хуб!\";\n  }\n  console.log(result);\n<\/script>",
      outputText: "Аъло!",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const ball=85;document.getElementById('o').textContent=ball>=80?'Аъло!':'Хуб!';<\/script>",
      mistakes: "Навиштани шартҳои хеле дароз ва печида ба ҷои баромади зуд (Early Return).",
      tip: "Барои шартҳои кӯтоҳи дуҳолата оператори сегонаи шарт ? а : б хеле қулай аст."
    },
    {
      id: "js-switch",
      name: "switch",
      lang: "JavaScript",
      group: "Control Flow",
      description: "Сохтори switch як тағйирёбандаро бо якчанд вариантҳои мушаххас (case) муқоиса мекунад.",
      purpose: "Иваз кардани занҷири дарози if / else if барои қимматҳои аниқ.",
      usage: "Ҳангоми кор бо рӯзҳои ҳафта, забонҳо ё намудҳои амал.",
      syntax: "switch (lang) {\n  case \"HTML\": break;\n  default: break;\n}",
      shortExample: "switch(day) { case 1: name=\"Душанбе\"; break; }",
      fullExample: "<script>\n  const lang = \"CSS\";\n  let info = \"\";\n  switch (lang) {\n    case \"HTML\": info = \"Сохтор\"; break;\n    case \"CSS\": info = \"Ороиш\"; break;\n    default: info = \"Дигар\";\n  }\n  console.log(info);\n<\/script>",
      outputText: "Ороиш",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const l='CSS';let info='';switch(l){case'HTML':info='Сохтор';break;case'CSS':info='Ороиш';break;default:info='Дигар';}document.getElementById('o').textContent=info;<\/script>",
      mistakes: "Фаромӯш кардани калимаи break — бе он код ба case-и навбатӣ мегузарад.",
      tip: "Ҳамеша дар охири switch бахши default:-ро гузоред."
    },
    {
      id: "js-loops",
      name: "Loops (for, while)",
      lang: "JavaScript",
      group: "Control Flow",
      description: "Даврҳо (for, for...of, while) як амалро то замони иҷро шудани шарт чандин маротиба такрор мекунанд.",
      purpose: "Коркарди рӯйхатҳо, массивҳо ва такрори амалҳо.",
      usage: "for...of барои гузаштан аз болои элементҳои массив беҳтарин аст.",
      syntax: "for (let i = 0; i < 5; i++) {\n  console.log(i);\n}",
      shortExample: "for (const item of [\"HTML\", \"CSS\"]) { console.log(item); }",
      fullExample: "<script>\n  const items = [\"HTML\", \"CSS\", \"JS\"];\n  let out = [];\n  for (let i = 0; i < items.length; i++) {\n    out.push((i + 1) + \". \" + items[i]);\n  }\n  console.log(out.join(\" | \"));\n<\/script>",
      outputText: "1. HTML | 2. CSS | 3. JS",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const items=['HTML','CSS','JS'];let out=[];for(let i=0;i<items.length;i++){out.push((i+1)+'. '+items[i]);}document.getElementById('o').textContent=out.join(' | ');<\/script>",
      mistakes: "Сохтани даври беохир (Infinite Loop) дар while, ки браузерро мебандад.",
      tip: "Дар while ҳамеша боварӣ ҳосил кунед, ки шарт рӯзе false мешавад."
    },

    // ==================== JAVASCRIPT: Functions ====================
    {
      id: "js-functions",
      name: "Functions & Parameters",
      lang: "JavaScript",
      group: "Functions",
      description: "Функсия блоки коди такроршавандаест, ки ном дорад, параметрҳоро қабул мекунад ва вазифаи мушаххасро иҷро менамояд.",
      purpose: "Пешгирии такрори код ва тақсими барнома ба қисмҳои хурди фаҳмо.",
      usage: "Бо калимаи function эълон шуда, бо ном ва қавс () даъват карда мешавад.",
      syntax: "function greet(name = \"Дӯст\") {\n  return \"Салом, \" + name;\n}",
      shortExample: "function add(a, b) { return a + b; }",
      fullExample: "<script>\n  function welcome(user) {\n    return `Хуш омадед, ${user}!`;\n  }\n  console.log(welcome(\"Сино\"));\n<\/script>",
      outputText: "Хуш омадед, Сино!",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>function welcome(u){return `Хуш омадед, ${u}!`;}document.getElementById('o').textContent=welcome('Сино');<\/script>",
      mistakes: "Эълон кардани функсия, аммо фаромӯш кардани даъвати он бо ().",
      tip: "Барои параметрҳо қиммати пешфарз (масалан name = \"Меҳмон\") гузоред."
    },
    {
      id: "js-arrow-functions",
      name: "Arrow Functions (=>)",
      lang: "JavaScript",
      group: "Functions",
      description: "Функсияҳои тиршакл (=>) тарзи кӯтоҳ ва муосири навиштани функсияҳо дар ES6+ мебошанд.",
      purpose: "Навиштани функсияҳои кӯтоҳ ва callback-ҳо дар методҳои массив ва Events.",
      usage: "Агар баданаш як сатр бошад, қавси {} ва калимаи return-ро ихтисор кардан мумкин аст.",
      syntax: "const double = (n) => n * 2;",
      shortExample: "const sayHi = name => `Салом, ${name}`;",
      fullExample: "<script>\n  const square = (x) => x * x;\n  console.log(\"Квадрати 6:\", square(6));\n<\/script>",
      outputText: "Квадрати 6: 36",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const square=x=>x*x;document.getElementById('o').textContent='Квадрати 6: '+square(6);<\/script>",
      mistakes: "Истифодаи Arrow Function ҳамчун методи объект ва интизори this-и объект.",
      tip: "Дар методҳои .map() ва .filter() функсияҳои тиршакл кодро хеле тоза мекунанд."
    },
    {
      id: "js-return",
      name: "return Statement",
      lang: "JavaScript",
      group: "Functions",
      description: "Фармони return натиҷаро аз функсия берун бармегардонад ва иҷрои функсияро фавран қатъ мекунад.",
      purpose: "Интиқоли натиҷаи ҳисоббарорӣ ба қисми дигари барнома.",
      usage: "Дар дохили функсияҳо барои баргардонидани қиммат ё баромади пешакӣ.",
      syntax: "function calc(a, b) {\n  return a * b;\n}",
      shortExample: "if (!user) return;",
      fullExample: "<script>\n  function checkPass(p) {\n    if (p.length < 6) return \"Кӯтоҳ аст\";\n    return \"Қабул шуд\";\n  }\n  console.log(checkPass(\"123456\"));\n<\/script>",
      outputText: "Қабул шуд",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>function checkPass(p){if(p.length<6)return'Кӯтоҳ аст';return'Қабул шуд';}document.getElementById('o').textContent=checkPass('123456');<\/script>",
      mistakes: "Навиштани код пас аз return (он код ҳеҷ гоҳ иҷро намешавад).",
      tip: "Функсияе, ки return надорад, ба таври худкор undefined бармегардонад."
    },

    // ==================== JAVASCRIPT: Arrays & Objects ====================
    {
      id: "js-arrays",
      name: "Arrays",
      lang: "JavaScript",
      group: "Arrays & Objects",
      description: "Массив (Array) рӯйхати мураттаби қимматҳо дар дохили қавси чоркунҷа [] аст, ки индексаш аз 0 оғоз мешавад.",
      purpose: "Нигоҳдории маҷмӯи унсурҳо (дарсҳо, корбарон, маҳсулот).",
      usage: "Бо push() унсур илова мешавад ва бо arr[0] элементи якум гирифта мешавад.",
      syntax: "const langs = [\"HTML\", \"CSS\", \"JS\"];\nlangs[0]; // \"HTML\"",
      shortExample: "const nums = [10, 20];\nnums.push(30);",
      fullExample: "<script>\n  const list = [\"Себ\", \"Анор\"];\n  list.push(\"Ангур\");\n  console.log(list[0], \"| Ҳамагӣ:\", list.length);\n<\/script>",
      outputText: "Себ | Ҳамагӣ: 3",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const list=['Себ','Анор'];list.push('Ангур');document.getElementById('o').textContent=list[0]+' | Ҳамагӣ: '+list.length;<\/script>",
      mistakes: "Гумон кардан, ки индекси якуми массив 1 аст (индекси якум ҳамеша 0 аст!).",
      tip: "Барои гирифтани унсури охирин list.at(-1)-ро истифода бурдан мумкин аст."
    },
    {
      id: "js-array-methods",
      name: "Array Methods (map, filter)",
      lang: "JavaScript",
      group: "Arrays & Objects",
      description: "Методҳои муосири массив: .map() ҳар як унсурро табдил медиҳад, .filter() унсурҳои мувофиқро ҷудо мекунад, .find() унсури аввалро меёбад ва .reduce() ҷамъбаст мекунад.",
      purpose: "Коркарди тоза ва бехатари рӯйхатҳо бидуни тағйир додани массиви аслӣ.",
      usage: "Дар ҷустуҷӯ, филтркунӣ ва сохтани кортҳои HTML аз рӯи маълумот.",
      syntax: "const passed = scores.filter(s => s >= 60);",
      shortExample: "[1, 2, 3].map(n => n * 10); // [10, 20, 30]",
      fullExample: "<script>\n  const prices = [20, 50, 120, 80];\n  const high = prices.filter(p => p >= 50);\n  const sum = high.reduce((acc, p) => acc + p, 0);\n  console.log(\"Филтр:\", high.join(\",\"), \"| Ҷамъ:\", sum);\n<\/script>",
      outputText: "Филтр: 50,120,80 | Ҷамъ: 250",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const prices=[20,50,120,80];const high=prices.filter(p=>p>=50);const sum=high.reduce((a,b)=>a+b,0);document.getElementById('o').textContent='Филтр: '+high.join(', ')+' | Ҷамъ: '+sum;<\/script>",
      mistakes: "Истифодаи .map() вақте ки шумо танҳо давр задан мехоҳед (барои он .forEach() ё for...of аст).",
      tip: "filter() ҳамеша массиви нав бармегардонад, ҳатто агар 0 унсур ёфт шавад."
    },
    {
      id: "js-objects",
      name: "Objects & Methods",
      lang: "JavaScript",
      group: "Arrays & Objects",
      description: "Объект маҷмӯи ҷуфтҳои калид ва қиммат (key: value) дар дохили қавсҳои {} мебошад, ки метавонад функсияҳо (методҳо)-ро низ дар бар гирад.",
      purpose: "Тасвири як мавҷудияти мукаммал (масалан: донишҷӯ, дарс, танзимот).",
      usage: "Бо нуқта obj.key ё қавси чоркунҷа obj[\"key\"] дастрас карда мешавад.",
      syntax: "const user = {\n  name: \"Амин\",\n  greet() { return \"Салом\"; }\n};",
      shortExample: "const lesson = { id: 1, title: \"h1\" };\nlesson.title;",
      fullExample: "<script>\n  const student = {\n    name: \"Зарина\",\n    course: \"CSS\",\n    info() { return `${this.name} (${this.course})`; }\n  };\n  console.log(student.info());\n<\/script>",
      outputText: "Зарина (CSS)",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const s={name:'Зарина',course:'CSS',info(){return `${this.name} (${this.course})`;}};document.getElementById('o').textContent=s.info();<\/script>",
      mistakes: "Дастрасӣ ба хосияти вуҷуднадошта бе санҷиш (metod: optional chaining obj?.prop).",
      tip: "Object.keys(obj) рӯйхати ҳамаи калидҳои объектро медиҳад."
    },
    {
      id: "js-destructuring",
      name: "Destructuring",
      lang: "JavaScript",
      group: "Arrays & Objects",
      description: "Destructuring имкон медиҳад қимматҳоро аз объект ё массив дар як сатр ба тағйирёбандаҳои алоҳида бароред.",
      purpose: "Кӯтоҳ ва хонданбоб кардани код.",
      usage: "Ҳангоми кор бо объектҳои маълумот ва параметрҳои функсия.",
      syntax: "const { name, lang } = lesson;\nconst [first, second] = arr;",
      shortExample: "const { title } = { title: \"Web Academy\" };",
      fullExample: "<script>\n  const course = { name: \"JS\", hours: 30 };\n  const { name, hours } = course;\n  console.log(`${name}: ${hours} соат`);\n<\/script>",
      outputText: "JS: 30 соат",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const c={name:'JS',hours:30};const {name,hours}=c;document.getElementById('o').textContent=`${name}: ${hours} соат`;<\/script>",
      mistakes: "Номи тағйирёбанда дар {} бояд бо номи калиди объект якхела бошад.",
      tip: "Метавонед қиммати пешфарз низ диҳед: const { role = \"Донишҷӯ\" } = user;"
    },
    {
      id: "js-spread-rest",
      name: "Spread & Rest (...)",
      lang: "JavaScript",
      group: "Arrays & Objects",
      description: "Оператори се нуқта (...) ҳамчун Spread массив/объектро кушода нусха мегирад ва ҳамчун Rest боқимондаи аргументҳоро ҷамъ мекунад.",
      purpose: "Нусхабардории бехатар ва якҷоякунии массивҳо ва объектҳо.",
      usage: "[...arr1, ...arr2] ё function sum(...nums).",
      syntax: "const copy = [...items, \"нав\"];\nconst merged = { ...obj1, ...obj2 };",
      shortExample: "const all = [...[1, 2], 3]; // [1, 2, 3]",
      fullExample: "<script>\n  const base = [\"HTML\", \"CSS\"];\n  const full = [...base, \"JavaScript\"];\n  console.log(full.join(\" -> \"));\n<\/script>",
      outputText: "HTML -> CSS -> JavaScript",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const base=['HTML','CSS'];const full=[...base,'JavaScript'];document.getElementById('o').textContent=full.join(' -> ');<\/script>",
      mistakes: "Гумон кардан, ки const b = a массивро нусха мекунад (он фақат ишораро мегирад; барои нусха [...a] лозим аст).",
      tip: "Spread барои нигоҳ доштани ҳолати тағйирнаёбанда (Immutability) хеле муҳим аст."
    },

    // ==================== JAVASCRIPT: Scope & OOP ====================
    {
      id: "js-scope-hoisting",
      name: "Scope & Hoisting",
      lang: "JavaScript",
      group: "Scope & OOP",
      description: "Scope минтақаи дастрасии тағйирёбандаро (Global, Function, Block {}) муайян мекунад. Hoisting бошад боло бурдани эълони функсияҳо пеш аз иҷрои код аст.",
      purpose: "Пешгирии бархӯрди номҳои тағйирёбандаҳо.",
      usage: "let ва const дар дохили блоки {} маҳдуд мемонанд (Block Scope).",
      syntax: "if (true) {\n  let secret = 123;\n}\n// secret дар ин ҷо дастрас нест",
      shortExample: "function test() { const local = \"Дохилӣ\"; }",
      fullExample: "<script>\n  const globalVar = \"Умумӣ\";\n  {\n    const blockVar = \"Блокӣ\";\n    console.log(globalVar, \"+\", blockVar);\n  }\n<\/script>",
      outputText: "Умумӣ + Блокӣ",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const g='Умумӣ';{const b='Блокӣ';document.getElementById('o').textContent=g+' + '+b;}<\/script>",
      mistakes: "Эълони ҳамаи тағйирёбандаҳо дар сатҳи глобалӣ, ки кодро идоранопазир мекунад.",
      tip: "Барои ҳифзи коди глобалӣ ҳамаи мантиқро дар дохили функсия ё IIFE (() => {})() гузоред."
    },
    {
      id: "js-closures",
      name: "Closures",
      lang: "JavaScript",
      group: "Scope & OOP",
      description: "Closure (пӯшиш) функсияест, ки ҳатто пас аз ба охир расидани функсияи волид, тағйирёбандаҳои муҳити берунии худро дар хотир нигоҳ медорад.",
      purpose: "Сохтани тағйирёбандаҳои пинҳон (Private state) ва ҳисобкунакҳо.",
      usage: "Дар функсияҳои фабрикӣ (Factory Functions) ва идоракунии ҳолат истифода мешавад.",
      syntax: "function counter() {\n  let n = 0;\n  return () => ++n;\n}",
      shortExample: "const next = counter();\nnext(); // 1\nnext(); // 2",
      fullExample: "<script>\n  function makeCounter() {\n    let count = 0;\n    return function () {\n      count++;\n      return count;\n    };\n  }\n  const inc = makeCounter();\n  console.log(inc(), inc(), inc());\n<\/script>",
      outputText: "1 2 3",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>function mk(){let c=0;return ()=>++c;}const inc=mk();document.getElementById('o').textContent=inc()+' '+inc()+' '+inc();<\/script>",
      mistakes: "Нигоҳ доштани объектҳои хеле калон дар дохили closure бе зарурат.",
      tip: "Ҳангоме ки функсия дар дохили функсия сохта мешавад, closure ба таври худкор ба вуҷуд меояд."
    },
    {
      id: "js-try-catch",
      name: "Error Handling (try / catch)",
      lang: "JavaScript",
      group: "Scope & OOP",
      description: "Блоки try / catch хатогиҳои эҳтимолии вақти иҷроро медорад, то тамоми барнома аз кор намонад.",
      purpose: "Коркарди бехатари JSON.parse, localStorage ва дархостҳои шабакавӣ.",
      usage: "Коди хавфнок дар try {} ва аксуламал ба хатогӣ дар catch (err) {} навишта мешавад.",
      syntax: "try {\n  JSON.parse(badText);\n} catch (error) {\n  console.log(\"Хато:\", error.message);\n}",
      shortExample: "try { runCode(); } catch (e) { showError(e); }",
      fullExample: "<script>\n  try {\n    const data = JSON.parse(\"{хато}\");\n    console.log(data);\n  } catch (err) {\n    console.log(\"Хатогӣ дошта шуд: формат нодуруст аст.\");\n  }\n<\/script>",
      outputText: "Хатогӣ дошта шуд: формат нодуруст аст.",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>try{JSON.parse('{хато}');}catch(e){document.getElementById('o').textContent='Хатогӣ дошта шуд: формат нодуруст аст.';}<\/script>",
      mistakes: "Холӣ гузоштани блоки catch (err) {} — хатогиҳоро пинҳон накунед, ҳадди ақал онро ба корбар ё консоль нишон диҳед.",
      tip: "Блоки ихтиёрии finally {} ҳамеша иҷро мешавад (чи хато шавад, чи не)."
    },
    {
      id: "js-classes-oop",
      name: "Classes & OOP",
      lang: "JavaScript",
      group: "Scope & OOP",
      description: "Класс (class) нақша (шаблон) барои сохтани объектҳои якхела бо хосиятҳо (constructor) ва методҳост; extends барои меросгирӣ истифода мешавад.",
      purpose: "Ташкили коди калон бо услуби барномасозии ба объект нигаронидашуда (OOP).",
      usage: "Барои сохтани моделҳои маълумот (User, Lesson, Cart).",
      syntax: "class Lesson {\n  constructor(title) { this.title = title; }\n}",
      shortExample: "const l = new Lesson(\"HTML\");",
      fullExample: "<script>\n  class Course {\n    constructor(name, count) {\n      this.name = name;\n      this.count = count;\n    }\n    summary() { return `${this.name}: ${this.count} дарс`; }\n  }\n  const htmlCourse = new Course(\"HTML\", 25);\n  console.log(htmlCourse.summary());\n<\/script>",
      outputText: "HTML: 25 дарс",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>class Course{constructor(n,c){this.name=n;this.count=c;}summary(){return `${this.name}: ${this.count} дарс`;}}document.getElementById('o').textContent=new Course('HTML',25).summary();<\/script>",
      mistakes: "Фаромӯш кардани калимаи new ҳангоми сохтани нусхаи класс.",
      tip: "Дар зеркласс (extends) ҳамеша пеш аз this калимаи super()-ро даъват кунед."
    },

    // ==================== JAVASCRIPT: DOM & Events ====================
    {
      id: "js-dom",
      name: "DOM (querySelector, getElementById)",
      lang: "JavaScript",
      group: "DOM & Events",
      description: "DOM (Document Object Model) сохтори дарахтии HTML дар хотираи браузер аст. JavaScript бо getElementById ва querySelector унсурҳоро ёфта, матн ё услуби онҳоро иваз мекунад.",
      purpose: "Зинда ва интерактивӣ кардани саҳифаи статикӣ.",
      usage: "document.getElementById(\"id\") барои ID ва document.querySelector(\".class\") барои ҳар гуна селектори CSS.",
      syntax: "const el = document.querySelector(\"#title\");\nel.textContent = \"Матни нав\";",
      shortExample: "document.getElementById(\"msg\").classList.add(\"active\");",
      fullExample: "<div id=\"demo\">Матни кӯҳна</div>\n<script>\n  const box = document.getElementById(\"demo\");\n  box.textContent = \"Матн тавассути DOM иваз шуд!\";\n  box.style.color = \"#2563eb\";\n<\/script>",
      outputText: "Матн дар саҳифа ба «Матн тавассути DOM иваз шуд!» ва ранги кабуд иваз мегардад.",
      previewHtml: "<div id='d' style='font-family:sans-serif;'>Кӯҳна</div><script>const b=document.getElementById('d');b.textContent='Матн тавассути DOM иваз шуд!';b.style.color='#2563eb';<\/script>",
      mistakes: "Истифодаи innerHTML барои матни воридкардаи корбар (хавфи XSS дорад; ба ҷои он textContent-ро гиред).",
      tip: "Барои селектори гурӯҳи унсурҳо document.querySelectorAll()-ро истифода баред."
    },
    {
      id: "js-events",
      name: "Events (addEventListener)",
      lang: "JavaScript",
      group: "DOM & Events",
      description: "Рӯйдодҳо (Events) амалҳои корбар мебошанд: пахш (click), навиштан (input), ирсол (submit) ва боршавӣ (DOMContentLoaded).",
      purpose: "Иҷрои функсияи муайян ҳангоми амали корбар.",
      usage: "Бо element.addEventListener(\"click\", () => { ... }) пайваст карда мешавад.",
      syntax: "btn.addEventListener(\"click\", () => {\n  console.log(\"Пахш шуд!\");\n});",
      shortExample: "input.addEventListener(\"input\", e => search(e.target.value));",
      fullExample: "<button id=\"btn\">Шуморидан: 0</button>\n<script>\n  let n = 0;\n  const btn = document.getElementById(\"btn\");\n  btn.addEventListener(\"click\", () => {\n    n++;\n    btn.textContent = \"Шуморидан: \" + n;\n  });\n<\/script>",
      outputText: "Ҳар боре ки тугмаро пахш мекунед, рақам 1 воҳид зиёд мешавад.",
      previewHtml: "<button id='eb' style='padding:8px 14px;cursor:pointer;'>Шуморидан: 0</button><script>let n=0;const eb=document.getElementById('eb');eb.addEventListener('click',()=>{n++;eb.textContent='Шуморидан: '+n;});<\/script>",
      mistakes: "Гузоштани () дар номи функсия ҳангоми додан ба addEventListener (масалан addEventListener('click', fn()) онро фавран иҷро мекунад).",
      tip: "Як унсур метавонад бо addEventListener якчанд шунавандаи рӯйдод дошта бошад."
    },
    {
      id: "js-forms",
      name: "Forms in JS",
      lang: "JavaScript",
      group: "DOM & Events",
      description: "Кор бо формаҳо дар JS гирифтани қимматҳои input.value, санҷиши дурустӣ (Validation) ва пешгирии боркунии дубора бо event.preventDefault()-ро дар бар мегирад.",
      purpose: "Коркарди формаҳо дар тарафи муштарӣ бе аз нав бор кардани саҳифа.",
      usage: "Дар рӯйдоди submit-и <form> истифода мешавад.",
      syntax: "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n});",
      shortExample: "const val = inputEl.value.trim();",
      fullExample: "<form id=\"f\">\n  <input id=\"inp\" placeholder=\"Ном\">\n  <button type=\"submit\">Сабт</button>\n</form>\n<p id=\"out\"></p>\n<script>\n  document.getElementById(\"f\").addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const v = document.getElementById(\"inp\").value.trim();\n    document.getElementById(\"out\").textContent = v ? \"Салом, \" + v : \"Номро нависед!\";\n  });\n<\/script>",
      outputText: "Пас аз ворид кардани ном ва пахши «Сабт», саҳифа перезагрузка нашуда салом мегӯяд.",
      previewHtml: "<div style='font-family:sans-serif;'><form id='f'><input id='inp' placeholder='Ном'> <button type='submit'>Сабт</button></form><p id='out' style='margin:6px 0 0;'></p></div><script>document.getElementById('f').addEventListener('submit',(e)=>{e.preventDefault();const v=document.getElementById('inp').value.trim();document.getElementById('out').textContent=v?'Салом, '+v:'Номро нависед!';});<\/script>",
      mistakes: "Фаромӯш кардани e.preventDefault() — саҳифа аз нав бор шуда, натиҷа гум мешавад.",
      tip: "Пеш аз санҷиши холӣ будан ҳамеша .trim()-ро истифода баред."
    },

    // ==================== JAVASCRIPT: Storage, Async & APIs ====================
    {
      id: "js-storage",
      name: "localStorage & sessionStorage",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "localStorage маълумотро дар браузери корбар ба таври доимӣ (ҳатто пас аз пӯшидани барнома ва бе интернет) нигоҳ медорад; sessionStorage бошад танҳо то пӯшидани таб.",
      purpose: "Нигоҳдории мунтахабҳо, пешрафти омӯзиш ва режими Light/Dark дар барномаи офлайн.",
      usage: "Бо setItem(key, val), getItem(key) ва removeItem(key) кор мекунад.",
      syntax: "localStorage.setItem(\"theme\", \"dark\");\nconst t = localStorage.getItem(\"theme\");",
      shortExample: "localStorage.setItem(\"learned\", JSON.stringify([\"h1\"]));",
      fullExample: "<script>\n  try {\n    localStorage.setItem(\"wa_demo\", \"Кор мекунад!\");\n    console.log(localStorage.getItem(\"wa_demo\"));\n  } catch (e) {\n    console.log(\"Хотраи маҳаллӣ дастрас нест\");\n  }\n<\/script>",
      outputText: "Дар хотираи маҳаллӣ сабт шуда, «Кор мекунад!» хонда мешавад.",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>try{localStorage.setItem('wa_demo','Кор мекунад!');document.getElementById('o').textContent='localStorage: '+localStorage.getItem('wa_demo');}catch(e){document.getElementById('o').textContent='Маҳдуд дар ин муҳит';}<\/script>",
      mistakes: "Кӯшиши захира кардани массив ё объект мустақиман бе JSON.stringify().",
      tip: "Ҳамеша localStorage-ро дар дохили try / catch гузоред. Он 100% офлайн кор мекунад!"
    },
    {
      id: "js-json",
      name: "JSON (parse, stringify)",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "JSON (JavaScript Object Notation) формати матнии стандартӣ барои нигоҳдорӣ ва интиқоли маълумот мебошад.",
      purpose: "Табдил додани объекти JS ба матн (JSON.stringify) ва баръакс ба объект (JSON.parse).",
      usage: "Дар localStorage, файлҳои конфигуратсия ва мубодилаи маълумот бо сервер истифода мешавад.",
      syntax: "const str = JSON.stringify(obj);\nconst obj2 = JSON.parse(str);",
      shortExample: "JSON.parse('{\"ok\":true}').ok; // true",
      fullExample: "<script>\n  const user = { name: \"Алӣ\", learned: 5 };\n  const jsonText = JSON.stringify(user);\n  const parsed = JSON.parse(jsonText);\n  console.log(jsonText, \"->\", parsed.name);\n<\/script>",
      outputText: "{\"name\":\"Алӣ\",\"learned\":5} -> Алӣ",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const u={name:'Алӣ',learned:5};const s=JSON.stringify(u);const p=JSON.parse(s);document.getElementById('o').textContent=s+' -> '+p.name;<\/script>",
      mistakes: "Истифодаи нохунаки якка (') дар матни JSON — JSON танҳо нохунаки дугона (\")-ро қабул мекунад.",
      tip: "Пеш аз JSON.parse() онро дар try/catch гузоред."
    },
    {
      id: "js-promises",
      name: "Promises",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "Promise (ваъда) объектест, ки натиҷаи ояндаи амали асинхрониро (масалан, интизории таймер ё боргирии маълумот) ифода мекунад.",
      purpose: "Идоракунии амалҳое, ки вақт мегиранд, бе ях кардани интерфейси саҳифа.",
      usage: "Се ҳолат дорад: pending (интизорӣ), fulfilled (иҷрошуда бо .then) ва rejected (хатогӣ бо .catch).",
      syntax: "new Promise((resolve) => {\n  setTimeout(() => resolve(\"Тайёр!\"), 500);\n}).then(res => console.log(res));",
      shortExample: "Promise.resolve(42).then(v => console.log(v));",
      fullExample: "<script>\n  const p = new Promise((resolve) => {\n    setTimeout(() => resolve(\"Амали офлайн ба анҷом расид!\"), 300);\n  });\n  p.then(msg => console.log(msg));\n<\/script>",
      outputText: "Пас аз 0.3 сония паёми «Амали офлайн ба анҷом расид!» мебарояд.",
      previewHtml: "<div id='o' style='font-family:monospace;'>Интизорӣ...</div><script>new Promise(r=>setTimeout(()=>r('Амали офлайн ба анҷом расид!'),300)).then(m=>{document.getElementById('o').textContent=m;});<\/script>",
      mistakes: "Фаромӯш кардани .catch() барои доштани хатогии Promise.",
      tip: "Имрӯз одатан ба ҷои занҷири дарози .then() аз async/await истифода мебаранд."
    },
    {
      id: "js-async-await",
      name: "async / await",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "async ва await тарзи муосир ва хеле хонданбоби навиштани коди асинхронӣ бо Promise-ҳо мебошанд.",
      purpose: "Навиштани коди интизоршаванда мисли коди оддии сатр ба сатр.",
      usage: "Калимаи await танҳо дар дохили функсияи async (бо try / catch) кор мекунад.",
      syntax: "async function load() {\n  const res = await task();\n}",
      shortExample: "const wait = ms => new Promise(r => setTimeout(r, ms));",
      fullExample: "<script>\n  const delay = (ms) => new Promise(r => setTimeout(r, ms));\n  async function run() {\n    await delay(250);\n    console.log(\"Бо async/await иҷро шуд!\");\n  }\n  run();\n<\/script>",
      outputText: "Пас аз 250ms «Бо async/await иҷро шуд!» чоп мешавад.",
      previewHtml: "<div id='o' style='font-family:monospace;'>Иҷро...</div><script>const d=ms=>new Promise(r=>setTimeout(r,ms));(async()=>{await d(250);document.getElementById('o').textContent='Бо async/await иҷро шуд!';})();<\/script>",
      mistakes: "Истифодаи await дар функсияе, ки пешаш async навишта нашудааст.",
      tip: "Ҳамеша дар дохили функсияи async барои хатогиҳо try / catch гузоред."
    },
    {
      id: "js-fetch-api",
      name: "Fetch API (Офлайн vs Онлайн)",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "Fetch API барои фиристодан ва гирифтани маълумот аз сервер ё файлҳои маҳаллӣ тавассути HTTP истифода мешавад. Эзоҳи муҳим: дархост ба API-ҳои беруна (https://...) ИНТЕРНЕТ талаб мекунад; аммо хондани файлҳои худи сайт тавассути сервери маҳаллӣ (localhost) ё кэши Service Worker ОФЛАЙН кор мекунад (дар file:// бошад браузер fetch-ро бо сабаби амнияти CORS манъ мекунад).",
      purpose: "Боргирии маълумоти JSON ва мубодила бо серверҳо.",
      usage: "Бо async/await ва санҷиши response.ok истифода мешавад.",
      syntax: "const res = await fetch(\"https://api.example.com/data\");\nconst data = await res.json();",
      shortExample: "fetch(\"data.json\").then(r => r.json());",
      fullExample: "<script>\n  // Дар муҳити офлайн (бе сервер) мо хатогиро бо try/catch идора мекунем:\n  async function getLocalOrFallback() {\n    try {\n      if (!navigator.onLine) throw new Error(\"Офлайн\");\n      console.log(\"Ҳолати шабака:\", navigator.onLine ? \"Онлайн\" : \"Офлайн\");\n    } catch (e) {\n      console.log(\"Истифода аз маълумоти маҳаллии офлайн.\");\n    }\n  }\n  getLocalOrFallback();\n<\/script>",
      outputText: "Дар режимҳои офлайн барнома бе хатогӣ ба маълумоти маҳаллӣ мегузарад.",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>document.getElementById('o').textContent='Ҳолати шабака: '+(navigator.onLine?'Онлайн (Fetch ба API дастрас)':'Офлайн (маълумоти маҳаллӣ)');<\/script>",
      mistakes: "Кӯшиши fetch(\"data.json\") ҳангоми кушодани index.html мустақиман бо file:// (браузер онро манъ мекунад).",
      tip: "Барои кори беинтернет беҳтар аст маълумотро мисли Web Academy дар JS ё localStorage нигоҳ доред."
    },
    {
      id: "js-modules",
      name: "ES6+ Modules",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "Модулҳои ES6 (import / export) имкон медиҳанд, ки коди калони JavaScript-ро ба файлҳои алоҳида тақсим кунед. Эзоҳ: <script type=\"module\"> дар протоколи file:// кор намекунад ва сервери маҳаллӣ (ё localhost) талаб мекунад; барои ҳамин дар лоиҳаҳои 3-файлаи file:// скрипти оддӣ истифода мешавад.",
      purpose: "Тақсимоти тозаи код дар лоиҳаҳои калон.",
      usage: "export function add() {} ва import { add } from './math.js';",
      syntax: "// math.js\nexport const sum = (a, b) => a + b;\n// app.js\nimport { sum } from './math.js';",
      shortExample: "export default function init() {}",
      fullExample: "// Намунаи сохтори модулӣ (барои сервер/localhost):\n// export const version = '1.0';\n// import { version } from './config.js';\nconsole.log(\"Модулҳо кодро тоза нигоҳ медоранд.\");",
      outputText: "Модулҳо кодро тоза нигоҳ медоранд.",
      previewHtml: "<div style='font-family:monospace;'>Модулҳо (import/export) тавассути HTTP/localhost кор мекунанд.</div>",
      mistakes: "Истифодаи <script type=\"module\"> ҳангоми кушодани файл бевосита аз хотираи телефон (file://).",
      tip: "Дар SPCK Editor бо тугмаи Run он тавассути сервери дохилии маҳаллӣ кор мекунад, дар ин ҳолат модулҳо низ фаъоланд."
    },
    {
      id: "js-modern-apis",
      name: "Modern JS APIs (Офлайн vs Онлайн)",
      lang: "JavaScript",
      group: "Storage, Async & APIs",
      description: "API-ҳои муосири браузер имкониятҳои тайёр медиҳанд: Intl (формати сана/асъор) ва Clipboard API (нусхабардорӣ) пурра ОФЛАЙН кор мекунанд; аммо Geolocation (GPS дақиқ) ва Push Notifications вобаста ба иҷозати браузер ё интернет мебошанд.",
      purpose: "Истифодаи имкониятҳои дарунсохти браузер бе китобхонаҳои беруна.",
      usage: "Intl.NumberFormat барои рақамҳо, navigator.clipboard.writeText барои нусхабардорӣ.",
      syntax: "new Intl.NumberFormat('tg-TJ').format(12500);",
      shortExample: "navigator.clipboard.writeText(\"Коди ман\");",
      fullExample: "<script>\n  const num = new Intl.NumberFormat(\"en-US\").format(1500000);\n  console.log(\"Формати хонданбоб:\", num, \"| Офлайн кор мекунад\");\n<\/script>",
      outputText: "Формати хонданбоб: 1,500,000 | Офлайн кор мекунад",
      previewHtml: "<div id='o' style='font-family:monospace;'></div><script>const n=new Intl.NumberFormat('en-US').format(1500000);document.getElementById('o').textContent='Формати рақам: '+n+' (Офлайн)';<\/script>",
      mistakes: "Гумон кардан, ки navigator.clipboard.writeText дар ҳама ҷо бе HTTPS кор мекунад (дар file:// баъзан усули эҳтиётии execCommand лозим аст).",
      tip: "Ҳамеша барои API-ҳои муосир санҷиши мавҷудият (if (navigator.clipboard)) ва усули эҳтиётӣ гузоред."
    }
  ];

  const EXTRA_LESSONS = [
    // ==================== КУРСИ 4: ҶУДО КАРДАНИ ФАЙЛҲО ====================
    {
      id: "proj-why-separate",
      name: "Чаро HTML, CSS ва JS-ро ҷудо мекунанд?",
      lang: "HTML",
      group: "Сохтори лоиҳа",
      course: 4,
      description: "Ҷудо кардани сохтор (index.html), ороиш (style.css) ва мантиқ (script.js) ба файлҳои алоҳида кодро тоза, осонфаҳм ва барои гурӯҳи барномасозон қобили идора месозад.",
      purpose: "Нигоҳ доштани тартибот (Separation of Concerns) дар лоиҳаҳои хурду калон.",
      usage: "Дар ҳамаи веббарномаҳои касбӣ ба ҷои навиштани ҳама чиз дар як файл истифода мешавад.",
      syntax: "web-project/\n├── index.html\n├── style.css\n├── script.js\n└── images/",
      shortExample: "<link rel=\"stylesheet\" href=\"style.css\">\n<script src=\"script.js\"><\/script>",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Лоиҳаи сохтордор</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Лоиҳаи 3-файла</h1>\n  <script src=\"script.js\"><\/script>\n</body>\n</html>",
      outputText: "Браузер index.html-ро хонда, style.css ва script.js-ро ба он пайваст мекунад.",
      previewHtml: "<div style='font-family:sans-serif;'><strong>Сохтори лоиҳа:</strong><pre style='background:#0b1426;color:#38bdf8;padding:10px;border-radius:8px;'>project/\n├── index.html\n├── style.css\n└── script.js</pre></div>",
      mistakes: "Ҷойгир кардани садҳо сатри CSS ва JS дар дохили index.html.",
      tip: "Агар style.css ва script.js дар ҳамон папкаи index.html бошанд, номи файлро бевосита нависед.",
      taskPrompt: "Дар коди зер теги <link> барои style.css ва теги <script> барои script.js-ро илова кунед.",
      starterCode: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <!-- style.css-ро ин ҷо пайваст кунед -->\n</head>\n<body>\n  <h1>Салом</h1>\n  <!-- script.js-ро ин ҷо пайваст кунед -->\n</body>\n</html>",
      hint: "Барои CSS: <link rel=\"stylesheet\" href=\"style.css\"> ва барои JS: <script src=\"script.js\"><\/script>.",
      expectedTokens: ["style.css", "script.js", "<link", "<script"]
    },
    {
      id: "proj-index-css-js",
      name: "Сохтан ва пайваст кардани index.html, style.css, script.js",
      lang: "HTML",
      group: "Сохтори лоиҳа",
      course: 4,
      description: "index.html саҳифаи асосии оғози сайт аст. style.css дар <head> бо <link> ва script.js дар охири <body> бо <script src=\"...\"> пайваст карда мешавад.",
      purpose: "Боркунии дурусти услубҳо пеш аз намоиш ва иҷрои JS пас аз сохта шудани унсурҳои DOM.",
      usage: "Дар ҳама гуна сайти статикӣ ё веббарномаи муосир.",
      syntax: "<link rel=\"stylesheet\" href=\"style.css\">\n<script src=\"script.js\" defer><\/script>",
      shortExample: "<link rel=\"stylesheet\" href=\"css/style.css\">",
      fullExample: "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <button id=\"btn\">Санҷиш</button>\n  <script src=\"script.js\"><\/script>\n</body>\n</html>",
      outputText: "Тугма бо ороиши style.css намоиш ёфта, script.js пас аз он фаъол мегардад.",
      previewHtml: "<button style='background:#2563eb;color:#fff;padding:8px 16px;border:none;border-radius:8px;'>Пайваст шуд</button>",
      mistakes: "Гузоштани <script src=\"script.js\"> дар <head> бе defer — он гоҳ JS унсурҳои <body>-ро намеёбад.",
      tip: "Калимаи defer ба браузер мегӯяд, ки скриптро пас аз хондани HTML иҷро кунад.",
      taskPrompt: "Теги <script>-ро бо атрибути src=\"script.js\" ва defer нависед.",
      starterCode: "<script src=\"\"><\/script>",
      hint: "Дар дохили src=\"script.js\" нависед ва атрибути defer-ро илова кунед.",
      expectedTokens: ["script.js", "defer", "<script"]
    },
    {
      id: "proj-folders-assets",
      name: "Папкаҳои images/ ва assets/ ва ислоҳи роҳҳо",
      lang: "HTML",
      group: "Сохтори лоиҳа",
      course: 4,
      description: "Файлҳои расм, иконка ва шрифтҳоро дар папкаҳои алоҳидаи images/ ё assets/ нигоҳ медоранд. Роҳи нисбӣ (Relative Path) бо ./ ё ../ муайян мешавад.",
      purpose: "Пешгирии бетартибӣ дар решаи лоиҳа ва осон кардани ёфтани файлҳо.",
      usage: "images/logo.png барои расми дохили папкаи images ва ../style.css барои баромадан ба як сатҳ боло.",
      syntax: "<img src=\"images/logo.png\" alt=\"Логотип\">\n<link rel=\"stylesheet\" href=\"assets/style.css\">",
      shortExample: "<img src=\"assets/images/banner.jpg\" alt=\"Баннер\">",
      fullExample: "<!-- Сохтор: index.html, assets/css/style.css, images/icon.png -->\n<link rel=\"stylesheet\" href=\"assets/css/style.css\">\n<img src=\"images/icon.png\" alt=\"Иконка\">",
      outputText: "Файлҳо аз папкаҳои мувофиқ бе хатои 404 (Not Found) бор мешаванд.",
      previewHtml: "<div style='font-family:monospace;background:#0b1426;color:#86efac;padding:10px;border-radius:8px;'>images/logo.png &check; | assets/style.css &check;</div>",
      mistakes: "Навиштани роҳи компютери худ (масалан C:\\Users\\Desktop\\logo.png) — он дар телефони дигар кор намекунад!",
      tip: "Дар номи файлҳо ва папкаҳо танҳо ҳарфҳои хурди лотинӣ, рақам ва тире (-) истифода баред.",
      taskPrompt: "Теги <img> созед, ки расми hero.png-ро аз папкаи images/ бо alt-и дуруст мегирад.",
      starterCode: "<img src=\"\" alt=\"\">",
      hint: "src=\"images/hero.png\" ва дар alt тавсифи расмро нависед.",
      expectedTokens: ["images/hero.png", "alt=", "<img"]
    },
    {
      id: "proj-full-3file",
      name: "Сохтани лоиҳаи пурраи веб аз се файл",
      lang: "JavaScript",
      group: "Сохтори лоиҳа",
      course: 4,
      description: "Дар амал якҷоя кардани index.html (сохтор), style.css (ороиш) ва script.js (интерактивӣ) барои сохтани корти интерактивии маҳсулот.",
      purpose: "Мустаҳкам кардани малакаи сохтани лоиҳаи мустақил.",
      usage: "Ин усулро шумо метавонед фавран дар Web Academy Studio санҷед.",
      syntax: "// index.html -> button#likeBtn\n// style.css -> .card { ... }\n// script.js -> likeBtn.addEventListener(...)",
      shortExample: "document.getElementById('likeBtn').addEventListener('click', () => {});",
      fullExample: "<div class=\"card\">\n  <h3>Лоиҳаи ман</h3>\n  <button id=\"cntBtn\">Пахш: 0</button>\n</div>\n<script>\n  let c = 0;\n  const b = document.getElementById('cntBtn');\n  b.addEventListener('click', () => { c++; b.textContent = 'Пахш: ' + c; });\n<\/script>",
      outputText: "Ҳангоми пахши тугма шумора зиёд мешавад.",
      previewHtml: "<button id='p4' style='background:#2563eb;color:#fff;padding:8px 14px;border:none;border-radius:8px;cursor:pointer;'>Пахш: 0</button><script>let c=0;document.getElementById('p4').onclick=function(){this.textContent='Пахш: '+(++c);};<\/script>",
      mistakes: "Номувофиқии ID байни index.html ва script.js.",
      tip: "Баъд аз анҷоми ин дарс ба Web Academy Studio равед ва лоиҳаи 3-файлаи худро созед!",
      taskPrompt: "Бо JavaScript функсияи click барои тугмаи id=\"btn\" нависед, ки матнашро ба «Тайёр» иваз кунад.",
      starterCode: "const btn = document.getElementById('btn');\n// addEventListener илова кунед",
      hint: "btn.addEventListener('click', () => { btn.textContent = 'Тайёр'; });",
      expectedTokens: ["addEventListener", "click", "textContent"]
    },

    // ==================== КУРСИ 5: ТУГМАҲОИ ПРЕМИУМ БЕ ЭМОДЗИ ====================
    {
      id: "btn-why-no-emoji",
      name: "Чаро дар UI-и касбӣ эмодзи мувофиқ нест ва истифодаи SVG",
      lang: "HTML",
      group: "Тугмаҳои премиум",
      course: 5,
      description: "Эмодзиҳо дар Android, iOS ва Windows шаклҳои гуногун доранд ва бо ранги бренди шумо мувофиқ намешаванд. Нишонаҳои SVG (Scalable Vector Graphics) дар ҳама гуна экран тез, сабук ва бо CSS рангшавандаанд.",
      purpose: "Эҷоди интерфейси ягона, касбӣ ва премиум бо нишонаҳои векторӣ.",
      usage: "Дар тугмаҳо, менюҳо ва панелҳои идоракунӣ бо <svg viewBox=\"0 0 24 24\"> истифода мешавад.",
      syntax: "<button class=\"pro-btn\">\n  <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" stroke=\"currentColor\" fill=\"none\"><polyline points=\"20 6 9 17 4 12\"/></svg>\n  <span>Тасдиқ</span>\n</button>",
      shortExample: "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"9\"/></svg>",
      fullExample: "<button style=\"display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:#2563eb;color:#fff;border:none;border-radius:10px;font-weight:700;\">\n  <svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"><polyline points=\"20 6 9 17 4 12\"/></svg>\n  <span>Захира шуд</span>\n</button>",
      outputText: "Тугмаи кабуд бо нишонаи тозаи вектории SVG ва матн бе ягон эмодзи.",
      previewHtml: "<button style='display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:#2563eb;color:#fff;border:none;border-radius:10px;font-weight:700;font-family:sans-serif;'><svg viewBox='0 0 24 24' width='18' height='18' fill='none' stroke='currentColor' stroke-width='2.2'><polyline points='20 6 9 17 4 12'/></svg><span>Захира шуд</span></button>",
      mistakes: "Истифодаи расмҳои PNG барои иконкаҳои хурд ба ҷои SVG (дар экранҳои Retina хира мешаванд).",
      tip: "Хусусияти stroke=\"currentColor\" имкон медиҳад, ки ранги SVG бо ранги матни тугма (color) автоматӣ иваз шавад.",
      taskPrompt: "Тугмае созед, ки дар дохилаш як <svg> бо stroke=\"currentColor\" ва матни <span> дошта бошад.",
      starterCode: "<button class=\"btn\">\n  <!-- SVG ва матн -->\n</button>",
      hint: "<svg viewBox=\"0 0 24 24\" width=\"18\" height=\"18\" stroke=\"currentColor\" fill=\"none\"><path d=\"M5 12h14\"/></svg><span>Идома</span>",
      expectedTokens: ["<button", "<svg", "currentColor", "<span"]
    },
    {
      id: "btn-gradient",
      name: "Тугмаҳои Gradient ва Dark Premium",
      lang: "CSS",
      group: "Тугмаҳои премиум",
      course: 5,
      description: "Тугмаҳои Gradient бо гузариши ду ранги кабуд ва сояи мулоим (box-shadow) диққати корбарро ба амали асосӣ (CTA) ҷалб мекунанд.",
      purpose: "Сохтани тугмаҳои асосии даъват ба амал (Оғоз, Харид, Ирсол).",
      usage: "Бо linear-gradient(135deg, #2563eb, #38bdf8) ва сояи ранга.",
      syntax: ".btn-grad {\n  background: linear-gradient(135deg, #2563eb, #0284c7);\n  box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);\n}",
      shortExample: ".btn-dark { background: #0b1426; border: 1px solid #38bdf8; color: #f8fafc; }",
      fullExample: "<style>\n.pro-grad {\n  background: linear-gradient(135deg, #2563eb, #38bdf8);\n  color: #fff;\n  padding: 12px 24px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 700;\n  box-shadow: 0 8px 22px rgba(37, 99, 235, 0.4);\n  cursor: pointer;\n}\n</style>\n<button class=\"pro-grad\">Тугмаи Gradient</button>",
      outputText: "Тугмаи премиуми дурахшони кабуд бо сояи нарм.",
      previewHtml: "<button style='background:linear-gradient(135deg,#2563eb,#38bdf8);color:#fff;padding:12px 24px;border:none;border-radius:12px;font-weight:700;box-shadow:0 8px 22px rgba(37,99,235,0.4);font-family:sans-serif;'>Тугмаи Gradient</button>",
      mistakes: "Истифодаи градиенти хеле тез бо 4-5 ранги гуногун.",
      tip: "Ҳамеша ду ранги ба ҳам наздикро (масалан кабуди тира ба кабуди равшан) интихоб кунед.",
      taskPrompt: "Ба класси .btn-grad хосияти background бо linear-gradient ва border-radius: 12px диҳед.",
      starterCode: ".btn-grad {\n  color: white;\n  padding: 12px 20px;\n}",
      hint: "background: linear-gradient(135deg, #2563eb, #38bdf8); border-radius: 12px;",
      expectedTokens: ["linear-gradient", "border-radius"]
    },
    {
      id: "btn-glass-neumorph",
      name: "Тугмаҳои Glassmorphism ва Neumorphism",
      lang: "CSS",
      group: "Тугмаҳои премиум",
      course: 5,
      description: "Glassmorphism эффекти шишаи хира бо backdrop-filter: blur(10px) ва сарҳади шаффоф аст. Neumorphism бошад бо ду сояи муқобил (равшан ва торик) эҳсоси барҷастагӣ месозад.",
      purpose: "Ороиши панелҳои муосир ва интерфейсҳои шишагин.",
      usage: "Дар заминаҳои ранга ё торик Glassmorphism хеле зебо менамояд.",
      syntax: ".btn-glass {\n  background: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}",
      shortExample: ".btn-neu { background: #0b1426; box-shadow: 5px 5px 12px #030711, -4px -4px 10px #152444; }",
      fullExample: "<div style=\"background:linear-gradient(135deg,#050b18,#1e3a8a);padding:20px;border-radius:12px;\">\n  <button style=\"background:rgba(255,255,255,0.14);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.28);color:#fff;padding:10px 20px;border-radius:10px;\">Шишаи муосир</button>\n</div>",
      outputText: "Тугмаи шаффофи шишагин дар болои заминаи кабуди тира.",
      previewHtml: "<div style='background:linear-gradient(135deg,#050b18,#1e3a8a);padding:18px;border-radius:12px;'><button style='background:rgba(255,255,255,0.14);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.28);color:#fff;padding:10px 20px;border-radius:10px;font-family:sans-serif;'>Шишаи муосир</button></div>",
      mistakes: "Истифодаи Glassmorphism дар заминаи сафеди оддӣ — бе заминаи ранга эффекти шиша ноаён мемонад.",
      tip: "Барои хонданбобии матн дар Glassmorphism сарҳади 1px solid rgba(255,255,255,0.2) илова кунед.",
      taskPrompt: "Тугмаи Glassmorphism-ро бо background: rgba(...) ва backdrop-filter: blur(10px) нависед.",
      starterCode: ".btn-glass {\n  color: #fff;\n  padding: 10px 18px;\n}",
      hint: "background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(10px);",
      expectedTokens: ["rgba(", "backdrop-filter", "blur("]
    },
    {
      id: "btn-states-3d",
      name: "Тугмаҳои 3D, Hover, Active, Focus ва Mobile",
      lang: "CSS",
      group: "Тугмаҳои премиум",
      course: 5,
      description: "Тугмаи касбӣ бояд 3 ҳолат дошта бошад: :hover (ҳангоми бурдани муш), :active (лаҳзаи пахш — мисли тугмаи 3D ба поён меравад) ва :focus-visible (барои клавиатура). Дар телефон андозаи пахш бояд на камтар аз 44px бошад.",
      purpose: "Додани эҳсоси воқеии ламс (Tactile feedback) ба корбар.",
      usage: "Дар ҳамаи тугмаҳои интерактивӣ.",
      syntax: ".btn-3d { box-shadow: 0 6px 0 #1d4ed8; transition: transform 0.12s; }\n.btn-3d:active { transform: translateY(4px); box-shadow: 0 2px 0 #1d4ed8; }",
      shortExample: ".btn:focus-visible { outline: 2px solid #38bdf8; outline-offset: 2px; }",
      fullExample: "<style>\n.b3d { background:#2563eb; color:#fff; border:none; padding:12px 22px; min-height:44px; border-radius:10px; font-weight:700; box-shadow:0 6px 0 #1e40af; cursor:pointer; transition:0.1s; }\n.b3d:active { transform:translateY(4px); box-shadow:0 2px 0 #1e40af; }\n</style>\n<button class=\"b3d\">Пахш кунед (3D)</button>",
      outputText: "Тугмаи 3D, ки ҳангоми пахш ба поён фурӯ меравад.",
      previewHtml: "<style>.b3d{background:#2563eb;color:#fff;border:none;padding:12px 22px;min-height:44px;border-radius:10px;font-weight:700;box-shadow:0 6px 0 #1e40af;cursor:pointer;transition:0.1s;}.b3d:active{transform:translateY(4px);box-shadow:0 2px 0 #1e40af;}</style><button class='b3d'>Пахш кунед (3D)</button>",
      mistakes: "Нест кардани outline: none бе додани :focus-visible.",
      tip: "Дар экранҳои хурди Android min-height: 44px; пахши тугмаро бо ангушт бехато мекунад.",
      taskPrompt: "Барои .btn-3d ҳолати :active нависед, ки transform: translateY(4px) дошта бошад.",
      starterCode: ".btn-3d:active {\n  /* ҳаракати пахш */\n}",
      hint: "Дар дохили .btn-3d:active хосияти transform: translateY(4px); нависед.",
      expectedTokens: [":active", "transform:", "translateY"]
    },

    // ==================== КУРСИ 6: CSS-И ПЕШРАФТА ВА 3D + THREE.JS ====================
    {
      id: "css3d-perspective",
      name: "CSS 3D, Perspective ва RotateX/Y/Z",
      lang: "CSS",
      group: "Тарроҳии 3D",
      course: 6,
      description: "CSS 3D имкон медиҳад унсурҳоро дар фазои сеченака (меҳварҳои X, Y ва Z) гардонем. Хосияти perspective масофаи камераро то объект муайян мекунад (масалан 800px).",
      purpose: "Сохтани умқ ва воқеияти сеченака бе ягон китобхонаи беруна.",
      usage: "perspective ба унсури волид ва transform: rotateY(25deg) translateZ(20px) ба фарзанд дода мешавад.",
      syntax: ".scene { perspective: 800px; }\n.card { transform: rotateY(20deg) rotateX(10deg); }",
      shortExample: "transform: perspective(600px) rotateY(30deg);",
      fullExample: "<div style=\"perspective:700px;padding:20px;\">\n  <div style=\"width:180px;padding:18px;background:linear-gradient(135deg,#2563eb,#06b6d4);color:#fff;border-radius:12px;transform:rotateY(22deg) rotateX(8deg);font-family:sans-serif;font-weight:700;\">Корти 3D</div>\n</div>",
      outputText: "Корти кабуд дар фазои 3D бо кунҷи амиқ гардонида мешавад.",
      previewHtml: "<div style='perspective:700px;padding:16px;'><div style='width:180px;padding:18px;background:linear-gradient(135deg,#2563eb,#06b6d4);color:#fff;border-radius:12px;transform:rotateY(22deg) rotateX(8deg);font-family:sans-serif;font-weight:700;'>Корти 3D</div></div>",
      mistakes: "Фаромӯш кардани perspective — бе он rotateY танҳо фишурдани ҳамвор ба назар мерасад.",
      tip: "Қиммати perspective байни 600px ва 1000px намуди табииро медиҳад.",
      taskPrompt: "Ба .scene хосияти perspective: 800px; ва ба .box хосияти transform: rotateY(25deg); диҳед.",
      starterCode: ".scene { }\n.box { }",
      hint: ".scene { perspective: 800px; } .box { transform: rotateY(25deg); }",
      expectedTokens: ["perspective:", "rotateY("]
    },
    {
      id: "css3d-flip-card",
      name: "Preserve-3D, Backface Visibility ва Flip Card",
      lang: "CSS",
      group: "Тарроҳии 3D",
      course: 6,
      description: "transform-style: preserve-3d фарзандонро дар фазои 3D нигоҳ медорад. backface-visibility: hidden пушти корти чархзанандаро пинҳон мекунад, то Flip Card (корти дутарафа) сохта шавад.",
      purpose: "Сохтани кортҳои интерактивии дутарафа, флеш-кортҳо ва менюҳои 3D.",
      usage: "Дар кортҳои омӯзишӣ ва намоиши маълумоти иловагӣ ҳангоми :hover.",
      syntax: ".inner { transform-style: preserve-3d; transition: transform 0.6s; }\n.face { backface-visibility: hidden; }",
      shortExample: ".card:hover .inner { transform: rotateY(180deg); }",
      fullExample: "<style>\n.fc{perspective:800px;width:180px;height:90px;}.fi{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:0.6s;}.fc:hover .fi{transform:rotateY(180deg);}.ff,.fb{position:absolute;inset:0;display:grid;place-items:center;border-radius:10px;backface-visibility:hidden;color:#fff;font-family:sans-serif;font-weight:700;}.ff{background:#2563eb;}.fb{background:#0f172a;transform:rotateY(180deg);}\n</style>\n<div class=\"fc\"><div class=\"fi\"><div class=\"ff\">Рӯи корт (Hover)</div><div class=\"fb\">Пушти корт!</div></div></div>",
      outputText: "Ҳангоми бурдани муш ба рӯи корт, он 180 дараҷа гардиш карда тарафи дигарашро нишон медиҳад.",
      previewHtml: "<style>.fc{perspective:800px;width:190px;height:84px;}.fi{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:0.6s;}.fc:hover .fi{transform:rotateY(180deg);}.ff,.fb{position:absolute;inset:0;display:grid;place-items:center;border-radius:10px;backface-visibility:hidden;color:#fff;font-family:sans-serif;font-weight:700;}.ff{background:#2563eb;}.fb{background:#0f172a;border:1px solid #38bdf8;transform:rotateY(180deg);}</style><div class='fc'><div class='fi'><div class='ff'>Рӯи корт (Hover)</div><div class='fb'>Пушти корт!</div></div></div>",
      mistakes: "Фаромӯш кардани backface-visibility: hidden — он гоҳ ҳар ду тарафи корт омехта мешаванд.",
      tip: "Барои оптимизатсияи суръат дар телефон танҳо transform ва opacity-ро аниматсия кунед.",
      taskPrompt: "Ба .inner хосияти transform-style: preserve-3d; ва ба .face хосияти backface-visibility: hidden; диҳед.",
      starterCode: ".inner { }\n.face { }",
      hint: "transform-style: preserve-3d; ва backface-visibility: hidden;",
      expectedTokens: ["preserve-3d", "backface-visibility"]
    },
    {
      id: "threejs-intro-scene",
      name: "Three.js: Саҳна, Камера, Нур, Геометрия ва Сайёра",
      lang: "JavaScript",
      group: "Тарроҳии 3D",
      course: 6,
      description: "Three.js китобхонаи машҳури 3D барои WebGL мебошад. Барои сохтани саҳнаи 3D 4 қисми асосӣ лозим аст: Scene (саҳна), Camera (камера), Renderer (тасвирсоз) ва Mesh (Геометрия + Материал) ҳамроҳ бо Light (нур). Барои кори 100% офлайн бе файлҳои вазнин мо инчунин метавонем бо HTML5 Canvas 2D/3D сайёраи гарданда созем.",
      purpose: "Сохтани графикаи воқеии 3D, сайёраҳо, бозиҳо ва сайтҳои интерактивӣ.",
      usage: "Дар Three.js: new THREE.Scene(), new THREE.PerspectiveCamera(), new THREE.SphereGeometry(), new THREE.MeshStandardMaterial().",
      syntax: "const scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);\nconst planet = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material);",
      shortExample: "function animate() { requestAnimationFrame(animate); planet.rotation.y += 0.01; }",
      fullExample: "<canvas id=\"c3d\" width=\"240\" height=\"110\" style=\"background:#050b18;border-radius:10px;\"></canvas>\n<script>\n  // Намунаи сайёраи 3D офлайн бо Canvas (бе вобастагӣ аз CDN)\n  const ctx = document.getElementById('c3d').getContext('2d');\n  let a = 0;\n  function loop() {\n    ctx.clearRect(0, 0, 240, 110);\n    ctx.beginPath();\n    ctx.arc(120, 55, 28, 0, Math.PI * 2);\n    ctx.fillStyle = '#2563eb';\n    ctx.fill();\n    ctx.beginPath();\n    ctx.ellipse(120, 55, 56, 16, Math.sin(a) * 0.25, 0, Math.PI * 2);\n    ctx.strokeStyle = '#38bdf8';\n    ctx.lineWidth = 2;\n    ctx.stroke();\n    a += 0.04;\n    requestAnimationFrame(loop);\n  }\n  loop();\n<\/script>",
      outputText: "Сайёраи кабуд бо ҳалқаи гарданда дар Canvas-и торик аниматсия мешавад.",
      previewHtml: "<canvas id='c3' width='240' height='110' style='background:#050b18;border-radius:10px;'></canvas><script>const ctx=document.getElementById('c3').getContext('2d');let a=0;function l(){ctx.clearRect(0,0,240,110);ctx.beginPath();ctx.arc(120,55,26,0,Math.PI*2);ctx.fillStyle='#2563eb';ctx.fill();ctx.beginPath();ctx.ellipse(120,55,54,15,Math.sin(a)*0.25,0,Math.PI*2);ctx.strokeStyle='#38bdf8';ctx.lineWidth=2;ctx.stroke();a+=0.04;requestAnimationFrame(l);}l();<\/script>",
      mistakes: "Фаромӯш кардани илова кардани Light ба саҳна — дар ин ҳолат MeshStandardMaterial сиёҳ мемонад.",
      tip: "Ҳангоми кори офлайн дар телефон аниматсияҳоро бо requestAnimationFrame ва андозаи мувофиқи canvas оптимизатсия кунед.",
      taskPrompt: "Функсияи animate() нависед, ки бо requestAnimationFrame(animate) даъват шавад.",
      starterCode: "let angle = 0;\nfunction animate() {\n  angle += 0.02;\n  // requestAnimationFrame илова кунед\n}",
      hint: "Дар охири функсия requestAnimationFrame(animate); нависед.",
      expectedTokens: ["function animate", "requestAnimationFrame"]
    }
  ];

  const GLOSSARY_ITEMS = [
    { term: "Element", lang: "HTML", desc: "Унсури пурраи HTML (аз теги кушоянда то пӯшанда, мисли <p>Матн</p>)." },
    { term: "Attribute", lang: "HTML", desc: "Хусусияти иловагӣ дар дохили теги кушоянда (масалан href, src, class, id)." },
    { term: "Semantic HTML", lang: "HTML", desc: "Тегҳои маънодор ба мисли <header>, <nav>, <main>, <article>, <footer>." },
    { term: "Selector", lang: "CSS", desc: "Интихобкунандаи унсури HTML дар CSS (тег, .класс, #id)." },
    { term: "Box Model", lang: "CSS", desc: "Сохтори қуттии ҳар унсур: Content, Padding, Border ва Margin." },
    { term: "Flexbox", lang: "CSS", desc: "Низоми якченакаи ҷойгирсозии унсурҳо дар сатр ё сутун." },
    { term: "CSS Grid", lang: "CSS", desc: "Низоми дученакаи (сатрҳо ва сутунҳо) сохтани сеткаи саҳифа." },
    { term: "Responsive", lang: "CSS", desc: "Мутобиқшаванда — тарҳе, ки дар телефон, планшет ва компютер дуруст менамояд." },
    { term: "Perspective", lang: "CSS", desc: "Масофаи дид барои эҷоди умқи воқеии 3D дар CSS." },
    { term: "Variable", lang: "JavaScript", desc: "Тағйирёбанда — зарфи нигоҳдории маълумот дар хотира (let, const)." },
    { term: "Function", lang: "JavaScript", desc: "Функсия — блоки коди номдор барои иҷрои вазифаи такроршаванда." },
    { term: "Array", lang: "JavaScript", desc: "Массив — рӯйхати мураттаби қимматҳо дар қавси [ ]." },
    { term: "Object", lang: "JavaScript", desc: "Объект — маҷмӯи ҷуфтҳои калид ва қиммат дар қавси { }." },
    { term: "DOM", lang: "JavaScript", desc: "Document Object Model — сохтори дарахтии саҳифа барои идора бо JS." },
    { term: "Event", lang: "JavaScript", desc: "Ҳодиса — амали корбар ё браузер (click, input, submit)." },
    { term: "LocalStorage", lang: "JavaScript", desc: "Хотираи доимии маҳаллӣ дар браузер, ки бе интернет кор мекунад." },
    { term: "JSON", lang: "JavaScript", desc: "Формати матнии мубодила ва захираи маълумот (stringify / parse)." },
    { term: "Promise", lang: "JavaScript", desc: "Ваъда — объекти идоракунии натиҷаи ояндаи амалҳои асинхронӣ." },
    { term: "API Key", lang: "JavaScript", desc: "Калиди шахсии дастрасӣ ба хидматҳои беруна (масалан Gemini API)." },
    { term: "PWA", lang: "HTML", desc: "Progressive Web App — веббарномае, ки дар телефон насб шуда офлайн кор мекунад." }
  ];

  const EXAM_QUESTIONS = [
    {
      q: "1. Барои намоиши дурусти ҳарфҳои тоҷикӣ дар HTML кадом тег дар <head> ҳатмӣ аст?",
      options: ["<meta charset=\"UTF-8\">", "<title>UTF-8</title>", "<body lang=\"tg\">"],
      answer: 0
    },
    {
      q: "2. Кадом хосияти CSS padding ва border-ро ба дохили width ҳисоб мекунад?",
      options: ["display: flex;", "box-sizing: border-box;", "position: relative;"],
      answer: 1
    },
    {
      q: "3. Дар JavaScript барои пешгирии боркунии дубораи саҳифа ҳангоми submit-и форма чӣ менависанд?",
      options: ["event.stop()", "event.preventDefault()", "return false"],
      answer: 1
    },
    {
      q: "4. Чаро дар интерфейси касбӣ ба ҷои эмодзи SVG истифода мешавад?",
      options: ["SVG дар ҳама системаҳо шакли ягона ва сифати тез дорад", "SVG танҳо бо интернет кор мекунад", "Эмодзи дар HTML манъ аст"],
      answer: 0
    },
    {
      q: "5. Барои он ки дар CSS 3D унсур умқи сеченака дошта бошад, кадом хосият ба волид дода мешавад?",
      options: ["z-index: 100;", "perspective: 800px;", "overflow: hidden;"],
      answer: 1
    }
  ];

  const BADGES_DEF = [
    { id: "b-first", title: "Қадами аввал", desc: "Аввалин дарсро бо муваффақият анҷом диҳед", check: (s) => s.learned.length >= 1 },
    { id: "b-html", title: "Устоди сохтор (HTML)", desc: "Ҳадди ақал 15 дарси HTML-ро гузаред", check: (s) => s.learned.filter(id => id.startsWith("html-")).length >= 15 },
    { id: "b-css", title: "Дизайнери CSS", desc: "Ҳадди ақал 10 дарси CSS-ро гузаред", check: (s) => s.learned.filter(id => id.startsWith("css-")).length >= 10 },
    { id: "b-js", title: "Муҳандиси JavaScript", desc: "Ҳадди ақал 10 дарси JavaScript-ро гузаред", check: (s) => s.learned.filter(id => id.startsWith("js-")).length >= 10 },
    { id: "b-studio", title: "Созандаи лоиҳа", desc: "Дар Web Academy Studio лоиҳа созед", check: (s) => s.projects.length >= 2 },
    { id: "b-grad", title: "Хатмкардаи Web Academy", desc: "Имтиҳони ниҳоии дохилиро супоред", check: (s) => s.examPassed === true }
  ];

  const ALL_LESSONS = LESSONS.concat(EXTRA_LESSONS).map((lesson) => {
    let course = lesson.course;
    if (!course) {
      if (lesson.lang === "HTML") course = 1;
      else if (lesson.lang === "CSS") course = 2;
      else course = 3;
    }
    const taskPrompt = lesson.taskPrompt || `Бо истифода аз «${lesson.name}» коди коршоямро дар поён нависед ва санҷед.`;
    const starterCode = lesson.starterCode || (lesson.lang === "HTML"
      ? `<!-- Вазифа барои ${lesson.name} -->\n`
      : lesson.lang === "CSS"
        ? `/* Вазифа барои ${lesson.name} */\n.box {\n  \n}`
        : `// Вазифа барои ${lesson.name}\n`);
    const hint = lesson.hint || `Ба бахши «Синтаксиси дуруст» нигаред: ${lesson.syntax.split("\n")[0]}`;
    return Object.assign({}, lesson, { course, taskPrompt, starterCode, hint });
  });

  const COURSES = [
    { id: 1, title: "1. HTML — Асосҳо то сатҳи пешрафта", desc: "Сохтори саҳифа, матн, расм, ҷадвал, формҳо, Semantic HTML ва SEO.", lang: "HTML" },
    { id: 2, title: "2. CSS — Ороиш ва тарроҳии муосир", desc: "Селекторҳо, Box Model, Flexbox, Grid, аниматсияҳо ва Responsive.", lang: "CSS" },
    { id: 3, title: "3. JavaScript — Мантиқ ва интерактивӣ", desc: "Тағйирёбандаҳо, функсияҳо, массивҳо, DOM, Events, Async ва API.", lang: "JavaScript" },
    { id: 4, title: "4. Ҷудо кардани файлҳо ва сохтори лоиҳа", desc: "Ташкили index.html, style.css, script.js, папкаҳои images/ ва assets/.", lang: "HTML" },
    { id: 5, title: "5. Тарроҳии премиум ва тугмаҳои бе эмодзи", desc: "SVG, Gradient, Glassmorphism, Neumorphism, 3D ва тугмаҳои мобилӣ.", lang: "CSS" },
    { id: 6, title: "6. CSS-и пешрафта, 3D ва Three.js", desc: "Perspective, RotateX/Y/Z, Flip Card, саҳнаи 3D ва асосҳои Three.js.", lang: "CSS" }
  ];

  const STORAGE_KEYS = {
    theme: "wa_theme_v1",
    welcomeSeen: "wa_welcome_seen_v1",
    favorites: "wa_favorites_v1",
    learned: "wa_learned_v1",
    fontSize: "wa_code_font_v1",
    openFolders: "wa_open_folders_v1",
    xp: "wa_xp_v1",
    daily: "wa_daily_v1",
    streak: "wa_streak_v1",
    projects: "wa_projects_v1",
    activeProjectId: "wa_active_proj_v1",
    examPassed: "wa_exam_passed_v1",
    taskDrafts: "wa_task_drafts_v1",
    aiKeyOptIn: "wa_ai_key_optin_v1"
  };

  function createDefaultProject() {
    return {
      id: "proj-" + Date.now(),
      name: "Лоиҳаи аввалини ман",
      updatedAt: new Date().toISOString(),
      files: {
        "index.html": "<!DOCTYPE html>\n<html lang=\"tg\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Лоиҳаи ман</title>\n</head>\n<body>\n  <div class=\"card\">\n    <h1>Салом, WEB ACADEMY!</h1>\n    <p>Ин аввалин лоиҳаи ман дар Studio аст.</p>\n    <button id=\"demoBtn\">Пахш кунед</button>\n  </div>\n</body>\n</html>",
        "style.css": "body {\n  font-family: system-ui, sans-serif;\n  background: #050b18;\n  color: #f8fafc;\n  display: grid;\n  place-items: center;\n  min-height: 90vh;\n  margin: 0;\n}\n.card {\n  background: #0b1426;\n  border: 1px solid #2563eb;\n  border-radius: 14px;\n  padding: 22px;\n  text-align: center;\n}\nbutton {\n  background: #2563eb;\n  color: #fff;\n  border: none;\n  padding: 10px 18px;\n  border-radius: 8px;\n  cursor: pointer;\n  font-weight: 700;\n}",
        "script.js": "const btn = document.getElementById('demoBtn');\nlet count = 0;\nif (btn) {\n  btn.addEventListener('click', () => {\n    count++;\n    btn.textContent = 'Пахш шуд: ' + count;\n  });\n}"
      }
    };
  }

  const state = {
    theme: "dark",
    codeFontSize: "14.5",
    favorites: [],
    learned: [],
    openFolders: {},
    treeLang: "ALL",
    currentView: "home",
    listMode: "ALL",
    searchQuery: "",
    filterCourse: "ALL",
    filterGroup: "ALL",
    activeLessonId: null,
    lastListMode: "home",
    xp: 0,
    daily: { date: "", count: 0 },
    streak: { lastDate: "", count: 1 },
    examPassed: false,
    taskDrafts: {},
    projects: [],
    activeProjectId: null,
    activeStudioFile: "index.html",
    undoStack: [],
    redoStack: [],
    aiSessionKey: "",
    aiModels: [],
    aiSelectedModel: "",
    aiHistory: [],
    deferredInstallPrompt: null
  };

  /* -------------------- ИШОРА БА УНСУРҲОИ DOM -------------------- */
  const dom = {
    htmlEl: document.documentElement,
    splashOverlay: document.getElementById("splashOverlay"),
    welcomeOverlay: document.getElementById("welcomeOverlay"),
    startWelcomeBtn: document.getElementById("startWelcomeBtn"),
    menuToggleBtn: document.getElementById("menuToggleBtn"),
    closeSidebarBtn: document.getElementById("closeSidebarBtn"),
    sidebar: document.getElementById("sidebar"),
    sidebarBackdrop: document.getElementById("sidebarBackdrop"),
    toggleAllFoldersBtn: document.getElementById("toggleAllFoldersBtn"),
    explorerTree: document.getElementById("explorerTree"),
    treeLangBtns: document.querySelectorAll(".tree-lang-btn"),

    logoBtn: document.getElementById("logoBtn"),
    searchInput: document.getElementById("searchInput"),
    clearSearchBtn: document.getElementById("clearSearchBtn"),
    installPwaBtn: document.getElementById("installPwaBtn"),
    themeToggleBtn: document.getElementById("themeToggleBtn"),
    sunIcon: document.getElementById("sunIcon"),
    moonIcon: document.getElementById("moonIcon"),
    profileAboutBtn: document.getElementById("profileAboutBtn"),
    settingsBtn: document.getElementById("settingsBtn"),

    navPills: document.querySelectorAll(".nav-pill"),
    favCountBadge: document.getElementById("favCountBadge"),
    learnedCountBadge: document.getElementById("learnedCountBadge"),

    dashboardView: document.getElementById("dashboardView"),
    listView: document.getElementById("listView"),
    lessonView: document.getElementById("lessonView"),
    studioView: document.getElementById("studioView"),
    aiView: document.getElementById("aiView"),
    projectsView: document.getElementById("projectsView"),
    glossaryView: document.getElementById("glossaryView"),
    achievementsView: document.getElementById("achievementsView"),
    aboutView: document.getElementById("aboutView"),

    networkStatusBadge: document.getElementById("networkStatusBadge"),
    heroXpCount: document.getElementById("heroXpCount"),
    heroStreakCount: document.getElementById("heroStreakCount"),
    dailyGoalText: document.getElementById("dailyGoalText"),
    continueLearningBtn: document.getElementById("continueLearningBtn"),
    openStudioFromHeroBtn: document.getElementById("openStudioFromHeroBtn"),
    openAiFromHeroBtn: document.getElementById("openAiFromHeroBtn"),
    overallPercentText: document.getElementById("overallPercentText"),
    overallProgressFill: document.getElementById("overallProgressFill"),
    heroLearnedCount: document.getElementById("heroLearnedCount"),
    heroTotalCount: document.getElementById("heroTotalCount"),
    heroFavCount: document.getElementById("heroFavCount"),
    coursesGrid: document.getElementById("coursesGrid"),

    listViewTitle: document.getElementById("listViewTitle"),
    listViewSubtitle: document.getElementById("listViewSubtitle"),
    courseFilterSelect: document.getElementById("courseFilterSelect"),
    groupFilterSelect: document.getElementById("groupFilterSelect"),
    lessonCardsGrid: document.getElementById("lessonCardsGrid"),
    emptyListState: document.getElementById("emptyListState"),
    emptyStateTitle: document.getElementById("emptyStateTitle"),
    emptyStateDesc: document.getElementById("emptyStateDesc"),
    resetFiltersBtn: document.getElementById("resetFiltersBtn"),

    backToListBtn: document.getElementById("backToListBtn"),
    lessonBreadcrumbText: document.getElementById("lessonBreadcrumbText"),
    toggleFavoriteBtn: document.getElementById("toggleFavoriteBtn"),
    favBtnText: document.getElementById("favBtnText"),
    lessonStatusBadge: document.getElementById("lessonStatusBadge"),
    lessonLangBadge: document.getElementById("lessonLangBadge"),
    lessonGroupBadge: document.getElementById("lessonGroupBadge"),
    lessonTitle: document.getElementById("lessonTitle"),
    lessonDescription: document.getElementById("lessonDescription"),
    lessonPurpose: document.getElementById("lessonPurpose"),
    lessonUsage: document.getElementById("lessonUsage"),
    lessonSyntaxCode: document.getElementById("lessonSyntaxCode"),
    lessonShortCode: document.getElementById("lessonShortCode"),
    lessonTaskPrompt: document.getElementById("lessonTaskPrompt"),
    showHintBtn: document.getElementById("showHintBtn"),
    resetTaskBtn: document.getElementById("resetTaskBtn"),
    lessonHintBox: document.getElementById("lessonHintBox"),
    lessonHintText: document.getElementById("lessonHintText"),
    lessonCodeEditor: document.getElementById("lessonCodeEditor"),
    checkTaskBtn: document.getElementById("checkTaskBtn"),
    toggleSolutionBtn: document.getElementById("toggleSolutionBtn"),
    taskFeedbackBox: document.getElementById("taskFeedbackBox"),
    lessonSolutionSection: document.getElementById("lessonSolutionSection"),
    lessonFullCode: document.getElementById("lessonFullCode"),
    lessonOutputText: document.getElementById("lessonOutputText"),
    lessonPreviewFrame: document.getElementById("lessonPreviewFrame"),
    lessonMistakes: document.getElementById("lessonMistakes"),
    lessonTip: document.getElementById("lessonTip"),
    prevLessonBtn: document.getElementById("prevLessonBtn"),
    nextLessonBtn: document.getElementById("nextLessonBtn"),

    studioProjectSelect: document.getElementById("studioProjectSelect"),
    studioNewProjectBtn: document.getElementById("studioNewProjectBtn"),
    studioExportProjectBtn: document.getElementById("studioExportProjectBtn"),
    studioUndoBtn: document.getElementById("studioUndoBtn"),
    studioRedoBtn: document.getElementById("studioRedoBtn"),
    studioFindToggleBtn: document.getElementById("studioFindToggleBtn"),
    studioClearFileBtn: document.getElementById("studioClearFileBtn"),
    studioRunBtn: document.getElementById("studioRunBtn"),
    studioFindBar: document.getElementById("studioFindBar"),
    studioFindInput: document.getElementById("studioFindInput"),
    studioReplaceInput: document.getElementById("studioReplaceInput"),
    studioReplaceAllBtn: document.getElementById("studioReplaceAllBtn"),
    studioFindCloseBtn: document.getElementById("studioFindCloseBtn"),
    studioNewFileBtn: document.getElementById("studioNewFileBtn"),
    studioNewFolderBtn: document.getElementById("studioNewFolderBtn"),
    studioFileList: document.getElementById("studioFileList"),
    studioActiveFileName: document.getElementById("studioActiveFileName"),
    studioRenameFileBtn: document.getElementById("studioRenameFileBtn"),
    studioDeleteFileBtn: document.getElementById("studioDeleteFileBtn"),
    studioLineNumbers: document.getElementById("studioLineNumbers"),
    studioCodeEditor: document.getElementById("studioCodeEditor"),
    studioPreviewPane: document.getElementById("studioPreviewPane"),
    studioRerunBtn: document.getElementById("studioRerunBtn"),
    studioExpandBtn: document.getElementById("studioExpandBtn"),
    studioPreviewFrame: document.getElementById("studioPreviewFrame"),

    aiApiKeyInput: document.getElementById("aiApiKeyInput"),
    aiToggleKeyVisBtn: document.getElementById("aiToggleKeyVisBtn"),
    aiCheckKeyBtn: document.getElementById("aiCheckKeyBtn"),
    aiClearKeyBtn: document.getElementById("aiClearKeyBtn"),
    aiModelSelect: document.getElementById("aiModelSelect"),
    aiPersistKeyCheckbox: document.getElementById("aiPersistKeyCheckbox"),
    aiStatusLabel: document.getElementById("aiStatusLabel"),
    aiMessagesBox: document.getElementById("aiMessagesBox"),
    aiChatForm: document.getElementById("aiChatForm"),
    aiPromptInput: document.getElementById("aiPromptInput"),
    aiSendBtn: document.getElementById("aiSendBtn"),

    projectsCreateBtn: document.getElementById("projectsCreateBtn"),
    projectsImportInput: document.getElementById("projectsImportInput"),
    projectsGalleryGrid: document.getElementById("projectsGalleryGrid"),
    glossarySearchInput: document.getElementById("glossarySearchInput"),
    glossaryGrid: document.getElementById("glossaryGrid"),
    badgesGrid: document.getElementById("badgesGrid"),
    examContainer: document.getElementById("examContainer"),
    certificateBox: document.getElementById("certificateBox"),
    certStatsText: document.getElementById("certStatsText"),

    settingsModal: document.getElementById("settingsModal"),
    closeSettingsBtn: document.getElementById("closeSettingsBtn"),
    modalThemeToggleBtn: document.getElementById("modalThemeToggleBtn"),
    codeFontSizeSelect: document.getElementById("codeFontSizeSelect"),
    exportBackupBtn: document.getElementById("exportBackupBtn"),
    importBackupInput: document.getElementById("importBackupInput"),
    resetDataBtn: document.getElementById("resetDataBtn"),
    resetConfirmBox: document.getElementById("resetConfirmBox"),
    confirmResetBtn: document.getElementById("confirmResetBtn"),
    cancelResetBtn: document.getElementById("cancelResetBtn"),

    installModal: document.getElementById("installModal"),
    closeInstallBtn: document.getElementById("closeInstallBtn"),

    promptModal: document.getElementById("promptModal"),
    promptModalTitle: document.getElementById("promptModalTitle"),
    promptModalDesc: document.getElementById("promptModalDesc"),
    promptModalInput: document.getElementById("promptModalInput"),
    promptModalForm: document.getElementById("promptModalForm"),
    closePromptModalBtn: document.getElementById("closePromptModalBtn"),
    promptModalCancelBtn: document.getElementById("promptModalCancelBtn"),
    toast: document.getElementById("toast")
  };

  /* -------------------- ЁРИРАСОНҲО -------------------- */
  function readStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) { return fallback; }
  }

  function writeStorage(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  let toastTimer = null;
  function showToast(msg) {
    dom.toast.textContent = msg;
    dom.toast.classList.remove("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => dom.toast.classList.add("hidden"), 2500);
  }

  function getTodayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function getLessonById(id) {
    return ALL_LESSONS.find((l) => l.id === id) || null;
  }

  function isLessonUnlocked(index) {
    if (index <= 0) return true;
    const prev = ALL_LESSONS[index - 1];
    const curr = ALL_LESSONS[index];
    return state.learned.includes(prev.id) || state.learned.includes(curr.id);
  }

  function getNextUnlockedLesson() {
    for (let i = 0; i < ALL_LESSONS.length; i++) {
      if (!state.learned.includes(ALL_LESSONS[i].id) && isLessonUnlocked(i)) {
        return ALL_LESSONS[i];
      }
    }
    return ALL_LESSONS[0];
  }

  /* -------------------- МОДАЛИ УМУМӢ (БЕ prompt/confirm) -------------------- */
  let promptCallback = null;
  function openPromptModal(title, desc, defaultValue, showInput, onConfirm) {
    dom.promptModalTitle.textContent = title;
    dom.promptModalDesc.textContent = desc || "";
    dom.promptModalInput.value = defaultValue || "";
    dom.promptModalInput.classList.toggle("hidden", !showInput);
    promptCallback = onConfirm;
    dom.promptModal.classList.remove("hidden");
    if (showInput) setTimeout(() => dom.promptModalInput.focus(), 50);
  }

  function closePromptModal() {
    dom.promptModal.classList.add("hidden");
    promptCallback = null;
  }

  /* -------------------- РАВШАНСОЗИИ СИНТАКСИС -------------------- */
  function highlightCode(code, lang) {
    const tokens = [];
    const saveToken = (html) => {
      const idx = tokens.length;
      tokens.push(html);
      return `\u0000T${idx}\u0000`;
    };
    let text = escapeHtml(code);
    if (lang === "HTML") {
      text = text.replace(/(&lt;!--[\s\S]*?--&gt;)/g, (m) => saveToken(`<span class="tok-com">${m}</span>`));
      text = text.replace(/(&lt;\/?)([a-zA-Z0-9!-]+)([\s\S]*?)(\/?&gt;)/g, (_, open, tag, attrs, close) => {
        const styledAttrs = attrs.replace(/([a-zA-Z0-9:-]+)(=)(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, (__, k, eq, v) =>
          `<span class="tok-attr">${k}</span>${eq}<span class="tok-val">${v}</span>`);
        return saveToken(`<span class="tok-tag">${open}${tag}</span>${styledAttrs}<span class="tok-tag">${close}</span>`);
      });
    } else if (lang === "CSS") {
      text = text.replace(/(\/\*[\s\S]*?\*\/)/g, (m) => saveToken(`<span class="tok-com">${m}</span>`));
      text = text.replace(/(&quot;[^&]*?&quot;|&#39;[^&]*?&#39;)/g, (m) => saveToken(`<span class="tok-str">${m}</span>`));
      text = text.replace(/([a-zA-Z-]+)(\s*:)/g, (_, prop, colon) => saveToken(`<span class="tok-prop">${prop}</span>${colon}`));
      text = text.replace(/\b(\d+(\.\d+)?(px|rem|em|%|vh|vw|s|ms|deg|fr)?)\b/g, (m) => saveToken(`<span class="tok-num">${m}</span>`));
    } else {
      text = text.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, (m) => saveToken(`<span class="tok-com">${m}</span>`));
      text = text.replace(/(&quot;[^&\n]*?&quot;|&#39;[^&\n]*?&#39;|`[^`]*?`)/g, (m) => saveToken(`<span class="tok-str">${m}</span>`));
      text = text.replace(/\b(const|let|var|function|return|if|else|switch|case|default|break|for|while|of|in|try|catch|finally|throw|new|class|extends|super|async|await|import|export|from|typeof|true|false|null|undefined)\b/g, (m) => saveToken(`<span class="tok-kw">${m}</span>`));
      text = text.replace(/\b(\d+(\.\d+)?)\b/g, (m) => saveToken(`<span class="tok-num">${m}</span>`));
      text = text.replace(/\b([a-zA-Z_$][\w$]*)(?=\s*\()/g, (m) => saveToken(`<span class="tok-fn">${m}</span>`));
    }
    return text.replace(/\u0000T(\d+)\u0000/g, (_, idx) => tokens[Number(idx)]);
  }

  function copyTextToClipboard(text) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(text).then(() => showToast("Нусха шуд!"), () => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(ok ? "Нусха шуд!" : "Нусхабардорӣ дастгирӣ нашуд");
    } catch (e) { showToast("Нусхабардорӣ дастгирӣ нашуд"); }
  }

  /* -------------------- РЕҶАИ ШАБОНА / РӮЗОНА -------------------- */
  function applyTheme(theme) {
    state.theme = theme === "light" ? "light" : "dark";
    dom.htmlEl.setAttribute("data-theme", state.theme);
    dom.sunIcon.classList.toggle("hidden", state.theme === "light");
    dom.moonIcon.classList.toggle("hidden", state.theme === "dark");
    writeStorage(STORAGE_KEYS.theme, state.theme);
  }

  function applyCodeFontSize(size) {
    state.codeFontSize = String(size || "14.5");
    dom.htmlEl.style.setProperty("--code-font-size", `${state.codeFontSize}px`);
    dom.codeFontSizeSelect.value = state.codeFontSize;
    writeStorage(STORAGE_KEYS.fontSize, state.codeFontSize);
  }

  /* -------------------- ДАРАХТИ 6 КУРС ВА ҚУЛФИ ПАЙДАРПАЙ -------------------- */
  function getFolderKey(courseId, group) {
    return `${courseId}::${group}`;
  }

  function renderExplorerTree() {
    let html = "";
    const filteredCourses = state.treeLang === "ALL"
      ? COURSES
      : COURSES.filter((c) => c.lang === state.treeLang);

    filteredCourses.forEach((course) => {
      const courseLessons = ALL_LESSONS.filter((l) => l.course === course.id);
      const groups = [...new Set(courseLessons.map((l) => l.group))];

      html += `<div class="tree-lang-section">`;
      html += `<div class="tree-lang-heading"><span>Курси ${course.id}: ${escapeHtml(course.lang)}</span><span>${courseLessons.length}</span></div>`;

      groups.forEach((group) => {
        const fKey = getFolderKey(course.id, group);
        const isOpen = state.openFolders[fKey] !== false;
        const groupLessons = courseLessons.filter((l) => l.group === group);

        html += `<div class="tree-folder ${isOpen ? "open" : ""}" data-folder-key="${escapeHtml(fKey)}">`;
        html += `<button type="button" class="tree-folder-btn" aria-expanded="${isOpen}">`;
        html += `<svg class="tree-chevron" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="9 18 15 12 9 6"></polyline></svg>`;
        html += `<span>${escapeHtml(group)}</span></button><div class="tree-folder-items">`;

        groupLessons.forEach((lesson) => {
          const globalIdx = ALL_LESSONS.findIndex((x) => x.id === lesson.id);
          const unlocked = isLessonUnlocked(globalIdx);
          const isActive = state.currentView === "lesson" && state.activeLessonId === lesson.id;
          const isLearned = state.learned.includes(lesson.id);

          html += `<button type="button" class="tree-item-btn ${isActive ? "active" : ""} ${unlocked ? "" : "locked"}" data-lesson-id="${escapeHtml(lesson.id)}">`;
          html += `<span>${escapeHtml(lesson.name)}</span>`;
          if (isLearned) {
            html += `<span class="tree-item-done" title="Гузашта шуд">&#10003;</span>`;
          } else if (!unlocked) {
            html += `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
          }
          html += `</button>`;
        });

        html += `</div></div>`;
      });

      html += `</div>`;
    });

    dom.explorerTree.innerHTML = html;
    const folderEls = dom.explorerTree.querySelectorAll(".tree-folder");
    const anyOpen = Array.from(folderEls).some((el) => el.classList.contains("open"));
    dom.toggleAllFoldersBtn.textContent = anyOpen ? "Ҳамаро пӯш" : "Ҳамаро кушо";
  }

  /* -------------------- ПЕШРАФТ, XP, STREAK ВА КУРСҲО -------------------- */
  function updateNetworkBadge() {
    const online = navigator.onLine;
    dom.networkStatusBadge.textContent = online ? "Онлайн (AI дастрас)" : "Офлайн (100% фаъол)";
  }

  function updateProgressUI() {
    const total = ALL_LESSONS.length;
    const learnedCount = state.learned.filter((id) => getLessonById(id)).length;
    const favCount = state.favorites.filter((id) => getLessonById(id)).length;
    const pct = total ? Math.round((learnedCount / total) * 100) : 0;

    dom.overallPercentText.textContent = `${pct}%`;
    dom.overallProgressFill.style.width = `${pct}%`;
    dom.heroLearnedCount.textContent = learnedCount;
    dom.heroTotalCount.textContent = total;
    dom.heroFavCount.textContent = favCount;
    dom.heroXpCount.textContent = state.xp;
    dom.heroStreakCount.textContent = state.streak.count || 1;
    dom.dailyGoalText.textContent = `${Math.min(state.daily.count, 3)} / 3 дарс`;
    dom.favCountBadge.textContent = favCount;
    dom.learnedCountBadge.textContent = learnedCount;

    renderCoursesGrid();
  }

  function renderCoursesGrid() {
    let html = "";
    COURSES.forEach((c) => {
      const list = ALL_LESSONS.filter((l) => l.course === c.id);
      const done = list.filter((l) => state.learned.includes(l.id)).length;
      const pct = list.length ? Math.round((done / list.length) * 100) : 0;
      const badgeCls = c.lang === "HTML" ? "badge-html" : c.lang === "CSS" ? "badge-css" : "badge-js";
      html += `
        <article class="course-card">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <span class="lang-badge ${badgeCls}">${escapeHtml(c.lang)}</span>
            <strong>${pct}%</strong>
          </div>
          <h3 style="margin:0;font-size:1rem;">${escapeHtml(c.title)}</h3>
          <p class="muted-text" style="margin:0;flex:1;">${escapeHtml(c.desc)}</p>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
            <span class="muted-text">${done} / ${list.length} дарс</span>
            <button type="button" class="btn btn-sm btn-outline open-course-btn" data-course-id="${c.id}">Кушодан</button>
          </div>
        </article>
      `;
    });
    dom.coursesGrid.innerHTML = html;
  }

  /* -------------------- РӮЙХАТ, ҶУСТУҶӮ ВА ФИЛТР -------------------- */
  function populateCourseAndGroupFilters() {
    let cOpts = `<option value="ALL">Ҳамаи курсҳо</option>`;
    COURSES.forEach((c) => {
      cOpts += `<option value="${c.id}">${escapeHtml(c.title)}</option>`;
    });
    dom.courseFilterSelect.innerHTML = cOpts;
    dom.courseFilterSelect.value = state.filterCourse;

    const pool = state.filterCourse === "ALL"
      ? ALL_LESSONS
      : ALL_LESSONS.filter((l) => String(l.course) === String(state.filterCourse));
    const groups = [...new Set(pool.map((l) => l.group))];
    let gOpts = `<option value="ALL">Ҳамаи гурӯҳҳо</option>`;
    groups.forEach((g) => {
      gOpts += `<option value="${escapeHtml(g)}">${escapeHtml(g)}</option>`;
    });
    dom.groupFilterSelect.innerHTML = gOpts;
    if (!groups.includes(state.filterGroup)) state.filterGroup = "ALL";
    dom.groupFilterSelect.value = state.filterGroup;
  }

  function renderListView() {
    const titles = {
      ALL: "Ҳамаи курсҳо ва дарсҳо",
      courses: "Барномаи 6-курсӣ",
      favorites: "Дарсҳои мунтахаб",
      learned: "Дарсҳои омӯхташуда",
      search: "Натиҷаҳои ҷустуҷӯ"
    };
    dom.listViewTitle.textContent = titles[state.listMode] || "Рӯйхати дарсҳо";
    populateCourseAndGroupFilters();

    let list = ALL_LESSONS.slice();
    if (state.listMode === "favorites") list = list.filter((l) => state.favorites.includes(l.id));
    else if (state.listMode === "learned") list = list.filter((l) => state.learned.includes(l.id));

    if (state.filterCourse !== "ALL") list = list.filter((l) => String(l.course) === String(state.filterCourse));
    if (state.filterGroup !== "ALL") list = list.filter((l) => l.group === state.filterGroup);

    const q = state.searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((l) =>
        l.name.toLowerCase().includes(q) ||
        l.lang.toLowerCase().includes(q) ||
        l.group.toLowerCase().includes(q) ||
        l.description.toLowerCase().includes(q)
      );
    }

    dom.listViewSubtitle.textContent = `${list.length} дарс ёфт шуд`;
    if (list.length === 0) {
      dom.lessonCardsGrid.innerHTML = "";
      dom.emptyListState.classList.remove("hidden");
    } else {
      dom.emptyListState.classList.add("hidden");
      dom.lessonCardsGrid.innerHTML = list.map((lesson) => {
        const idx = ALL_LESSONS.findIndex((x) => x.id === lesson.id);
        const unlocked = isLessonUnlocked(idx);
        const isDone = state.learned.includes(lesson.id);
        const isFav = state.favorites.includes(lesson.id);
        const badgeCls = lesson.lang === "HTML" ? "badge-html" : lesson.lang === "CSS" ? "badge-css" : "badge-js";
        return `
          <article class="lesson-card ${unlocked ? "" : "locked"}" data-lesson-id="${escapeHtml(lesson.id)}" tabindex="0" role="button">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <span class="lang-badge ${badgeCls}">${escapeHtml(lesson.lang)}</span>
                <span class="group-badge">Курс ${lesson.course}</span>
              </div>
              <div>
                ${isFav ? '<span style="color:#facc15;font-weight:700;">★</span>' : ""}
                ${isDone ? '<span style="color:var(--success);font-weight:700;">&#10003;</span>' : (!unlocked ? '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>' : "")}
              </div>
            </div>
            <h3 style="margin:0;font-size:1rem;">${escapeHtml(lesson.name)}</h3>
            <p class="muted-text" style="margin:0;">${escapeHtml(lesson.description)}</p>
          </article>
        `;
      }).join("");
    }
  }

  /* -------------------- КУШОДАНИ ДАРС ВА САНҶИШИ ВАЗИФА -------------------- */
  function openLesson(lessonId) {
    const idx = ALL_LESSONS.findIndex((l) => l.id === lessonId);
    if (idx === -1) return;

    if (!isLessonUnlocked(idx)) {
      const prev = ALL_LESSONS[idx - 1];
      showToast(`Аввал дарси қаблиро («${prev.name}») иҷро кунед!`);
      return;
    }

    const lesson = ALL_LESSONS[idx];
    if (state.currentView !== "lesson") state.lastListMode = state.currentView === "list" ? state.listMode : "home";
    state.activeLessonId = lesson.id;
    state.currentView = "lesson";

    state.openFolders[getFolderKey(lesson.course, lesson.group)] = true;
    writeStorage(STORAGE_KEYS.openFolders, state.openFolders);

    hideAllViews();
    dom.lessonView.classList.remove("hidden");

    dom.lessonBreadcrumbText.textContent = `Курси ${lesson.course} / ${lesson.group} / ${lesson.name}`;
    dom.lessonLangBadge.textContent = lesson.lang;
    dom.lessonLangBadge.className = `lang-badge ${lesson.lang === "HTML" ? "badge-html" : lesson.lang === "CSS" ? "badge-css" : "badge-js"}`;
    dom.lessonGroupBadge.textContent = lesson.group;
    dom.lessonTitle.textContent = lesson.name;
    dom.lessonDescription.textContent = lesson.description;
    dom.lessonPurpose.textContent = lesson.purpose;
    dom.lessonUsage.textContent = lesson.usage;

    dom.lessonSyntaxCode.dataset.raw = lesson.syntax;
    dom.lessonSyntaxCode.innerHTML = highlightCode(lesson.syntax, lesson.lang);
    dom.lessonShortCode.dataset.raw = lesson.shortExample;
    dom.lessonShortCode.innerHTML = highlightCode(lesson.shortExample, lesson.lang);

    dom.lessonTaskPrompt.textContent = lesson.taskPrompt;
    dom.lessonHintText.textContent = lesson.hint;
    dom.lessonHintBox.classList.add("hidden");
    dom.taskFeedbackBox.classList.add("hidden");
    dom.lessonCodeEditor.value = state.taskDrafts[lesson.id] || lesson.starterCode;

    const alreadyDone = state.learned.includes(lesson.id);
    dom.lessonSolutionSection.classList.toggle("hidden", !alreadyDone);
    dom.toggleSolutionBtn.classList.toggle("hidden", !alreadyDone);
    dom.lessonStatusBadge.textContent = alreadyDone ? "Иҷро шуд" : "Дарси фаъол";

    dom.lessonFullCode.dataset.raw = lesson.fullExample;
    dom.lessonFullCode.innerHTML = highlightCode(lesson.fullExample, lesson.lang);
    dom.lessonOutputText.textContent = lesson.outputText;
    dom.lessonPreviewFrame.srcdoc = `<!DOCTYPE html><html lang="tg"><head><meta charset="UTF-8"><style>body{margin:10px;color:#0f172a;background:#fff;font-family:sans-serif;}</style></head><body>${lesson.previewHtml || ""}</body></html>`;

    dom.lessonMistakes.textContent = lesson.mistakes;
    dom.lessonTip.textContent = lesson.tip;

    updateLessonFavoriteBtn();
    dom.prevLessonBtn.disabled = idx <= 0;
    dom.nextLessonBtn.disabled = idx >= ALL_LESSONS.length - 1 || !isLessonUnlocked(idx + 1);

    renderExplorerTree();
    toggleSidebarMobile(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateLessonFavoriteBtn() {
    const isFav = state.favorites.includes(state.activeLessonId);
    dom.toggleFavoriteBtn.classList.toggle("active", isFav);
    dom.favBtnText.textContent = isFav ? "Дар мунтахаб" : "Ба мунтахаб";
  }

  function evaluateLessonTask() {
    const lesson = getLessonById(state.activeLessonId);
    if (!lesson) return;
    const code = dom.lessonCodeEditor.value.trim();

    if (code.length < 5) {
      showTaskFeedback(false, "Майдони код холӣ ё хеле кӯтоҳ аст. Лутфан вазифаро нависед.");
      return;
    }

    // Санҷиши token-ҳои мушаххас (агар дарс дошта бошад)
    if (Array.isArray(lesson.expectedTokens)) {
      const missing = lesson.expectedTokens.filter((tok) => !code.toLowerCase().includes(tok.toLowerCase()));
      if (missing.length > 0) {
        showTaskFeedback(false, `Дар коди шумо ин қисмат намерасад: ${missing.join(", ")}. Роҳнаморо бинед ва ислоҳ кунед.`);
        return;
      }
    }

    // Санҷиши воқеии HTML/CSS/JS
    if (lesson.lang === "HTML") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(code, "text/html");
      if (!doc.body || (doc.body.children.length === 0 && !code.includes("<!DOCTYPE"))) {
        showTaskFeedback(false, "Дар коди HTML ягон унсури дуруст ёфт нашуд. Тегҳоро дуруст нависед.");
        return;
      }
      const tagGuess = lesson.name.match(/<([a-zA-Z0-9-]+)/);
      if (tagGuess && tagGuess[1] !== "DOCTYPE" && tagGuess[1] !== "html" && tagGuess[1] !== "head" && tagGuess[1] !== "body") {
        const tag = tagGuess[1].toLowerCase();
        if (doc.querySelectorAll(tag).length === 0 && !code.toLowerCase().includes(`<${tag}`)) {
          showTaskFeedback(false, `Дар ин вазифа бояд теги <${tag}>-ро истифода баред.`);
          return;
        }
      }
    } else if (lesson.lang === "CSS") {
      if (!code.includes("{") || !code.includes("}") || !code.includes(":")) {
        showTaskFeedback(false, "Синтаксиси CSS нопурра аст: селектор { хосият: қиммат; }-ро санҷед.");
        return;
      }
    } else {
      // Санҷиши синтаксис ва иҷрои бехатари JS
      try {
        new Function(code);
      } catch (err) {
        showTaskFeedback(false, `Хатои синтаксиси JavaScript: ${err.message}`);
        return;
      }
    }

    // Муваффақият!
    const wasNew = !state.learned.includes(lesson.id);
    if (wasNew) {
      state.learned.push(lesson.id);
      state.xp += 25;
      const today = getTodayStr();
      if (state.daily.date !== today) state.daily = { date: today, count: 0 };
      state.daily.count += 1;
      if (state.streak.lastDate !== today) {
        state.streak = { lastDate: today, count: (state.streak.count || 0) + 1 };
      }
      writeStorage(STORAGE_KEYS.learned, state.learned);
      writeStorage(STORAGE_KEYS.xp, state.xp);
      writeStorage(STORAGE_KEYS.daily, state.daily);
      writeStorage(STORAGE_KEYS.streak, state.streak);
    }

    showTaskFeedback(true, wasNew
      ? "Офарин! Вазифа дуруст иҷро шуд (+25 XP) ва дарси навбатӣ кушода гардид!"
      : "Офарин! Коди шумо дуруст аст.");

    dom.lessonSolutionSection.classList.remove("hidden");
    dom.toggleSolutionBtn.classList.remove("hidden");
    dom.lessonStatusBadge.textContent = "Иҷро шуд";

    const idx = ALL_LESSONS.findIndex((l) => l.id === lesson.id);
    dom.nextLessonBtn.disabled = idx >= ALL_LESSONS.length - 1;
    updateProgressUI();
    renderExplorerTree();
  }

  function showTaskFeedback(ok, msg) {
    dom.taskFeedbackBox.textContent = msg;
    dom.taskFeedbackBox.className = `task-feedback ${ok ? "ok" : "err"}`;
    dom.taskFeedbackBox.classList.remove("hidden");
  }

  /* -------------------- WEB ACADEMY STUDIO -------------------- */
  function getActiveProject() {
    return state.projects.find((p) => p.id === state.activeProjectId) || state.projects[0];
  }

  function updateStudioLineNumbers() {
    const lines = dom.studioCodeEditor.value.split("\n").length;
    let nums = "";
    for (let i = 1; i <= lines; i++) nums += i + "\n";
    dom.studioLineNumbers.textContent = nums;
  }

  function renderStudio() {
    const proj = getActiveProject();
    if (!proj) return;
    state.activeProjectId = proj.id;

    let pOpts = "";
    state.projects.forEach((p) => {
      pOpts += `<option value="${escapeHtml(p.id)}">${escapeHtml(p.name)}</option>`;
    });
    dom.studioProjectSelect.innerHTML = pOpts;
    dom.studioProjectSelect.value = proj.id;

    const fileNames = Object.keys(proj.files);
    if (!fileNames.includes(state.activeStudioFile)) state.activeStudioFile = fileNames[0] || "index.html";

    dom.studioFileList.innerHTML = fileNames.map((fn) => `
      <button type="button" class="studio-file-item ${fn === state.activeStudioFile ? "active" : ""}" data-studio-file="${escapeHtml(fn)}">
        <span>${escapeHtml(fn)}</span>
      </button>
    `).join("");

    dom.studioActiveFileName.textContent = state.activeStudioFile;
    dom.studioCodeEditor.value = proj.files[state.activeStudioFile] || "";
    updateStudioLineNumbers();
    runStudioPreview();
  }

  function runStudioPreview() {
    const proj = getActiveProject();
    if (!proj) return;
    const htmlCode = proj.files["index.html"] || "";
    const cssCode = Object.keys(proj.files).filter((f) => f.endsWith(".css")).map((f) => proj.files[f]).join("\n");
    const jsCode = Object.keys(proj.files).filter((f) => f.endsWith(".js")).map((f) => proj.files[f]).join("\n");

    const combined = `<!DOCTYPE html><html lang="tg"><head><meta charset="UTF-8"><style>${cssCode}</style></head><body>${htmlCode}<script>try{${jsCode}}catch(e){document.body.insertAdjacentHTML('beforeend','<pre style="color:red;background:#fee;padding:8px;">Хато: '+e.message+'</pre>');}<\/script></body></html>`;
    dom.studioPreviewFrame.srcdoc = combined;
  }

  function saveStudioProjects() {
    writeStorage(STORAGE_KEYS.projects, state.projects);
    writeStorage(STORAGE_KEYS.activeProjectId, state.activeProjectId);
  }

  /* -------------------- AI MENTOR (GEMINI API) -------------------- */
  function appendAiMessage(role, text) {
    const div = document.createElement("div");
    div.className = `ai-msg ${role === "user" ? "ai-msg-user" : "ai-msg-bot"}`;
    div.textContent = (role === "user" ? "Шумо: " : "AI Mentor: ") + text;
    dom.aiMessagesBox.appendChild(div);
    dom.aiMessagesBox.scrollTop = dom.aiMessagesBox.scrollHeight;
  }

  async function fetchAvailableGeminiModels(apiKey) {
    if (!navigator.onLine) {
      dom.aiStatusLabel.textContent = "Ҳолат: Интернет нест (AI Mentor танҳо бо интернет кор мекунад)";
      showToast("Пайвасти интернет нест");
      return;
    }
    dom.aiStatusLabel.textContent = "Ҳолат: Дар ҳоли санҷиши калид ва гирифтани моделҳо...";
    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models", {
        headers: { "x-goog-api-key": apiKey }
      });
      if (!res.ok) {
        handleAiHttpError(res.status);
        return;
      }
      const data = await res.json();
      const models = (data.models || []).filter((m) =>
        Array.isArray(m.supportedGenerationMethods) && m.supportedGenerationMethods.includes("generateContent")
      );
      if (models.length === 0) {
        dom.aiStatusLabel.textContent = "Ҳолат: Ягон модели мувофиқ ёфт нашуд";
        return;
      }
      state.aiModels = models.map((m) => m.name.replace(/^models\//, ""));
      // Интихоби модели навтарини flash ё pro
      const preferred = state.aiModels.find((n) => n.includes("flash")) || state.aiModels[0];
      state.aiSelectedModel = preferred;
      dom.aiModelSelect.innerHTML = state.aiModels.map((m) => `<option value="${escapeHtml(m)}">${escapeHtml(m)}</option>`).join("");
      dom.aiModelSelect.value = preferred;
      dom.aiStatusLabel.textContent = `Ҳолат: Калид фаъол аст (${state.aiModels.length} модел дастрас)`;
      showToast("Калид тасдиқ шуд!");
    } catch (e) {
      dom.aiStatusLabel.textContent = "Ҳолат: Хатои пайвастшавӣ ба сервер";
    }
  }

  function handleAiHttpError(status) {
    const map = {
      401: "Калиди API нодуруст аст (401). Лутфан калидро санҷед.",
      403: "Дастрасӣ манъ аст (403). Ҳуқуқи калиди API-ро санҷед.",
      404: "Модели интихобшуда ёфт нашуд (404). Модели дигарро интихоб кунед.",
      429: "Маҳдудияти дархостҳо гузашт (429). Каме интизор шавед."
    };
    const msg = map[status] || `Хатои сервер (${status}).`;
    dom.aiStatusLabel.textContent = "Ҳолат: " + msg;
    appendAiMessage("bot", msg);
  }

  async function sendAiPrompt(promptText) {
    const key = state.aiSessionKey || dom.aiApiKeyInput.value.trim();
    if (!key) {
      appendAiMessage("bot", "Лутфан аввал API Key-и шахсии Gemini-и худро ворид кунед ё тугмаи «Гирифтани API Key»-ро пахш намоед.");
      return;
    }
    if (!navigator.onLine) {
      appendAiMessage("bot", "Шумо ҳоло дар ҳолати офлайн ҳастед. AI Mentor барои кор кардан интернет талаб мекунад.");
      return;
    }

    state.aiSessionKey = key;
    if (!state.aiSelectedModel) {
      await fetchAvailableGeminiModels(key);
      if (!state.aiSelectedModel) return;
    }

    appendAiMessage("user", promptText);
    state.aiHistory.push({ role: "user", parts: [{ text: promptText }] });
    dom.aiSendBtn.disabled = true;

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(state.aiSelectedModel)}:generateContent`;
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": key
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: "Ту AI Mentor-и WEB ACADEMY (AZIZZODA COMPANY) ҳастӣ. Бо забони тоҷикии фаҳмо ва касбӣ ба саволҳои HTML, CSS, JavaScript ва 3D ҷавоб деҳ. Истилоҳҳои барномасозиро бо англисӣ нигоҳ дошта, бо тоҷикӣ шарҳ деҳ." }]
          },
          contents: state.aiHistory.slice(-10)
        })
      });

      if (!res.ok) {
        handleAiHttpError(res.status);
        dom.aiSendBtn.disabled = false;
        return;
      }

      const data = await res.json();
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Ҷавоб гирифта нашуд.";
      state.aiHistory.push({ role: "model", parts: [{ text: reply }] });
      appendAiMessage("bot", reply);
    } catch (e) {
      appendAiMessage("bot", "Хатои шабака ҳангоми тамос бо Gemini API.");
    } finally {
      dom.aiSendBtn.disabled = false;
    }
  }

  /* -------------------- ЛОИҲАҲО, ЛУҒАТ, НИШОНҲО, ИМТИҲОН -------------------- */
  function renderProjectsGallery() {
    dom.projectsGalleryGrid.innerHTML = state.projects.map((p) => `
      <article class="course-card">
        <h3 style="margin:0;">${escapeHtml(p.name)}</h3>
        <span class="muted-text">${Object.keys(p.files).length} файл</span>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
          <button type="button" class="btn btn-sm btn-primary open-proj-btn" data-proj-id="${escapeHtml(p.id)}">Кушодан дар Studio</button>
          <button type="button" class="btn btn-sm btn-secondary rename-proj-btn" data-proj-id="${escapeHtml(p.id)}">Ном</button>
          <button type="button" class="btn btn-sm btn-danger delete-proj-btn" data-proj-id="${escapeHtml(p.id)}">Нест</button>
        </div>
      </article>
    `).join("");
  }

  function renderGlossary(query) {
    const q = (query || "").trim().toLowerCase();
    const list = q
      ? GLOSSARY_ITEMS.filter((g) => g.term.toLowerCase().includes(q) || g.desc.toLowerCase().includes(q) || g.lang.toLowerCase().includes(q))
      : GLOSSARY_ITEMS;
    dom.glossaryGrid.innerHTML = list.map((g) => `
      <article class="course-card">
        <span class="lang-badge ${g.lang === "HTML" ? "badge-html" : g.lang === "CSS" ? "badge-css" : "badge-js"}">${escapeHtml(g.lang)}</span>
        <h3 style="margin:0;">${escapeHtml(g.term)}</h3>
        <p class="muted-text" style="margin:0;">${escapeHtml(g.desc)}</p>
      </article>
    `).join("");
  }

  function renderAchievementsAndExam() {
    dom.badgesGrid.innerHTML = BADGES_DEF.map((b) => {
      const earned = b.check(state);
      return `
        <article class="course-card" style="border-color:${earned ? "var(--primary-electric)" : "var(--border)"};opacity:${earned ? "1" : "0.6"};">
          <span class="status-pill">${earned ? "Ба даст оварда шуд" : "Пӯшида"}</span>
          <h3 style="margin:4px 0 0;">${escapeHtml(b.title)}</h3>
          <p class="muted-text" style="margin:0;">${escapeHtml(b.desc)}</p>
        </article>
      `;
    }).join("");

    let qHtml = `<form id="examForm">`;
    EXAM_QUESTIONS.forEach((item, idx) => {
      qHtml += `<div class="exam-q"><strong>${escapeHtml(item.q)}</strong>`;
      item.options.forEach((opt, oIdx) => {
        qHtml += `<label class="exam-opt"><input type="radio" name="eq_${idx}" value="${oIdx}"> ${escapeHtml(opt)}</label>`;
      });
      qHtml += `</div>`;
    });
    qHtml += `<button type="submit" class="btn btn-primary" style="margin-top:12px;">Супоридани имтиҳон</button></form>`;
    dom.examContainer.innerHTML = qHtml;

    dom.certificateBox.classList.toggle("hidden", !state.examPassed);
    if (state.examPassed) {
      dom.certStatsText.textContent = `Дарсҳои гузашта: ${state.learned.length} / ${ALL_LESSONS.length} | Хол: ${state.xp} XP`;
    }

    document.getElementById("examForm").addEventListener("submit", (e) => {
      e.preventDefault();
      let score = 0;
      EXAM_QUESTIONS.forEach((item, idx) => {
        const checked = document.querySelector(`input[name="eq_${idx}"]:checked`);
        if (checked && Number(checked.value) === item.answer) score++;
      });
      if (score >= 4) {
        state.examPassed = true;
        writeStorage(STORAGE_KEYS.examPassed, true);
        showToast(`Табрик! Имтиҳон бо ${score}/5 хол супорида шуд!`);
        renderAchievementsAndExam();
      } else {
        showToast(`Натиҷа: ${score}/5. Барои гузаштан ҳадди ақал 4 хол лозим аст.`);
      }
    });
  }

  /* -------------------- ИВАЗКУНИИ САҲИФАҲО -------------------- */
  function hideAllViews() {
    [
      dom.dashboardView, dom.listView, dom.lessonView,
      dom.studioView, dom.aiView, dom.projectsView,
      dom.glossaryView, dom.achievementsView, dom.aboutView
    ].forEach((v) => v.classList.add("hidden"));
  }

  function updateActiveNavPill(key) {
    dom.navPills.forEach((p) => p.classList.toggle("active", p.dataset.view === key));
  }

  function switchView(view) {
    hideAllViews();
    state.activeLessonId = null;
    updateActiveNavPill(view);

    if (view === "home") {
      state.currentView = "home";
      dom.dashboardView.classList.remove("hidden");
      updateProgressUI();
    } else if (["courses", "ALL", "favorites", "learned", "search"].includes(view)) {
      state.currentView = "list";
      state.listMode = view;
      dom.listView.classList.remove("hidden");
      renderListView();
    } else if (view === "studio") {
      state.currentView = "studio";
      dom.studioView.classList.remove("hidden");
      renderStudio();
    } else if (view === "ai") {
      state.currentView = "ai";
      dom.aiView.classList.remove("hidden");
    } else if (view === "projects") {
      state.currentView = "projects";
      dom.projectsView.classList.remove("hidden");
      renderProjectsGallery();
    } else if (view === "glossary") {
      state.currentView = "glossary";
      dom.glossaryView.classList.remove("hidden");
      renderGlossary(dom.glossarySearchInput.value);
    } else if (view === "achievements") {
      state.currentView = "achievements";
      dom.achievementsView.classList.remove("hidden");
      renderAchievementsAndExam();
    } else if (view === "about") {
      state.currentView = "about";
      dom.aboutView.classList.remove("hidden");
    }
    renderExplorerTree();
  }

  function toggleSidebarMobile(open) {
    dom.sidebar.classList.toggle("open", open);
    dom.sidebarBackdrop.classList.toggle("hidden", !open);
  }

  /* -------------------- ҲОДИСАҲО -------------------- */
  function bindEvents() {
    dom.startWelcomeBtn.addEventListener("click", () => {
      writeStorage(STORAGE_KEYS.welcomeSeen, true);
      dom.welcomeOverlay.classList.add("hidden");
    });

    dom.menuToggleBtn.addEventListener("click", () => toggleSidebarMobile(true));
    dom.closeSidebarBtn.addEventListener("click", () => toggleSidebarMobile(false));
    dom.sidebarBackdrop.addEventListener("click", () => toggleSidebarMobile(false));

    dom.logoBtn.addEventListener("click", (e) => { e.preventDefault(); switchView("home"); });
    dom.profileAboutBtn.addEventListener("click", () => switchView("about"));

    dom.continueLearningBtn.addEventListener("click", () => openLesson(getNextUnlockedLesson().id));
    dom.openStudioFromHeroBtn.addEventListener("click", () => switchView("studio"));
    dom.openAiFromHeroBtn.addEventListener("click", () => switchView("ai"));

    document.querySelectorAll("[data-jump-view]").forEach((btn) => {
      btn.addEventListener("click", () => switchView(btn.dataset.jumpView));
    });

    dom.navPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        state.filterCourse = "ALL";
        state.filterGroup = "ALL";
        switchView(pill.dataset.view);
      });
    });

    dom.coursesGrid.addEventListener("click", (e) => {
      const btn = e.target.closest(".open-course-btn");
      if (btn) {
        state.filterCourse = btn.dataset.courseId;
        state.filterGroup = "ALL";
        switchView("courses");
      }
    });

    dom.courseFilterSelect.addEventListener("change", () => {
      state.filterCourse = dom.courseFilterSelect.value;
      state.filterGroup = "ALL";
      renderListView();
    });

    dom.groupFilterSelect.addEventListener("change", () => {
      state.filterGroup = dom.groupFilterSelect.value;
      renderListView();
    });

    dom.resetFiltersBtn.addEventListener("click", () => {
      dom.searchInput.value = "";
      state.searchQuery = "";
      state.filterCourse = "ALL";
      state.filterGroup = "ALL";
      dom.clearSearchBtn.classList.add("hidden");
      switchView("courses");
    });

    dom.searchInput.addEventListener("input", () => {
      state.searchQuery = dom.searchInput.value;
      dom.clearSearchBtn.classList.toggle("hidden", !state.searchQuery);
      if (state.searchQuery.trim()) switchView("search");
      else switchView("home");
    });

    dom.clearSearchBtn.addEventListener("click", () => {
      dom.searchInput.value = "";
      state.searchQuery = "";
      dom.clearSearchBtn.classList.add("hidden");
      switchView("home");
    });

    dom.explorerTree.addEventListener("click", (e) => {
      const fBtn = e.target.closest(".tree-folder-btn");
      if (fBtn) {
        const folderEl = fBtn.closest(".tree-folder");
        const key = folderEl.dataset.folderKey;
        const willOpen = !folderEl.classList.contains("open");
        folderEl.classList.toggle("open", willOpen);
        state.openFolders[key] = willOpen;
        writeStorage(STORAGE_KEYS.openFolders, state.openFolders);
        return;
      }
      const itemBtn = e.target.closest(".tree-item-btn");
      if (itemBtn) openLesson(itemBtn.dataset.lessonId);
    });

    dom.treeLangBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        dom.treeLangBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.treeLang = btn.dataset.treeLang;
        renderExplorerTree();
      });
    });

    dom.toggleAllFoldersBtn.addEventListener("click", () => {
      const folderEls = dom.explorerTree.querySelectorAll(".tree-folder");
      const next = !Array.from(folderEls).some((el) => el.classList.contains("open"));
      folderEls.forEach((el) => { state.openFolders[el.dataset.folderKey] = next; });
      writeStorage(STORAGE_KEYS.openFolders, state.openFolders);
      renderExplorerTree();
    });

    dom.lessonCardsGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".lesson-card");
      if (card) openLesson(card.dataset.lessonId);
    });

    // Вазифаи амалӣ дар дарс
    dom.backToListBtn.addEventListener("click", () => switchView(state.lastListMode || "home"));
    dom.toggleFavoriteBtn.addEventListener("click", () => {
      const id = state.activeLessonId;
      if (!id) return;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((x) => x !== id);
        showToast("Аз мунтахаб хориҷ шуд");
      } else {
        state.favorites.push(id);
        showToast("Ба мунтахаб илова шуд");
      }
      writeStorage(STORAGE_KEYS.favorites, state.favorites);
      updateLessonFavoriteBtn();
      updateProgressUI();
    });

    dom.showHintBtn.addEventListener("click", () => dom.lessonHintBox.classList.toggle("hidden"));
    dom.resetTaskBtn.addEventListener("click", () => {
      const lesson = getLessonById(state.activeLessonId);
      if (!lesson) return;
      delete state.taskDrafts[lesson.id];
      writeStorage(STORAGE_KEYS.taskDrafts, state.taskDrafts);
      dom.lessonCodeEditor.value = lesson.starterCode;
      dom.taskFeedbackBox.classList.add("hidden");
      showToast("Вазифаи ҳамин дарс аз нав оғоз шуд");
    });

    dom.lessonCodeEditor.addEventListener("input", () => {
      if (!state.activeLessonId) return;
      state.taskDrafts[state.activeLessonId] = dom.lessonCodeEditor.value;
      writeStorage(STORAGE_KEYS.taskDrafts, state.taskDrafts);
    });

    dom.checkTaskBtn.addEventListener("click", evaluateLessonTask);
    dom.toggleSolutionBtn.addEventListener("click", () => dom.lessonSolutionSection.classList.toggle("hidden"));

    dom.prevLessonBtn.addEventListener("click", () => {
      const idx = ALL_LESSONS.findIndex((l) => l.id === state.activeLessonId);
      if (idx > 0) openLesson(ALL_LESSONS[idx - 1].id);
    });

    dom.nextLessonBtn.addEventListener("click", () => {
      const idx = ALL_LESSONS.findIndex((l) => l.id === state.activeLessonId);
      if (idx >= 0 && idx < ALL_LESSONS.length - 1) openLesson(ALL_LESSONS[idx + 1].id);
    });

    document.querySelectorAll(".copy-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const el = document.getElementById(btn.dataset.copyTarget);
        if (el) copyTextToClipboard(el.dataset.raw || el.textContent);
      });
    });

    // Studio Events
    dom.studioCodeEditor.addEventListener("input", () => {
      const proj = getActiveProject();
      if (!proj) return;
      state.undoStack.push(proj.files[state.activeStudioFile] || "");
      if (state.undoStack.length > 40) state.undoStack.shift();
      state.redoStack = [];
      proj.files[state.activeStudioFile] = dom.studioCodeEditor.value;
      proj.updatedAt = new Date().toISOString();
      updateStudioLineNumbers();
      saveStudioProjects();
    });

    dom.studioCodeEditor.addEventListener("scroll", () => {
      dom.studioLineNumbers.scrollTop = dom.studioCodeEditor.scrollTop;
    });

    dom.studioCodeEditor.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const start = dom.studioCodeEditor.selectionStart;
        const end = dom.studioCodeEditor.selectionEnd;
        const val = dom.studioCodeEditor.value;
        dom.studioCodeEditor.value = val.substring(0, start) + "  " + val.substring(end);
        dom.studioCodeEditor.selectionStart = dom.studioCodeEditor.selectionEnd = start + 2;
      }
    });

    dom.studioUndoBtn.addEventListener("click", () => {
      const proj = getActiveProject();
      if (!proj || state.undoStack.length === 0) return;
      state.redoStack.push(proj.files[state.activeStudioFile]);
      proj.files[state.activeStudioFile] = state.undoStack.pop();
      dom.studioCodeEditor.value = proj.files[state.activeStudioFile];
      updateStudioLineNumbers();
      saveStudioProjects();
    });

    dom.studioRedoBtn.addEventListener("click", () => {
      const proj = getActiveProject();
      if (!proj || state.redoStack.length === 0) return;
      state.undoStack.push(proj.files[state.activeStudioFile]);
      proj.files[state.activeStudioFile] = state.redoStack.pop();
      dom.studioCodeEditor.value = proj.files[state.activeStudioFile];
      updateStudioLineNumbers();
      saveStudioProjects();
    });

    dom.studioFileList.addEventListener("click", (e) => {
      const btn = e.target.closest(".studio-file-item");
      if (btn) {
        state.activeStudioFile = btn.dataset.studioFile;
        renderStudio();
      }
    });

    dom.studioProjectSelect.addEventListener("change", () => {
      state.activeProjectId = dom.studioProjectSelect.value;
      state.activeStudioFile = "index.html";
      saveStudioProjects();
      renderStudio();
    });

    dom.studioNewProjectBtn.addEventListener("click", () => {
      openPromptModal("Лоиҳаи нав", "Номи лоиҳаи навро ворид кунед:", "Лоиҳаи нав", true, (name) => {
        if (!name.trim()) return;
        const np = createDefaultProject();
        np.name = name.trim();
        state.projects.push(np);
        state.activeProjectId = np.id;
        state.activeStudioFile = "index.html";
        saveStudioProjects();
        renderStudio();
        showToast("Лоиҳаи нав сохта шуд!");
      });
    });

    dom.studioNewFileBtn.addEventListener("click", () => {
      openPromptModal("Файли нав", "Номи файлро нависед (масалан app.js ё about.html):", "page.html", true, (fn) => {
        const clean = fn.trim();
        const proj = getActiveProject();
        if (!clean || !proj) return;
        proj.files[clean] = "";
        state.activeStudioFile = clean;
        saveStudioProjects();
        renderStudio();
      });
    });

    dom.studioNewFolderBtn.addEventListener("click", () => {
      openPromptModal("Папкаи нав", "Номи папкаро ворид кунед (масалан assets):", "assets", true, (folder) => {
        const clean = folder.trim().replace(/\/+$/, "");
        const proj = getActiveProject();
        if (!clean || !proj) return;
        const fileKey = `${clean}/info.txt`;
        proj.files[fileKey] = "Папкаи " + clean;
        state.activeStudioFile = fileKey;
        saveStudioProjects();
        renderStudio();
      });
    });

    dom.studioRenameFileBtn.addEventListener("click", () => {
      const proj = getActiveProject();
      const oldName = state.activeStudioFile;
      openPromptModal("Тағйири номи файл", "Номи навро ворид кунед:", oldName, true, (newName) => {
        const clean = newName.trim();
        if (!clean || clean === oldName || !proj) return;
        proj.files[clean] = proj.files[oldName];
        delete proj.files[oldName];
        state.activeStudioFile = clean;
        saveStudioProjects();
        renderStudio();
      });
    });

    dom.studioDeleteFileBtn.addEventListener("click", () => {
      const proj = getActiveProject();
      if (!proj || Object.keys(proj.files).length <= 1) {
        showToast("Ҳадди ақал як файл бояд боқӣ монад");
        return;
      }
      const target = state.activeStudioFile;
      openPromptModal("Нест кардани файл", `Оё мутмаин ҳастед, ки «${target}»-ро нест кунед?`, "", false, () => {
        delete proj.files[target];
        state.activeStudioFile = Object.keys(proj.files)[0];
        saveStudioProjects();
        renderStudio();
      });
    });

    dom.studioRunBtn.addEventListener("click", runStudioPreview);
    dom.studioRerunBtn.addEventListener("click", runStudioPreview);
    dom.studioClearFileBtn.addEventListener("click", () => {
      const proj = getActiveProject();
      if (!proj) return;
      proj.files[state.activeStudioFile] = "";
      dom.studioCodeEditor.value = "";
      updateStudioLineNumbers();
      saveStudioProjects();
    });
    dom.studioExpandBtn.addEventListener("click", () => {
      dom.studioPreviewPane.classList.toggle("expanded");
      dom.studioExpandBtn.textContent = dom.studioPreviewPane.classList.contains("expanded") ? "Хурд" : "Васеъ";
    });
    dom.studioFindToggleBtn.addEventListener("click", () => dom.studioFindBar.classList.toggle("hidden"));
    dom.studioFindCloseBtn.addEventListener("click", () => dom.studioFindBar.classList.add("hidden"));
    dom.studioReplaceAllBtn.addEventListener("click", () => {
      const f = dom.studioFindInput.value;
      const r = dom.studioReplaceInput.value;
      if (!f) return;
      const proj = getActiveProject();
      proj.files[state.activeStudioFile] = dom.studioCodeEditor.value.split(f).join(r);
      dom.studioCodeEditor.value = proj.files[state.activeStudioFile];
      saveStudioProjects();
      showToast("Матн иваз шуд");
    });

    dom.studioExportProjectBtn.addEventListener("click", () => {
      const proj = getActiveProject();
      if (!proj) return;
      const blob = new Blob([JSON.stringify(proj, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `${proj.name.replace(/\s+/g, "_")}.json`;
      a.click();
      showToast("Лоиҳа содир шуд!");
    });

    // Projects Gallery
    dom.projectsCreateBtn.addEventListener("click", () => {
      const np = createDefaultProject();
      state.projects.push(np);
      state.activeProjectId = np.id;
      saveStudioProjects();
      renderProjectsGallery();
      showToast("Лоиҳаи нав илова шуд");
    });

    dom.projectsGalleryGrid.addEventListener("click", (e) => {
      const openBtn = e.target.closest(".open-proj-btn");
      if (openBtn) {
        state.activeProjectId = openBtn.dataset.projId;
        saveStudioProjects();
        switchView("studio");
        return;
      }
      const renBtn = e.target.closest(".rename-proj-btn");
      if (renBtn) {
        const p = state.projects.find((x) => x.id === renBtn.dataset.projId);
        if (p) openPromptModal("Тағйири номи лоиҳа", "", p.name, true, (n) => {
          if (n.trim()) { p.name = n.trim(); saveStudioProjects(); renderProjectsGallery(); }
        });
        return;
      }
      const delBtn = e.target.closest(".delete-proj-btn");
      if (delBtn) {
        if (state.projects.length <= 1) { showToast("Ҳадди ақал як лоиҳа лозим аст"); return; }
        const id = delBtn.dataset.projId;
        openPromptModal("Нест кардани лоиҳа", "Оё мутмаин ҳастед?", "", false, () => {
          state.projects = state.projects.filter((x) => x.id !== id);
          if (state.activeProjectId === id) state.activeProjectId = state.projects[0].id;
          saveStudioProjects();
          renderProjectsGallery();
        });
      }
    });

    dom.projectsImportInput.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(String(reader.result));
          if (parsed && parsed.files) {
            parsed.id = "proj-" + Date.now();
            state.projects.push(parsed);
            saveStudioProjects();
            renderProjectsGallery();
            showToast("Лоиҳа ворид шуд!");
          }
        } catch (err) { showToast("Формати файл нодуруст аст"); }
      };
      reader.readAsText(file);
    });

    // AI Mentor Events
    dom.aiToggleKeyVisBtn.addEventListener("click", () => {
      const isPass = dom.aiApiKeyInput.type === "password";
      dom.aiApiKeyInput.type = isPass ? "text" : "password";
      dom.aiToggleKeyVisBtn.textContent = isPass ? "Пинҳон" : "Нишон додан";
    });

    dom.aiCheckKeyBtn.addEventListener("click", () => {
      const key = dom.aiApiKeyInput.value.trim();
      if (!key) { showToast("Аввал API Key-ро ворид кунед"); return; }
      state.aiSessionKey = key;
      fetchAvailableGeminiModels(key);
    });

    dom.aiClearKeyBtn.addEventListener("click", () => {
      state.aiSessionKey = "";
      state.aiModels = [];
      state.aiSelectedModel = "";
      dom.aiApiKeyInput.value = "";
      dom.aiPersistKeyCheckbox.checked = false;
      try { localStorage.removeItem(STORAGE_KEYS.aiKeyOptIn); } catch (e) {}
      dom.aiModelSelect.innerHTML = `<option value="">Аввал калидро санҷед ё ворид кунед</option>`;
      dom.aiStatusLabel.textContent = "Ҳолат: Калид нест карда шуд";
      showToast("API Key нест карда шуд");
    });

    dom.aiPersistKeyCheckbox.addEventListener("change", () => {
      if (dom.aiPersistKeyCheckbox.checked) {
        const key = dom.aiApiKeyInput.value.trim() || state.aiSessionKey;
        if (!key) { dom.aiPersistKeyCheckbox.checked = false; showToast("Аввал калидро ворид кунед"); return; }
        openPromptModal(
          "Огоҳии амниятӣ",
          "Калиди API-и дар браузер захирашаванда пурра махфӣ шуда наметавонад. Оё бо масъулияти худ онро дар ин браузер захира кунед?",
          "",
          false,
          () => {
            writeStorage(STORAGE_KEYS.aiKeyOptIn, key);
            showToast("Калид дар ин браузер захира шуд");
          }
        );
      } else {
        try { localStorage.removeItem(STORAGE_KEYS.aiKeyOptIn); } catch (e) {}
      }
    });

    dom.aiModelSelect.addEventListener("change", () => { state.aiSelectedModel = dom.aiModelSelect.value; });
    dom.aiChatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = dom.aiPromptInput.value.trim();
      if (!q) return;
      dom.aiPromptInput.value = "";
      sendAiPrompt(q);
    });

    document.querySelectorAll(".prompt-chip").forEach((chip) => {
      chip.addEventListener("click", () => {
        dom.aiPromptInput.value = chip.dataset.prompt;
        sendAiPrompt(chip.dataset.prompt);
      });
    });

    // Glossary
    dom.glossarySearchInput.addEventListener("input", () => renderGlossary(dom.glossarySearchInput.value));

    // Theme, Settings, Backup & Modals
    const toggleTheme = () => applyTheme(state.theme === "dark" ? "light" : "dark");
    dom.themeToggleBtn.addEventListener("click", toggleTheme);
    dom.modalThemeToggleBtn.addEventListener("click", toggleTheme);

    dom.settingsBtn.addEventListener("click", () => {
      dom.resetConfirmBox.classList.add("hidden");
      dom.settingsModal.classList.remove("hidden");
    });
    dom.closeSettingsBtn.addEventListener("click", () => dom.settingsModal.classList.add("hidden"));
    dom.codeFontSizeSelect.addEventListener("change", () => applyCodeFontSize(dom.codeFontSizeSelect.value));

    dom.exportBackupBtn.addEventListener("click", () => {
      const backup = {
        app: "WEB ACADEMY",
        exportedAt: new Date().toISOString(),
        learned: state.learned,
        favorites: state.favorites,
        xp: state.xp,
        examPassed: state.examPassed,
        projects: state.projects
      };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "web-academy-backup.json";
      a.click();
      showToast("Нусхаи эҳтиётӣ содир шуд!");
    });

    dom.importBackupInput.addEventListener("change", (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const data = JSON.parse(String(reader.result));
          if (Array.isArray(data.learned)) state.learned = data.learned;
          if (Array.isArray(data.favorites)) state.favorites = data.favorites;
          if (typeof data.xp === "number") state.xp = data.xp;
          if (typeof data.examPassed === "boolean") state.examPassed = data.examPassed;
          if (Array.isArray(data.projects) && data.projects.length) state.projects = data.projects;
          writeStorage(STORAGE_KEYS.learned, state.learned);
          writeStorage(STORAGE_KEYS.favorites, state.favorites);
          writeStorage(STORAGE_KEYS.xp, state.xp);
          writeStorage(STORAGE_KEYS.examPassed, state.examPassed);
          saveStudioProjects();
          updateProgressUI();
          renderExplorerTree();
          showToast("Маълумот барқарор карда шуд!");
        } catch (err) { showToast("Файли эҳтиётӣ нодуруст аст"); }
      };
      reader.readAsText(file);
    });

    dom.resetDataBtn.addEventListener("click", () => dom.resetConfirmBox.classList.remove("hidden"));
    dom.cancelResetBtn.addEventListener("click", () => dom.resetConfirmBox.classList.add("hidden"));
    dom.confirmResetBtn.addEventListener("click", () => {
      state.learned = [];
      state.favorites = [];
      state.xp = 0;
      state.examPassed = false;
      state.taskDrafts = {};
      state.projects = [createDefaultProject()];
      state.activeProjectId = state.projects[0].id;
      writeStorage(STORAGE_KEYS.learned, []);
      writeStorage(STORAGE_KEYS.favorites, []);
      writeStorage(STORAGE_KEYS.xp, 0);
      writeStorage(STORAGE_KEYS.examPassed, false);
      writeStorage(STORAGE_KEYS.taskDrafts, {});
      saveStudioProjects();
      dom.resetConfirmBox.classList.add("hidden");
      dom.settingsModal.classList.add("hidden");
      updateProgressUI();
      switchView("home");
      showToast("Ҳамаи маълумот тоза карда шуд");
    });

    // Prompt Modal
    dom.promptModalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = dom.promptModalInput.value;
      const cb = promptCallback;
      closePromptModal();
      if (cb) cb(val);
    });
    dom.closePromptModalBtn.addEventListener("click", closePromptModal);
    dom.promptModalCancelBtn.addEventListener("click", closePromptModal);

    // PWA Install
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      state.deferredInstallPrompt = e;
    });

    dom.installPwaBtn.addEventListener("click", async () => {
      if (state.deferredInstallPrompt) {
        state.deferredInstallPrompt.prompt();
        const choice = await state.deferredInstallPrompt.userChoice;
        if (choice.outcome === "accepted") showToast("Раванди насб оғоз шуд");
        state.deferredInstallPrompt = null;
      } else {
        dom.installModal.classList.remove("hidden");
      }
    });
    dom.closeInstallBtn.addEventListener("click", () => dom.installModal.classList.add("hidden"));

    window.addEventListener("online", updateNetworkBadge);
    window.addEventListener("offline", updateNetworkBadge);
  }

  /* -------------------- ОҒОЗИ БАРНОМА -------------------- */
  function init() {
    state.theme = readStorage(STORAGE_KEYS.theme, "dark");
    state.codeFontSize = readStorage(STORAGE_KEYS.fontSize, "14.5");
    state.favorites = readStorage(STORAGE_KEYS.favorites, []);
    state.learned = readStorage(STORAGE_KEYS.learned, []);
    state.openFolders = readStorage(STORAGE_KEYS.openFolders, {});
    state.xp = readStorage(STORAGE_KEYS.xp, 0);
    state.daily = readStorage(STORAGE_KEYS.daily, { date: getTodayStr(), count: 0 });
    if (state.daily.date !== getTodayStr()) state.daily = { date: getTodayStr(), count: 0 };
    state.streak = readStorage(STORAGE_KEYS.streak, { lastDate: getTodayStr(), count: 1 });
    state.examPassed = readStorage(STORAGE_KEYS.examPassed, false);
    state.taskDrafts = readStorage(STORAGE_KEYS.taskDrafts, {});

    state.projects = readStorage(STORAGE_KEYS.projects, []);
    if (!Array.isArray(state.projects) || state.projects.length === 0) {
      state.projects = [createDefaultProject()];
    }
    state.activeProjectId = readStorage(STORAGE_KEYS.activeProjectId, state.projects[0].id);

    const savedAiKey = readStorage(STORAGE_KEYS.aiKeyOptIn, "");
    if (savedAiKey) {
      state.aiSessionKey = savedAiKey;
      dom.aiApiKeyInput.value = savedAiKey;
      dom.aiPersistKeyCheckbox.checked = true;
      dom.aiStatusLabel.textContent = "Ҳолат: Калид аз хотираи браузер бор шуд";
    }

    applyTheme(state.theme);
    applyCodeFontSize(state.codeFontSize);
    updateNetworkBadge();
    bindEvents();
    updateProgressUI();
    renderExplorerTree();

    // Аниматсияи сайёра (2.4 сония) ва баъд саҳифаи истиқбол (танҳо бори аввал)
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const splashMs = reduced ? 400 : 2400;
    setTimeout(() => {
      dom.splashOverlay.classList.add("fade-out");
      if (!readStorage(STORAGE_KEYS.welcomeSeen, false)) {
        dom.welcomeOverlay.classList.remove("hidden");
      }
    }, splashMs);

    // Бақайдгирии Service Worker барои PWA ва кори офлайн
    if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1")) {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
