import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
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
export default function CorridorSelector({ onSelect }) {
    const [selected, setSelected] = useState(corridors[0]);
    const handleChange = (e) => {
        const match = corridors.find(c => c.id === e.target.value);
        if (match) {
            setSelected(match);
            onSelect(match.id);
        }
    };
    return (_jsxs("div", { style: { marginBottom: '2rem' }, children: [_jsx("label", { htmlFor: "corridor", children: "Select Corridor:" }), _jsx("select", { id: "corridor", value: selected.id, onChange: handleChange, style: { marginLeft: '1rem' }, children: corridors.map(c => (_jsx("option", { value: c.id, children: c.label }, c.id))) }), _jsxs("div", { style: { marginTop: '1rem' }, children: [_jsxs("p", { children: [_jsx("strong", { children: "Fee:" }), " ", selected.fee] }), _jsxs("p", { children: [_jsx("strong", { children: "SLA Threshold:" }), " ", selected.sla] })] })] }));
}
