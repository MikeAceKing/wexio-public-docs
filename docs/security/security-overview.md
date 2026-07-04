# Security overview

Updated: 2026-07-04

Wexio uses layered controls to keep company workspaces separated and role-aware.

## Public security principles

- Company workspaces are separated.
- Users access only what their role and permissions allow.
- Personal desktop data belongs to one user inside one workspace.
- Documents are private by default unless sharing is allowed.
- Administrative and sensitive actions require controlled access.
- Public documentation does not expose implementation details.

## Workspace separation

Wexio is designed so that each company works inside its own workspace. Users should not receive data from another company workspace during normal operation.

## Role-aware access

The workspace experience changes depending on the user. An internal admin, employee, worker, client, or guest should not all receive the same screens.

## Personal desktop boundary

The desktop-style workspace is personal to the authenticated user inside the company workspace. Widgets, shortcuts, preferences, and layouts should not become another user's workspace.

## Document boundary

Documents should stay private or shared only when the product flow allows sharing. This keeps file access connected to the company context and user role.

## Provider boundary

Wexio administration surfaces are separated from normal company workspace screens. Provider operations should not become normal tenant-user screens.

## Public proof level

The current release evidence supports selected controlled pilot demonstrations. Wider rollout remains gated by additional module, role, legal, provider, and operational proof.
