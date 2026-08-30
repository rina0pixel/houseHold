// The ported app (public/app.js + public/styles.css) is a vanilla-JS app
// that owns and mutates the #app subtree directly, exactly like the original
// Claude Artifact it was ported from. Serving its shell as a React page
// component causes a hydration mismatch — React expects to own that DOM
// (and the html/body attributes app.js sets during boot) and wipes out
// whatever app.js already wrote into it as soon as it hydrates. Returning
// a plain HTML string from a Route Handler instead sidesteps React/
// hydration entirely, which is what an app like this actually wants.
function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export function renderShellHtml(householdId: string): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
<title>Household Notebook</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Nunito+Sans:opsz,wght@6..12,400;6..12,600;6..12,700;6..12,800&family=Noto+Sans+Myanmar:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles.css" />
</head>
<body>
<div id="app" data-household-id="${escapeAttr(householdId)}"></div>
<script src="/app.js" defer></script>
</body>
</html>`;
}
