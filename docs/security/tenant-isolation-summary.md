# Tenant-isolation summary

Wexio completed live two-way tenant-isolation proof using two controlled, non-customer workspaces and separate users.

The proof covered representative workspace surfaces including:

- personal desktops;
- modules and navigation;
- widgets and settings;
- profiles and tenant users;
- private documents.

Own-tenant requests returned the expected scoped data. Cross-tenant requests were denied or returned no rows under the relevant database policies. Unique proof markers did not cross the tenant boundary.

A separate same-tenant proof confirmed that a private personal document was invisible to another user until explicitly shared.

No customer tenant was used. This public summary intentionally omits proof identifiers, session material, raw requests, and internal security findings.
