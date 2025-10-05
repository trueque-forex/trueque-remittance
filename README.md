## 🔁 Reproducibility Summary

This release (`v0.2-fallback-ci`) validates Trueque’s fallback UX, audit schema, and sender/receiver dignity logic across breach scenarios.

### ✅ Included:
- Fallback UX simulation with override acknowledgment
- Corridor selector with fee and SLA preview
- Audit log preview per corridor (via `audit_log.json`)
- CI-verified test harness for SLA breach and fee threshold
- Modular landing page scaffold (`LandingPage.tsx`)
- Reproducibility badge in footer

### 🧪 Test Harness:
Run `npm test` to validate:
- SLA breach triggers fallback
- Fee threshold logic per corridor
- Audit log output matches schema

### 🌐 Deployment:
Live at [trueque.vercel.app](https://trueque.vercel.app) *(example—replace with your actual URL)*  
CI badge: ![CI](https://img.shields.io/github/actions/workflow/status/your-org/trueque/ci.yml)

---

Built with clarity, empathy, and audit-grade transparency.