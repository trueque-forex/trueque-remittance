import React, { useState } from 'react';
import CorridorSelector from '../components/CorridorSelector';
import AuditPreview from '../components/AuditPreview';
import FallbackUXDemo from '../components/FallbackUXDemo';
import Footer from '../components/Footer';

export default function HomePage() {
  const [selectedCorridor, setSelectedCorridor] = useState('mx-us');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🌍 Trueque: Fair Remittance, Instant Dignity</h1>
      <p>Empowering senders and receivers with transparent, audit-grade remittance flows.</p>

      <section>
        <h2>🛤️ Select Corridor</h2>
        <CorridorSelector onSelect={setSelectedCorridor} />
      </section>

      <section>
        <h2>📜 Audit Preview</h2>
        <AuditPreview corridorId={selectedCorridor} />
      </section>

      <section>
        <h2>🧪 Fallback UX Simulation</h2>
        <FallbackUXDemo />
      </section>

      <Footer />
    </main>
  );
}