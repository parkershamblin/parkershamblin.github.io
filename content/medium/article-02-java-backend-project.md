# Medium Article Package 02: Java Retail Banking And Brokerage Platform

Status: Medium-ready draft for review. Do not publish until the claims, links, screenshots, image, and canonical settings have been approved.

## SEO Title

Parker Shamblin Java Backend Project | Retail Banking, Brokerage, JDBC, and Oracle SQL

## Meta Description

Parker Shamblin documents a Java retail banking and brokerage learning project using JSP, Servlets, JDBC, Oracle XE, and Tomcat, with role-aware workflow design and database documentation.

## Medium Title

Building a Java Retail Banking and Brokerage Platform With Oracle SQL

## Medium Subtitle

What I learned from documenting customer, teller, and manager workflow areas across a Java web application and an Oracle database.

## Tags

- Java
- Backend Development
- SQL
- Database Design
- Software Engineering

## Canonical URL Recommendation

`PENDING_CANONICAL_URL`

Create and publish this portfolio blog page first:

`https://parkershamblin.com/blog/parker-shamblin-java-backend-project`

Canonical status: Pending. The planned page currently returns HTTP `404`. Do not set a Medium custom canonical until the portfolio page exists, returns HTTP `200`, and has been reviewed. Until then, leave Medium's default canonical unchanged.

## Cover Image SEO Package

- Cover image prompt: Clean labeled Java backend architecture illustration for a retail banking and brokerage project; browser interface flows into Jakarta Servlet request handling, JDBC data access, and Oracle database nodes; include customer, teller, and manager workflow labels; professional vector style; navy and teal palette; no company logos; no unsupported metrics; 1400x788.
- Cover image filename: `parker-shamblin-java-backend-platform-medium-cover.jpg`
- Cover image alt text: Java backend architecture cover for Parker Shamblin retail banking and brokerage platform with Servlet, JDBC, and Oracle database layers.
- Image caption: Java backend and Oracle SQL architecture overview for Parker Shamblin's retail banking and brokerage platform.
- Suggested image dimensions: `1400 x 788`
- Recommended format: JPG
- Surrounding text for image SEO: Parker Shamblin documents how role-aware workflow areas relate to JDBC data access and an Oracle database with tables, views, and stored procedures.

## Optional Inline Image SEO Package

- Inline image prompt: Labeled workflow diagram showing documented public browsing, customer account, teller account-maintenance, and manager-approval areas related to a Java web application and Oracle SQL tables, views, and procedures; clean vector layout; 1600x1000.
- Inline image filename: `parker-shamblin-java-banking-platform-data-flow.png`
- Inline image alt text: Data flow diagram for Parker Shamblin Java retail banking and brokerage platform showing customer, teller, manager, and Oracle SQL workflows.
- Inline image caption: Role-aware workflow and database flow for the Java retail banking and brokerage platform.
- Suggested image dimensions: `1600 x 1000`
- Recommended format: PNG

## Internal Links To Portfolio Pages

- Portfolio homepage: https://parkershamblin.com/
- About page: https://parkershamblin.com/about
- Project index: https://parkershamblin.com/work
- Blog index: https://parkershamblin.com/blog

## External Links

- GitHub profile: https://github.com/parkershamblin
- LinkedIn profile: https://www.linkedin.com/in/parkershamblin/
- Java project repository: https://github.com/parkershamblin/retail-banking-brokerage-platform
- Java documentation: https://docs.oracle.com/en/java/
- Oracle Database documentation: https://docs.oracle.com/en/database/
- Apache Tomcat documentation: https://tomcat.apache.org/

## Full Medium-Ready Draft

Backend projects become more useful when they model a complete workflow instead of only a single feature. One repository I have been documenting presents a Retail Banking and Brokerage Platform learning project using Java, JSP, Jakarta Servlets, JDBC, Oracle XE, and Apache Tomcat.

The project is a learning-focused Java web application. Its value is the opportunity to practice application structure, database design, request handling, validation, and documentation across related workflow areas.

Repository:

https://github.com/parkershamblin/retail-banking-brokerage-platform

## Why I Built Around Multiple User Workflows

A backend is easier to understand when each feature has a clear user and a clear purpose. The documented project structure is organized around public visitors, customers, tellers, and managers.

The repository's feature map describes public asset browsing; customer account, portfolio, transaction, watchlist, transfer, and trading areas; teller account-maintenance areas; and manager oversight and approval areas. These are the workflow areas I use when reviewing the project and deciding what to improve next.

That structure creates useful engineering questions:

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

This organization makes the flow easier to trace. A reader can start from a visible page, follow the related request handling, and then inspect the DAO and SQL objects that support it.

I prefer this kind of explicit structure for a portfolio project because it keeps the responsibilities visible. The goal is not to hide complexity. The goal is to make each part understandable enough that another engineer can review it without guessing.

## Connecting Features To The Database

The schema and supporting documentation describe related records for users, credentials, accounts, transactions, transfers, assets, price history, portfolios, trade orders, watchlists, approvals, content pages, and contact messages.

The project documentation also maps visible features to database views and stored procedures. For example, the documentation associates:

- Public asset browsing with a public asset snapshot view.
- Customer dashboards with account, approval, and portfolio information.
- Transfer and trade areas with stored procedures.
- Manager review areas with pending-approval data and related activity records.

Writing that feature-to-database map was useful because it forced me to explain the system in plain language. It also made gaps easier to see. If I could not connect a page to the tables and logic behind it, the documentation was not finished.

## Approval Workflows As A Design Exercise

The documented design includes approval-flow concepts for selected transfer and trade scenarios. I found this useful because it pushed the project beyond basic create, read, update, and delete screens.

An approval workflow introduces state. A request can be created, reviewed, approved, rejected, or reflected in related history. That means the database and application code need to agree on what each status means and how each screen presents it.

For a portfolio project, the lesson is broader than any individual screen: backend work becomes easier to reason about when state transitions are explicit and documented.

## Why Screenshots Matter

Backend projects still benefit from visible evidence. The repository documentation presents screenshots grouped by public, customer, teller, and manager workflow areas.

Screenshots help a reviewer connect the code to the experience:

- A dashboard screenshot shows which information the backend assembles.
- A transfer screen shows which inputs need validation.
- An approval queue shows how state moves from a customer action to manager review.
- A transaction history screen shows how completed activity becomes visible.

The next documentation step is to pair those screenshots with a concise architecture diagram and a database-flow diagram. That will make the repository easier to evaluate from both the user-facing and implementation-facing perspectives.

## What I Learned

This project reinforced a few ideas that I want to carry into future backend work:

1. Keep request handling and data access responsibilities visible.
2. Map each user-facing workflow to the database objects behind it.
3. Treat state transitions as part of the design, not as an afterthought.
4. Document setup clearly enough that another developer can understand the dependencies.
5. Use screenshots and diagrams to make backend behavior easier to review.

I am continuing to refine the project documentation and use it as a foundation for deeper Java, JDBC, SQL, and backend development practice.

## Where To Review The Project

- Repository: https://github.com/parkershamblin/retail-banking-brokerage-platform
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

- [ ] Generate and approve `parker-shamblin-java-backend-platform-medium-cover.jpg`.
- [ ] Generate the optional data-flow diagram only after its labels have been reviewed.
- [ ] Host approved image copies on the matching portfolio blog page when that page is created.
- [ ] Use descriptive filenames on the portfolio-hosted images.
- [ ] Add natural alt text and visible captions.
- [ ] Place the surrounding text near the cover image.
- [ ] Use the cover image in Open Graph metadata on the portfolio canonical page.
- [ ] Include portfolio-hosted images in the sitemap or image sitemap when supported.
- [ ] Reuse the approved cover on Medium.
- [ ] Track Google Images observations weekly in `rank-tracking/ranking-tracker.md`.

## Claims To Verify Before Publishing

- [ ] Parker's authorship and public ownership of the Java project repository.
- [ ] The final public stack wording: Java, JSP, Jakarta Servlets, JDBC, Oracle XE, and Apache Tomcat.
- [ ] The final wording for public, customer, teller, and manager workflows.
- [ ] The final wording for transfers, trades, approvals, views, procedures, and transaction history.
- [ ] Any screenshot selected for public use is current, sanitized, and approved.
- [ ] No local credentials, demo credentials, private configuration, or sensitive records appear in images or text.
- [ ] Rights and approval for the generated cover image and optional inline diagram.
- [ ] The planned portfolio blog URL is live before it is used as a custom canonical.

## Public-Safety Review Checklist

- [ ] The article stays focused on software engineering, Java, JDBC, SQL, architecture, and documentation.
- [ ] The article does not claim the learning project is a production financial system.
- [ ] The article does not make unsupported security, performance, scale, or reliability claims.
- [ ] The article does not expose credentials, private configuration, or sensitive sample data.
- [ ] Screenshots and diagrams have been reviewed for safe public use.
- [ ] The tone is calm, technical, and recruiter-friendly.
