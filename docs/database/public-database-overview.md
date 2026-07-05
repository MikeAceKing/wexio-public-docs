# Public database overview

Updated: 2026-07-05

This page explains the Wexio data model in public business language. It does not publish implementation details.

## High-level model

Wexio uses a structured data foundation for company workspaces, users, roles, modules, documents, workflows, and operational records.

## Main public data areas

| Area | Public explanation |
|---|---|
| Company workspace | The business context where users, modules, records, and documents belong. |
| Users and roles | The people and access model used to decide who can see and do what. |
| Modules | Business capabilities enabled for a workspace. |
| Documents | Files and document records connected to workspace work. |
| Workflow | Tasks, follow-up, stages, and operational coordination. |
| Business records | Clients, products, projects, support, finance, HR, reports, and related records where enabled. |
| Audit and visibility | Records that support review of important activity. |

## Tenant and workspace principle

The public principle is simple: company data should stay connected to the correct company workspace and should be filtered by the user's access.

## What is not published

This page does not publish raw table names, schema dumps, SQL, migration files, database credentials, storage paths, internal identifiers, or customer data.

## Why this matters

A business workspace only works if users can trust that documents, roles, modules, and records stay in the correct company context.
