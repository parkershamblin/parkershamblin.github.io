# Portfolio Page Draft: OpenCV Computer Vision Workflow

Status: Internal draft only. Do not publish until every verification item is complete and the final public body has been approved.

## Page Metadata

- Canonical URL: `https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project`
- Slug: `parker-shamblin-opencv-computer-vision-project`
- Title: `Parker Shamblin OpenCV Project | Python Computer Vision Workflow`
- Meta description: `Review Parker Shamblin's Python and OpenCV learning project, including desktop-window capture, cascade-classifier detection, result review, documented limits, and next steps.`
- H1: `OpenCV Computer Vision Project: A Python Detection Workflow`

## Featured Image

- Filename: `parker-shamblin-opencv-computer-vision-medium-cover.jpg`
- Alt text: `OpenCV computer vision pipeline cover for Parker Shamblin showing capture, classifier detection, and result review stages.`
- Caption: `OpenCV computer vision workflow overview for Parker Shamblin's Python learning project.`

## Public Draft

# OpenCV Computer Vision Project: A Python Detection Workflow

## Introduction

Computer vision projects are useful learning tools because the results are visible. When a detection works, I can inspect the output. When it fails, I can review the input, assumptions in the pipeline, and surrounding image conditions.

One repository in my portfolio documents a Python and OpenCV experiment built around desktop-window capture and a trained cascade-classifier workflow for reviewing object detections in a game environment. I keep it framed as a learning project with clear limitations, not as a polished application or a deployment guide.

![OpenCV computer vision pipeline cover for Parker Shamblin showing capture, classifier detection, and result review stages.](PENDING_IMAGE_URL)

*OpenCV computer vision workflow overview for Parker Shamblin's Python learning project.*

## Project Summary

The useful part of this project is the workflow and the feedback loop. The repository documents stages such as:

1. Capture an image from a desktop window.
2. Pass the captured frame into an OpenCV detection step.
3. Use a trained cascade classifier to identify candidate regions.
4. Draw or inspect detection rectangles.
5. Review results and document the next measurement or improvement.

Each stage creates practical debugging questions. Is the captured image correct? Does the region contain useful visual information? Are the detected rectangles reasonable? Which failure cases should be saved for later review?

## Why A Cascade Classifier Was Useful For Learning

A cascade classifier is not the newest approach to object detection, but it is useful for learning because the workflow is concrete. The repository includes classifier output and supporting scripts for working with dataset-related files.

This makes the project a place to practice:

- Reviewing example images
- Separating positive and negative examples
- Understanding annotation and training steps
- Inspecting false detections
- Documenting repeatable setup and retraining notes

Precise dataset claims should remain omitted until source images, derived samples, and recorded training commands have been reconciled.

## Real-World Inputs And Current Constraints

Image-processing code behaves differently when the input is not a clean sample image. A captured desktop frame can vary with window position, scene composition, interface elements, and other visual noise.

The repository documents current constraints: the experiment is Windows-specific, depends on a desktop window title, includes hard-coded assumptions, and does not yet have a complete automated test suite. Those limits define useful next engineering tasks.

## Measurement Backlog

The next improvements should be measurable. Questions to investigate include:

- How often does a detected rectangle match a reviewed target?
- Which scene variations produce the most false detections?
- How long does the detection loop take in a defined test environment?
- Can capture offsets and rectangle calculations be covered by focused tests?
- Can a clean setup guide be followed on a fresh Windows environment?

These questions describe a measurement backlog, not measured results.

## Responsible Project Presentation

The original experiment includes desktop-interaction behavior. For portfolio purposes, the useful focus is the computer vision workflow:

- Capturing input
- Running OpenCV detection
- Inspecting classifier output
- Documenting constraints
- Planning honest evaluation

Anyone reviewing or extending an automation experiment should respect the rules of the platform involved and avoid using the project in ways that violate those rules.

## Review The Project

- OpenCV repository: https://github.com/parkershamblin/opencv-OSRS1
- Portfolio homepage: https://parkershamblin.com/
- Work index: https://parkershamblin.com/work
- Blog index: https://parkershamblin.com/blog
- Portfolio overview: `PENDING_URL` (`https://parkershamblin.com/blog/parker-shamblin-software-engineer`)
- Existing OpenCV work page: `PENDING_URL`
- GitHub profile: https://github.com/parkershamblin

## Internal Links

- Live homepage: `https://parkershamblin.com/`
- Live work index: `https://parkershamblin.com/work`
- Live blog index: `https://parkershamblin.com/blog`
- Planned portfolio overview hub: `PENDING_URL` -> `https://parkershamblin.com/blog/parker-shamblin-software-engineer`
- Existing OpenCV work page: `PENDING_URL`
  - Review and revise before linking publicly: `https://parkershamblin.com/work/OSRS-computer-vision-project`

## External GitHub Links

- GitHub profile: `https://github.com/parkershamblin`
- OpenCV repository: `https://github.com/parkershamblin/opencv-OSRS1`

## Schema Recommendation

- Primary schema type: `BlogPosting`
- Companion project schema type: `SoftwareSourceCode`
- Supporting schema types: `Person`, `ImageObject`, and `BreadcrumbList`
- Breadcrumb: `Home > Blog > OpenCV Computer Vision Project`
- `SoftwareSourceCode.codeRepository`: `https://github.com/parkershamblin/opencv-OSRS1`
- Add the approved featured image as an `ImageObject`.
- Populate schema fields only with reviewed visible-page values.

## Claims To Verify Before Publishing

- [ ] Parker owns or is authorized to present the OpenCV repository.
- [ ] The final public description accurately reflects Python, OpenCV, desktop-window capture, cascade-classifier detection, and result review.
- [ ] Windows-specific limitations, hard-coded assumptions, and current test-coverage wording remain accurate.
- [ ] Source-image counts, generated-sample counts, and training-configuration values remain omitted unless reconciled and verified.
- [ ] Accuracy, precision, recall, throughput, latency, threading, and reliability statements remain omitted unless measured and verified.
- [ ] Desktop-interaction wording stays contextual and does not turn the page into a deployment tutorial.
- [ ] Screenshots, GIFs, game-related visuals, cover images, and diagrams are approved for ownership, licensing, and safe public use.
- [ ] The existing OpenCV work page has been revised to remove or qualify unsupported quantitative and performance claims before replacing `PENDING_URL`.
- [ ] The planned portfolio-overview link returns HTTP `200` before replacing `PENDING_URL`.

## Content To Avoid Publicly

- Do not include internal status notes, operational instructions, or review checklists.
- Do not add source-image counts, generated-sample counts, or training values until they have been reconciled and verified.
- Do not add unsupported accuracy, performance, throughput, latency, threading, reliability, or real-time claims.
- Do not turn desktop interaction into a deployment tutorial.
- Do not publish screenshots, GIFs, game-related visuals, or generated images until ownership, licensing, and public-use approval have been checked.

## Final Pre-Publish Checklist

- [ ] Copy only the approved public draft body into the live portfolio page.
- [ ] Remove internal notes, `PENDING_URL` markers, and this checklist from the public page.
- [ ] Confirm the canonical URL returns HTTP `200`.
- [ ] Confirm the page is public, not blocked by `robots.txt`, and does not contain `noindex`.
- [ ] Confirm the page uses `https://parkershamblin.com/blog/parker-shamblin-opencv-computer-vision-project` as its self-canonical URL.
- [ ] Confirm the page appears in `https://parkershamblin.com/sitemap.xml`.
- [ ] Generate, review, and approve the featured image before upload.
- [ ] Add the approved image filename, alt text, caption, and nearby contextual text.
- [ ] Validate the final `BlogPosting`, `SoftwareSourceCode`, and breadcrumb schema against the visible page content.
- [ ] Test every public link manually.
- [ ] Receive explicit approval immediately before any live edit or publication action.
