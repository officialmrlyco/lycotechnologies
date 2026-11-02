# LYCO TECHNOLOGIES public site

- This is the static public brand site for Lyco Technologies. GitHub Pages should publish `main` from the repository root and the `CNAME` file must remain `lycotechnologies.co.ke`.
- Cloudflare remains the DNS provider. Keep the GitHub Pages custom-domain records DNS-only while GitHub provisions or renews its certificate; enable Cloudflare proxying only after that certificate is healthy.
- The owner is a software-development studio offering websites, mobile apps, and automation software. Keep product descriptions factual and make no payment, carrier, or business-outcome promises.
- Public contact is `info@lycotechnologies.co.ke` and the WhatsApp action uses `+254740135187`. The GitHub profile intentionally omits the WhatsApp number.
- Brand palette is bright green, bright red, white, and black. Keep the visual language premium, professional, tidy, white-led, and emoji-free. The people-first team photography and clean service-site information architecture are intentional; do not restore the previous dark abstract concept.
- `assets/brand/lyco-logo.png` is the transparent-background wolf mark used in the header and favicon; do not revert to the old black-background JPEG. `assets/images/lyco-team-meeting.png` and `assets/images/lyco-workshop.png` are original generated professional workplace visuals, used for the hero and work-process section. The `#studio` gallery uses `lyco-product-planning.jpg`, `lyco-design-review.jpg`, and `lyco-development-session.jpg`; it is deliberately image-led but must never be labelled as client case studies. Replace imagery only with equally licensed, people-centred professional photography.
- `assets/social/lyco-link-preview.jpg` is the white-background 1200x630 Open Graph image. It exists because messaging apps do not reliably render transparent logos as previews. Keep the absolute `og:image`, secure image URL, image dimensions, and matching Twitter metadata in `index.html` so shared links show the LYCO wolf mark.
- Flash Lite is shown only as the lightweight version of Bingwa Flash. It has no separate public listing, so its product card is intentionally non-clickable and must not redirect to the Google Play developer page.
- The site has factual Services, Products, Process, FAQ, and Contact sections. Do not add invented client logos, testimonials, project metrics, prices, or delivery claims without owner-provided evidence.


## Website image payload optimization (2026-11-02)

- Kept the transparent wolf logo as PNG at 1254x1254 with a 256-color palette. Re-encoded the three existing JPEG gallery photos at quality 76 without changing dimensions. Converted the two photographic PNGs to same-dimension JPEGs at quality 84 and changed only their references in `index.html`; visual branding/content and photo resolution remain intact. All image files are now under 200 KB.
- Before/after bytes and dimensions:

| Asset | Before | After | Dimensions |
|---|---:|---:|---:|
| `assets/brand/lyco-logo.png` | 779,043 B | 71,676 B | 1254 x 1254 |
| `assets/images/lyco-design-review.jpg` | 272,158 B | 192,722 B | 1920 x 1280 |
| `assets/images/lyco-development-session.jpg` | 265,489 B | 199,798 B | 1920 x 1280 |
| `assets/images/lyco-product-planning.jpg` | 275,181 B | 197,819 B | 1920 x 1280 |
| `assets/images/lyco-team-meeting.png -> .jpg` | 1,752,763 B | 154,953 B | 1942 x 809 |
| `assets/images/lyco-workshop.png -> .jpg` | 1,676,418 B | 135,887 B | 1586 x 992 |
