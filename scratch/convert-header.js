const fs = require('fs');
const { JSDOM } = require('jsdom');

const headerHtml = `<header id="masthead" class="site-header" role="banner" itemtype="https://schema.org/WPHeader" itemscope="">
	<div id="main-header" class="site-header-wrap">
		<div class="site-header-inner-wrap">
			<div class="site-header-upper-wrap">
				<div class="site-header-upper-inner-wrap">
					<div class="site-main-header-wrap site-header-row-container site-header-focus-item site-header-row-layout-standard kadence-sticky-header" data-section="kadence_customizer_header_main" data-shrink="false" data-reveal-scroll-up="false">
	<div class="site-header-row-container-inner">
				<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-has-sides site-header-row-no-center">
									<div class="site-header-main-section-left site-header-section site-header-section-left">
						<div class="site-header-item site-header-focus-item" data-section="title_tagline">
	<div class="site-branding branding-layout-standard site-brand-logo-only"><a class="brand has-logo-image" href="/" rel="home"><img width="900" height="782" src="/wp-content/uploads/2024/10/logo-with-name.png" class="custom-logo" alt="Uplift Home Care logo" decoding="async" fetchpriority="high" srcset="/wp-content/uploads/2024/10/logo-with-name.png 900w, /wp-content/uploads/2024/10/logo-with-name-300x261.png 300w, /wp-content/uploads/2024/10/logo-with-name-768x667.png 768w" sizes="(max-width: 900px) 100vw, 900px"></a></div></div>
					</div>
																	<div class="site-header-main-section-right site-header-section site-header-section-right">
						<div class="site-header-item site-header-focus-item" data-section="kadence_customizer_header_button">
	<div class="header-button-wrap"><div class="header-button-inner-wrap"><a href="tel:925-644-7472" target="_self" class="button header-button button-size-custom button-style-filled">Call: (925) 644-7472</a></div></div></div>
<div class="site-header-item site-header-focus-item site-header-item-main-navigation header-navigation-layout-stretch-false header-navigation-layout-fill-stretch-false" data-section="kadence_customizer_primary_navigation">
		<nav id="site-navigation" class="main-navigation header-navigation hover-to-open nav--toggle-sub header-navigation-style-underline header-navigation-dropdown-animation-none" role="navigation" aria-label="Primary">
			<div class="primary-menu-container header-menu-container">
	<ul id="primary-menu" class="menu"><li id="menu-item-400" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-400"><a href="/" aria-current="page">Home</a></li>
<li id="menu-item-401" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-401"><a href="/services">Services</a></li>
<li id="menu-item-402" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"><a href="/about">About</a></li>
<li id="menu-item-1101" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1101"><a href="/faq">FAQ</a></li>
<li id="menu-item-403" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-403"><a href="/careers">Careers</a></li>
<li id="menu-item-404" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-404"><a href="/contact">Contact</a></li>
</ul>		</div>
	</nav>
	</div>
					</div>
							</div>
		</div>
	</div>
</div>
				</div>
			</div>
					</div>
	</div>
	
<div id="mobile-header" class="site-mobile-header-wrap">
	<div class="site-header-inner-wrap">
		<div class="site-header-upper-wrap">
			<div class="site-header-upper-inner-wrap">
			<div class="site-main-header-wrap site-header-focus-item site-header-row-layout-standard site-header-row-tablet-layout-default site-header-row-mobile-layout-default ">
	<div class="site-header-row-container-inner">
		<div class="site-container">
			<div class="site-main-header-inner-wrap site-header-row site-header-row-only-center-column site-header-row-center-column">
													<div class="site-header-main-section-center site-header-section site-header-section-center">
						<div class="site-header-item site-header-focus-item site-header-item-navgation-popup-toggle" data-section="kadence_customizer_mobile_trigger">
		<div class="mobile-toggle-open-container">
						<button id="mobile-toggle" class="menu-toggle-open drawer-toggle menu-toggle-style-default" aria-label="Open menu" data-toggle-target="#mobile-drawer" data-toggle-body-class="showing-popup-drawer-from-right" aria-expanded="false" data-set-focus=".menu-toggle-close">
						<span class="menu-toggle-icon"><span class="kadence-svg-iconset"><svg aria-hidden="true" class="kadence-svg-icon kadence-menu-svg" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Toggle Menu</title><path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
				</svg></span></span>
		</button>
	</div>
	</div>
					</div>
											</div>
		</div>
	</div>
</div>
			</div>
		</div>
			</div>
</div>
</header>`;

const dom = new JSDOM(headerHtml);
const document = dom.window.document;

function toJSX(node) {
    if (node.nodeType === 3) return node.textContent;
    if (node.nodeType !== 1) return '';

    const attrMap = {
        'class': 'className', 'for': 'htmlFor', 'itemtype': 'itemType', 'itemscope': 'itemScope',
        'fetchpriority': 'fetchPriority', 'srcset': 'srcSet', 'autoplay': 'autoPlay',
        'crossorigin': 'crossOrigin', 'allowfullscreen': 'allowFullScreen', 'frameborder': 'frameBorder',
        'autocomplete': 'autoComplete', 'autofocus': 'autoFocus', 'readonly': 'readOnly', 'tabindex': 'tabIndex'
    };

    let tag = node.tagName.toLowerCase();
    let attrs = '';
    
    for (let i = 0; i < node.attributes.length; i++) {
        let name = node.attributes[i].name;
        let value = node.attributes[i].value;
        if (name.startsWith('on')) continue;
        const jsxName = attrMap[name] || name;
        if (jsxName === 'style') {
            const styleObj = {};
            value.split(';').forEach(s => {
                const parts = s.split(':');
                if (parts.length >= 2) {
                    const k = parts.shift().trim();
                    const v = parts.join(':').trim();
                    const camelK = k.replace(/-./g, x => x[1].toUpperCase());
                    styleObj[camelK] = v;
                }
            });
            attrs += ` style={${JSON.stringify(styleObj)}}`;
            continue;
        }
        if (name === 'itemscope') {
            attrs += ` itemScope={true}`;
            continue;
        }
        
        if (name === 'href' && value.startsWith('/')) {
            // Keep as is for now, will replace with Link component manually or later
        }

        attrs += ` ${jsxName}="${value.replace(/"/g, '&quot;')}"`;
    }

    const selfClosing = ['img', 'br', 'hr', 'input', 'link', 'meta'].includes(tag);
    let children = '';
    node.childNodes.forEach(child => children += toJSX(child));
    
    if (tag === 'a' && node.getAttribute('href') && node.getAttribute('href').startsWith('/')) {
        const href = node.getAttribute('href');
        return `<Link href="${href}" ${attrs.replace(/href="[^"]*"/, '')}>${children}</Link>`;
    }

    return selfClosing ? `<${tag}${attrs} />` : `<${tag}${attrs}>${children}</${tag}>`;
}

const jsxHeader = toJSX(document.body.firstChild);
fs.writeFileSync('scratch/header-jsx.txt', jsxHeader);
console.log('Header JSX generated.');
