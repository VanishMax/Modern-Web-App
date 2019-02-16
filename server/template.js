// html skeleton provider
export default function template(sheetsRegistry, helmet, state = {}, content = '', bundles) {
  const css = sheetsRegistry.toString()
  const scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(state)}
                </script>
                <script>
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', () => {
                    navigator.serviceWorker.register('/service-worker.js')
                      .then(registration => {
                        console.log('Service Worker is registered! 😎');
                      })
                      .catch(err => {
                        console.log('Registration failed 😫 ', err);
                      });
                  });
                }
                </script>
                <script src="/client.js"></script>`

  const page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                ${helmet.link.toString()}
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <meta name="theme-color" content="#810051">
                <link rel="manifest" href="/manifest.json">
                <link rel="shortcut icon" href="/assets/logos/favicon.ico" type="image/x-icon">
                <link rel="icon" href="/assets/logos/favicon.ico" type="image/x-icon">
                <link rel="stylesheet" href="/assets/global.css">
                <script>
                  if ((!location.port || location.port == "80") && location.protocol != 'https:') {
                    location.protocol = 'https:';
                  }
                </script>
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      <!--- magic happens here -->  ${content}
                   </div>
                   ${bundles.map(bundle => `<script src='/${bundle.file}'></script>`).join('\n')}
                </div>
                <style id="jss-server-side">${css}</style>
                ${scripts}
              </body>
              `

  return page
}
