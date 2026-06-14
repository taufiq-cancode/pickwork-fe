import axios from "axios";

type ContactFormPayload = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

// Local storage key for contact form log
const CONTACT_LOG_KEY = "pickwork_contact_form_log";

/**
 * Retrieves the contact form log from localStorage.
 */
export function getContactLog(): (ContactFormPayload & {
    timestamp: string;
    id: string;
})[] {
    try {
        const raw = localStorage.getItem(CONTACT_LOG_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

/**
 * Saves a contact form entry to the local log (localStorage).
 */
function saveToLog(data: ContactFormPayload): void {
    const log = getContactLog();
    const entry = {
        ...data,
        id: crypto.randomUUID(),
        timestamp: new Date().toISOString(),
    };
    log.push(entry);
    localStorage.setItem(CONTACT_LOG_KEY, JSON.stringify(log));
}

/**
 * Sends the contact form data to the Pickwork API backend.
 * The backend handles Slack notification server-side.
 */
async function sendToApi(data: ContactFormPayload): Promise<void> {
    await axios.post("https://api.pickwork.co/api/public/contact", data);
}

/**
 * Submits a contact form: sends to the API backend (which notifies Slack),
 * then saves a local log entry as a client-side record.
 */
export async function submitContactForm(
    data: ContactFormPayload
): Promise<void> {
    // Primary: send to API — throws on failure, surfacing the error to the user
    await sendToApi(data);

    // Secondary: save a local record
    saveToLog(data);
}
