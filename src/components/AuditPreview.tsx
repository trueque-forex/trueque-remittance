import React, { useEffect, useState } from 'react';

interface AuditEntry {
  corridor: string;
  timestamp: string;
  sla_breach: boolean;
  fee_threshold: string;
  fallback_triggered: boolean;
  user_dignity_preserved: boolean;
  notes: string;
}

export default function AuditPreview({ corridorId }: { corridorId: string }) {
  const [audit, setAudit] = useState<AuditEntry | null>(null);

  useEffect(() => {
    fetch('/assets/audit_log.json')
      .then(res => res.json())
      .then(data => {
        const entry = data[corridorId];
        setAudit(entry || null);
      });
  }, [corridorId]);

  if (!audit) {
    return <p>No audit data available for this corridor.</p>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '2rem' }}>
      <h3>📜 Audit Log Preview</h3>
      <p><strong>Corridor:</strong> {audit.corridor}</p>
      <p><strong>Timestamp:</strong> {new Date(audit.timestamp).toLocaleString()}</p>
      <p><strong>SLA Breach:</strong> {audit.sla_breach ? 'Yes ⚠️' : 'No ✅'}</p>
      <p><strong>Fee Threshold:</strong> {audit.fee_threshold}</p>
      <p><strong>Fallback Triggered:</strong> {audit.fallback_triggered ? 'Yes 🔁' : 'No'}</p>
      <p><strong>User Dignity Preserved:</strong> {audit.user_dignity_preserved ? 'Yes 🙌' : 'No'}</p>
      <p><strong>Notes:</strong> {audit.notes}</p>
    </div>
  );
}