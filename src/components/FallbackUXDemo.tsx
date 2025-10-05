import React, { useState } from 'react';

export default function FallbackUXDemo() {
  const [slaBreached, setSlaBreached] = useState(false);
  const [overrideAcknowledged, setOverrideAcknowledged] = useState(false);

  const handleTrigger = () => {
    setSlaBreached(true);
    setOverrideAcknowledged(false);
  };

 const handleAcknowledge = () => {
  setOverrideAcknowledged(true);
  console.log('Fallback acknowledged for SLA breach');
  // Future: POST to /api/audit/acknowledge
};

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
      <h3>🧪 Fallback UX Simulation</h3>
      {!slaBreached ? (
        <button onClick={handleTrigger}>Simulate SLA Breach</button>
      ) : (
        <div>
          <p><strong>Status:</strong> SLA breach detected ⚠️</p>
          <p><strong>Fallback Triggered:</strong> Yes 🔁</p>
          {!overrideAcknowledged ? (
            <div>
              <p><strong>Message to User:</strong> Your transaction exceeded SLA limits. A fallback route has been activated to preserve dignity and ensure delivery.</p>
              <button onClick={handleAcknowledge}>Acknowledge & Proceed</button>
            </div>
          ) : (
            <p><strong>User Response:</strong> Fallback acknowledged 🙌</p>
          )}
        </div>
      )}
    </div>
  );
}