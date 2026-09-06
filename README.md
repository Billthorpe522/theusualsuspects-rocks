# Canonical-site consolidation

The main site is https://playtheusualsuspects.com/ . This repository previously mirrored it and retained outdated shows.

`index.html`, `book.html`, and `404.html` now send visitors to the main site. Booking links go to `/#book`; known section fragments are preserved. The ordinary link and meta refresh also work without JavaScript. Existing images and old styles remain in Git for rollback.

These are browser redirects, not HTTP 301 responses. GitHub Pages cannot configure arbitrary server redirects. For a true permanent redirect, configure the domain's hosting/edge service to return 301 or 308 to the main site, mapping `/book.html` to `/#book`. Keep HTTPS working on the old domain; do not simply change CNAME to the .com domain. No DNS or hosting configuration was changed in this pass.

Deploy together with the main site's polish branch, after review. Rollback is a revert of this change.
