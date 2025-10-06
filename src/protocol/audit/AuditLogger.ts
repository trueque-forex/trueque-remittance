export type AuditEntry = {
  timestamp: number;
  corridorId: string;
  breachFlags: string[];
  fallbackUsed: boolean;
  feeAttribution: {
    feeAmount: number;
    slaSeconds: number;
    bufferSeconds: number;
    fallbackTriggered: boolean;
  };
  userDignityPreserved: boolean;
  notes?: string;
};

export function logAuditEntry(entry: AuditEntry): void {
  console.log('[Audit]', JSON.stringify(entry, null, 2));
}

export function exportAuditLog(entries: AuditEntry[]): string {
  return entries.map(e => JSON.stringify(e)).join('\n');
}
