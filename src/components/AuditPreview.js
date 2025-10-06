import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
export default function AuditPreview({ corridorId }) {
    const [audit, setAudit] = useState(null);
    useEffect(() => {
        fetch('/assets/audit_log.json')
            .then(res => res.json())
            .then(data => {
            const entry = data[corridorId];
            setAudit(entry || null);
        });
    }, [corridorId]);
    if (!audit) {
        return _jsx("p", { children: "No audit data available for this corridor." });
    }
    return (_jsxs("div", { style: { border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }, children: [_jsx("h3", { children: "\uD83D\uDCDC Audit Log Preview" }), _jsxs("p", { children: [_jsx("strong", { children: "Corridor:" }), " ", audit.corridor] }), _jsxs("p", { children: [_jsx("strong", { children: "Timestamp:" }), " ", new Date(audit.timestamp).toLocaleString()] }), _jsxs("p", { children: [_jsx("strong", { children: "SLA Breach:" }), " ", audit.sla_breach ? 'Yes ⚠️' : 'No ✅'] }), _jsxs("p", { children: [_jsx("strong", { children: "Fee Threshold:" }), " ", audit.fee_threshold] }), _jsxs("p", { children: [_jsx("strong", { children: "Fallback Triggered:" }), " ", audit.fallback_triggered ? 'Yes 🔁' : 'No'] }), _jsxs("p", { children: [_jsx("strong", { children: "User Dignity Preserved:" }), " ", audit.user_dignity_preserved ? 'Yes 🙌' : 'No'] }), _jsxs("p", { children: [_jsx("strong", { children: "Notes:" }), " ", audit.notes] })] }));
}
