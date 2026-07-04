# Security overview

Wexio uses layered controls to keep business workspaces separated and role-aware.

## High-level controls

- Tenant isolation for company/workspace boundaries
- Server-resolved tenant context
- Explicit user membership
- Role- and permission-based authorization
- Personal, user-bound desktop profiles
- Private documents with explicit sharing
- Database row-level controls for sensitive records
- Audit events for selected security-relevant actions
- Non-destructive Admin workflows, with explicit SuperAdmin-only permanent actions

Frontend visibility is an experience control, not the only security boundary. Sensitive operations are validated on the server and reinforced by database policies where applicable.

## Public evidence boundary

Public summaries report gate outcomes without exposing infrastructure configuration, proof identities, customer information, raw logs, or actionable vulnerability detail.

See [Responsible disclosure](responsible-disclosure.md) to report a suspected issue.
