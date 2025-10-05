import React, { useState } from 'react';

const corridors = [
  { id: 'mx-us', label: '🇲🇽 Mexico → 🇺🇸 USA', fee: '2.5%', sla: '5s' },
  { id: 'ph-ca', label: '🇵🇭 Philippines → 🇨🇦 Canada', fee: '3.1%', sla: '7s' },
  { id: 'ng-gb', label: '🇳🇬 Nigeria → 🇬🇧 UK', fee: '2.9%', sla: '6s' },
  { id: 'ar-es', label: '🇦🇷 Argentina → 🇪🇸 España', fee: '2.8%', sla: '6s' },
  { id: 'br-pt', label: '🇧🇷 Brazil → 🇵🇹 Portugal', fee: '2.6%', sla: '5s' },
  { id: 'br-es', label: '🇧🇷 Brazil → 🇪🇸 España', fee: '2.7%', sla: '6s' },
  { id: 'mx-es', label: '🇲🇽 Mexico → 🇪🇸 España', fee: '2.9%', sla: '6s' },
  { id: 'co-es', label: '🇨🇴 Colombia → 🇪🇸 España', fee: '2.8%', sla: '6s' },
  { id: 'gt-mx', label: '🇬🇹 Guatemala → 🇲🇽 Mexico', fee: '2.4%', sla: '5s' },
  { id: 'bo-es', label: '🇧🇴 Bolivia → 🇪🇸 España', fee: '3.0%', sla: '7s' },
  { id: 'sv-gt', label: '🇸🇻 El Salvador → 🇬🇹 Guatemala', fee: '2.3%', sla: '5s' },
  { id: 'pe-es', label: '🇵🇪 Peru → 🇪🇸 España', fee: '2.9%', sla: '6s' },
  { id: 'co-ec', label: '🇨🇴 Colombia → 🇪🇨 Ecuador', fee: '2.2%', sla: '4s' },
  { id: 'ar-py', label: '🇦🇷 Argentina → 🇵🇾 Paraguay', fee: '2.5%', sla: '5s' },
  { id: 'co-ve', label: '🇨🇴 Colombia → 🇻🇪 Venezuela', fee: '2.6%', sla: '5s' }
];

export default function CorridorSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const [selected, setSelected] = useState(corridors[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const match = corridors.find(c => c.id === e.target.value);
    if (match) {
      setSelected(match);
      onSelect(match.id);
    }
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <label htmlFor="corridor">Select Corridor:</label>
      <select
        id="corridor"
        value={selected.id}
        onChange={handleChange}
        style={{ marginLeft: '1rem' }}
      >
        {corridors.map(c => (
          <option key={c.id} value={c.id}>{c.label}</option>
        ))}
      </select>

      <div style={{ marginTop: '1rem' }}>
        <p><strong>Fee:</strong> {selected.fee}</p>
        <p><strong>SLA Threshold:</strong> {selected.sla}</p>
      </div>
    </div>
  );
}