import { matchSenders } from './MatchEngine';
import { logMatchAudit } from '../audit/AuditLogger';
test('matches senders correctly', () => {
    const senderA = { id: 'A', country: 'MX', amount: 100 };
    const senderB = { id: 'B', country: 'US', amount: 100 };
    const match = matchSenders(senderA, senderB);
    const auditEntry = {
        matchId: 'mock-match-id',
        corridorId: 'MX-US',
        breachFlags: [],
        fallbackUsed: false,
        feeAttribution: {
            feeAmount: 0,
            slaSeconds: 0,
            bufferSeconds: 0,
            fallbackTriggered: false
        },
        match,
        timestamp: Date.now()
    };
    logMatchAudit(auditEntry);
    expect(match.sender.id).toBe('A');
    expect(match.receiver.id).toBe('B');
});
