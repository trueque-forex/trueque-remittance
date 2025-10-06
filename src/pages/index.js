import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import CorridorSelector from '../components/CorridorSelector';
import AuditPreview from '../components/AuditPreview';
import FallbackUXDemo from '../components/FallbackUXDemo';
import Footer from '../components/Footer';
export default function IndexPage() {
    const [selectedCorridor, setSelectedCorridor] = useState('');
    return (_jsxs("main", { style: { padding: '2rem', fontFamily: 'sans-serif' }, children: [_jsx("h1", { children: "\uD83C\uDF0D Trueque: Fair Remittance, Instant Dignity" }), _jsx("p", { children: "Empowering senders and receivers with transparent, audit-grade remittance flows." }), _jsxs("section", { children: [_jsx("h2", { children: "\uD83D\uDEE4\uFE0F Select Corridor" }), _jsx(CorridorSelector, { onSelect: setSelectedCorridor })] }), _jsxs("section", { children: [_jsx("h2", { children: "\uD83D\uDCDC Audit Preview" }), _jsx(AuditPreview, { corridorId: selectedCorridor })] }), _jsxs("section", { children: [_jsx("h2", { children: "\uD83E\uDDEA Fallback UX Simulation" }), _jsx(FallbackUXDemo, {})] }), _jsx(Footer, {})] }));
}
