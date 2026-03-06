

## Add JSON-LD Structured Data for Local Business

Add a `LocalBusiness` (specifically `ChildCare` type) JSON-LD script to `index.html` to improve search visibility for childminder searches in Biggleswade.

### What will be added

A `<script type="application/ld+json">` block in the `<head>` of `index.html` containing:

- **@type**: "ChildCare" (a subtype of LocalBusiness)
- **name**: "Ema's Little People"
- **description**: Trusted childminder description
- **url**: https://emachildminder.vercel.app
- **telephone**: +447733876089
- **email**: littlepeople.biggleswade@gmail.com
- **address**: Biggleswade, Bedfordshire, SG18 8YF, GB
- **openingHours**: Mo-Fr 08:00-17:30
- **areaServed**: Biggleswade, Bedfordshire
- **priceRange**: "££"
- **sameAs**: Facebook page link

### Files changed

- **index.html** — Add JSON-LD script block in `<head>`

