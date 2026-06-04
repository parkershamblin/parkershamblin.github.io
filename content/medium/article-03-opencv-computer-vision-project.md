# Medium Article Package 03: OpenCV Computer Vision Project

Status: Medium-ready draft for review. Do not publish until the claims, links, image rights, project framing, and canonical settings have been approved.

## SEO Title

Parker Shamblin OpenCV Project | Python Computer Vision Pipeline And Lessons Learned

## Meta Description

Parker Shamblin explains an OpenCV computer vision experiment in Python, including capture, detection, visible feedback, project constraints, documentation, and responsible evaluation.

## Medium Title

What An OpenCV Experiment Taught Me About Computer Vision Pipelines

## Medium Subtitle

A careful look at image capture, cascade-classifier detection, visible feedback, documentation, and the limits of a learning project.

## Tags

- OpenCV
- Computer Vision
- Python
- Image Processing
- Software Engineering

## Canonical URL Recommendation

`PENDING_CANONICAL_URL`

Create and publish this portfolio blog page first:

`https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project`

Canonical status: Pending. The planned page currently returns HTTP `404`. Do not set a Medium custom canonical until the portfolio page exists, returns HTTP `200`, and has been reviewed. Until then, leave Medium's default canonical unchanged.

## Cover Image SEO Package

- Cover image prompt: Clean computer vision pipeline illustration with an abstract desktop frame flowing into image capture, preprocessing, cascade-classifier detection, bounding-box review, and documented results; professional vector style; blue and teal palette; no copyrighted game imagery; no person; no unsupported metrics; 1400x788.
- Cover image filename: `parker-shamblin-opencv-computer-vision-medium-cover.jpg`
- Cover image alt text: OpenCV computer vision pipeline cover for Parker Shamblin showing capture, classifier detection, and result review stages.
- Image caption: OpenCV computer vision workflow overview for Parker Shamblin's Python learning project.
- Suggested image dimensions: `1400 x 788`
- Recommended format: JPG
- Surrounding text for image SEO: Parker Shamblin uses a Python and OpenCV learning project to document a computer vision pipeline from captured image input through cascade-classifier detection and visible result review.

## Optional Inline Image SEO Package

- Inline image prompt: Labeled OpenCV workflow diagram showing captured frame, region review, classifier input, detected rectangles, result inspection, and measurement backlog; clean vector layout; no copyrighted game imagery; 1600x1000.
- Inline image filename: `parker-shamblin-opencv-pipeline-workflow.png`
- Inline image alt text: OpenCV workflow diagram for Parker Shamblin computer vision project showing capture, cascade-classifier detection, and result inspection.
- Inline image caption: OpenCV project workflow from captured frame to reviewed detection result.
- Suggested image dimensions: `1600 x 1000`
- Recommended format: PNG

## Internal Links To Portfolio Pages

- Portfolio homepage: https://parkershamblin.com/
- About page: https://parkershamblin.com/about
- Project index: https://parkershamblin.com/work
- OpenCV project-page link: `PENDING_URL`
  - Review and revise the existing portfolio page before linking publicly: `https://parkershamblin.com/work/OSRS-computer-vision-project`
- Blog index: https://parkershamblin.com/blog

## External Links

- GitHub profile: https://github.com/parkershamblin
- LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- OpenCV project repository: https://github.com/parkershamblin/opencv-OSRS1
- OpenCV documentation: https://docs.opencv.org/
- Python documentation: https://docs.python.org/3/

## Full Medium-Ready Draft

Computer vision projects are useful learning tools because the results are visible. When a detection works, I can see the output. When it fails, I can inspect the input, the assumptions in the pipeline, and the conditions around the image.

One repository in my portfolio documents a Python and OpenCV experiment built around desktop-window capture and a trained cascade-classifier workflow for reviewing object detections in a game environment. I keep it framed as a learning project with clear limitations, not as a polished application or a deployment guide.

Repository:

https://github.com/parkershamblin/opencv-OSRS1

Portfolio project page:

`PENDING_URL`

The existing portfolio project page should be reviewed and revised before it is linked publicly from this article.

## The Pipeline Is The Main Story

The repository documents a pipeline with stages such as:

1. Capture an image from a desktop window.
2. Pass the captured frame into an OpenCV detection step.
3. Use a trained cascade classifier to identify candidate regions.
4. Draw or inspect detection rectangles.
5. Review results and document the next measurement or improvement.

Each stage creates a place to ask better questions. Is the captured image correct? Does the region contain enough useful visual information? Does the classifier respond consistently across different scenes? Are the detected rectangles reasonable? Which failure cases should be saved for later review?

Those questions matter more than presenting a single successful screenshot.

## Why A Cascade Classifier Was Useful For Learning

A cascade classifier is not the newest approach to object detection, but it is useful for learning because the workflow is concrete. The project includes trained classifier output and supporting scripts for working with the dataset and rebuilding related files.

That makes the project a good place to practice:

- Collecting and reviewing example images
- Separating positive and negative examples
- Understanding annotation and training steps
- Inspecting false detections
- Documenting repeatable setup and retraining notes

I am deliberately avoiding precise dataset claims in this article until the archived source images, generated training samples, and recorded training commands have been reconciled. Honest technical writing should distinguish between source images, derived samples, configuration values, and measured results.

## Real-World Inputs Make Debugging Interesting

Image-processing code behaves differently when the input is not a clean sample image. A captured desktop frame can vary with window position, scene composition, lighting, interface elements, and other visual noise.

That makes debugging more practical. A detection problem may come from the classifier, but it may also come from capture assumptions, preprocessing choices, or an input that differs from the examples used during training.

The project repository documents several current constraints. It is Windows-specific, depends on a desktop window title, has hard-coded assumptions, and does not yet have a complete automated test suite. Those limitations are worth stating plainly because they define the next engineering work.

## Turning Limitations Into A Measurement Backlog

The next improvements should be measurable. Instead of saying that the project is becoming "better," I want to track specific questions:

- How often does a detected rectangle match a reviewed target?
- How often does an interaction land where expected?
- How long does the detection loop take?
- Which scene variations produce the most false detections?
- Can capture offsets and rectangle calculations be covered by focused tests?
- Can a clean setup guide be followed on a fresh Windows environment?

This measurement backlog turns a visual experiment into a more disciplined engineering project.

## Responsible Project Presentation

The original experiment includes desktop interaction behavior. That needs careful framing. Anyone reviewing or extending an automation experiment should respect the rules of the platform involved and avoid using the project in ways that violate those rules.

For portfolio purposes, the useful focus is the computer vision workflow:

- Capturing input
- Running OpenCV detection
- Inspecting classifier output
- Documenting constraints
- Planning honest evaluation

That is the part of the project I want recruiters and other engineers to understand.

## What I Learned

This experiment reinforced a few lessons:

1. Visible output makes debugging more concrete.
2. Input quality and capture assumptions matter.
3. A trained model should be documented with its constraints.
4. Measurements should be collected before performance claims are made.
5. A useful portfolio writeup explains limitations as clearly as features.

I am continuing to use the project as a place to improve my Python, OpenCV, image-processing, documentation, and testing skills.

## Where To Review The Project

- Portfolio project page: `PENDING_URL` (review and revise the existing portfolio project page before adding its public URL)
- Repository: https://github.com/parkershamblin/opencv-OSRS1
- Portfolio: https://parkershamblin.com/
- Project index: https://parkershamblin.com/work
- GitHub profile: https://github.com/parkershamblin
- LinkedIn: https://www.linkedin.com/in/parkershamblin/

## Google Search Indexing Checklist

- [ ] Publish the matching canonical portfolio blog page first.
- [ ] Confirm the planned portfolio canonical returns HTTP `200`.
- [ ] Confirm the portfolio page is public and not blocked by `robots.txt`.
- [ ] Confirm the portfolio page does not contain a `noindex` directive.
- [ ] Confirm the portfolio page declares the expected canonical URL.
- [ ] Confirm the portfolio page appears in `https://parkershamblin.com/sitemap.xml`.
- [ ] Set Medium's custom canonical only after the portfolio source page is live.
- [ ] Publish the approved Medium article.
- [ ] Confirm the Medium article is public and its links work.
- [ ] Use Google Search Console URL Inspection for the owned portfolio canonical.
- [ ] Request indexing for the owned portfolio canonical if needed.
- [ ] Record the published Medium URL in `rank-tracking/published-url-tracker.md`.

## Google Images Indexing Checklist

- [ ] Generate and approve `parker-shamblin-opencv-computer-vision-medium-cover.jpg`.
- [ ] Generate the optional workflow diagram only after its labels have been reviewed.
- [ ] Host approved image copies on the matching portfolio blog page when that page is created.
- [ ] Use descriptive filenames on the portfolio-hosted images.
- [ ] Add natural alt text and visible captions.
- [ ] Place the surrounding text near the cover image.
- [ ] Use the cover image in Open Graph metadata on the portfolio canonical page.
- [ ] Include portfolio-hosted images in the sitemap or image sitemap when supported.
- [ ] Reuse the approved cover on Medium.
- [ ] Track Google Images observations weekly in `rank-tracking/ranking-tracker.md`.

## Claims To Verify Before Publishing

- [ ] Parker's authorship and public ownership of the OpenCV project repository.
- [ ] The final public description of the capture, classifier, result-review, and desktop-interaction workflow.
- [ ] Any source-image count, generated-sample count, or training-configuration value before it is used publicly.
- [ ] Any accuracy, precision, recall, throughput, latency, threading, or reliability statement before it is used publicly.
- [ ] The wording of Windows-specific limitations and current test coverage.
- [ ] The existing portfolio project page has been revised to remove or qualify unsupported quantitative claims before replacing `PENDING_URL`.
- [ ] Rights and approval for any screenshot, GIF, game-related visual, generated cover, or optional workflow diagram.
- [ ] The planned portfolio blog URL is live before it is used as a custom canonical.

## Public-Safety Review Checklist

- [ ] The article stays focused on Python, OpenCV, image processing, documentation, and responsible evaluation.
- [ ] The article does not present desktop interaction behavior as a deployment tutorial.
- [ ] The article does not include unsupported dataset, performance, accuracy, or reliability metrics.
- [ ] The article clearly presents the work as a learning experiment with limitations.
- [ ] Images have been reviewed for ownership, licensing, and safe public use.
- [ ] The tone is calm, technical, and recruiter-friendly.
