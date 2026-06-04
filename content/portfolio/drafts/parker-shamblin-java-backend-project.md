# Portfolio Page Draft: Java Backend Project

Status: Internal draft only. Do not publish until every verification item is complete and the final public body has been approved.

## Page Metadata

- Canonical URL: `https://parkershamblin.com/blog/parker-shamblin-java-backend-project`
- Slug: `parker-shamblin-java-backend-project`
- Title: `Parker Shamblin Java Backend Project | JDBC, Oracle SQL, and Tomcat`
- Meta description: `Review Parker Shamblin's Java backend learning project, documenting JSP, Servlets, JDBC, Oracle SQL, Tomcat, role-aware workflow design, and database architecture.`
- H1: `Java Backend Project: Retail Banking and Brokerage Platform`

## Featured Image

- Filename: `parker-shamblin-java-backend-platform-medium-cover.jpg`
- Alt text: `Java backend architecture cover for Parker Shamblin retail banking and brokerage platform with Servlet, JDBC, and Oracle database layers.`
- Caption: `Java backend and Oracle SQL architecture overview for Parker Shamblin's retail banking and brokerage platform.`

## Public Draft

# Java Backend Project: Retail Banking and Brokerage Platform

## Introduction

Backend projects become more useful when they model connected workflows instead of only a single feature. One repository I have been documenting presents a Retail Banking and Brokerage Platform learning project using Java, JSP, Jakarta Servlets, JDBC, Oracle XE, and Apache Tomcat.

The project gives me a concrete environment for practicing application structure, database design, request handling, validation, and documentation across related workflow areas.

![Java backend architecture cover for Parker Shamblin retail banking and brokerage platform with Servlet, JDBC, and Oracle database layers.](PENDING_IMAGE_URL)

*Java backend and Oracle SQL architecture overview for Parker Shamblin's retail banking and brokerage platform.*

## Project Summary

The documented project structure is organized around public visitors, customers, tellers, and managers.

The repository's feature map describes public asset browsing; customer account, portfolio, transaction, watchlist, transfer, and trading areas; teller account-maintenance areas; and manager oversight and approval areas. These areas create useful engineering questions:

- Which database tables support each page?
- Which actions should be grouped into a transaction?
- Which operations belong in a stored procedure?
- How should request handling stay separate from data access?
- Which screenshots and diagrams make the system easier to review?

## Keeping The Java Structure Understandable

The repository documents a straightforward Java web application layout:

- JSP views for presentation
- Jakarta Servlets for request handling
- DAO classes for database access
- Model and utility classes for shared application behavior
- Oracle SQL scripts for schema, seeded content, procedures, views, and verification

This structure makes the application easier to review. A reader can start from a visible page, follow the related request handling, and inspect the DAO and SQL objects described by the repository documentation.

## Connecting Features To The Database

The schema and supporting documentation describe related records for users, credentials, accounts, transactions, transfers, assets, price history, portfolios, trade orders, watchlists, approvals, content pages, and contact messages.

The documentation associates:

- Public asset browsing with a public asset snapshot view
- Customer dashboards with account, approval, and portfolio information
- Transfer and trade areas with stored procedures
- Manager review areas with pending-approval data and related activity records

Writing a feature-to-database map makes gaps easier to see. If I cannot connect a page to the data and logic behind it, the documentation still needs work.

## Approval Flows As A Design Exercise

The documented design includes approval-flow concepts for selected transfer and trade scenarios. An approval flow introduces state: a request can be created, reviewed, approved, rejected, or reflected in related history.

That makes state transitions part of the design rather than an afterthought. The application code and database records need to agree on what each status means and how each page presents it.

## Documentation And Next Steps

Backend work benefits from visible evidence. The repository documentation presents screenshots grouped by public, customer, teller, and manager workflow areas.

The next documentation step is to pair reviewed screenshots with a concise architecture diagram and a database-flow diagram. Any image selected for public use should be checked for credentials, private configuration, sensitive records, and potentially misleading seeded data.

## Review The Project

- Java repository: https://github.com/parkershamblin/retail-banking-brokerage-platform
- Portfolio homepage: https://parkershamblin.com/
- Work index: https://parkershamblin.com/work
- Blog index: https://parkershamblin.com/blog
- Portfolio overview: `PENDING_URL` (`https://parkershamblin.com/blog/parker-shamblin-software-engineer`)
- GitHub profile: https://github.com/parkershamblin

## Internal Links

- Live homepage: `https://parkershamblin.com/`
- Live work index: `https://parkershamblin.com/work`
- Live blog index: `https://parkershamblin.com/blog`
- Planned portfolio overview hub: `PENDING_URL` -> `https://parkershamblin.com/blog/parker-shamblin-software-engineer`

## External GitHub Links

- GitHub profile: `https://github.com/parkershamblin`
- Java repository: `https://github.com/parkershamblin/retail-banking-brokerage-platform`

## Schema Recommendation

- Primary schema type: `BlogPosting`
- Companion project schema type: `SoftwareSourceCode`
- Supporting schema types: `Person`, `ImageObject`, and `BreadcrumbList`
- Breadcrumb: `Home > Blog > Java Backend Project`
- `SoftwareSourceCode.codeRepository`: `https://github.com/parkershamblin/retail-banking-brokerage-platform`
- Add the approved featured image as an `ImageObject`.
- Populate schema fields only with reviewed visible-page values.

## Claims To Verify Before Publishing

- [ ] Parker owns or is authorized to present the Java repository.
- [ ] The final stack wording is accurate: Java, JSP, Jakarta Servlets, JDBC, Oracle XE, and Apache Tomcat.
- [ ] The repository documentation accurately describes the public, customer, teller, and manager workflow areas.
- [ ] DAO classes, model classes, utility classes, SQL scripts, views, procedures, and verification scripts exist as described.
- [ ] The database-record summary accurately reflects the repository schema.
- [ ] Screenshots selected for public use are current, sanitized, and approved.
- [ ] Images and text do not expose credentials, demo credentials, private configuration, or sensitive records.
- [ ] The page does not claim that the learning project is a production financial system.
- [ ] The page does not add unsupported security, performance, scale, or reliability claims.
- [ ] The planned portfolio-overview link returns HTTP `200` before replacing `PENDING_URL`.

## Content To Avoid Publicly

- Do not include internal status notes, operational instructions, or review checklists.
- Do not describe the project as a production financial system.
- Do not add unsupported claims about security, scale, performance, reliability, or operational behavior.
- Do not expose credentials, private configuration, sensitive records, or misleading sample data.
- Do not publish screenshots until each selected file has been sanitized and approved.

## Final Pre-Publish Checklist

- [ ] Copy only the approved public draft body into the live portfolio page.
- [ ] Remove internal notes, `PENDING_URL` markers, and this checklist from the public page.
- [ ] Confirm the canonical URL returns HTTP `200`.
- [ ] Confirm the page is public, not blocked by `robots.txt`, and does not contain `noindex`.
- [ ] Confirm the page uses `https://parkershamblin.com/blog/parker-shamblin-java-backend-project` as its self-canonical URL.
- [ ] Confirm the page appears in `https://parkershamblin.com/sitemap.xml`.
- [ ] Generate, review, and approve the featured image before upload.
- [ ] Add the approved image filename, alt text, caption, and nearby contextual text.
- [ ] Validate the final `BlogPosting`, `SoftwareSourceCode`, and breadcrumb schema against the visible page content.
- [ ] Test every public link manually.
- [ ] Receive explicit approval immediately before any live edit or publication action.
