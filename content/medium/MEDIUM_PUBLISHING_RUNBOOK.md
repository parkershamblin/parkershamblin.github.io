# Medium Publishing Runbook: Parker Shamblin

Status: Internal preparation document. Public actions require Parker's explicit approval at the time of the action.

## Goal

Publish a coherent Medium profile and three professional articles that link to Parker Shamblin's portfolio, GitHub profile, LinkedIn profile, and relevant project repositories while keeping portfolio pages as the preferred canonical sources whenever those pages are actually live.

## Source Documents

- Profile package: `content/medium/medium-profile-setup.md`
- Article 01: `content/medium/article-01-parker-shamblin-software-engineer.md`
- Article 02: `content/medium/article-02-java-backend-project.md`
- Article 03: `content/medium/article-03-opencv-computer-vision-project.md`
- Published URL tracker: `rank-tracking/published-url-tracker.md`
- Weekly ranking tracker: `rank-tracking/ranking-tracker.md`

Official reference links:

- Medium custom canonical help: https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link
- Google URL Inspection help: https://support.google.com/webmasters/answer/9012289
- Google image SEO guidance: https://developers.google.com/search/docs/appearance/google-images
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Hard Approval Boundary

Do not create an account, submit a signup form, enter credentials, accept terms, upload an image, publish an article, edit a live profile, submit a Search Console request, modify hosting, change DNS, contact a third party, commit, push, create a branch, or open a pull request without Parker's explicit approval for that action.

Preparation work is allowed. Public actions are manual and approval-gated.

## Current Portfolio URL Facts

Verified as live during preparation:

- `https://parkershamblin.com/` returned HTTP `200`.
- `https://parkershamblin.com/about` returned HTTP `200`.
- `https://parkershamblin.com/work` returned HTTP `200`.
- `https://parkershamblin.com/blog` returned HTTP `200`.
- `https://parkershamblin.com/work/OSRS-computer-vision-project` returned HTTP `200`.

Do not use `https://parkershamblin.com/projects`; it returned HTTP `404`.

The planned blog canonicals below returned HTTP `404` during preparation and must not be set as Medium custom canonicals until their matching portfolio pages are published:

- `https://parkershamblin.com/blog/parker-shamblin-software-engineer`
- `https://parkershamblin.com/blog/parker-shamblin-java-backend-project`
- `https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project`

## Exact Publishing Order

1. Review and approve `medium-profile-setup.md`.
2. Create or update the Medium profile manually after approval.
3. Record the final Medium profile URL in `rank-tracking/published-url-tracker.md`.
4. Generate and approve the article cover images.
5. Publish the matching portfolio canonical page for Article 01, confirm HTTP `200`, then publish Article 01 on Medium.
6. Publish the matching portfolio canonical page for Article 02, confirm HTTP `200`, then publish Article 02 on Medium.
7. Publish the matching portfolio canonical page for Article 03, confirm HTTP `200`, then publish Article 03 on Medium.
8. Record each published Medium URL and each live portfolio canonical in the trackers.
9. Submit eligible owned portfolio URLs through Google Search Console after the live-page checks pass.
10. Review Google Search and Google Images progress weekly.

If a matching portfolio blog page is not ready, the Medium article may be published only after separate approval and only with Medium's default canonical left unchanged. Add the portfolio custom canonical later after the source page is live and verified.

## Images To Generate First

Generate images locally and review them before any public upload.

| Order | Purpose | Filename | Dimensions | Used By |
|---:|---|---|---|---|
| 1 | Medium profile avatar | `parker-shamblin-professional-identity-avatar.png` | `1024 x 1024` | Medium profile |
| 2 | Software engineering identity cover | `parker-shamblin-software-engineer-medium-cover.jpg` | `1400 x 788` | Article 01 |
| 3 | Java backend platform cover | `parker-shamblin-java-backend-platform-medium-cover.jpg` | `1400 x 788` | Article 02 |
| 4 | OpenCV workflow cover | `parker-shamblin-opencv-computer-vision-medium-cover.jpg` | `1400 x 788` | Article 03 |
| 5 | Optional Java data-flow diagram | `parker-shamblin-java-banking-platform-data-flow.png` | `1600 x 1000` | Article 02 and portfolio |
| 6 | Optional OpenCV workflow diagram | `parker-shamblin-opencv-pipeline-workflow.png` | `1600 x 1000` | Article 03 and portfolio |

Use the prompts, alt text, captions, and surrounding text in each article package. Host approved copies on the matching portfolio canonical pages when possible, then reuse those approved assets on Medium.

## Link Matrix

Include these verified links where relevant:

| Link purpose | URL |
|---|---|
| Portfolio homepage | https://parkershamblin.com/ |
| About page | https://parkershamblin.com/about |
| Project index | https://parkershamblin.com/work |
| Blog index | https://parkershamblin.com/blog |
| Existing OpenCV project page | https://parkershamblin.com/work/OSRS-computer-vision-project |
| GitHub profile | https://github.com/parkershamblin |
| LinkedIn profile | https://www.linkedin.com/in/parkershamblin/ |
| Java project repository | https://github.com/parkershamblin/retail-banking-brokerage-platform |
| OpenCV project repository | https://github.com/parkershamblin/opencv-OSRS1 |

Before publication, manually open each article's links and confirm that they still reach the intended public page.

## Canonical URL Procedure

### Preferred Policy

The portfolio blog page should be the original source whenever practical. Publish the portfolio version first, confirm it returns HTTP `200`, confirm it is indexable, and then set the matching Medium article's custom canonical to that portfolio URL.

Do not point a Medium canonical at a planned URL that still returns HTTP `404`.

### Medium Desktop Steps

Follow Medium's current canonical-link workflow:

1. Open the Medium story in edit mode.
2. Open the story's three-dot menu.
3. Select `More settings`.
4. Open `Advanced Settings`.
5. Under `Customize Canonical Link`, select the option for a story originally published elsewhere.
6. Enter the verified live portfolio canonical URL.
7. Save the canonical link.
8. Publish or save the article changes only after Parker approves the public action.

Medium notes that canonical links can be used for imported stories and for stories created directly in Medium. Recheck Medium's official help page before publishing in case the labels have changed.

### Canonical Preflight For Each Article

- [ ] Matching portfolio page is published.
- [ ] Portfolio URL returns HTTP `200`.
- [ ] Portfolio URL is not blocked by `robots.txt`.
- [ ] Portfolio URL does not contain `noindex`.
- [ ] Portfolio page declares the intended canonical.
- [ ] Portfolio page is listed in the sitemap.
- [ ] Medium story uses the same verified portfolio URL as its custom canonical.
- [ ] If any check fails, leave Medium's default canonical unchanged until fixed.

## What Not To Mention Publicly

Do not include off-topic personal history, controversy framing, or panic about employability.

Do not publish personal phone numbers, private email addresses, home addresses, credentials, private notes, internal interview materials, or unreviewed personal images.

Do not invent credentials, employers, awards, metrics, publications, affiliations, testimonials, project capabilities, or legal claims. Use measurement placeholders only when Parker can collect the measurement honestly.

## Manual Profile Publishing Checklist

- [ ] Parker approved the display name and username.
- [ ] Parker approved the bio.
- [ ] Parker approved the exact profile image file.
- [ ] Parker manually entered any email, credentials, or verification code.
- [ ] Parker reviewed Medium's current terms and privacy information.
- [ ] Parker explicitly approved the final account-creation or profile-update action.
- [ ] Portfolio, GitHub, and LinkedIn links are correct.
- [ ] Final Medium profile URL was recorded in `rank-tracking/published-url-tracker.md`.

## Manual Article Publishing Checklist

Complete this separately for each article:

- [ ] Parker approved the final Medium title and subtitle.
- [ ] Parker approved the full public draft.
- [ ] Every claim in the article-specific verification list has been checked.
- [ ] The cover image was generated, reviewed, and approved.
- [ ] The image filename, alt text, caption, and surrounding text are correct.
- [ ] Internal portfolio links work.
- [ ] GitHub, LinkedIn, and relevant repository links work.
- [ ] The planned portfolio canonical is live and indexable, or Medium's default canonical will remain unchanged.
- [ ] Parker explicitly approved the final public publish action.
- [ ] The published Medium URL was recorded in `rank-tracking/published-url-tracker.md`.

## Record Published URLs

After each approved public action, add one row to `rank-tracking/published-url-tracker.md`.

Use the existing columns:

```markdown
| Date published | Platform | URL | Target keyword | Image used | Submitted to Google Search Console? | Indexed? | Ranking notes | Next action |
```

Recommended rows:

- Medium profile URL with target keyword `Parker Shamblin`.
- Article 01 Medium URL with target keywords `Parker Shamblin`, `Parker Shamblin software engineer`, and `Parker Shamblin portfolio`.
- Article 02 Medium URL with target keywords `Parker Shamblin software engineer` and `Parker Shamblin Java`.
- Article 03 Medium URL with target keywords `Parker Shamblin OpenCV`, `Parker Shamblin computer science`, and `Parker Shamblin GitHub`.
- Each corresponding portfolio canonical URL after it is live.

For Medium URLs, set the Search Console submission column to `N/A - external platform`. Search Console URL Inspection should be used for owned portfolio URLs, not for Medium URLs that Parker does not control as a Search Console property.

## Submit Related Portfolio URLs To Google Search Console

After publishing an approved portfolio canonical page:

1. Confirm the page is public and returns HTTP `200`.
2. Confirm `https://parkershamblin.com/robots.txt` does not block the page.
3. Confirm the page does not contain a `noindex` directive.
4. Confirm the page uses the expected canonical URL.
5. Confirm the page appears in `https://parkershamblin.com/sitemap.xml`.
6. Open the verified `parkershamblin.com` property in Google Search Console.
7. Use URL Inspection for the exact portfolio URL.
8. Review the indexed-page or live-test result.
9. Select `Request indexing` only after Parker approves the submission.
10. Record the submission date and result in `rank-tracking/published-url-tracker.md`.

Google states that requesting indexing does not guarantee inclusion and can take time. Do not promise ranking positions or exact indexing dates.

## Weekly Google Search And Google Images Review

Perform one manual review each week and update `rank-tracking/ranking-tracker.md`.

Track these queries:

- `Parker Shamblin`
- `Parker Shamblin software engineer`
- `Parker Shamblin computer science`
- `Parker Shamblin GitHub`
- `Parker Shamblin OpenCV`
- `Parker Shamblin portfolio`

For each query:

1. Record the review date.
2. Record whether the portfolio, Medium profile, Medium articles, GitHub profile, LinkedIn profile, and relevant project pages appear.
3. Record an observed ranking position only when it was measured manually.
4. Check Google Images for approved portfolio-hosted covers and diagrams.
5. Record whether an image appears.
6. Choose one next action, such as verifying indexing, improving internal links, adding an approved image, or waiting for crawl activity.

Use the existing columns:

```markdown
| Date | Query | Asset | Indexed? | Ranking Position | Image Appearing? | Next Action |
```

## Google Images Checklist

For every approved image:

- [ ] Use a descriptive hyphenated filename.
- [ ] Host the approved image on a relevant portfolio page when possible.
- [ ] Add natural alt text.
- [ ] Add a visible caption when appropriate.
- [ ] Add relevant nearby text.
- [ ] Use the cover in Open Graph metadata on the canonical portfolio page.
- [ ] Include the image in the sitemap or image sitemap when supported.
- [ ] Reuse the approved image naturally on Medium.
- [ ] Record weekly Google Images observations in `rank-tracking/ranking-tracker.md`.

Google's image guidance recommends contextual text, descriptive alt text, high-quality images, and crawlable image URLs. Keep filenames and alt text natural rather than repetitive.

## Approval Checklist Before Each Public Action

- [ ] Identify the exact external action.
- [ ] Identify the destination account or service.
- [ ] Identify the exact text, URL, or image being transmitted.
- [ ] Confirm claims have been verified.
- [ ] Confirm sensitive information is excluded.
- [ ] Confirm Parker has reviewed the action.
- [ ] Receive Parker's explicit approval immediately before the action.
- [ ] Let Parker manually complete credentials, verification codes, and any final submission step unless separately authorized and permitted.

## Local Verification Commands

Use these PowerShell commands before publication:

```powershell
$urls = @(
  'https://parkershamblin.com/',
  'https://parkershamblin.com/about',
  'https://parkershamblin.com/work',
  'https://parkershamblin.com/blog',
  'https://parkershamblin.com/blog/parker-shamblin-software-engineer',
  'https://parkershamblin.com/blog/parker-shamblin-java-backend-project',
  'https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project'
)

foreach ($url in $urls) {
  $result = curl.exe -L -s -o NUL -w '%{http_code} %{url_effective}' $url
  "$url`t$result"
}
```

Expected behavior before the portfolio blog pages are created: the first four URLs return HTTP `200`, while the three planned article canonicals remain pending until they also return HTTP `200`.
