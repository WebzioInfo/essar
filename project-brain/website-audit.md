# Essar Enterprises Website Audit

Audit date: 2026-06-25

## Executive Summary

The project already contains a useful Next.js App Router foundation, service pages, project pages, quotation tools, public knowledge files, and a project-brain content layer. The highest-risk gaps were not visual polish; they were conversion reliability, metadata implementation, analytics safety, and AI-readable entity completeness.

## Priority Findings

| Area | Priority | Impact | Complexity | Recommendation |
| --- | --- | --- | --- | --- |
| Contact lead form | P0 | Primary consultation path did not submit data | Medium | Replace inert form with a client form, validation, status messaging, and API submission. |
| Analytics | P0 | Placeholder Google Analytics and Clarity IDs created bad production behavior | Low | Load analytics only when environment IDs are configured. |
| Page metadata | P1 | `next/head` on App Router pages weakened SEO consistency | Low | Move index pages to exported `metadata`. |
| API security | P1 | Hard-coded Google Apps Script endpoint exposed integration details | Low | Use `GOOGLE_SHEETS_WEBHOOK_URL` and basic input validation. |
| AI discoverability | P1 | `llms.txt` was too thin for entity extraction | Low | Add business positioning, service entities, projects, and priority paths. |
| Accessibility | P1 | Contact inputs lacked explicit `htmlFor`/`id` associations | Low | Add associated labels, autocomplete, required fields, and live status messaging. |
| Design system | P2 | Global type used negative letter spacing, conflicting with the system rules | Low | Normalize letter spacing to zero. |
| Architecture | P2 | Service/project content is duplicated inside route files | Medium | Move content models into `src/content` in a follow-up pass. |
| Conversion | P2 | Homepage had CTA and project proof but limited persona routing | Low | Add investor, owner, brand founder, and RO operator decision paths. |
| Topical authority | P2 | Homepage under-linked service clusters | Low | Add internal links to setup, cost, licensing, lab, design, and modernization hubs. |

## Implemented First Pass

- Wired the consultation request form to `/api/quotation`.
- Added required field validation for first name, phone, and project details.
- Made lead forwarding environment-driven through `GOOGLE_SHEETS_WEBHOOK_URL`.
- Removed fake analytics script execution and gated GA/Clarity behind env vars.
- Converted homepage, services, projects, and contact page metadata to App Router exports.
- Expanded `public/llms.txt` into an AI-readable entity and path summary.
- Added homepage user-type routing and topical authority links.
- Removed negative letter spacing from global typography.

## Recommended Next Architecture Pass

1. Move all service, project, FAQ, location, and industry content into typed modules under `src/content`.
2. Add `src/seo` helpers for Organization, LocalBusiness, Service, Project, FAQ, Breadcrumb, and WebSite schema.
3. Generate sitemap entries from content data instead of manually maintaining routes.
4. Add analytics event helpers for CTA clicks, WhatsApp clicks, calculator starts, calculator completions, and lead submissions.
5. Replace placeholder credential language with verified certificate or compliance-support wording only.
6. Add thank-you routing and lead source attribution for every form.

## Implemented Architecture Pass

- Added typed content modules for services, projects, industries, and locations under `src/content`.
- Rebuilt service, project, industry, and location detail pages to consume shared content instead of route-local objects.
- Added dynamic `generateMetadata` for generated detail pages and removed active `next/head` usage.
- Added `src/seo/schema.ts` helpers for Organization, WebSite, Service, Article, Industry Service, and LocalBusiness schema.
- Added a content-driven `src/app/sitemap.ts`.
- Added `src/lib/analytics.ts` event helpers and wired calculator step tracking plus contact lead submission tracking.
- Added `/thank-you` as a noindex post-lead destination.
- Replaced unverified certification-style trust labels with compliance readiness/support language.
- Removed the unused legacy `src/app/components/Contact.tsx` component that duplicated the contact journey and contained stale metadata.
