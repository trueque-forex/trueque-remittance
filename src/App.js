import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RecipientOnboarding from './components/RecipientOnboarding';
import RecipientForm from './components/RecipientForm';
export default function App() {
    const handleRecipientsUpdate = () => { };
    const handleTransfer = () => { };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Trueque Remittance Portal" }), _jsx(RecipientOnboarding, { onComplete: handleRecipientsUpdate }), _jsx(RecipientForm, { onSubmit: handleTransfer })] }));
}
