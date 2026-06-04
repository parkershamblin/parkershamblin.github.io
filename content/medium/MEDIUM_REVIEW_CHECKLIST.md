# Medium Review Checklist: Parker Shamblin

Status: Internal review document. Do not publish this file.

Use this checklist before creating a Medium account, updating a Medium profile, uploading an image, or publishing any Medium article. This document reviews every Medium-related file currently stored in `content/medium/`.

## Global Stop Condition

Do not publish anything until all applicable review boxes are complete.

- [ ] Confirm the exact public draft selected for publication.
- [ ] Verify every factual claim in that draft.
- [ ] Test every public link manually.
- [ ] Generate, review, and approve the exact image files selected for upload.
- [ ] Confirm that no image exposes credentials, private configuration, private records, or unapproved personal information.
- [ ] Confirm that the portfolio canonical page returns HTTP `200` before setting it as a Medium custom canonical.
- [ ] If the portfolio canonical page is not live, leave Medium's default canonical unchanged.
- [ ] Remove all internal notes, status text, review checklists, and operational instructions before copying an article body into Medium.
- [ ] Review the final Medium preview.
- [ ] Receive Parker's explicit approval immediately before any account creation, profile update, upload, or publication action.

## Verified Link Baseline

These URLs returned HTTP `200` during the local review:

- https://parkershamblin.com/
- https://parkershamblin.com/about
- https://parkershamblin.com/work
- https://parkershamblin.com/blog
- https://parkershamblin.com/work/OSRS-computer-vision-project
- https://github.com/parkershamblin
- https://github.com/parkershamblin/retail-banking-brokerage-platform
- https://github.com/parkershamblin/opencv-OSRS1

These URLs returned HTTP `404` during the local review:

- https://parkershamblin.com/projects
- https://parkershamblin.com/blog/parker-shamblin-software-engineer
- https://parkershamblin.com/blog/parker-shamblin-java-backend-project
- https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project
- https://www.parkershamblin.com/blog/parker-shamblin-computer-vision
- https://www.parkershamblin.com/blog/parker-shamblin-portfolio
- https://www.parkershamblin.com/blog/parker-shamblin-software-engineer

Use `https://parkershamblin.com/work` as the verified project index. Do not publish a link to `/projects`.

LinkedIn may block automated checks. Open the final LinkedIn URL manually before publication:

- https://www.linkedin.com/in/parkershamblin/

## Publication Candidate Summary

| File | Purpose | Safe to publish as-is? | Recommendation |
|---|---|---|---|
| `medium-profile-setup.md` | Internal Medium profile setup package | No | Use as a manual setup checklist only. |
| `article-01-parker-shamblin-software-engineer.md` | Preferred introductory Medium article | No | Review, approve, and publish first after its canonical and image gates pass. |
| `article-02-java-backend-project.md` | Preferred Java backend article | No | Review workflow claims and screenshots, then publish second. |
| `article-03-opencv-computer-vision-project.md` | Preferred OpenCV article | No | Review project framing and image rights, then publish third. |
| `MEDIUM_PUBLISHING_RUNBOOK.md` | Internal publishing procedure | No | Keep private. Never post as a Medium article. |
| `parker-shamblin-computer-vision.md` | Legacy OpenCV draft | No | Superseded by Article 03. Do not publish without a rewrite. |
| `parker-shamblin-portfolio-overview.md` | Legacy portfolio overview draft | No | Superseded by Article 01. Do not publish without a rewrite. |
| `parker-shamblin-software-engineer.md` | Legacy software engineering draft | No | Superseded by Articles 01 and 02. Do not publish without a rewrite. |

## Recommended Image Generation Order

Generate files locally and review them before any public upload.

| Order | Filename | Dimensions | Source package |
|---:|---|---|---|
| 1 | `parker-shamblin-professional-identity-avatar.png` | `1024 x 1024` | `medium-profile-setup.md` |
| 2 | `parker-shamblin-software-engineer-medium-cover.jpg` | `1400 x 788` | `article-01-parker-shamblin-software-engineer.md` |
| 3 | `parker-shamblin-java-backend-platform-medium-cover.jpg` | `1400 x 788` | `article-02-java-backend-project.md` |
| 4 | `parker-shamblin-opencv-computer-vision-medium-cover.jpg` | `1400 x 788` | `article-03-opencv-computer-vision-project.md` |
| 5 | `parker-shamblin-java-banking-platform-data-flow.png` | `1600 x 1000` | Optional inline image for Article 02 |
| 6 | `parker-shamblin-opencv-pipeline-workflow.png` | `1600 x 1000` | Optional inline image for Article 03 |

## Review: `medium-profile-setup.md`

### Intended Use

Internal setup package only. Do not publish this file as a Medium post.

### Safe To Publish As-Is?

No. This file contains internal account-creation guidance and approval gates.

### Claims To Verify

- [ ] Parker is currently enrolled as a Computer Science student at the University of South Florida.
- [ ] The short bio and long bio accurately describe Parker's current technical focus.
- [ ] The selected Medium username is available.
- [ ] The portfolio URL is correct.
- [ ] The GitHub profile URL is correct.
- [ ] The final LinkedIn URL is correct.
- [ ] The exact avatar or portrait selected for upload is approved for public use.
- [ ] Any optional graduation date, GPA, scholarship, role, or affiliation statement is verified before it is added.

### Links To Check

- [ ] Portfolio: https://parkershamblin.com/
- [ ] GitHub: https://github.com/parkershamblin
- [ ] LinkedIn: https://www.linkedin.com/in/parkershamblin/

### Images To Generate

Profile avatar:

```text
Create a clean, professional square profile avatar for Parker Shamblin's software engineering profile. Use a minimal modern style suitable for a developer portfolio. Do not add employer logos, awards, credentials, or text claims. If using a real portrait, use only the exact approved source image. 1024x1024.
```

Optional profile banner if Medium's current layout supports one:

```text
Wide professional software engineering banner with clean abstract code textures, backend service nodes, database motifs, and subtle Java, Python, SQL, and OpenCV references; calm blue and teal palette; no person; no employer logos; no unsupported credentials; 1584x396.
```

### Filenames To Use

- Avatar: `parker-shamblin-professional-identity-avatar.png`
- Optional banner: `parker-shamblin-linkedin-banner-software-engineering.jpg`

### Remove Or Omit Before Public Posting

- Do not post the internal approval checklist.
- Do not post username fallback notes.
- Do not post operational instructions about credentials, account creation, or trackers.
- Do not add private contact information.

### Recommended Edits Before Publishing

- [ ] Select one approved profile image.
- [ ] Confirm the username manually.
- [ ] Use the short bio unless Medium's current profile UI supports a longer About section.
- [ ] Review the final visible profile text before saving any public change.

## Review: `article-01-parker-shamblin-software-engineer.md`

### Intended Use

Preferred first Medium article. Use the text inside `## Full Medium-Ready Draft` as the public article body after review.

### Safe To Publish As-Is?

No. The draft is professionally framed, but its claims, image, links, and pending canonical require manual verification.

### Claims To Verify

- [ ] Parker is currently enrolled as a Computer Science student at the University of South Florida.
- [ ] Parker owns or is authorized to present the linked Java and OpenCV repositories.
- [ ] The Java project stack is accurately described as Java, JSP, Jakarta Servlets, JDBC, Oracle XE, and Apache Tomcat.
- [ ] The Java project supports the described public, customer, teller, and manager workflows.
- [ ] The Java repository documents account activity, transfers, trade orders, approvals, watchlists, and portfolio records.
- [ ] The OpenCV project uses Python, a trained cascade classifier, and window capture.
- [ ] The OpenCV experiment description and limitations remain accurate.
- [ ] The planned portfolio blog page is live before it is used as a custom canonical.

### Links To Check

- [ ] Planned canonical, currently pending: https://parkershamblin.com/blog/parker-shamblin-software-engineer
- [ ] Portfolio homepage: https://parkershamblin.com/
- [ ] About page: https://parkershamblin.com/about
- [ ] Project index: https://parkershamblin.com/work
- [ ] Blog index: https://parkershamblin.com/blog
- [ ] GitHub profile: https://github.com/parkershamblin
- [ ] LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- [ ] Java repository: https://github.com/parkershamblin/retail-banking-brokerage-platform
- [ ] OpenCV repository: https://github.com/parkershamblin/opencv-OSRS1

### Image To Generate

```text
Clean professional portfolio cover with abstract code textures, a simple backend service flow, database nodes, and subtle Java, Python, SQL, and OpenCV motifs; calm navy, teal, and gold palette; no person; no employer logos; no unsupported credentials; 1400x788.
```

### Filename To Use

`parker-shamblin-software-engineer-medium-cover.jpg`

### Remove Or Omit Before Public Posting

- Remove the package heading, status line, SEO notes, canonical status note, image SEO package, checklists, and verification notes when copying the public body into Medium.
- Do not set the planned portfolio custom canonical while it returns HTTP `404`.
- Do not add unverified metrics, employment claims, awards, or affiliations.

### Recommended Edits Before Publishing

- [ ] Decide whether to keep the article's OpenCV section or make the introduction more tightly focused on the portfolio overview.
- [ ] Add the approved cover image and verify its alt text.
- [ ] Publish the matching portfolio source page first if using the custom canonical.
- [ ] Review the final Medium preview for heading levels and link formatting.

## Review: `article-02-java-backend-project.md`

### Intended Use

Preferred second Medium article. Use the text inside `## Full Medium-Ready Draft` as the public article body after review.

### Safe To Publish As-Is?

No. The draft is carefully scoped as a learning project, but the workflow claims, screenshots, image assets, and pending canonical require manual verification.

### Claims To Verify

- [ ] Parker owns or is authorized to present the Java repository.
- [ ] The public stack wording is accurate: Java, JSP, Jakarta Servlets, JDBC, Oracle XE, and Apache Tomcat.
- [ ] Public browsing, customer, teller, and manager workflows are implemented as described.
- [ ] Customers can review accounts, inspect a portfolio, track transactions, manage a watchlist, and use transfer or trading flows.
- [ ] Tellers can look up customers and maintain account records.
- [ ] Managers can review oversight information and handle approval workflows.
- [ ] DAO classes, model classes, utility classes, SQL scripts, views, procedures, and verification scripts exist as described.
- [ ] The database-record summary accurately reflects the repository schema.
- [ ] The repository contains the screenshot groups described in the article.
- [ ] Every screenshot selected for publication is sanitized and approved.
- [ ] No local credentials, demo credentials, private configuration, or sensitive records appear in public images or copied text.
- [ ] The planned portfolio blog page is live before it is used as a custom canonical.

### Links To Check

- [ ] Planned canonical, currently pending: https://parkershamblin.com/blog/parker-shamblin-java-backend-project
- [ ] Portfolio homepage: https://parkershamblin.com/
- [ ] About page: https://parkershamblin.com/about
- [ ] Project index: https://parkershamblin.com/work
- [ ] Blog index: https://parkershamblin.com/blog
- [ ] GitHub profile: https://github.com/parkershamblin
- [ ] LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- [ ] Java repository: https://github.com/parkershamblin/retail-banking-brokerage-platform
- [ ] Java documentation: https://docs.oracle.com/en/java/
- [ ] Oracle Database documentation: https://docs.oracle.com/en/database/
- [ ] Apache Tomcat documentation: https://tomcat.apache.org/

### Images To Generate

Cover:

```text
Clean labeled Java backend architecture illustration for a retail banking and brokerage project; browser interface flows into Jakarta Servlet request handling, JDBC data access, and Oracle database nodes; include customer, teller, and manager workflow labels; professional vector style; navy and teal palette; no company logos; no unsupported metrics; 1400x788.
```

Optional inline diagram:

```text
Labeled workflow diagram showing public browsing, customer account actions, teller account maintenance, and manager approvals flowing through a Java web application to Oracle SQL tables, views, and procedures; clean vector layout; 1600x1000.
```

### Filenames To Use

- Cover: `parker-shamblin-java-backend-platform-medium-cover.jpg`
- Optional diagram: `parker-shamblin-java-banking-platform-data-flow.png`

### Remove Or Omit Before Public Posting

- Remove the package heading, status line, SEO notes, canonical status note, image SEO packages, checklists, and verification notes when copying the public body into Medium.
- Do not post screenshots until they have been checked for credentials, private configuration, private records, or misleading seeded data.
- Do not describe the project as a production financial system.
- Do not add unsupported security, performance, scale, or reliability claims.
- Do not set the planned portfolio custom canonical while it returns HTTP `404`.

### Recommended Edits Before Publishing

- [ ] Verify the feature-to-database wording against the current repository.
- [ ] Choose whether the optional diagram adds value before generating it.
- [ ] Select only sanitized screenshots that reinforce the article.
- [ ] Publish the matching portfolio source page first if using the custom canonical.
- [ ] Review the final Medium preview for heading levels and link formatting.

## Review: `article-03-opencv-computer-vision-project.md`

### Intended Use

Preferred third Medium article. Use the text inside `## Full Medium-Ready Draft` as the public article body after review.

### Safe To Publish As-Is?

No. The draft has responsible framing, but the workflow claims, visuals, licensing, and pending canonical require manual verification.

### Claims To Verify

- [ ] Parker owns or is authorized to present the OpenCV repository.
- [ ] The project uses Python, OpenCV, window capture, and a trained cascade classifier as described.
- [ ] The public description of capture, classifier detection, result review, and desktop interaction remains accurate.
- [ ] Windows-specific limitations, hard-coded assumptions, and test-coverage wording remain accurate.
- [ ] Any source-image count, generated-sample count, or training-configuration value is omitted unless reconciled and verified.
- [ ] Any accuracy, precision, recall, throughput, latency, threading, or reliability statement is omitted unless measured and verified.
- [ ] Any screenshot, GIF, game-related visual, cover image, or workflow diagram is approved for public use.
- [ ] The planned portfolio blog page is live before it is used as a custom canonical.

### Links To Check

- [ ] Planned canonical, currently pending: https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project
- [ ] Portfolio homepage: https://parkershamblin.com/
- [ ] About page: https://parkershamblin.com/about
- [ ] Project index: https://parkershamblin.com/work
- [ ] Existing OpenCV project page: https://parkershamblin.com/work/OSRS-computer-vision-project
- [ ] Blog index: https://parkershamblin.com/blog
- [ ] GitHub profile: https://github.com/parkershamblin
- [ ] LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- [ ] OpenCV repository: https://github.com/parkershamblin/opencv-OSRS1
- [ ] OpenCV documentation: https://docs.opencv.org/
- [ ] Python documentation: https://docs.python.org/3/

### Images To Generate

Cover:

```text
Clean computer vision pipeline illustration with an abstract desktop frame flowing into image capture, preprocessing, cascade-classifier detection, bounding-box review, and documented results; professional vector style; blue and teal palette; no copyrighted game imagery; no person; no unsupported metrics; 1400x788.
```

Optional inline diagram:

```text
Labeled OpenCV workflow diagram showing captured frame, region review, classifier input, detected rectangles, result inspection, and measurement backlog; clean vector layout; no copyrighted game imagery; 1600x1000.
```

### Filenames To Use

- Cover: `parker-shamblin-opencv-computer-vision-medium-cover.jpg`
- Optional diagram: `parker-shamblin-opencv-pipeline-workflow.png`

### Remove Or Omit Before Public Posting

- Remove the package heading, status line, SEO notes, canonical status note, image SEO packages, checklists, and verification notes when copying the public body into Medium.
- Do not publish dataset counts until the source-image inventory, generated samples, and training commands have been reconciled.
- Do not publish unmeasured performance, accuracy, or reliability claims.
- Do not publish screenshots, GIFs, or game-related visuals until ownership, licensing, and public-use approval have been checked.
- Do not turn the desktop-interaction portion into a deployment tutorial.
- Do not set the planned portfolio custom canonical while it returns HTTP `404`.

### Recommended Edits Before Publishing

- [ ] Decide whether to remove the direct project-page link if that page still contains unsupported claims.
- [ ] Generate a generic workflow illustration without copyrighted game imagery.
- [ ] Publish the matching portfolio source page first if using the custom canonical.
- [ ] Review the final Medium preview for heading levels and link formatting.

## Review: `MEDIUM_PUBLISHING_RUNBOOK.md`

### Intended Use

Internal operating procedure only. Do not publish this file.

### Safe To Publish As-Is?

No. It contains internal workflow instructions, approval boundaries, tracking instructions, and local verification commands.

### Claims To Verify

- [ ] Re-run the URL checks before each publishing session.
- [ ] Confirm Medium's current canonical-link UI still matches the documented workflow.
- [ ] Confirm Google Search Console access and the verified portfolio property before any manual submission.
- [ ] Confirm the generated image filenames still match the approved article packages.
- [ ] Confirm no public action occurs before explicit approval.

### Links To Check

- [ ] Medium canonical help: https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link
- [ ] Google URL Inspection help: https://support.google.com/webmasters/answer/9012289
- [ ] Google image SEO guidance: https://developers.google.com/search/docs/appearance/google-images
- [ ] Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- [ ] Every URL listed in the runbook's link matrix.

### Images To Generate

None. The runbook references the approved profile and article images listed above.

### Filenames To Use

None beyond the approved image inventory.

### Remove Or Omit Before Public Posting

- Do not post any part of the runbook publicly.
- Keep local commands, tracking steps, approval instructions, and URL-status notes private.

### Recommended Edits Before Publishing

- [ ] Update live URL statuses before each publishing session.
- [ ] Update the runbook only when Medium or Search Console workflows change.

## Review: `parker-shamblin-computer-vision.md`

### Intended Use

Legacy draft. Keep for reference only. Prefer `article-03-opencv-computer-vision-project.md`.

### Safe To Publish As-Is?

No. The draft contains a broken `/projects` link, a `404` canonical, and generic project claims that need stronger verification.

### Claims To Verify

- [ ] Parker is currently enrolled as a Computer Science student at the University of South Florida.
- [ ] The described preprocessing, feature detection, postprocessing, visualization, and documentation steps accurately reflect the project selected for publication.
- [ ] Any project-specific wording is backed by the current repository.

### Links To Check

- [ ] Legacy canonical, currently `404`: https://www.parkershamblin.com/blog/parker-shamblin-computer-vision
- [ ] Legacy project link, currently `404`: https://www.parkershamblin.com/projects
- [ ] Replacement project index: https://parkershamblin.com/work
- [ ] Existing OpenCV project page: https://parkershamblin.com/work/OSRS-computer-vision-project
- [ ] GitHub profile: https://github.com/parkershamblin
- [ ] LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- [ ] OpenCV: https://opencv.org/
- [ ] Python: https://www.python.org/

### Image To Generate If This Draft Is Reused

```text
Computer vision pipeline diagram showing image input, preprocessing, detection, result review, and documented output stages; clean vector style; blue and teal palette; no person; no copyrighted game imagery; no unsupported metrics; 1400x788.
```

### Filename To Use If This Draft Is Reused

`parker-shamblin-computer-vision-medium-cover.jpg`

### Remove Or Omit Before Public Posting

- Replace every `/projects` URL with `https://parkershamblin.com/work`.
- Do not set the legacy custom canonical while it returns HTTP `404`.
- Remove or rewrite generic pipeline claims that cannot be tied to the current public repository.
- Do not publish this legacy draft alongside Article 03 as a near-duplicate.

### Recommended Edits Before Publishing

- [ ] Prefer Article 03 instead of revising this file.
- [ ] If reused, rewrite it against the current OpenCV repository and apply Article 03's licensing and claim-verification gates.

## Review: `parker-shamblin-portfolio-overview.md`

### Intended Use

Legacy draft. Keep for reference only. Prefer `article-01-parker-shamblin-software-engineer.md`.

### Safe To Publish As-Is?

No. The draft contains a broken `/projects` link, a `404` canonical, and broad portfolio wording that needs manual verification.

### Claims To Verify

- [ ] Parker is currently enrolled as a Computer Science student at the University of South Florida.
- [ ] The public portfolio supports the stated Java, Python, SQL, OpenCV, backend, database-design, and computer-vision positioning.
- [ ] The statement about API and service layers accurately describes the selected Java project before it is reused.
- [ ] The GitHub profile and repository documentation are current.

### Links To Check

- [ ] Legacy canonical, currently `404`: https://www.parkershamblin.com/blog/parker-shamblin-portfolio
- [ ] Legacy project link, currently `404`: https://www.parkershamblin.com/projects
- [ ] Replacement project index: https://parkershamblin.com/work
- [ ] Portfolio homepage: https://parkershamblin.com/
- [ ] About page: https://parkershamblin.com/about
- [ ] GitHub profile: https://github.com/parkershamblin
- [ ] LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- [ ] USF Computer Science and Engineering: https://www.usf.edu/engineering/cse/

### Image To Generate If This Draft Is Reused

```text
Clean modern software engineering portfolio cover with abstract code textures and subtle Java, Python, SQL, and OpenCV motifs; teal and gold accents; no person; no employer logos; no unsupported credentials; 1400x788.
```

### Filename To Use If This Draft Is Reused

`parker-shamblin-portfolio-medium-cover.jpg`

### Remove Or Omit Before Public Posting

- Replace every `/projects` URL with `https://parkershamblin.com/work`.
- Do not set the legacy custom canonical while it returns HTTP `404`.
- Rewrite the API-layer and service-layer wording unless it is verified against the selected project.
- Do not publish this legacy draft alongside Article 01 as a near-duplicate.

### Recommended Edits Before Publishing

- [ ] Prefer Article 01 instead of revising this file.
- [ ] If reused, update links, verify project architecture wording, and apply Article 01's canonical and claim-verification gates.

## Review: `parker-shamblin-software-engineer.md`

### Intended Use

Legacy draft. Keep for reference only. Prefer `article-01-parker-shamblin-software-engineer.md` and `article-02-java-backend-project.md`.

### Safe To Publish As-Is?

No. The draft contains a broken `/projects` link, a `404` canonical, and architecture wording that may overstate the current repository.

### Claims To Verify

- [ ] Parker is currently enrolled as a Computer Science student at the University of South Florida.
- [ ] The selected Java project actually uses the API layer, service layer, and data layer structure described in the legacy draft.
- [ ] Role-based access control is implemented as described before that phrase is reused.
- [ ] Input validation and error handling claims are accurate.
- [ ] Database schema relationship and constraint wording is accurate.
- [ ] Any production-ready wording is removed or rewritten conservatively.

### Links To Check

- [ ] Legacy canonical, currently `404`: https://www.parkershamblin.com/blog/parker-shamblin-software-engineer
- [ ] Legacy project link, currently `404`: https://www.parkershamblin.com/projects
- [ ] Replacement project index: https://parkershamblin.com/work
- [ ] Portfolio homepage: https://parkershamblin.com/
- [ ] Blog index: https://parkershamblin.com/blog
- [ ] GitHub profile: https://github.com/parkershamblin
- [ ] LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- [ ] Java documentation: https://docs.oracle.com/en/java/
- [ ] Oracle Database: https://www.oracle.com/database/

### Image To Generate If This Draft Is Reused

```text
Clean vector illustration of a Java backend service connected to request-handling and SQL database nodes; dark blue background with green accents; no person; no employer logos; no unsupported credentials or metrics; 1400x788.
```

### Filename To Use If This Draft Is Reused

`parker-shamblin-software-engineer-medium-cover.jpg`

### Remove Or Omit Before Public Posting

- Replace every `/projects` URL with `https://parkershamblin.com/work`.
- Do not set the legacy custom canonical while it returns HTTP `404`.
- Remove API-layer, service-layer, and RBAC claims unless they are verified.
- Replace `production-ready systems` with conservative learning-project wording.
- Do not publish this legacy draft alongside Articles 01 or 02 as a near-duplicate.

### Recommended Edits Before Publishing

- [ ] Prefer Articles 01 and 02 instead of revising this file.
- [ ] If reused, rewrite it from the current Java repository and apply Article 02's workflow, screenshot, and canonical gates.

## Final Manual Approval Gate

Complete this only after selecting one approved public draft:

- [ ] Selected file:
- [ ] Final Medium title:
- [ ] Final Medium subtitle:
- [ ] Approved cover image filename:
- [ ] Claims verified:
- [ ] Public links tested:
- [ ] Portfolio canonical returns HTTP `200`, or Medium default canonical will remain unchanged:
- [ ] Internal notes removed from the copied public body:
- [ ] Final preview reviewed:
- [ ] Parker approval received immediately before the public action:

## Approval Boundary

This file prepares a review workflow only. Do not create accounts, submit forms, upload files, publish posts, enter credentials, commit, push, or open a pull request without separate explicit approval.
