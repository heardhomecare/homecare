import React from 'react';
import Script from 'next/script';

export default function Quote() {
  return (
    <section 
      className="relative py-20 md:py-32 overflow-hidden bg-cover bg-no-repeat"
      style={{ 
        backgroundImage: 'url(/wp-content/uploads/2024/11/bg-home-keep-in-touch.jpg)',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Visual Fidelity Overlay */}
      <div 
        className="absolute inset-0 bg-[var(--brand-cream)] pointer-events-none" 
        style={{ opacity: 0.90, mixBlendMode: 'screen' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[var(--brand-black)] leading-tight">
            Keep in <mark className="kt-highlight">Touch</mark>
          </h2>

          <div className="bg-[var(--brand-cream)] p-8 md:p-12 rounded-3xl shadow-lg">
            <div data-form-slug="2137022000200029" data-env="production" data-path="contact-us/2137022000200029" className="keap-custom-form min-h-[400px]"></div>
          </div>
          
          <Script id="keap-form-script-quote" strategy="afterInteractive">
            {`
            (function (window, document) {
                const keapForms = window.keapForms || {
                    SNIPPET_VERSION: '1.1.0',
                    appId: 'dju356',
                };

                const script = document.createElement('script');

                script.type = 'text/javascript';
                script.crossOrigin = 'anonymous';
                script.defer = true;
                script.src = 'https://forms.keap.app/lib/public-form-embed.js?appId=dju356&version=1.1.0';

                script.onload = function () {
                    const keapFormsAfterLoad = window.keapForms;

                    if (!keapFormsAfterLoad.renderAllForms) {
                        // eslint-disable-next-line no-console
                        console.error('[Keap Forms] Error: could not load');
                    } else if (!keapFormsAfterLoad.invoked) {
                        keapFormsAfterLoad.invoked = true;
                        keapFormsAfterLoad.renderAllForms();
                    }
                };
                const firstScriptTag = document.getElementsByTagName('script')[0];

                firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
                window.keapForms = keapForms;
            }(window, document));
            `}
          </Script>
        </div>
      </div>
    </section>
  );
}

